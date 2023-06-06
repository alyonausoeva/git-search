import { ReactNode, MouseEvent } from 'react';

import { ButtonSize, ButtonStyle, ButtonType } from './Button';

export type IButtonProps = {
    children: ReactNode,
    className?: string,
    type?: ButtonType,
    size?: ButtonSize,
    style?: ButtonStyle,
    href?: string,
    onClick?: IHandleButton
}

export type IHandleButton = ((event: MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>) => void) | (() => void);
