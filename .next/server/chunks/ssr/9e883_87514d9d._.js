module.exports = [
"[project]/frontend/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Autoplay
]);
const defaultOptions = {
    active: true,
    breakpoints: {},
    delay: 4000,
    jump: false,
    playOnInit: true,
    stopOnFocusIn: true,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: null
};
function normalizeDelay(emblaApi, delay) {
    const scrollSnaps = emblaApi.scrollSnapList();
    if (typeof delay === 'number') {
        return scrollSnaps.map(()=>delay);
    }
    return delay(scrollSnaps, emblaApi);
}
function getAutoplayRootNode(emblaApi, rootNode) {
    const emblaRootNode = emblaApi.rootNode();
    return rootNode && rootNode(emblaRootNode) || emblaRootNode;
}
function Autoplay(userOptions = {}) {
    let options;
    let emblaApi;
    let destroyed;
    let delay;
    let timerStartTime = null;
    let timerId = 0;
    let autoplayActive = false;
    let mouseIsOver = false;
    let playOnDocumentVisible = false;
    let jump = false;
    function init(emblaApiInstance, optionsHandler) {
        emblaApi = emblaApiInstance;
        const { mergeOptions, optionsAtMedia } = optionsHandler;
        const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);
        const allOptions = mergeOptions(optionsBase, userOptions);
        options = optionsAtMedia(allOptions);
        if (emblaApi.scrollSnapList().length <= 1) return;
        jump = options.jump;
        destroyed = false;
        delay = normalizeDelay(emblaApi, options.delay);
        const { eventStore, ownerDocument } = emblaApi.internalEngine();
        const isDraggable = !!emblaApi.internalEngine().options.watchDrag;
        const root = getAutoplayRootNode(emblaApi, options.rootNode);
        eventStore.add(ownerDocument, 'visibilitychange', visibilityChange);
        if (isDraggable) {
            emblaApi.on('pointerDown', pointerDown);
        }
        if (isDraggable && !options.stopOnInteraction) {
            emblaApi.on('pointerUp', pointerUp);
        }
        if (options.stopOnMouseEnter) {
            eventStore.add(root, 'mouseenter', mouseEnter);
        }
        if (options.stopOnMouseEnter && !options.stopOnInteraction) {
            eventStore.add(root, 'mouseleave', mouseLeave);
        }
        if (options.stopOnFocusIn) {
            emblaApi.on('slideFocusStart', stopAutoplay);
        }
        if (options.stopOnFocusIn && !options.stopOnInteraction) {
            eventStore.add(emblaApi.containerNode(), 'focusout', startAutoplay);
        }
        if (options.playOnInit) startAutoplay();
    }
    function destroy() {
        emblaApi.off('pointerDown', pointerDown).off('pointerUp', pointerUp).off('slideFocusStart', stopAutoplay);
        stopAutoplay();
        destroyed = true;
        autoplayActive = false;
    }
    function setTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = ownerWindow.setTimeout(next, delay[emblaApi.selectedScrollSnap()]);
        timerStartTime = new Date().getTime();
        emblaApi.emit('autoplay:timerset');
    }
    function clearTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = 0;
        timerStartTime = null;
        emblaApi.emit('autoplay:timerstopped');
    }
    function startAutoplay() {
        if (destroyed) return;
        if (documentIsHidden()) {
            playOnDocumentVisible = true;
            return;
        }
        if (!autoplayActive) emblaApi.emit('autoplay:play');
        setTimer();
        autoplayActive = true;
    }
    function stopAutoplay() {
        if (destroyed) return;
        if (autoplayActive) emblaApi.emit('autoplay:stop');
        clearTimer();
        autoplayActive = false;
    }
    function visibilityChange() {
        if (documentIsHidden()) {
            playOnDocumentVisible = autoplayActive;
            return stopAutoplay();
        }
        if (playOnDocumentVisible) startAutoplay();
    }
    function documentIsHidden() {
        const { ownerDocument } = emblaApi.internalEngine();
        return ownerDocument.visibilityState === 'hidden';
    }
    function pointerDown() {
        if (!mouseIsOver) stopAutoplay();
    }
    function pointerUp() {
        if (!mouseIsOver) startAutoplay();
    }
    function mouseEnter() {
        mouseIsOver = true;
        stopAutoplay();
    }
    function mouseLeave() {
        mouseIsOver = false;
        startAutoplay();
    }
    function play(jumpOverride) {
        if (typeof jumpOverride !== 'undefined') jump = jumpOverride;
        startAutoplay();
    }
    function stop() {
        if (autoplayActive) stopAutoplay();
    }
    function reset() {
        if (autoplayActive) startAutoplay();
    }
    function isPlaying() {
        return autoplayActive;
    }
    function next() {
        const { index } = emblaApi.internalEngine();
        const nextIndex = index.clone().add(1).get();
        const lastIndex = emblaApi.scrollSnapList().length - 1;
        const kill = options.stopOnLastSnap && nextIndex === lastIndex;
        if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext(jump);
        } else {
            emblaApi.scrollTo(0, jump);
        }
        emblaApi.emit('autoplay:select');
        if (kill) return stopAutoplay();
        startAutoplay();
    }
    function timeUntilNext() {
        if (!timerStartTime) return null;
        const currentDelay = delay[emblaApi.selectedScrollSnap()];
        const timePastSinceStart = new Date().getTime() - timerStartTime;
        return currentDelay - timePastSinceStart;
    }
    const self = {
        name: 'autoplay',
        options: userOptions,
        init,
        destroy,
        play,
        stop,
        reset,
        isPlaying,
        timeUntilNext
    };
    return self;
}
Autoplay.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-autoplay.esm.js.map
}),
"[project]/frontend/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areOptionsEqual",
    ()=>areOptionsEqual,
    "arePluginsEqual",
    ()=>arePluginsEqual,
    "canUseDOM",
    ()=>canUseDOM,
    "sortAndMapPluginToOptions",
    ()=>sortAndMapPluginToOptions
]);
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
    return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
    return !!("undefined" !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
    const optionsAKeys = Object.keys(optionsA);
    const optionsBKeys = Object.keys(optionsB);
    if (optionsAKeys.length !== optionsBKeys.length) return false;
    const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
    const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
    if (breakpointsA !== breakpointsB) return false;
    return optionsAKeys.every((key)=>{
        const valueA = optionsA[key];
        const valueB = optionsB[key];
        if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
        if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
        return areOptionsEqual(valueA, valueB);
    });
}
function sortAndMapPluginToOptions(plugins) {
    return plugins.concat().sort((a, b)=>a.name > b.name ? 1 : -1).map((plugin)=>plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
    if (pluginsA.length !== pluginsB.length) return false;
    const optionsA = sortAndMapPluginToOptions(pluginsA);
    const optionsB = sortAndMapPluginToOptions(pluginsB);
    return optionsA.every((optionA, index)=>{
        const optionB = optionsB[index];
        return areOptionsEqual(optionA, optionB);
    });
}
;
 //# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map
}),
"[project]/frontend/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmblaCarousel
]);
function isNumber(subject) {
    return typeof subject === 'number';
}
function isString(subject) {
    return typeof subject === 'string';
}
function isBoolean(subject) {
    return typeof subject === 'boolean';
}
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
    return Math.abs(n);
}
function mathSign(n) {
    return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
    return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
    if (valueB === 0 || valueA === 0) return 0;
    if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
    const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
    return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
    return objectKeys(array).map(Number);
}
function arrayLast(array) {
    return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
    return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
    return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
    return Array.from(Array(n), (_, i)=>startAt + i);
}
function objectKeys(object) {
    return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
    return [
        objectA,
        objectB
    ].reduce((mergedObjects, currentObject)=>{
        objectKeys(currentObject).forEach((key)=>{
            const valueA = mergedObjects[key];
            const valueB = currentObject[key];
            const areObjects = isObject(valueA) && isObject(valueB);
            mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
        });
        return mergedObjects;
    }, {});
}
function isMouseEvent(evt, ownerWindow) {
    return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
    const predefined = {
        start,
        center,
        end
    };
    function start() {
        return 0;
    }
    function center(n) {
        return end(n) / 2;
    }
    function end(n) {
        return viewSize - n;
    }
    function measure(n, index) {
        if (isString(align)) return predefined[align](n);
        return align(viewSize, n, index);
    }
    const self = {
        measure
    };
    return self;
}
function EventStore() {
    let listeners = [];
    function add(node, type, handler, options = {
        passive: true
    }) {
        let removeListener;
        if ('addEventListener' in node) {
            node.addEventListener(type, handler, options);
            removeListener = ()=>node.removeEventListener(type, handler, options);
        } else {
            const legacyMediaQueryList = node;
            legacyMediaQueryList.addListener(handler);
            removeListener = ()=>legacyMediaQueryList.removeListener(handler);
        }
        listeners.push(removeListener);
        return self;
    }
    function clear() {
        listeners = listeners.filter((remove)=>remove());
    }
    const self = {
        add,
        clear
    };
    return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
    const documentVisibleHandler = EventStore();
    const fixedTimeStep = 1000 / 60;
    let lastTimeStamp = null;
    let accumulatedTime = 0;
    let animationId = 0;
    function init() {
        documentVisibleHandler.add(ownerDocument, 'visibilitychange', ()=>{
            if (ownerDocument.hidden) reset();
        });
    }
    function destroy() {
        stop();
        documentVisibleHandler.clear();
    }
    function animate(timeStamp) {
        if (!animationId) return;
        if (!lastTimeStamp) {
            lastTimeStamp = timeStamp;
            update();
            update();
        }
        const timeElapsed = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        accumulatedTime += timeElapsed;
        while(accumulatedTime >= fixedTimeStep){
            update();
            accumulatedTime -= fixedTimeStep;
        }
        const alpha = accumulatedTime / fixedTimeStep;
        render(alpha);
        if (animationId) {
            animationId = ownerWindow.requestAnimationFrame(animate);
        }
    }
    function start() {
        if (animationId) return;
        animationId = ownerWindow.requestAnimationFrame(animate);
    }
    function stop() {
        ownerWindow.cancelAnimationFrame(animationId);
        lastTimeStamp = null;
        accumulatedTime = 0;
        animationId = 0;
    }
    function reset() {
        lastTimeStamp = null;
        accumulatedTime = 0;
    }
    const self = {
        init,
        destroy,
        start,
        stop,
        update,
        render
    };
    return self;
}
function Axis(axis, contentDirection) {
    const isRightToLeft = contentDirection === 'rtl';
    const isVertical = axis === 'y';
    const scroll = isVertical ? 'y' : 'x';
    const cross = isVertical ? 'x' : 'y';
    const sign = !isVertical && isRightToLeft ? -1 : 1;
    const startEdge = getStartEdge();
    const endEdge = getEndEdge();
    function measureSize(nodeRect) {
        const { height, width } = nodeRect;
        return isVertical ? height : width;
    }
    function getStartEdge() {
        if (isVertical) return 'top';
        return isRightToLeft ? 'right' : 'left';
    }
    function getEndEdge() {
        if (isVertical) return 'bottom';
        return isRightToLeft ? 'left' : 'right';
    }
    function direction(n) {
        return n * sign;
    }
    const self = {
        scroll,
        cross,
        startEdge,
        endEdge,
        measureSize,
        direction
    };
    return self;
}
function Limit(min = 0, max = 0) {
    const length = mathAbs(min - max);
    function reachedMin(n) {
        return n < min;
    }
    function reachedMax(n) {
        return n > max;
    }
    function reachedAny(n) {
        return reachedMin(n) || reachedMax(n);
    }
    function constrain(n) {
        if (!reachedAny(n)) return n;
        return reachedMin(n) ? min : max;
    }
    function removeOffset(n) {
        if (!length) return n;
        return n - length * Math.ceil((n - max) / length);
    }
    const self = {
        length,
        max,
        min,
        constrain,
        reachedAny,
        reachedMax,
        reachedMin,
        removeOffset
    };
    return self;
}
function Counter(max, start, loop) {
    const { constrain } = Limit(0, max);
    const loopEnd = max + 1;
    let counter = withinLimit(start);
    function withinLimit(n) {
        return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
    }
    function get() {
        return counter;
    }
    function set(n) {
        counter = withinLimit(n);
        return self;
    }
    function add(n) {
        return clone().set(get() + n);
    }
    function clone() {
        return Counter(max, get(), loop);
    }
    const self = {
        get,
        set,
        add,
        clone
    };
    return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
    const { cross: crossAxis, direction } = axis;
    const focusNodes = [
        'INPUT',
        'SELECT',
        'TEXTAREA'
    ];
    const nonPassiveEvent = {
        passive: false
    };
    const initEvents = EventStore();
    const dragEvents = EventStore();
    const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
    const snapForceBoost = {
        mouse: 300,
        touch: 400
    };
    const freeForceBoost = {
        mouse: 500,
        touch: 600
    };
    const baseSpeed = dragFree ? 43 : 25;
    let isMoving = false;
    let startScroll = 0;
    let startCross = 0;
    let pointerIsDown = false;
    let preventScroll = false;
    let preventClick = false;
    let isMouse = false;
    function init(emblaApi) {
        if (!watchDrag) return;
        function downIfAllowed(evt) {
            if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
        }
        const node = rootNode;
        initEvents.add(node, 'dragstart', (evt)=>evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', ()=>undefined, nonPassiveEvent).add(node, 'touchend', ()=>undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
    }
    function destroy() {
        initEvents.clear();
        dragEvents.clear();
    }
    function addDragEvents() {
        const node = isMouse ? ownerDocument : rootNode;
        dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
    }
    function isFocusNode(node) {
        const nodeName = node.nodeName || '';
        return focusNodes.includes(nodeName);
    }
    function forceBoost() {
        const boost = dragFree ? freeForceBoost : snapForceBoost;
        const type = isMouse ? 'mouse' : 'touch';
        return boost[type];
    }
    function allowedForce(force, targetChanged) {
        const next = index.add(mathSign(force) * -1);
        const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
        if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
        if (skipSnaps && targetChanged) return baseForce * 0.5;
        return scrollTarget.byIndex(next.get(), 0).distance;
    }
    function down(evt) {
        const isMouseEvt = isMouseEvent(evt, ownerWindow);
        isMouse = isMouseEvt;
        preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
        isMoving = deltaAbs(target.get(), location.get()) >= 2;
        if (isMouseEvt && evt.button !== 0) return;
        if (isFocusNode(evt.target)) return;
        pointerIsDown = true;
        dragTracker.pointerDown(evt);
        scrollBody.useFriction(0).useDuration(0);
        target.set(location);
        addDragEvents();
        startScroll = dragTracker.readPoint(evt);
        startCross = dragTracker.readPoint(evt, crossAxis);
        eventHandler.emit('pointerDown');
    }
    function move(evt) {
        const isTouchEvt = !isMouseEvent(evt, ownerWindow);
        if (isTouchEvt && evt.touches.length >= 2) return up(evt);
        const lastScroll = dragTracker.readPoint(evt);
        const lastCross = dragTracker.readPoint(evt, crossAxis);
        const diffScroll = deltaAbs(lastScroll, startScroll);
        const diffCross = deltaAbs(lastCross, startCross);
        if (!preventScroll && !isMouse) {
            if (!evt.cancelable) return up(evt);
            preventScroll = diffScroll > diffCross;
            if (!preventScroll) return up(evt);
        }
        const diff = dragTracker.pointerMove(evt);
        if (diffScroll > dragThreshold) preventClick = true;
        scrollBody.useFriction(0.3).useDuration(0.75);
        animation.start();
        target.add(direction(diff));
        evt.preventDefault();
    }
    function up(evt) {
        const currentLocation = scrollTarget.byDistance(0, false);
        const targetChanged = currentLocation.index !== index.get();
        const rawForce = dragTracker.pointerUp(evt) * forceBoost();
        const force = allowedForce(direction(rawForce), targetChanged);
        const forceFactor = factorAbs(rawForce, force);
        const speed = baseSpeed - 10 * forceFactor;
        const friction = baseFriction + forceFactor / 50;
        preventScroll = false;
        pointerIsDown = false;
        dragEvents.clear();
        scrollBody.useDuration(speed).useFriction(friction);
        scrollTo.distance(force, !dragFree);
        isMouse = false;
        eventHandler.emit('pointerUp');
    }
    function click(evt) {
        if (preventClick) {
            evt.stopPropagation();
            evt.preventDefault();
            preventClick = false;
        }
    }
    function pointerDown() {
        return pointerIsDown;
    }
    const self = {
        init,
        destroy,
        pointerDown
    };
    return self;
}
function DragTracker(axis, ownerWindow) {
    const logInterval = 170;
    let startEvent;
    let lastEvent;
    function readTime(evt) {
        return evt.timeStamp;
    }
    function readPoint(evt, evtAxis) {
        const property = evtAxis || axis.scroll;
        const coord = `client${property === 'x' ? 'X' : 'Y'}`;
        return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
    }
    function pointerDown(evt) {
        startEvent = evt;
        lastEvent = evt;
        return readPoint(evt);
    }
    function pointerMove(evt) {
        const diff = readPoint(evt) - readPoint(lastEvent);
        const expired = readTime(evt) - readTime(startEvent) > logInterval;
        lastEvent = evt;
        if (expired) startEvent = evt;
        return diff;
    }
    function pointerUp(evt) {
        if (!startEvent || !lastEvent) return 0;
        const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
        const diffTime = readTime(evt) - readTime(startEvent);
        const expired = readTime(evt) - readTime(lastEvent) > logInterval;
        const force = diffDrag / diffTime;
        const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
        return isFlick ? force : 0;
    }
    const self = {
        pointerDown,
        pointerMove,
        pointerUp,
        readPoint
    };
    return self;
}
function NodeRects() {
    function measure(node) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
        const offset = {
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
        return offset;
    }
    const self = {
        measure
    };
    return self;
}
function PercentOfView(viewSize) {
    function measure(n) {
        return viewSize * (n / 100);
    }
    const self = {
        measure
    };
    return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
    const observeNodes = [
        container
    ].concat(slides);
    let resizeObserver;
    let containerSize;
    let slideSizes = [];
    let destroyed = false;
    function readSize(node) {
        return axis.measureSize(nodeRects.measure(node));
    }
    function init(emblaApi) {
        if (!watchResize) return;
        containerSize = readSize(container);
        slideSizes = slides.map(readSize);
        function defaultCallback(entries) {
            for (const entry of entries){
                if (destroyed) return;
                const isContainer = entry.target === container;
                const slideIndex = slides.indexOf(entry.target);
                const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
                const newSize = readSize(isContainer ? container : slides[slideIndex]);
                const diffSize = mathAbs(newSize - lastSize);
                if (diffSize >= 0.5) {
                    emblaApi.reInit();
                    eventHandler.emit('resize');
                    break;
                }
            }
        }
        resizeObserver = new ResizeObserver((entries)=>{
            if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
                defaultCallback(entries);
            }
        });
        ownerWindow.requestAnimationFrame(()=>{
            observeNodes.forEach((node)=>resizeObserver.observe(node));
        });
    }
    function destroy() {
        destroyed = true;
        if (resizeObserver) resizeObserver.disconnect();
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
    let scrollVelocity = 0;
    let scrollDirection = 0;
    let scrollDuration = baseDuration;
    let scrollFriction = baseFriction;
    let rawLocation = location.get();
    let rawLocationPrevious = 0;
    function seek() {
        const displacement = target.get() - location.get();
        const isInstant = !scrollDuration;
        let scrollDistance = 0;
        if (isInstant) {
            scrollVelocity = 0;
            previousLocation.set(target);
            location.set(target);
            scrollDistance = displacement;
        } else {
            previousLocation.set(location);
            scrollVelocity += displacement / scrollDuration;
            scrollVelocity *= scrollFriction;
            rawLocation += scrollVelocity;
            location.add(scrollVelocity);
            scrollDistance = rawLocation - rawLocationPrevious;
        }
        scrollDirection = mathSign(scrollDistance);
        rawLocationPrevious = rawLocation;
        return self;
    }
    function settled() {
        const diff = target.get() - offsetLocation.get();
        return mathAbs(diff) < 0.001;
    }
    function duration() {
        return scrollDuration;
    }
    function direction() {
        return scrollDirection;
    }
    function velocity() {
        return scrollVelocity;
    }
    function useBaseDuration() {
        return useDuration(baseDuration);
    }
    function useBaseFriction() {
        return useFriction(baseFriction);
    }
    function useDuration(n) {
        scrollDuration = n;
        return self;
    }
    function useFriction(n) {
        scrollFriction = n;
        return self;
    }
    const self = {
        direction,
        duration,
        velocity,
        seek,
        settled,
        useBaseFriction,
        useBaseDuration,
        useFriction,
        useDuration
    };
    return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
    const pullBackThreshold = percentOfView.measure(10);
    const edgeOffsetTolerance = percentOfView.measure(50);
    const frictionLimit = Limit(0.1, 0.99);
    let disabled = false;
    function shouldConstrain() {
        if (disabled) return false;
        if (!limit.reachedAny(target.get())) return false;
        if (!limit.reachedAny(location.get())) return false;
        return true;
    }
    function constrain(pointerDown) {
        if (!shouldConstrain()) return;
        const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
        const diffToEdge = mathAbs(limit[edge] - location.get());
        const diffToTarget = target.get() - location.get();
        const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
        target.subtract(diffToTarget * friction);
        if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
            target.set(limit.constrain(target.get()));
            scrollBody.useDuration(25).useBaseFriction();
        }
    }
    function toggleActive(active) {
        disabled = !active;
    }
    const self = {
        shouldConstrain,
        constrain,
        toggleActive
    };
    return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
    const scrollBounds = Limit(-contentSize + viewSize, 0);
    const snapsBounded = measureBounded();
    const scrollContainLimit = findScrollContainLimit();
    const snapsContained = measureContained();
    function usePixelTolerance(bound, snap) {
        return deltaAbs(bound, snap) <= 1;
    }
    function findScrollContainLimit() {
        const startSnap = snapsBounded[0];
        const endSnap = arrayLast(snapsBounded);
        const min = snapsBounded.lastIndexOf(startSnap);
        const max = snapsBounded.indexOf(endSnap) + 1;
        return Limit(min, max);
    }
    function measureBounded() {
        return snapsAligned.map((snapAligned, index)=>{
            const { min, max } = scrollBounds;
            const snap = scrollBounds.constrain(snapAligned);
            const isFirst = !index;
            const isLast = arrayIsLastIndex(snapsAligned, index);
            if (isFirst) return max;
            if (isLast) return min;
            if (usePixelTolerance(min, snap)) return min;
            if (usePixelTolerance(max, snap)) return max;
            return snap;
        }).map((scrollBound)=>parseFloat(scrollBound.toFixed(3)));
    }
    function measureContained() {
        if (contentSize <= viewSize + pixelTolerance) return [
            scrollBounds.max
        ];
        if (containScroll === 'keepSnaps') return snapsBounded;
        const { min, max } = scrollContainLimit;
        return snapsBounded.slice(min, max);
    }
    const self = {
        snapsContained,
        scrollContainLimit
    };
    return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
    const max = scrollSnaps[0];
    const min = loop ? max - contentSize : arrayLast(scrollSnaps);
    const limit = Limit(min, max);
    const self = {
        limit
    };
    return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
    const jointSafety = 0.1;
    const min = limit.min + jointSafety;
    const max = limit.max + jointSafety;
    const { reachedMin, reachedMax } = Limit(min, max);
    function shouldLoop(direction) {
        if (direction === 1) return reachedMax(location.get());
        if (direction === -1) return reachedMin(location.get());
        return false;
    }
    function loop(direction) {
        if (!shouldLoop(direction)) return;
        const loopDistance = contentSize * (direction * -1);
        vectors.forEach((v)=>v.add(loopDistance));
    }
    const self = {
        loop
    };
    return self;
}
function ScrollProgress(limit) {
    const { max, length } = limit;
    function get(n) {
        const currentLocation = n - max;
        return length ? currentLocation / -length : 0;
    }
    const self = {
        get
    };
    return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
    const { startEdge, endEdge } = axis;
    const { groupSlides } = slidesToScroll;
    const alignments = measureSizes().map(alignment.measure);
    const snaps = measureUnaligned();
    const snapsAligned = measureAligned();
    function measureSizes() {
        return groupSlides(slideRects).map((rects)=>arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
    }
    function measureUnaligned() {
        return slideRects.map((rect)=>containerRect[startEdge] - rect[startEdge]).map((snap)=>-mathAbs(snap));
    }
    function measureAligned() {
        return groupSlides(snaps).map((g)=>g[0]).map((snap, index)=>snap + alignments[index]);
    }
    const self = {
        snaps,
        snapsAligned
    };
    return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
    const { groupSlides } = slidesToScroll;
    const { min, max } = scrollContainLimit;
    const slideRegistry = createSlideRegistry();
    function createSlideRegistry() {
        const groupedSlideIndexes = groupSlides(slideIndexes);
        const doNotContain = !containSnaps || containScroll === 'keepSnaps';
        if (scrollSnaps.length === 1) return [
            slideIndexes
        ];
        if (doNotContain) return groupedSlideIndexes;
        return groupedSlideIndexes.slice(min, max).map((group, index, groups)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(groups, index);
            if (isFirst) {
                const range = arrayLast(groups[0]) + 1;
                return arrayFromNumber(range);
            }
            if (isLast) {
                const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
                return arrayFromNumber(range, arrayLast(groups)[0]);
            }
            return group;
        });
    }
    const self = {
        slideRegistry
    };
    return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
    const { reachedAny, removeOffset, constrain } = limit;
    function minDistance(distances) {
        return distances.concat().sort((a, b)=>mathAbs(a) - mathAbs(b))[0];
    }
    function findTargetSnap(target) {
        const distance = loop ? removeOffset(target) : constrain(target);
        const ascDiffsToSnaps = scrollSnaps.map((snap, index)=>({
                diff: shortcut(snap - distance, 0),
                index
            })).sort((d1, d2)=>mathAbs(d1.diff) - mathAbs(d2.diff));
        const { index } = ascDiffsToSnaps[0];
        return {
            index,
            distance
        };
    }
    function shortcut(target, direction) {
        const targets = [
            target,
            target + contentSize,
            target - contentSize
        ];
        if (!loop) return target;
        if (!direction) return minDistance(targets);
        const matchingTargets = targets.filter((t)=>mathSign(t) === direction);
        if (matchingTargets.length) return minDistance(matchingTargets);
        return arrayLast(targets) - contentSize;
    }
    function byIndex(index, direction) {
        const diffToSnap = scrollSnaps[index] - targetVector.get();
        const distance = shortcut(diffToSnap, direction);
        return {
            index,
            distance
        };
    }
    function byDistance(distance, snap) {
        const target = targetVector.get() + distance;
        const { index, distance: targetSnapDistance } = findTargetSnap(target);
        const reachedBound = !loop && reachedAny(target);
        if (!snap || reachedBound) return {
            index,
            distance
        };
        const diffToSnap = scrollSnaps[index] - targetSnapDistance;
        const snapDistance = distance + shortcut(diffToSnap, 0);
        return {
            index,
            distance: snapDistance
        };
    }
    const self = {
        byDistance,
        byIndex,
        shortcut
    };
    return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
    function scrollTo(target) {
        const distanceDiff = target.distance;
        const indexDiff = target.index !== indexCurrent.get();
        targetVector.add(distanceDiff);
        if (distanceDiff) {
            if (scrollBody.duration()) {
                animation.start();
            } else {
                animation.update();
                animation.render(1);
                animation.update();
            }
        }
        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit('select');
        }
    }
    function distance(n, snap) {
        const target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }
    function index(n, direction) {
        const targetIndex = indexCurrent.clone().set(n);
        const target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }
    const self = {
        distance,
        index
    };
    return self;
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
    const focusListenerOptions = {
        passive: true,
        capture: true
    };
    let lastTabPressTime = 0;
    function init(emblaApi) {
        if (!watchFocus) return;
        function defaultCallback(index) {
            const nowTime = new Date().getTime();
            const diffTime = nowTime - lastTabPressTime;
            if (diffTime > 10) return;
            eventHandler.emit('slideFocusStart');
            root.scrollLeft = 0;
            const group = slideRegistry.findIndex((group)=>group.includes(index));
            if (!isNumber(group)) return;
            scrollBody.useDuration(0);
            scrollTo.index(group, 0);
            eventHandler.emit('slideFocus');
        }
        eventStore.add(document, 'keydown', registerTabPress, false);
        slides.forEach((slide, slideIndex)=>{
            eventStore.add(slide, 'focus', (evt)=>{
                if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
                    defaultCallback(slideIndex);
                }
            }, focusListenerOptions);
        });
    }
    function registerTabPress(event) {
        if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
    }
    const self = {
        init
    };
    return self;
}
function Vector1D(initialValue) {
    let value = initialValue;
    function get() {
        return value;
    }
    function set(n) {
        value = normalizeInput(n);
    }
    function add(n) {
        value += normalizeInput(n);
    }
    function subtract(n) {
        value -= normalizeInput(n);
    }
    function normalizeInput(n) {
        return isNumber(n) ? n : n.get();
    }
    const self = {
        get,
        set,
        add,
        subtract
    };
    return self;
}
function Translate(axis, container) {
    const translate = axis.scroll === 'x' ? x : y;
    const containerStyle = container.style;
    let previousTarget = null;
    let disabled = false;
    function x(n) {
        return `translate3d(${n}px,0px,0px)`;
    }
    function y(n) {
        return `translate3d(0px,${n}px,0px)`;
    }
    function to(target) {
        if (disabled) return;
        const newTarget = roundToTwoDecimals(axis.direction(target));
        if (newTarget === previousTarget) return;
        containerStyle.transform = translate(newTarget);
        previousTarget = newTarget;
    }
    function toggleActive(active) {
        disabled = !active;
    }
    function clear() {
        if (disabled) return;
        containerStyle.transform = '';
        if (!container.getAttribute('style')) container.removeAttribute('style');
    }
    const self = {
        clear,
        to,
        toggleActive
    };
    return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
    const roundingSafety = 0.5;
    const ascItems = arrayKeys(slideSizesWithGaps);
    const descItems = arrayKeys(slideSizesWithGaps).reverse();
    const loopPoints = startPoints().concat(endPoints());
    function removeSlideSizes(indexes, from) {
        return indexes.reduce((a, i)=>{
            return a - slideSizesWithGaps[i];
        }, from);
    }
    function slidesInGap(indexes, gap) {
        return indexes.reduce((a, i)=>{
            const remainingGap = removeSlideSizes(a, gap);
            return remainingGap > 0 ? a.concat([
                i
            ]) : a;
        }, []);
    }
    function findSlideBounds(offset) {
        return snaps.map((snap, index)=>({
                start: snap - slideSizes[index] + roundingSafety + offset,
                end: snap + viewSize - roundingSafety + offset
            }));
    }
    function findLoopPoints(indexes, offset, isEndEdge) {
        const slideBounds = findSlideBounds(offset);
        return indexes.map((index)=>{
            const initial = isEndEdge ? 0 : -contentSize;
            const altered = isEndEdge ? contentSize : 0;
            const boundEdge = isEndEdge ? 'end' : 'start';
            const loopPoint = slideBounds[index][boundEdge];
            return {
                index,
                loopPoint,
                slideLocation: Vector1D(-1),
                translate: Translate(axis, slides[index]),
                target: ()=>location.get() > loopPoint ? initial : altered
            };
        });
    }
    function startPoints() {
        const gap = scrollSnaps[0];
        const indexes = slidesInGap(descItems, gap);
        return findLoopPoints(indexes, contentSize, false);
    }
    function endPoints() {
        const gap = viewSize - scrollSnaps[0] - 1;
        const indexes = slidesInGap(ascItems, gap);
        return findLoopPoints(indexes, -contentSize, true);
    }
    function canLoop() {
        return loopPoints.every(({ index })=>{
            const otherIndexes = ascItems.filter((i)=>i !== index);
            return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
        });
    }
    function loop() {
        loopPoints.forEach((loopPoint)=>{
            const { target, translate, slideLocation } = loopPoint;
            const shiftLocation = target();
            if (shiftLocation === slideLocation.get()) return;
            translate.to(shiftLocation);
            slideLocation.set(shiftLocation);
        });
    }
    function clear() {
        loopPoints.forEach((loopPoint)=>loopPoint.translate.clear());
    }
    const self = {
        canLoop,
        clear,
        loop,
        loopPoints
    };
    return self;
}
function SlidesHandler(container, eventHandler, watchSlides) {
    let mutationObserver;
    let destroyed = false;
    function init(emblaApi) {
        if (!watchSlides) return;
        function defaultCallback(mutations) {
            for (const mutation of mutations){
                if (mutation.type === 'childList') {
                    emblaApi.reInit();
                    eventHandler.emit('slidesChanged');
                    break;
                }
            }
        }
        mutationObserver = new MutationObserver((mutations)=>{
            if (destroyed) return;
            if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
                defaultCallback(mutations);
            }
        });
        mutationObserver.observe(container, {
            childList: true
        });
    }
    function destroy() {
        if (mutationObserver) mutationObserver.disconnect();
        destroyed = true;
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function SlidesInView(container, slides, eventHandler, threshold) {
    const intersectionEntryMap = {};
    let inViewCache = null;
    let notInViewCache = null;
    let intersectionObserver;
    let destroyed = false;
    function init() {
        intersectionObserver = new IntersectionObserver((entries)=>{
            if (destroyed) return;
            entries.forEach((entry)=>{
                const index = slides.indexOf(entry.target);
                intersectionEntryMap[index] = entry;
            });
            inViewCache = null;
            notInViewCache = null;
            eventHandler.emit('slidesInView');
        }, {
            root: container.parentElement,
            threshold
        });
        slides.forEach((slide)=>intersectionObserver.observe(slide));
    }
    function destroy() {
        if (intersectionObserver) intersectionObserver.disconnect();
        destroyed = true;
    }
    function createInViewList(inView) {
        return objectKeys(intersectionEntryMap).reduce((list, slideIndex)=>{
            const index = parseInt(slideIndex);
            const { isIntersecting } = intersectionEntryMap[index];
            const inViewMatch = inView && isIntersecting;
            const notInViewMatch = !inView && !isIntersecting;
            if (inViewMatch || notInViewMatch) list.push(index);
            return list;
        }, []);
    }
    function get(inView = true) {
        if (inView && inViewCache) return inViewCache;
        if (!inView && notInViewCache) return notInViewCache;
        const slideIndexes = createInViewList(inView);
        if (inView) inViewCache = slideIndexes;
        if (!inView) notInViewCache = slideIndexes;
        return slideIndexes;
    }
    const self = {
        init,
        destroy,
        get
    };
    return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
    const { measureSize, startEdge, endEdge } = axis;
    const withEdgeGap = slideRects[0] && readEdgeGap;
    const startGap = measureStartGap();
    const endGap = measureEndGap();
    const slideSizes = slideRects.map(measureSize);
    const slideSizesWithGaps = measureWithGaps();
    function measureStartGap() {
        if (!withEdgeGap) return 0;
        const slideRect = slideRects[0];
        return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
    }
    function measureEndGap() {
        if (!withEdgeGap) return 0;
        const style = ownerWindow.getComputedStyle(arrayLast(slides));
        return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
    }
    function measureWithGaps() {
        return slideRects.map((rect, index, rects)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(rects, index);
            if (isFirst) return slideSizes[index] + startGap;
            if (isLast) return slideSizes[index] + endGap;
            return rects[index + 1][startEdge] - rect[startEdge];
        }).map(mathAbs);
    }
    const self = {
        slideSizes,
        slideSizesWithGaps,
        startGap,
        endGap
    };
    return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
    const { startEdge, endEdge, direction } = axis;
    const groupByNumber = isNumber(slidesToScroll);
    function byNumber(array, groupSize) {
        return arrayKeys(array).filter((i)=>i % groupSize === 0).map((i)=>array.slice(i, i + groupSize));
    }
    function bySize(array) {
        if (!array.length) return [];
        return arrayKeys(array).reduce((groups, rectB, index)=>{
            const rectA = arrayLast(groups) || 0;
            const isFirst = rectA === 0;
            const isLast = rectB === arrayLastIndex(array);
            const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
            const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
            const gapA = !loop && isFirst ? direction(startGap) : 0;
            const gapB = !loop && isLast ? direction(endGap) : 0;
            const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
            if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
            if (isLast) groups.push(array.length);
            return groups;
        }, []).map((currentSize, index, groups)=>{
            const previousSize = Math.max(groups[index - 1] || 0);
            return array.slice(previousSize, currentSize);
        });
    }
    function groupSlides(array) {
        return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
    }
    const self = {
        groupSlides
    };
    return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
    // Options
    const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
    // Measurements
    const pixelTolerance = 2;
    const nodeRects = NodeRects();
    const containerRect = nodeRects.measure(container);
    const slideRects = slides.map(nodeRects.measure);
    const axis = Axis(scrollAxis, direction);
    const viewSize = axis.measureSize(containerRect);
    const percentOfView = PercentOfView(viewSize);
    const alignment = Alignment(align, viewSize);
    const containSnaps = !loop && !!containScroll;
    const readEdgeGap = loop || !!containScroll;
    const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
    const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
    const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
    const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
    const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
    // Indexes
    const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    const indexPrevious = index.clone();
    const slideIndexes = arrayKeys(slides);
    // Animation
    const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } })=>{
        if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
        scrollBody.seek();
    };
    const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha)=>{
        const shouldSettle = scrollBody.settled();
        const withinBounds = !scrollBounds.shouldConstrain();
        const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
        const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
        if (hasSettledAndIdle) animation.stop();
        const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
        offsetLocation.set(interpolatedLocation);
        if (loop) {
            scrollLooper.loop(scrollBody.direction());
            slideLooper.loop();
        }
        translate.to(offsetLocation.get());
        if (hasSettledAndIdle) eventHandler.emit('settle');
        if (!hasSettled) eventHandler.emit('scroll');
    };
    const animation = Animations(ownerDocument, ownerWindow, ()=>update(engine), (alpha)=>render(engine, alpha));
    // Shared
    const friction = 0.68;
    const startLocation = scrollSnaps[index.get()];
    const location = Vector1D(startLocation);
    const previousLocation = Vector1D(startLocation);
    const offsetLocation = Vector1D(startLocation);
    const target = Vector1D(startLocation);
    const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
    const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
    const scrollProgress = ScrollProgress(limit);
    const eventStore = EventStore();
    const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
    const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
    const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
    // Engine
    const engine = {
        ownerDocument,
        ownerWindow,
        eventHandler,
        containerRect,
        slideRects,
        animation,
        axis,
        dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
        eventStore,
        percentOfView,
        index,
        indexPrevious,
        limit,
        location,
        offsetLocation,
        previousLocation,
        options,
        resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
        scrollBody,
        scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
            location,
            offsetLocation,
            previousLocation,
            target
        ]),
        scrollProgress,
        scrollSnapList: scrollSnaps.map(scrollProgress.get),
        scrollSnaps,
        scrollTarget,
        scrollTo,
        slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
        slideFocus,
        slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
        slidesInView,
        slideIndexes,
        slideRegistry,
        slidesToScroll,
        target,
        translate: Translate(axis, container)
    };
    return engine;
}
function EventHandler() {
    let listeners = {};
    let api;
    function init(emblaApi) {
        api = emblaApi;
    }
    function getListeners(evt) {
        return listeners[evt] || [];
    }
    function emit(evt) {
        getListeners(evt).forEach((e)=>e(api, evt));
        return self;
    }
    function on(evt, cb) {
        listeners[evt] = getListeners(evt).concat([
            cb
        ]);
        return self;
    }
    function off(evt, cb) {
        listeners[evt] = getListeners(evt).filter((e)=>e !== cb);
        return self;
    }
    function clear() {
        listeners = {};
    }
    const self = {
        init,
        emit,
        off,
        on,
        clear
    };
    return self;
}
const defaultOptions = {
    align: 'center',
    axis: 'x',
    container: null,
    slides: null,
    containScroll: 'trimSnaps',
    direction: 'ltr',
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
    watchFocus: true
};
function OptionsHandler(ownerWindow) {
    function mergeOptions(optionsA, optionsB) {
        return objectsMergeDeep(optionsA, optionsB || {});
    }
    function optionsAtMedia(options) {
        const optionsAtMedia = options.breakpoints || {};
        const matchedMediaOptions = objectKeys(optionsAtMedia).filter((media)=>ownerWindow.matchMedia(media).matches).map((media)=>optionsAtMedia[media]).reduce((a, mediaOption)=>mergeOptions(a, mediaOption), {});
        return mergeOptions(options, matchedMediaOptions);
    }
    function optionsMediaQueries(optionsList) {
        return optionsList.map((options)=>objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries)=>acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
    }
    const self = {
        mergeOptions,
        optionsAtMedia,
        optionsMediaQueries
    };
    return self;
}
function PluginsHandler(optionsHandler) {
    let activePlugins = [];
    function init(emblaApi, plugins) {
        activePlugins = plugins.filter(({ options })=>optionsHandler.optionsAtMedia(options).active !== false);
        activePlugins.forEach((plugin)=>plugin.init(emblaApi, optionsHandler));
        return plugins.reduce((map, plugin)=>Object.assign(map, {
                [plugin.name]: plugin
            }), {});
    }
    function destroy() {
        activePlugins = activePlugins.filter((plugin)=>plugin.destroy());
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
    const ownerDocument = root.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    const optionsHandler = OptionsHandler(ownerWindow);
    const pluginsHandler = PluginsHandler(optionsHandler);
    const mediaHandlers = EventStore();
    const eventHandler = EventHandler();
    const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
    const { on, off, emit } = eventHandler;
    const reInit = reActivate;
    let destroyed = false;
    let engine;
    let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
    let options = mergeOptions(optionsBase);
    let pluginList = [];
    let pluginApis;
    let container;
    let slides;
    function storeElements() {
        const { container: userContainer, slides: userSlides } = options;
        const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
        container = customContainer || root.children[0];
        const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
        slides = [].slice.call(customSlides || container.children);
    }
    function createEngine(options) {
        const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
        if (options.loop && !engine.slideLooper.canLoop()) {
            const optionsWithoutLoop = Object.assign({}, options, {
                loop: false
            });
            return createEngine(optionsWithoutLoop);
        }
        return engine;
    }
    function activate(withOptions, withPlugins) {
        if (destroyed) return;
        optionsBase = mergeOptions(optionsBase, withOptions);
        options = optionsAtMedia(optionsBase);
        pluginList = withPlugins || pluginList;
        storeElements();
        engine = createEngine(options);
        optionsMediaQueries([
            optionsBase,
            ...pluginList.map(({ options })=>options)
        ]).forEach((query)=>mediaHandlers.add(query, 'change', reActivate));
        if (!options.active) return;
        engine.translate.to(engine.location.get());
        engine.animation.init();
        engine.slidesInView.init();
        engine.slideFocus.init(self);
        engine.eventHandler.init(self);
        engine.resizeHandler.init(self);
        engine.slidesHandler.init(self);
        if (engine.options.loop) engine.slideLooper.loop();
        if (container.offsetParent && slides.length) engine.dragHandler.init(self);
        pluginApis = pluginsHandler.init(self, pluginList);
    }
    function reActivate(withOptions, withPlugins) {
        const startIndex = selectedScrollSnap();
        deActivate();
        activate(mergeOptions({
            startIndex
        }, withOptions), withPlugins);
        eventHandler.emit('reInit');
    }
    function deActivate() {
        engine.dragHandler.destroy();
        engine.eventStore.clear();
        engine.translate.clear();
        engine.slideLooper.clear();
        engine.resizeHandler.destroy();
        engine.slidesHandler.destroy();
        engine.slidesInView.destroy();
        engine.animation.destroy();
        pluginsHandler.destroy();
        mediaHandlers.clear();
    }
    function destroy() {
        if (destroyed) return;
        destroyed = true;
        mediaHandlers.clear();
        deActivate();
        eventHandler.emit('destroy');
        eventHandler.clear();
    }
    function scrollTo(index, jump, direction) {
        if (!options.active || destroyed) return;
        engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
        engine.scrollTo.index(index, direction || 0);
    }
    function scrollNext(jump) {
        const next = engine.index.add(1).get();
        scrollTo(next, jump, -1);
    }
    function scrollPrev(jump) {
        const prev = engine.index.add(-1).get();
        scrollTo(prev, jump, 1);
    }
    function canScrollNext() {
        const next = engine.index.add(1).get();
        return next !== selectedScrollSnap();
    }
    function canScrollPrev() {
        const prev = engine.index.add(-1).get();
        return prev !== selectedScrollSnap();
    }
    function scrollSnapList() {
        return engine.scrollSnapList;
    }
    function scrollProgress() {
        return engine.scrollProgress.get(engine.offsetLocation.get());
    }
    function selectedScrollSnap() {
        return engine.index.get();
    }
    function previousScrollSnap() {
        return engine.indexPrevious.get();
    }
    function slidesInView() {
        return engine.slidesInView.get();
    }
    function slidesNotInView() {
        return engine.slidesInView.get(false);
    }
    function plugins() {
        return pluginApis;
    }
    function internalEngine() {
        return engine;
    }
    function rootNode() {
        return root;
    }
    function containerNode() {
        return container;
    }
    function slideNodes() {
        return slides;
    }
    const self = {
        canScrollNext,
        canScrollPrev,
        containerNode,
        internalEngine,
        destroy,
        off,
        on,
        emit,
        plugins,
        previousScrollSnap,
        reInit,
        rootNode,
        scrollNext,
        scrollPrev,
        scrollProgress,
        scrollSnapList,
        scrollTo,
        selectedScrollSnap,
        slideNodes,
        slidesInView,
        slidesNotInView
    };
    activate(userOptions, userPlugins);
    setTimeout(()=>eventHandler.emit('init'), 0);
    return self;
}
EmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel.esm.js.map
}),
"[project]/frontend/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEmblaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-ssr] (ecmascript)");
;
;
;
function useEmblaCarousel(options = {}, plugins = []) {
    const storedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(options);
    const storedPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(plugins);
    const [emblaApi, setEmblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const reInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
    }, [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areOptionsEqual"])(storedOptions.current, options)) return;
        storedOptions.current = options;
        reInit();
    }, [
        options,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arePluginsEqual"])(storedPlugins.current, plugins)) return;
        storedPlugins.current = plugins;
        reInit();
    }, [
        plugins,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canUseDOM"])() && viewport) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].globalOptions = useEmblaCarousel.globalOptions;
            const newEmblaApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(viewport, storedOptions.current, storedPlugins.current);
            setEmblaApi(newEmblaApi);
            return ()=>newEmblaApi.destroy();
        } else {
            setEmblaApi(undefined);
        }
    }, [
        viewport,
        setEmblaApi
    ]);
    return [
        setViewport,
        emblaApi
    ];
}
useEmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-react.esm.js.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccordionChevron",
    ()=>AccordionChevron
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function AccordionChevron({ style, size = 16, ...others }) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            ...style,
            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(size),
            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(size),
            display: "block"
        },
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
        })
    });
}
AccordionChevron.displayName = "@mantine/core/AccordionChevron";
;
 //# sourceMappingURL=AccordionChevron.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
