import React from "react";
import * as RM from "react-modifier";
import { createModuleStylesConverter } from "get-module-style";
import * as styles from "./__oname__.module.scss";

export const __cname__ = () => {
    const gs = createModuleStylesConverter(styles);

    return (
        <div className={gs('__pname__')}>
            
        </div>
    );
}