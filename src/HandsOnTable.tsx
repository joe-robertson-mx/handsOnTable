import { ReactElement, createElement } from "react";
import { HandsOnTableComponent } from "./components/HandsOnTableComponent";

import { HandsOnTableContainerProps } from "../typings/HandsOnTableProps";

import "./ui/HandsOnTable.css";

export function HandsOnTable({ dataMx, col, apiKey, height, width }: HandsOnTableContainerProps): ReactElement {
    return <HandsOnTableComponent dataMx={dataMx} col={col} width={width} height={height} apiKey={apiKey} />;
}