'use client';
function clamp(value, min, max) {
    if (min === void 0 && max === void 0) {
        return value;
    }
    if (min !== void 0 && max === void 0) {
        return Math.max(value, min);
    }
    if (min === void 0 && max !== void 0) {
        return Math.min(value, max);
    }
    return Math.min(Math.max(value, min), max);
}
;
 //# sourceMappingURL=clamp.mjs.map
}),
"[project]/frontend/node_modules/@mantine/carousel/esm/Carousel.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselProvider",
    ()=>CarouselProvider,
    "useCarouselContext",
    ()=>useCarouselContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-ssr] (ecmascript)");
'use client';
;
const [CarouselProvider, useCarouselContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSafeContext"])("Carousel component was not found in tree");
;
 //# sourceMappingURL=Carousel.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/carousel/esm/Carousel.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_17884d0f",
    "viewport": "m_a2dae653",
    "container": "m_fcd81474",
    "controls": "m_39bc3463",
    "control": "m_64f58e10",
    "indicators": "m_71ea3ab1",
    "indicator": "m_eae68602",
    "slide": "m_d98df724"
};
;
 //# sourceMappingURL=Carousel.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/carousel/esm/CarouselSlide/CarouselSlide.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselSlide",
    ()=>CarouselSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/Carousel.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/Carousel.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const defaultProps = {};
const CarouselSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { classNames, className, style, styles, vars, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("CarouselSlide", defaultProps, props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarouselContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                orientation: ctx.orientation
            },
            mod
        ],
        ...ctx.getStyles("slide", {
            className,
            style,
            classNames,
            styles
        }),
        ...others
    });
});
CarouselSlide.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
CarouselSlide.displayName = "@mantine/carousel/CarouselSlide";
;
 //# sourceMappingURL=CarouselSlide.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseValue",
    ()=>getBaseValue
]);
'use client';
function getBaseValue(value) {
    if (typeof value === "object" && value !== null) {
        if ("base" in value) {
            return value.base;
        }
        return void 0;
    }
    return value;
}
;
 //# sourceMappingURL=get-base-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBreakpointValue",
    ()=>getBreakpointValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs [app-ssr] (ecmascript)");
'use client';
;
function getBreakpointValue(breakpoint, breakpoints) {
    if (breakpoint in breakpoints) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["px"])(breakpoints[breakpoint]);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["px"])(breakpoint);
}
;
 //# sourceMappingURL=get-breakpoint-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSortedBreakpoints",
    ()=>getSortedBreakpoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-breakpoint-value/get-breakpoint-value.mjs [app-ssr] (ecmascript)");
'use client';
;
function getSortedBreakpoints(values, breakpoints) {
    const convertedBreakpoints = values.map((breakpoint)=>({
            value: breakpoint,
            px: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$breakpoint$2d$value$2f$get$2d$breakpoint$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBreakpointValue"])(breakpoint, breakpoints)
        }));
    convertedBreakpoints.sort((a, b)=>a.px - b.px);
    return convertedBreakpoints;
}
;
 //# sourceMappingURL=get-sorted-breakpoints.mjs.map
}),
"[project]/frontend/node_modules/@mantine/carousel/esm/CarouselVariables/CarouselVariables.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselContainerVariables",
    ()=>CarouselContainerVariables,
    "CarouselVariables",
    ()=>CarouselVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$base$2d$value$2f$get$2d$base$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$sorted$2d$breakpoints$2f$get$2d$sorted$2d$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function CarouselVariables({ slideGap, slideSize, selector }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])({
        "--carousel-slide-gap": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$base$2d$value$2f$get$2d$base$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseValue"])(slideGap)),
        "--carousel-slide-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$base$2d$value$2f$get$2d$base$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseValue"])(slideSize))
    });
    const queries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(theme.breakpoints).reduce((acc, breakpoint)=>{
        if (!acc[breakpoint]) {
            acc[breakpoint] = {};
        }
        if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
            acc[breakpoint]["--carousel-slide-gap"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(slideGap[breakpoint]);
        }
        if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
            acc[breakpoint]["--carousel-slide-size"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(slideSize[breakpoint]);
        }
        return acc;
    }, {});
    const sortedBreakpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$sorted$2d$breakpoints$2f$get$2d$sorted$2d$breakpoints$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedBreakpoints"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(queries), theme.breakpoints).filter((breakpoint)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(queries[breakpoint.value]).length > 0);
    const media = sortedBreakpoints.map((breakpoint)=>({
            query: `(min-width: ${theme.breakpoints[breakpoint.value]})`,
            styles: queries[breakpoint.value]
        }));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStyles"], {
        styles: baseStyles,
        media,
        selector
    });
}
function getBreakpoints(values) {
    if (typeof values === "object" && values !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"])(values);
    }
    return [];
}
function sortBreakpoints(breakpoints) {
    return breakpoints.sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["px"])(a) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["px"])(b));
}
function getUniqueBreakpoints({ slideGap, slideSize }) {
    const breakpoints = Array.from(/* @__PURE__ */ new Set([
        ...getBreakpoints(slideGap),
        ...getBreakpoints(slideSize)
    ]));
    return sortBreakpoints(breakpoints);
}
function CarouselContainerVariables({ slideGap, slideSize, selector }) {
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])({
        "--carousel-slide-gap": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$base$2d$value$2f$get$2d$base$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseValue"])(slideGap)),
        "--carousel-slide-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$base$2d$value$2f$get$2d$base$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseValue"])(slideSize))
    });
    const queries = getUniqueBreakpoints({
        slideGap,
        slideSize
    }).reduce((acc, breakpoint)=>{
        if (!acc[breakpoint]) {
            acc[breakpoint] = {};
        }
        if (typeof slideGap === "object" && slideGap[breakpoint] !== void 0) {
            acc[breakpoint]["--carousel-slide-gap"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(slideGap[breakpoint]);
        }
        if (typeof slideSize === "object" && slideSize[breakpoint] !== void 0) {
            acc[breakpoint]["--carousel-slide-size"] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(slideSize[breakpoint]);
        }
        return acc;
    }, {});
    const media = Object.keys(queries).map((breakpoint)=>({
            query: `carousel (min-width: ${breakpoint})`,
            styles: queries[breakpoint]
        }));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineStyles"], {
        styles: baseStyles,
        container: media,
        selector
    });
}
;
 //# sourceMappingURL=CarouselVariables.mjs.map
}),
"[project]/frontend/node_modules/@mantine/carousel/esm/get-chevron-rotation.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChevronRotation",
    ()=>getChevronRotation
]);
'use client';
function getChevronRotation({ dir, orientation, direction }) {
    if (direction === "previous") {
        return orientation === "horizontal" ? 90 * (dir === "ltr" ? 1 : -1) : -180;
    }
    return orientation === "horizontal" ? 90 * (dir === "ltr" ? -1 : 1) : 0;
}
;
 //# sourceMappingURL=get-chevron-rotation.mjs.map
}),
"[project]/frontend/node_modules/@mantine/carousel/esm/Carousel.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionChevron$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Accordion/AccordionChevron.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/Carousel.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselSlide$2f$CarouselSlide$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/CarouselSlide/CarouselSlide.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselVariables$2f$CarouselVariables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/CarouselVariables/CarouselVariables.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$get$2d$chevron$2d$rotation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/get-chevron-rotation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/carousel/esm/Carousel.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    controlSize: 26,
    controlsOffset: "sm",
    slideSize: "100%",
    slideGap: 0,
    orientation: "horizontal",
    align: "center",
    slidesToScroll: 1,
    includeGapInSize: true,
    draggable: true,
    dragFree: false,
    loop: false,
    speed: 10,
    initialSlide: 0,
    inViewThreshold: 0,
    withControls: true,
    withIndicators: false,
    skipSnaps: false,
    containScroll: "",
    withKeyboardEvents: true,
    type: "media"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, { height, controlSize, controlsOffset })=>({
        root: {
            "--carousel-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(height),
            "--carousel-control-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(controlSize),
            "--carousel-controls-offset": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpacing"])(controlsOffset)
        }
    }));
const Carousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Carousel", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, children, getEmblaApi, onNextSlide, onPreviousSlide, onSlideChange, nextControlProps, previousControlProps, controlSize, controlsOffset, slideSize, slideGap, orientation, height, align, slidesToScroll, includeGapInSize, draggable, dragFree, loop, speed, initialSlide, inViewThreshold, withControls, withIndicators, plugins, nextControlIcon, previousControlIcon, skipSnaps, containScroll, withKeyboardEvents, mod, type, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Carousel",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const responsiveClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRandomClassName"])();
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const [emblaRefElement, embla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        axis: orientation === "horizontal" ? "x" : "y",
        direction: orientation === "horizontal" ? dir : void 0,
        startIndex: initialSlide,
        loop,
        align,
        slidesToScroll,
        draggable,
        dragFree,
        speed,
        inViewThreshold,
        skipSnaps,
        containScroll
    }, plugins);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [slidesCount, setSlidesCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>embla && embla.scrollTo(index), [
        embla
    ]);
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!embla) {
            return;
        }
        const slide = embla.selectedScrollSnap();
        setSelected(slide);
        slide !== selected && onSlideChange?.(slide);
    }, [
        embla,
        setSelected,
        onSlideChange,
        selected
    ]);
    const handlePrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        embla?.scrollPrev();
        onPreviousSlide?.();
    }, [
        embla
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        embla?.scrollNext();
        onNextSlide?.();
    }, [
        embla
    ]);
    const handleKeydown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (withKeyboardEvents) {
            if (event.key === "ArrowRight") {
                event.preventDefault();
                handleNext();
            }
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                handlePrevious();
            }
        }
    }, [
        embla
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (embla) {
            getEmblaApi?.(embla);
            handleSelect();
            setSlidesCount(embla.scrollSnapList().length);
            embla.on("select", handleSelect);
            return ()=>{
                embla.off("select", handleSelect);
            };
        }
        return void 0;
    }, [
        embla,
        slidesToScroll,
        handleSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (embla) {
            embla.reInit();
            setSlidesCount(embla.scrollSnapList().length);
            setSelected((currentSelected)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(currentSelected, 0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children).length - 1));
        }
    }, [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children).length,
        slidesToScroll
    ]);
    const canScrollPrev = embla?.canScrollPrev() || false;
    const canScrollNext = embla?.canScrollNext() || false;
    const indicators = Array(slidesCount).fill(0).map((_, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
            ...getStyles("indicator"),
            key: index,
            "data-active": index === selected || void 0,
            "aria-hidden": true,
            tabIndex: -1,
            onClick: ()=>handleScroll(index),
            "data-orientation": orientation,
            onMouseDown: (event)=>event.preventDefault()
        }));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselProvider"], {
        value: {
            getStyles,
            orientation
        },
        children: [
            type === "container" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselVariables$2f$CarouselVariables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselContainerVariables"], {
                ...props,
                selector: `.${responsiveClassName}`
            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselVariables$2f$CarouselVariables$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselVariables"], {
                ...props,
                selector: `.${responsiveClassName}`
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                ref,
                ...getStyles("root", {
                    className: "responsiveClassName"
                }),
                ...others,
                mod: [
                    {
                        orientation,
                        "include-gap-in-size": includeGapInSize
                    },
                    mod
                ],
                onKeyDownCapture: handleKeydown,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...getStyles("viewport"),
                        ref: emblaRefElement,
                        "data-type": type,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            ...getStyles("container", {
                                className: responsiveClassName
                            }),
                            "data-orientation": orientation,
                            children
                        })
                    }),
                    withIndicators && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...getStyles("indicators"),
                        "data-orientation": orientation,
                        children: indicators
                    }),
                    withControls && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        ...getStyles("controls"),
                        "data-orientation": orientation,
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
                                ...previousControlProps,
                                ...getStyles("control", {
                                    className: previousControlProps?.className,
                                    style: previousControlProps?.style
                                }),
                                onClick: (event)=>{
                                    handlePrevious();
                                    previousControlProps?.onClick?.(event);
                                },
                                "data-inactive": !canScrollPrev || void 0,
                                tabIndex: canScrollPrev ? 0 : -1,
                                children: typeof previousControlIcon !== "undefined" ? previousControlIcon : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionChevron$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionChevron"], {
                                    style: {
                                        transform: `rotate(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$get$2d$chevron$2d$rotation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChevronRotation"])({
                                            dir,
                                            orientation,
                                            direction: "previous"
                                        })}deg)`
                                    }
                                })
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
                                ...getStyles("control", {
                                    className: nextControlProps?.className,
                                    style: nextControlProps?.style
                                }),
                                ...nextControlProps,
                                onClick: (event)=>{
                                    handleNext();
                                    nextControlProps?.onClick?.(event);
                                },
                                "data-inactive": !canScrollNext || void 0,
                                tabIndex: canScrollNext ? 0 : -1,
                                children: typeof nextControlIcon !== "undefined" ? nextControlIcon : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Accordion$2f$AccordionChevron$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionChevron"], {
                                    style: {
                                        transform: `rotate(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$get$2d$chevron$2d$rotation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChevronRotation"])({
                                            dir,
                                            orientation,
                                            direction: "next"
                                        })}deg)`
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
Carousel.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$Carousel$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Carousel.displayName = "@mantine/carousel/Carousel";
Carousel.Slide = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$carousel$2f$esm$2f$CarouselSlide$2f$CarouselSlide$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselSlide"];
;
 //# sourceMappingURL=Carousel.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Badge/Badge.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_347db0ec",
    "root--dot": "m_fbd81e3d",
    "label": "m_5add502a",
    "section": "m_91fdda9b"
};
;
 //# sourceMappingURL=Badge.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Badge/Badge.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color, gradient, variant, size, autoContrast })=>{
    const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
    });
    return {
        root: {
            "--badge-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "badge-height"),
            "--badge-padding-x": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "badge-padding-x"),
            "--badge-fz": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "badge-fz"),
            "--badge-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--badge-bg": color || variant ? colors.background : void 0,
            "--badge-color": color || variant ? colors.color : void 0,
            "--badge-bd": color || variant ? colors.border : void 0,
            "--badge-dot-color": variant === "dot" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0
        }
    };
});
const Badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Badge", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, radius, color, gradient, leftSection, rightSection, children, variant, fullWidth, autoContrast, circle, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Badge",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        variant,
        mod: [
            {
                block: fullWidth,
                circle,
                "with-right-section": !!rightSection,
                "with-left-section": !!leftSection
            },
            mod
        ],
        ...getStyles("root", {
            variant
        }),
        ref,
        ...others,
        children: [
            leftSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                ...getStyles("section"),
                "data-position": "left",
                children: leftSection
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                ...getStyles("label"),
                children
            }),
            rightSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                ...getStyles("section"),
                "data-position": "right",
                children: rightSection
            })
        ]
    });
});
Badge.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Badge.displayName = "@mantine/core/Badge";
;
 //# sourceMappingURL=Badge.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/use-move/use-move.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clampUseMovePosition",
    ()=>clampUseMovePosition,
    "useMove",
    ()=>useMove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function clampUseMovePosition(position) {
    return {
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(position.x, 0, 1),
        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(position.y, 0, 1)
    };
}
function useMove(onChange, handlers, dir = "ltr") {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isSliding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mounted.current = true;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = ref.current;
        const onScrub = ({ x, y })=>{
            cancelAnimationFrame(frame.current);
            frame.current = requestAnimationFrame(()=>{
                if (mounted.current && node) {
                    node.style.userSelect = "none";
                    const rect = node.getBoundingClientRect();
                    if (rect.width && rect.height) {
                        const _x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((x - rect.left) / rect.width, 0, 1);
                        onChange({
                            x: dir === "ltr" ? _x : 1 - _x,
                            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((y - rect.top) / rect.height, 0, 1)
                        });
                    }
                }
            });
        };
        const bindEvents = ()=>{
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", stopScrubbing);
            document.addEventListener("touchmove", onTouchMove);
            document.addEventListener("touchend", stopScrubbing);
        };
        const unbindEvents = ()=>{
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", stopScrubbing);
            document.removeEventListener("touchmove", onTouchMove);
            document.removeEventListener("touchend", stopScrubbing);
        };
        const startScrubbing = ()=>{
            if (!isSliding.current && mounted.current) {
                isSliding.current = true;
                typeof handlers?.onScrubStart === "function" && handlers.onScrubStart();
                setActive(true);
                bindEvents();
            }
        };
        const stopScrubbing = ()=>{
            if (isSliding.current && mounted.current) {
                isSliding.current = false;
                setActive(false);
                unbindEvents();
                setTimeout(()=>{
                    typeof handlers?.onScrubEnd === "function" && handlers.onScrubEnd();
                }, 0);
            }
        };
        const onMouseDown = (event)=>{
            startScrubbing();
            event.preventDefault();
            onMouseMove(event);
        };
        const onMouseMove = (event)=>onScrub({
                x: event.clientX,
                y: event.clientY
            });
        const onTouchStart = (event)=>{
            if (event.cancelable) {
                event.preventDefault();
            }
            startScrubbing();
            onTouchMove(event);
        };
        const onTouchMove = (event)=>{
            if (event.cancelable) {
                event.preventDefault();
            }
            onScrub({
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY
            });
        };
        node?.addEventListener("mousedown", onMouseDown);
        node?.addEventListener("touchstart", onTouchStart, {
            passive: false
        });
        return ()=>{
            if (node) {
                node.removeEventListener("mousedown", onMouseDown);
                node.removeEventListener("touchstart", onTouchStart);
            }
        };
    }, [
        dir,
        onChange
    ]);
    return {
        ref,
        active
    };
}
;
 //# sourceMappingURL=use-move.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/find-closest-number/find-closest-number.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findClosestNumber",
    ()=>findClosestNumber
]);
'use client';
function findClosestNumber(value, numbers) {
    if (numbers.length === 0) {
        return value;
    }
    return numbers.reduce((prev, curr)=>Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
}
;
 //# sourceMappingURL=find-closest-number.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderProvider",
    ()=>SliderProvider,
    "useSliderContext",
    ()=>useSliderContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const [SliderProvider, useSliderContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSafeContext"])("SliderProvider was not found in tree");
;
 //# sourceMappingURL=Slider.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/SliderRoot/SliderRoot.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderRoot",
    ()=>SliderRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const SliderRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ size, disabled, variant, color, thumbSize, radius, ...others }, ref)=>{
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSliderContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        tabIndex: -1,
        variant,
        size,
        ref,
        ...getStyles("root"),
        ...others
    });
});
SliderRoot.displayName = "@mantine/core/SliderRoot";
;
 //# sourceMappingURL=SliderRoot.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Thumb/Thumb.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Thumb",
    ()=>Thumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const Thumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ max, min, value, position, label, dragging, onMouseDown, onKeyDownCapture, labelTransitionProps, labelAlwaysOn, thumbLabel, onFocus, onBlur, showLabelOnHover, isHovered, children = null, disabled }, ref)=>{
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSliderContext"])();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isVisible = labelAlwaysOn || dragging || focused || showLabelOnHover && isHovered;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        tabIndex: 0,
        role: "slider",
        "aria-label": thumbLabel,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        ref,
        __vars: {
            "--slider-thumb-offset": `${position}%`
        },
        ...getStyles("thumb", {
            focusable: true
        }),
        mod: {
            dragging,
            disabled
        },
        onFocus: (event)=>{
            setFocused(true);
            typeof onFocus === "function" && onFocus(event);
        },
        onBlur: (event)=>{
            setFocused(false);
            typeof onBlur === "function" && onBlur(event);
        },
        onTouchStart: onMouseDown,
        onMouseDown,
        onKeyDownCapture,
        onClick: (event)=>event.stopPropagation(),
        children: [
            children,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                mounted: label != null && !!isVisible,
                transition: "fade",
                duration: 0,
                ...labelTransitionProps,
                children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...getStyles("label", {
                            style: transitionStyles
                        }),
                        children: label
                    })
            })
        ]
    });
});
Thumb.displayName = "@mantine/core/SliderThumb";
;
 //# sourceMappingURL=Thumb.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-position/get-position.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPosition",
    ()=>getPosition
]);
'use client';
function getPosition({ value, min, max }) {
    const position = (value - min) / (max - min) * 100;
    return Math.min(Math.max(position, 0), 100);
}
;
 //# sourceMappingURL=get-position.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/is-mark-filled.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMarkFilled",
    ()=>isMarkFilled
]);
'use client';
function isMarkFilled({ mark, offset, value, inverted = false }) {
    return inverted ? typeof offset === "number" ? mark.value <= offset || mark.value >= value : mark.value >= value : typeof offset === "number" ? mark.value >= offset && mark.value <= value : mark.value <= value;
}
;
 //# sourceMappingURL=is-mark-filled.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/Marks.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marks",
    ()=>Marks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-position/get-position.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$is$2d$mark$2d$filled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/is-mark-filled.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Marks({ marks, min, max, disabled, value, offset, inverted }) {
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSliderContext"])();
    if (!marks) {
        return null;
    }
    const items = marks.map((mark, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("markWrapper"),
            __vars: {
                "--mark-offset": `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPosition"])({
                    value: mark.value,
                    min,
                    max
                })}%`
            },
            key: index
        }, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("mark"),
            mod: {
                filled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$is$2d$mark$2d$filled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMarkFilled"])({
                    mark,
                    value,
                    offset,
                    inverted
                }),
                disabled
            }
        }), mark.label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ...getStyles("markLabel"),
            children: mark.label
        })));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: items
    });
}
Marks.displayName = "@mantine/core/SliderMarks";
;
 //# sourceMappingURL=Marks.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Track/Track.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Track",
    ()=>Track
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$Marks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/Marks.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function Track({ filled, children, offset, disabled, marksOffset, inverted, containerProps, ...others }) {
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSliderContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("trackContainer"),
        mod: {
            disabled
        },
        ...containerProps,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("track"),
            mod: {
                inverted,
                disabled
            },
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                    mod: {
                        inverted,
                        disabled
                    },
                    __vars: {
                        "--slider-bar-width": `calc(${filled}% + var(--slider-size))`,
                        "--slider-bar-offset": `calc(${offset}% - var(--slider-size))`
                    },
                    ...getStyles("bar")
                }),
                children,
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$Marks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Marks"], {
                    ...others,
                    offset: marksOffset,
                    disabled,
                    inverted
                })
            ]
        })
    });
}
Track.displayName = "@mantine/core/SliderTrack";
;
 //# sourceMappingURL=Track.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-change-value/get-change-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChangeValue",
    ()=>getChangeValue
]);
'use client';
function getChangeValue({ value, containerWidth, min, max, step, precision }) {
    const left = !containerWidth ? value : Math.min(Math.max(value, 0), containerWidth) / containerWidth;
    const dx = left * (max - min);
    const nextValue = (dx !== 0 ? Math.round(dx / step) * step : 0) + min;
    const nextValueWithinStep = Math.max(nextValue, min);
    if (precision !== void 0) {
        return Number(nextValueWithinStep.toFixed(precision));
    }
    return nextValueWithinStep;
}
;
 //# sourceMappingURL=get-change-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-client-position/get-client-position.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientPosition",
    ()=>getClientPosition
]);
'use client';
function getClientPosition(event) {
    if ("TouchEvent" in window && event instanceof window.TouchEvent) {
        const touch = event.touches[0];
        return touch.clientX;
    }
    return event.clientX;
}
;
 //# sourceMappingURL=get-client-position.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-floating-value/get-gloating-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFloatingValue",
    ()=>getFloatingValue
]);
'use client';
function getFloatingValue(value, precision) {
    return parseFloat(value.toFixed(precision));
}
;
 //# sourceMappingURL=get-gloating-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-precision/get-precision.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrecision",
    ()=>getPrecision
]);
'use client';
function getPrecision(step) {
    if (!step) {
        return 0;
    }
    const split = step.toString().split(".");
    return split.length > 1 ? split[1].length : 0;
}
;
 //# sourceMappingURL=get-precision.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-step-mark-value/get-step-mark-value.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFirstMarkValue",
    ()=>getFirstMarkValue,
    "getLastMarkValue",
    ()=>getLastMarkValue,
    "getNextMarkValue",
    ()=>getNextMarkValue,
    "getPreviousMarkValue",
    ()=>getPreviousMarkValue
]);
'use client';
function getNextMarkValue(currentValue, marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>a.value - b.value);
    const nextMark = sortedMarks.find((mark)=>mark.value > currentValue);
    return nextMark ? nextMark.value : currentValue;
}
function getPreviousMarkValue(currentValue, marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>b.value - a.value);
    const previousMark = sortedMarks.find((mark)=>mark.value < currentValue);
    return previousMark ? previousMark.value : currentValue;
}
function getFirstMarkValue(marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>a.value - b.value);
    return sortedMarks.length > 0 ? sortedMarks[0].value : 0;
}
function getLastMarkValue(marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>a.value - b.value);
    return sortedMarks.length > 0 ? sortedMarks[sortedMarks.length - 1].value : 100;
}
;
 //# sourceMappingURL=get-step-mark-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_dd36362e",
    "label": "m_c9357328",
    "thumb": "m_c9a9a60a",
    "trackContainer": "m_a8645c2",
    "track": "m_c9ade57f",
    "bar": "m_38aeed47",
    "markWrapper": "m_b7b0423a",
    "mark": "m_dd33bc19",
    "markLabel": "m_68c77a5b"
};
;
 //# sourceMappingURL=Slider.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/RangeSlider/RangeSlider.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RangeSlider",
    ()=>RangeSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$move$2f$use$2d$move$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-move/use-move.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$closest$2d$number$2f$find$2d$closest$2d$number$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/find-closest-number/find-closest-number.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$SliderRoot$2f$SliderRoot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/SliderRoot/SliderRoot.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Thumb$2f$Thumb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Thumb/Thumb.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Track$2f$Track$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Track/Track.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$change$2d$value$2f$get$2d$change$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-change-value/get-change-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$client$2d$position$2f$get$2d$client$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-client-position/get-client-position.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-floating-value/get-gloating-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-position/get-position.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$precision$2f$get$2d$precision$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-precision/get-precision.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-step-mark-value/get-step-mark-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { size, color, thumbSize, radius })=>({
        root: {
            "--slider-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSize"])(size, "slider-size"),
            "--slider-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--slider-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--slider-thumb-size": thumbSize !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"])(thumbSize) : "calc(var(--slider-size) * 2)"
        }
    }));
