import React, { ReactElement } from "react";
import * as RM from "react-modifier";
import { createModuleStylesConverter } from "get-module-style";
import * as styles from "./__oname__.module.scss";

export interface __cname__Theme extends RM.IModifiableTheme {
    
}

export interface __cname__Props extends RM.IModifiableProps<__cname__Theme> {

}

export class C extends RM.ModifiableComponent<__cname__Theme, __cname__Props> {
    gs: (classNames: string) => string;

    constructor(props: __cname__Props) {
        super(props);
        this.gs = createModuleStylesConverter(styles);
    }
    
    renderThemed(): ReactElement {
        return (
            <div className={this.gs("__pname__")}>
                
            </div>
        );
    }
}

export const def__cname__Theme: __cname__Theme = {
    head: RM.createMod()
}