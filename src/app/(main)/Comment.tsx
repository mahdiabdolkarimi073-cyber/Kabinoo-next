import {Avatar, Group, Paper, Rating, Text, TypographyStylesProvider} from '@mantine/core';
import classes from './CommentHtml.module.css';
import {comments} from "@/hard-code";
import { FullProduct } from '../(landing)/admin/products/type';

function Comment(props: FullProduct['comments'][number] & {avatar?: string}) {
    return (
        <Paper dir={'rtl'} withBorder radius="md" className={classes.comment+" h-44"}>
            <Group>
                <Avatar
                    src={props.avatar || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"}
                    alt={props.author}
                    radius="xl"
                />
                <div>
                    <Text fz="sm">{props.author}</Text>
                    <Rating value={props.rate} readOnly />
                </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
                <div
                    className={classes.content}>
                    {props.content}
                </div>
            </TypographyStylesProvider>
        </Paper>
    );
}

export default Comment;