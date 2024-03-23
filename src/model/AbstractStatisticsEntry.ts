import {BSMDataObject} from "./BSMDataObject.js";

export interface AbstractStatisticsEntry extends BSMDataObject {
    data: any;
    summaries: any;
}