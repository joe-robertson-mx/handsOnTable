import { ReactElement, createElement, useEffect, useState } from "react";
import { HotTable } from "@handsontable/react";
import { ColType } from "typings/HandsOnTableProps";
import { ListValue, ValueStatus } from "mendix";

export interface HandsOnTableComponentProps {
    col: ColType[];
    dataMx: ListValue;
    apiKey: string;
    height: number;
    width: number;
}

export function HandsOnTableComponent({
    col,
    dataMx,
    apiKey,
    width,
    height
}: HandsOnTableComponentProps): ReactElement {
    const [dataS, setDataS] = useState<any>([]);

    const buildSheetData = (): any[][] => {
        let nofOfRows: number;
        if (dataMx.items) {
            nofOfRows = dataMx.items.length;
        } else {
            nofOfRows = 0;
        }

        const data: any[][] = [];

        for (let i = 0; i < nofOfRows; i++) {
            if (i === 0) {
                data[i] = col.map(c => {
                    return c.colName;
                });
            } else {
                data[i] = col.map(c => {
                    return c.colVal.get(dataMx.items![i]).displayValue;
                });
            }
        }

        return data;
    };

    useEffect(() => {
        if (dataMx.status === ValueStatus.Available) {
            setDataS(buildSheetData());
        }
    }, [dataMx]);

    return <HotTable data={dataS} colHeaders rowHeaders mergeCells licenseKey={apiKey} width={width} height={height} />;
}
