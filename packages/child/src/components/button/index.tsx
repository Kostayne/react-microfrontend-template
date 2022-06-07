import React from "react";
import { ButtonProps } from 'shared/types/button';
import { createModuleStylesConverter } from 'get-module-style';
import styles from './button.module.scss';

export const Button = (props: ButtonProps) => {
    const gs = createModuleStylesConverter(styles);

    const onClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <button onClick={onClick} className={gs('button')}>{props.children || 'click me'}</button>
    );
};

export default Button;