const defaultProps = {
    min: 0,
    max: 100,
    minRange: 10,
    step: 1,
    marks: [],
    label: (f)=>f,
    labelTransitionProps: {
        transition: "fade",
        duration: 0
    },
    labelAlwaysOn: false,
    showLabelOnHover: true,
    disabled: false,
    scale: (v)=>v
};
const RangeSlider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("RangeSlider", defaultProps, _props);
    const { classNames, styles, value, onChange, onChangeEnd, size, min, max, minRange, maxRange, step, precision: _precision, defaultValue, name, marks, label, labelTransitionProps, labelAlwaysOn, thumbFromLabel, thumbToLabel, showLabelOnHover, thumbChildren, disabled, unstyled, scale, inverted, className, style, vars, hiddenInputProps, restrictToMarks, thumbProps, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Slider",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        classNames,
        className,
        styles,
        style,
        vars,
        varsResolver,
        unstyled
    });
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [_value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUncontrolled"])({
        value,
        defaultValue,
        finalValue: [
            min,
            max
        ],
        onChange
    });
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(_value);
    const thumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const thumbIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    const positions = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPosition"])({
            value: _value[0],
            min,
            max
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPosition"])({
            value: _value[1],
            min,
            max
        })
    ];
    const precision = _precision ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$precision$2f$get$2d$precision$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPrecision"])(step);
    const _setValue = (val)=>{
        setValue(val);
        valueRef.current = val;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Array.isArray(value)) {
            valueRef.current = value;
        }
    }, Array.isArray(value) ? [
        value[0],
        value[1]
    ] : [
        null,
        null
    ]);
    const setRangedValue = (val, index, triggerChangeEnd)=>{
        if (index === -1) {
            return;
        }
        const clone = [
            ...valueRef.current
        ];
        if (restrictToMarks && marks) {
            const closest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$closest$2d$number$2f$find$2d$closest$2d$number$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findClosestNumber"])(val, marks.map((m)=>m.value));
            const current = clone[index];
            clone[index] = closest;
            const otherIndex = index === 0 ? 1 : 0;
            const lastMarkValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLastMarkValue"])(marks);
            const firstMarkValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirstMarkValue"])(marks);
            if (closest === lastMarkValue && clone[otherIndex] === lastMarkValue) {
                clone[index] = current;
            } else if (closest === firstMarkValue && clone[otherIndex] === firstMarkValue) {
                clone[index] = current;
            } else if (closest === clone[otherIndex]) {
                if (current > clone[otherIndex]) {
                    clone[otherIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMarkValue"])(closest, marks);
                } else {
                    clone[otherIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMarkValue"])(closest, marks);
                }
            }
        } else {
            clone[index] = val;
            if (index === 0) {
                if (val > clone[1] - (minRange - 1e-9)) {
                    clone[1] = Math.min(val + minRange, max);
                }
                if (val > (max - (minRange - 1e-9) || min)) {
                    clone[index] = valueRef.current[index];
                }
                if (clone[1] - val > maxRange) {
                    clone[1] = val + maxRange;
                }
            }
            if (index === 1) {
                if (val < clone[0] + minRange) {
                    clone[0] = Math.max(val - minRange, min);
                }
                if (val < clone[0] + minRange) {
                    clone[index] = valueRef.current[index];
                }
                if (val - clone[0] > maxRange) {
                    clone[0] = val - maxRange;
                }
            }
        }
        clone[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(clone[0], precision);
        clone[1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(clone[1], precision);
        if (clone[0] > clone[1]) {
            const temp = clone[0];
            clone[0] = clone[1];
            clone[1] = temp;
        }
        _setValue(clone);
        if (triggerChangeEnd) {
            onChangeEnd?.(valueRef.current);
        }
    };
    const handleChange = (val)=>{
        if (!disabled) {
            const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$change$2d$value$2f$get$2d$change$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChangeValue"])({
                value: val,
                min,
                max,
                step,
                precision
            });
            setRangedValue(nextValue, thumbIndex.current, false);
        }
    };
    const { ref: container, active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$move$2f$use$2d$move$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMove"])(({ x })=>handleChange(x), {
        onScrubEnd: ()=>!disabled && onChangeEnd?.(valueRef.current)
    }, dir);
    function handleThumbMouseDown(index) {
        thumbIndex.current = index;
    }
    const handleTrackMouseDownCapture = (event)=>{
        container.current.focus();
        const rect = container.current.getBoundingClientRect();
        const changePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$client$2d$position$2f$get$2d$client$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getClientPosition"])(event.nativeEvent);
        const changeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$change$2d$value$2f$get$2d$change$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChangeValue"])({
            value: changePosition - rect.left,
            max,
            min,
            step,
            containerWidth: rect.width
        });
        const nearestHandle = Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;
        const _nearestHandle = dir === "ltr" ? nearestHandle : nearestHandle === 1 ? 0 : 1;
        thumbIndex.current = _nearestHandle;
    };
    const getFocusedThumbIndex = ()=>{
        if (focused !== 1 && focused !== 0) {
            setFocused(0);
            return 0;
        }
        return focused;
    };
    const handleTrackKeydownCapture = (event)=>{
        if (!disabled) {
            switch(event.key){
                case "ArrowUp":
                    {
                        event.preventDefault();
                        const focusedIndex = getFocusedThumbIndex();
                        thumbs.current[focusedIndex].focus();
                        const nextValue = restrictToMarks && marks ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMarkValue"])(valueRef.current[focusedIndex], marks) : Math.min(Math.max(valueRef.current[focusedIndex] + step, min), max);
                        setRangedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(nextValue, precision), focusedIndex, true);
                        break;
                    }
                case "ArrowRight":
                    {
                        event.preventDefault();
                        const focusedIndex = getFocusedThumbIndex();
                        thumbs.current[focusedIndex].focus();
                        const nextValue = restrictToMarks && marks ? (dir === "rtl" ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMarkValue"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMarkValue"])(valueRef.current[focusedIndex], marks) : Math.min(Math.max(dir === "rtl" ? valueRef.current[focusedIndex] - step : valueRef.current[focusedIndex] + step, min), max);
                        setRangedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(nextValue, precision), focusedIndex, true);
                        break;
                    }
                case "ArrowDown":
                    {
                        event.preventDefault();
                        const focusedIndex = getFocusedThumbIndex();
                        thumbs.current[focusedIndex].focus();
                        const nextValue = restrictToMarks && marks ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMarkValue"])(valueRef.current[focusedIndex], marks) : Math.min(Math.max(valueRef.current[focusedIndex] - step, min), max);
                        setRangedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(nextValue, precision), focusedIndex, true);
                        break;
                    }
                case "ArrowLeft":
                    {
                        event.preventDefault();
                        const focusedIndex = getFocusedThumbIndex();
                        thumbs.current[focusedIndex].focus();
                        const nextValue = restrictToMarks && marks ? (dir === "rtl" ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextMarkValue"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPreviousMarkValue"])(valueRef.current[focusedIndex], marks) : Math.min(Math.max(dir === "rtl" ? valueRef.current[focusedIndex] + step : valueRef.current[focusedIndex] - step, min), max);
                        setRangedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(nextValue, precision), focusedIndex, true);
                        break;
                    }
            }
        }
    };
    const sharedThumbProps = {
        max,
        min,
        size,
        labelTransitionProps,
        labelAlwaysOn,
        onBlur: ()=>setFocused(-1)
    };
    const hasArrayThumbChildren = Array.isArray(thumbChildren);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliderProvider"], {
        value: {
            getStyles
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$SliderRoot$2f$SliderRoot$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SliderRoot"], {
            ...others,
            size,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, root),
            disabled,
            onMouseDownCapture: ()=>root.current?.focus(),
            onKeyDownCapture: ()=>{
                if (thumbs.current[0]?.parentElement?.contains(document.activeElement)) {
                    return;
                }
                thumbs.current[0]?.focus();
            },
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Track$2f$Track$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"], {
                    offset: positions[0],
                    marksOffset: _value[0],
                    filled: positions[1] - positions[0],
                    marks,
                    inverted,
                    min,
                    max,
                    value: _value[1],
                    disabled,
                    containerProps: {
                        ref: container,
                        onMouseEnter: showLabelOnHover ? ()=>setHovered(true) : void 0,
                        onMouseLeave: showLabelOnHover ? ()=>setHovered(false) : void 0,
                        onTouchStartCapture: handleTrackMouseDownCapture,
                        onTouchEndCapture: ()=>{
                            thumbIndex.current = -1;
                        },
                        onMouseDownCapture: handleTrackMouseDownCapture,
                        onMouseUpCapture: ()=>{
                            thumbIndex.current = -1;
                        },
                        onKeyDownCapture: handleTrackKeydownCapture
                    },
                    children: [
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Thumb$2f$Thumb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
                            ...sharedThumbProps,
                            value: scale(_value[0]),
                            position: positions[0],
                            dragging: active,
                            label: typeof label === "function" ? label((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(scale(_value[0]), precision)) : label,
                            ref: (node)=>{
                                thumbs.current[0] = node;
                            },
                            thumbLabel: thumbFromLabel,
                            onMouseDown: ()=>handleThumbMouseDown(0),
                            onFocus: ()=>setFocused(0),
                            showLabelOnHover,
                            isHovered: hovered,
                            disabled,
                            ...thumbProps?.(0),
                            children: hasArrayThumbChildren ? thumbChildren[0] : thumbChildren
                        }),
                        /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Thumb$2f$Thumb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
                            ...sharedThumbProps,
                            thumbLabel: thumbToLabel,
                            value: scale(_value[1]),
                            position: positions[1],
                            dragging: active,
                            label: typeof label === "function" ? label((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingValue"])(scale(_value[1]), precision)) : label,
                            ref: (node)=>{
                                thumbs.current[1] = node;
                            },
                            onMouseDown: ()=>handleThumbMouseDown(1),
                            onFocus: ()=>setFocused(1),
                            showLabelOnHover,
                            isHovered: hovered,
                            disabled,
                            ...thumbProps?.(1),
                            children: hasArrayThumbChildren ? thumbChildren[1] : thumbChildren
                        })
                    ]
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                    type: "hidden",
                    name: `${name}_from`,
                    value: _value[0],
                    ...hiddenInputProps
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                    type: "hidden",
                    name: `${name}_to`,
                    value: _value[1],
                    ...hiddenInputProps
                })
            ]
        })
    });
});
RangeSlider.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
RangeSlider.displayName = "@mantine/core/RangeSlider";
;
 //# sourceMappingURL=RangeSlider.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransitionProps",
    ()=>getTransitionProps
]);
'use client';
const defaultTransition = {
    duration: 100,
    transition: "fade"
};
function getTransitionProps(transitionProps, componentTransition) {
    return {
        ...defaultTransition,
        ...componentTransition,
        ...transitionProps
    };
}
;
 //# sourceMappingURL=get-transition-props.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStyleObject",
    ()=>getStyleObject
]);
'use client';
function getStyleObject(style, theme) {
    if (Array.isArray(style)) {
        return [
            ...style
        ].reduce((acc, item)=>({
                ...acc,
                ...getStyleObject(item, theme)
            }), {});
    }
    if (typeof style === "function") {
        return style(theme);
    }
    if (style == null) {
        return {};
    }
    return style;
}
;
 //# sourceMappingURL=get-style-object.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFloatingTooltip",
    ()=>useFloatingTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function useFloatingTooltip({ offset, position, defaultOpened }) {
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultOpened);
    const boundaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { x, y, elements, refs, update, placement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        placement: position,
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                crossAxis: true,
                padding: 5,
                rootBoundary: "document"
            })
        ]
    });
    const horizontalOffset = placement.includes("right") ? offset : position.includes("left") ? offset * -1 : 0;
    const verticalOffset = placement.includes("bottom") ? offset : position.includes("top") ? offset * -1 : 0;
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ clientX, clientY })=>{
        refs.setPositionReference({
            getBoundingClientRect () {
                return {
                    width: 0,
                    height: 0,
                    x: clientX,
                    y: clientY,
                    left: clientX + horizontalOffset,
                    top: clientY + verticalOffset,
                    right: clientX,
                    bottom: clientY
                };
            }
        });
    }, [
        elements.reference
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (refs.floating.current) {
            const boundary = boundaryRef.current;
            boundary.addEventListener("mousemove", handleMouseMove);
            const parents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(refs.floating.current);
            parents.forEach((parent)=>{
                parent.addEventListener("scroll", update);
            });
            return ()=>{
                boundary.removeEventListener("mousemove", handleMouseMove);
                parents.forEach((parent)=>{
                    parent.removeEventListener("scroll", update);
                });
            };
        }
        return void 0;
    }, [
        elements.reference,
        refs.floating.current,
        update,
        handleMouseMove,
        opened
    ]);
    return {
        handleMouseMove,
        x,
        y,
        opened,
        setOpened,
        boundaryRef,
        floating: refs.setFloating
    };
}
;
 //# sourceMappingURL=use-floating-tooltip.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "tooltip": "m_1b3c8819",
    "arrow": "m_f898399f"
};
;
 //# sourceMappingURL=Tooltip.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipFloating",
    ()=>TooltipFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$style$2d$object$2f$get$2d$style$2d$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/get-style-object/get-style-object.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$use$2d$floating$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/use-floating-tooltip.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    refProp: "ref",
    withinPortal: true,
    offset: 10,
    defaultOpened: false,
    position: "right",
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("popover")
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color })=>({
        tooltip: {
            "--tooltip-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--tooltip-bg": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--tooltip-color": color ? "var(--mantine-color-white)" : void 0
        }
    }));
