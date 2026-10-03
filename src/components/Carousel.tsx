'use client';
import Autoplay from 'embla-carousel-autoplay';
import '@mantine/carousel/styles.css';
import { Carousel as C } from '@mantine/carousel';
import React, { ComponentProps, useRef } from 'react';

function Carousel(props: ComponentProps<typeof C> & { slidePerView?: number }) {
    const { children, slidePerView = 4, ...other } = props;
    const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

    return (
        <div className={'relative'}>
            <C
                draggable
                plugins={[autoplay.current]}
                withControls
                withIndicators
                slideSize={{ base: '85%', sm: '45%', md: `${100 / Math.min(slidePerView, 3)}%`, xl: `${100 / slidePerView}%` }}
                slideGap={{ base: 'sm', sm: 'md', xl: 'lg' }}
                align="start"
                loop
                {...other}>
                {children}
            </C>
        </div>
    );
}

export default Carousel;
