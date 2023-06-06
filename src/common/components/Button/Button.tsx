import React from 'react';

import { block, classNames } from 'common/utils/classNames';

import { IButtonProps } from './types';
import './Button.less';

const cnButton = block('button');

export enum ButtonType {
    link = 'link',
    invisible = 'invisible'
}

export enum ButtonSize {
    s= 's',
    m = 'm',
    l = 'l'
}

export enum ButtonStyle {
    secondary = 'secondary',
}

export const Button = ({ children, className, type, size = ButtonSize.m, style, href, onClick }: IButtonProps) => {
  const buttonClassName = classNames(className, cnButton({ type, size, style }));

  switch (type) {
    case ButtonType.link:
      return (
        <a
          className={buttonClassName}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    case ButtonType.invisible:
    default:
      return (
        <button className={buttonClassName} type="button" onClick={onClick}>
          <span className={cnButton('wrapper')}>{children}</span>
        </button>
      );
  }
};
