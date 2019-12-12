import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseCSSEditor from "./editor";
import CSSEditorStyles, { CSSEditorClassNameContract } from "./editor.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const CSSEditor = manageJss(CSSEditorStyles)(BaseCSSEditor);
type CSSEditor = InstanceType<typeof CSSEditor>;

export { CSSEditor };
export * from "./position";
export * from "./spacing";
export * from "./height";
export * from "./width";
export * from "./color";
export * from "./background";