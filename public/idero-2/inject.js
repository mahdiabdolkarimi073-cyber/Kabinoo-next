function Throw(...args) {
    console.error(...args)
    throw({
        message: args[0],
        full: args
    });
}
const dataKey = 'InitObject';

function saveInitObject(TargetObject) {
    const pre = getSavedObject();
    const serialized = JSON.stringify(TargetObject);
    window.localStorage.setItem(dataKey, serialized);
    window.postMessage({
        type: "SAVE_INIT_OBJECT",
        data: TargetObject
    })
}

function getSavedObject() {
    const str = localStorage.getItem(dataKey);
    if (!str) return {};
    try {
        return JSON.parse(str);
    } catch {
        return {};
    }
}

function loadInitObject() {
    const AllData = getSavedObject();
    if (!Object.keys(AllData).length) return false;
    const targetData = AllData;
    return updateInitObject(targetData);
}
function updateInitObject(targetData) {
    if (!targetData) return false;

    for (let [key, value] of Object.entries(targetData)) {
        window.InitObject[key] = value;
    }

    return true;
}