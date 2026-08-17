'use client';
import Autoplay from 'embla-carousel-autoplay';
import '@mantine/carousel/styles.css';
import { Carousel  as C} from '@mantine/carousel';
import React, { ComponentProps, useRef } from 'react';

function Carousel(props: ComponentProps<typeof C> & { slidePerView?: number }) {
    const { children, slidePerView = 4, ...other } = props;
    const autoplay = useRef(Autoplay({ delay: 2500,stopOnInteraction: true  }));
    const percent = (n: number) => Math.floor(slidePerView / 100 * n)

    return (
        <div className={'relative'}>
            <C
                draggable
                plugins={[autoplay.current]}
                withControls
                withIndicators
                slideSize={{ base: '100%', sm: `${100 / percent(50)}%`, md: `${100 / percent(75)}%`, xl: `${100 / slidePerView}%` }}
                slideGap={{ base: "10%", sm: 'md', xl: 'lg' }}
                // @ts-ignore
                emblaOptions={{ align: 'start', dragFree: true, loop: true, }}
                {...other}>
                {children}
            </C>
        </div>
    );
}

export default Carousel;