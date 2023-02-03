/**
 * This file was generated from HandsOnTable.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface ColType {
    colName: string;
    colVal: ListAttributeValue<string | Big>;
}

export interface ColPreviewType {
    colName: string;
    colVal: string;
}

export interface HandsOnTableContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataMx: ListValue;
    col: ColType[];
    height: number;
    width: number;
    apiKey: string;
}

export interface HandsOnTablePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataMx: {} | { type: string } | null;
    col: ColPreviewType[];
    height: number | null;
    width: number | null;
    apiKey: string;
}
