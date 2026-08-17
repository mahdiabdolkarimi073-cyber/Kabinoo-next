import { Button, Image, Text, TextInput, Title } from '@mantine/core';

import classes from './EmailBanner.module.css';
import {ReactNode} from "react";

export default function TextCard(props:Partial<{
    title: string,
    subtitle: string,
    description: string,
    image: string,
    footer: ReactNode,
    reverse: boolean
}>) {
    return (
        <div className={classes.wrapper+` gap-3 ${props.reverse && "flex-row-reverse block! md:flex!"}`}>
            <div className={classes.body+" w-full! pr-0! md:pr-28!"}>
                <Title className={classes.title+" moraba font-semibold! text-xl! lg:text-4xl!"}>{props?.title}</Title>
                <Text fw={500} fz="lg" mb={5}>
                    {props.subtitle}
                </Text>
                <Text fz="sm" c="dimmed">
                    {props.description}
                </Text>
                {props?.footer}
            </div>
            <Image src={props?.image || "/design/image1.png"} className={classes.image+" rounded-4xl! object-contain! hidden! md:block!"} />
        </div>
    );
}