const TooltipFloating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("TooltipFloating", defaultProps, _props);
    const { children, refProp, withinPortal, style, className, classNames, styles, unstyled, radius, color, label, offset, position, multiline, zIndex, disabled, defaultOpened, variant, vars, portalProps, ...others } = props;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "TooltipFloating",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        rootSelector: "tooltip",
        vars,
        varsResolver
    });
    const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$use$2d$floating$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFloatingTooltip"])({
        offset,
        position,
        defaultOpened
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(children)) {
        throw new Error("[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");
    }
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(boundaryRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRefProp"])(children), ref);
    const _childrenProps = children.props;
    const onMouseEnter = (event)=>{
        _childrenProps.onMouseEnter?.(event);
        handleMouseMove(event);
        setOpened(true);
    };
    const onMouseLeave = (event)=>{
        _childrenProps.onMouseLeave?.(event);
        setOpened(false);
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalPortal"], {
                ...portalProps,
                withinPortal,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                    ...others,
                    ...getStyles("tooltip", {
                        style: {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$style$2d$object$2f$get$2d$style$2d$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleObject"])(style, theme),
                            zIndex,
                            display: !disabled && opened ? "block" : "none",
                            top: (y && Math.round(y)) ?? "",
                            left: (x && Math.round(x)) ?? ""
                        }
                    }),
                    variant,
                    ref: floating,
                    mod: {
                        multiline
                    },
                    children: label
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
                ..._childrenProps,
                [refProp]: targetRef,
                onMouseEnter,
                onMouseLeave
            })
        ]
    });
});
TooltipFloating.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
TooltipFloating.displayName = "@mantine/core/TooltipFloating";
;
 //# sourceMappingURL=TooltipFloating.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipGroupProvider",
    ()=>TooltipGroupProvider,
    "useTooltipGroupContext",
    ()=>useTooltipGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const TooltipGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
