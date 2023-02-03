import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <img src="https://s3.eu-central-1.amazonaws.com/mendixdemo.com/Screenshots/HandsOnTable.png" />;
}

export function getPreviewCss(): string {
    return require("./ui/HandsOnTable.css");
}