const TooltipGroupProvider = TooltipGroupContext.Provider;
const useTooltipGroupContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TooltipGroupContext);
;
 //# sourceMappingURL=TooltipGroup.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipGroup",
    ()=>TooltipGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    openDelay: 0,
    closeDelay: 0
};
function TooltipGroup(props) {
    const { openDelay, closeDelay, children } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("TooltipGroup", defaultProps, props);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipGroupProvider"], {
        value: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingDelayGroup"], {
            delay: {
                open: openDelay,
                close: closeDelay
            },
            children
        })
    });
}
TooltipGroup.displayName = "@mantine/core/TooltipGroup";
TooltipGroup.extend = (c)=>c;
;
 //# sourceMappingURL=TooltipGroup.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTooltip",
    ()=>useTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Floating$2f$use$2d$floating$2d$auto$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Floating/use-floating-auto-update.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.context.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function getDefaultMiddlewares(middlewares) {
    if (middlewares === void 0) {
        return {
            shift: true,
            flip: true
        };
    }
    const result = {
        ...middlewares
    };
    if (middlewares.shift === void 0) {
        result.shift = true;
    }
    if (middlewares.flip === void 0) {
        result.flip = true;
    }
    return result;
}
function getTooltipMiddlewares(settings) {
    const middlewaresOptions = getDefaultMiddlewares(settings.middlewares);
    const middlewares = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(settings.offset)
    ];
    if (middlewaresOptions.shift) {
        middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(typeof middlewaresOptions.shift === "boolean" ? {
            padding: 8
        } : {
            padding: 8,
            ...middlewaresOptions.shift
        }));
    }
    if (middlewaresOptions.flip) {
        middlewares.push(typeof middlewaresOptions.flip === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(middlewaresOptions.flip));
    }
    middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
        element: settings.arrowRef,
        padding: settings.arrowOffset
    }));
    if (middlewaresOptions.inline) {
        middlewares.push(typeof middlewaresOptions.inline === "boolean" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(middlewaresOptions.inline));
    } else if (settings.inline) {
        middlewares.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])());
    }
    return middlewares;
}
function useTooltip(settings) {
    const [uncontrolledOpened, setUncontrolledOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(settings.defaultOpened);
    const controlled = typeof settings.opened === "boolean";
    const opened = controlled ? settings.opened : uncontrolledOpened;
    const withinGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTooltipGroupContext"])();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((_opened)=>{
        setUncontrolledOpened(_opened);
        if (_opened) {
            setCurrentId(uid);
        }
    }, [
        uid
    ]);
    const { x, y, context, refs, update, placement, middlewareData: { arrow: { x: arrowX, y: arrowY } = {} } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        strategy: settings.strategy,
        placement: settings.position,
        open: opened,
        onOpenChange: onChange,
        middleware: getTooltipMiddlewares(settings)
    });
    const { delay: groupDelay, currentId, setCurrentId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDelayGroup"])(context, {
        id: uid
    });
    const { getReferenceProps, getFloatingProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInteractions"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useHover"])(context, {
            enabled: settings.events?.hover,
            delay: withinGroup ? groupDelay : {
                open: settings.openDelay,
                close: settings.closeDelay
            },
            mouseOnly: !settings.events?.touch
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFocus"])(context, {
            enabled: settings.events?.focus,
            visibleOnly: true
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRole"])(context, {
            role: "tooltip"
        }),
        // Cannot be used with controlled tooltip, page jumps
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDismiss"])(context, {
            enabled: typeof settings.opened === "undefined"
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Floating$2f$use$2d$floating$2d$auto$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFloatingAutoUpdate"])({
        opened,
        position: settings.position,
        positionDependencies: settings.positionDependencies,
        floating: {
            refs,
            update
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDidUpdate"])(()=>{
        settings.onPositionChange?.(placement);
    }, [
        placement
    ]);
    const isGroupPhase = opened && currentId && currentId !== uid;
    return {
        x,
        y,
        arrowX,
        arrowY,
        reference: refs.setReference,
        floating: refs.setFloating,
        getFloatingProps,
        getReferenceProps,
        isGroupPhase,
        opened,
        placement
    };
}
;
 //# sourceMappingURL=use-tooltip.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Floating$2f$get$2d$floating$2d$position$2f$get$2d$floating$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Floating/get-floating-position/get-floating-position.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Floating$2f$FloatingArrow$2f$FloatingArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$props$2f$get$2d$transition$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/get-transition-props/get-transition-props.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$TooltipFloating$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipFloating/TooltipFloating.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/TooltipGroup/TooltipGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$use$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/use-tooltip.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.module.css.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaultProps = {
    position: "top",
    refProp: "ref",
    withinPortal: true,
    inline: false,
    defaultOpened: false,
    arrowSize: 4,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    offset: 5,
    transitionProps: {
        duration: 100,
        transition: "fade"
    },
    events: {
        hover: true,
        focus: false,
        touch: false
    },
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("popover"),
    positionDependencies: [],
    middlewares: {
        flip: true,
        shift: true,
        inline: false
    }
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, { radius, color })=>({
        tooltip: {
            "--tooltip-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--tooltip-bg": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--tooltip-color": color ? "var(--mantine-color-white)" : void 0
        }
    }));
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Tooltip", defaultProps, _props);
    const { children, position, refProp, label, openDelay, closeDelay, onPositionChange, opened, defaultOpened, withinPortal, radius, color, classNames, styles, unstyled, style, className, withArrow, arrowSize, arrowOffset, arrowRadius, arrowPosition, offset, transitionProps, multiline, events, zIndex, disabled, positionDependencies, onClick, onMouseEnter, onMouseLeave, inline, variant, keepMounted, vars, portalProps, mod, floatingStrategy, middlewares, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProps"])("Tooltip", defaultProps, props);
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])();
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$use$2d$tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTooltip"])({
        position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Floating$2f$get$2d$floating$2d$position$2f$get$2d$floating$2d$position$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFloatingPosition"])(dir, position),
        closeDelay,
        openDelay,
        onPositionChange,
        opened,
        defaultOpened,
        events,
        arrowRef,
        arrowOffset,
        offset: typeof offset === "number" ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
        positionDependencies: [
            ...positionDependencies,
            children
        ],
        inline,
        strategy: floatingStrategy,
        middlewares
    });
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Tooltip",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        rootSelector: "tooltip",
        vars,
        varsResolver
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isElement"])(children)) {
        throw new Error("[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported");
    }
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergedRef"])(tooltip.reference, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$ref$2d$prop$2f$get$2d$ref$2d$prop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRefProp"])(children), ref);
    const transition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$props$2f$get$2d$transition$2d$props$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionProps"])(transitionProps, {
        duration: 100,
        transition: "fade"
    });
    const _childrenProps = children.props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalPortal"], {
                ...portalProps,
                withinPortal,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transition"], {
                    ...transition,
                    keepMounted,
                    mounted: !disabled && !!tooltip.opened,
                    duration: tooltip.isGroupPhase ? 10 : transition.duration,
                    children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                            ...others,
                            "data-fixed": floatingStrategy === "fixed" || void 0,
                            variant,
                            mod: [
                                {
                                    multiline
                                },
                                mod
                            ],
                            ...tooltip.getFloatingProps({
                                ref: tooltip.floating,
                                className: getStyles("tooltip").className,
                                style: {
                                    ...getStyles("tooltip").style,
                                    ...transitionStyles,
                                    zIndex,
                                    top: tooltip.y ?? 0,
                                    left: tooltip.x ?? 0
                                }
                            }),
                            children: [
                                label,
                                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Floating$2f$FloatingArrow$2f$FloatingArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingArrow"], {
                                    ref: arrowRef,
                                    arrowX: tooltip.arrowX,
                                    arrowY: tooltip.arrowY,
                                    visible: withArrow,
                                    position: tooltip.placement,
                                    arrowSize,
                                    arrowOffset,
                                    arrowRadius,
                                    arrowPosition,
                                    ...getStyles("arrow")
                                })
                            ]
                        })
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(children, tooltip.getReferenceProps({
                onClick,
                onMouseEnter,
                onMouseLeave,
                onMouseMove: props.onMouseMove,
                onPointerDown: props.onPointerDown,
                onPointerEnter: props.onPointerEnter,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, _childrenProps.className),
                ..._childrenProps,
                [refProp]: targetRef
            }))
        ]
    });
});
Tooltip.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$module$2e$css$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
Tooltip.displayName = "@mantine/core/Tooltip";
Tooltip.Floating = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipFloating$2f$TooltipFloating$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipFloating"];
Tooltip.Group = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$TooltipGroup$2f$TooltipGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipGroup"];
;
 //# sourceMappingURL=Tooltip.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/use-viewport-size/use-viewport-size.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewportSize",
    ()=>useViewportSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$window$2d$event$2f$use$2d$window$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const eventListerOptions = {
    passive: true
};
function useViewportSize() {
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const setSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setWindowSize({
            width: window.innerWidth || 0,
            height: window.innerHeight || 0
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$window$2d$event$2f$use$2d$window$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowEvent"])("resize", setSize, eventListerOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$window$2d$event$2f$use$2d$window$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowEvent"])("orientationchange", setSize, eventListerOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(setSize, []);
    return windowSize;
}
;
 //# sourceMappingURL=use-viewport-size.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconDots.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconDots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconDots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "dots", "IconDots", [
    [
        "path",
        {
            "d": "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-2"
        }
    ]
]);
;
 //# sourceMappingURL=IconDots.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconDots.mjs [app-ssr] (ecmascript) <export default as IconDots>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconDots",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDots$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDots$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconDots.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconColorFilter.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconColorFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconColorFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "color-filter", "IconColorFilter", [
    [
        "path",
        {
            "d": "M13.58 13.79c.27 .68 .42 1.43 .42 2.21c0 1.77 -.77 3.37 -2 4.46a5.93 5.93 0 0 1 -4 1.54c-3.31 0 -6 -2.69 -6 -6c0 -2.76 1.88 -5.1 4.42 -5.79",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M17.58 10.21c2.54 .69 4.42 3.03 4.42 5.79c0 3.31 -2.69 6 -6 6a5.93 5.93 0 0 1 -4 -1.54",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M12 8m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
            "key": "svg-2"
        }
    ]
]);
;
 //# sourceMappingURL=IconColorFilter.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconColorFilter.mjs [app-ssr] (ecmascript) <export default as IconColorFilter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconColorFilter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconColorFilter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconColorFilter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconColorFilter.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconCube.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconCube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconCube = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "cube", "IconCube", [
    [
        "path",
        {
            "d": "M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M12 22v-10",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M12 12l8.73 -5.04",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M3.27 6.96l8.73 5.04",
            "key": "svg-3"
        }
    ]
]);
;
 //# sourceMappingURL=IconCube.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconCube.mjs [app-ssr] (ecmascript) <export default as IconCube>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCube",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCube$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCube$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconCube.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconError404.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconError404
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconError404 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "error-404", "IconError404", [
    [
        "path",
        {
            "d": "M3 8v3a1 1 0 0 0 1 1h3",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M7 8v8",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M17 8v3a1 1 0 0 0 1 1h3",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M21 8v8",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0",
            "key": "svg-4"
        }
    ]
]);
;
 //# sourceMappingURL=IconError404.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconError404.mjs [app-ssr] (ecmascript) <export default as IconError404>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconError404",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconError404$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconError404$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconError404.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconFilter.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "filter", "IconFilter", [
    [
        "path",
        {
            "d": "M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z",
            "key": "svg-0"
        }
    ]
]);
;
 //# sourceMappingURL=IconFilter.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconFilter.mjs [app-ssr] (ecmascript) <export default as IconFilter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconFilter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFilter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFilter$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconFilter.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconGripVertical.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconGripVertical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconGripVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "grip-vertical", "IconGripVertical", [
    [
        "path",
        {
            "d": "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-4"
        }
    ],
    [
        "path",
        {
            "d": "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
            "key": "svg-5"
        }
    ]
]);
;
 //# sourceMappingURL=IconGripVertical.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconGripVertical.mjs [app-ssr] (ecmascript) <export default as IconGripVertical>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconGripVertical",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGripVertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconGripVertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconGripVertical.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconMoneybag.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconMoneybag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconMoneybag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "moneybag", "IconMoneybag", [
    [
        "path",
        {
            "d": "M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4",
            "key": "svg-1"
        }
    ]
]);
;
 //# sourceMappingURL=IconMoneybag.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconMoneybag.mjs [app-ssr] (ecmascript) <export default as IconMoneybag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMoneybag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoneybag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMoneybag$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconMoneybag.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconRuler.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconRuler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconRuler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "ruler", "IconRuler", [
    [
        "path",
        {
            "d": "M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M4 8l2 0",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M4 12l3 0",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M4 16l2 0",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M8 4l0 2",
            "key": "svg-4"
        }
    ],
    [
        "path",
        {
            "d": "M12 4l0 3",
            "key": "svg-5"
        }
    ],
    [
        "path",
        {
            "d": "M16 4l0 2",
            "key": "svg-6"
        }
    ]
]);
;
 //# sourceMappingURL=IconRuler.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconRuler.mjs [app-ssr] (ecmascript) <export default as IconRuler>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconRuler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRuler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRuler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconRuler.mjs [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconStar.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconStar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-ssr] (ecmascript)");
;
var IconStar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("outline", "star", "IconStar", [
    [
        "path",
        {
            "d": "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z",
            "key": "svg-0"
        }
    ]
]);
;
 //# sourceMappingURL=IconStar.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconStar.mjs [app-ssr] (ecmascript) <export default as IconStar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconStar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconStar.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=9e883_87514d9d._.js.map