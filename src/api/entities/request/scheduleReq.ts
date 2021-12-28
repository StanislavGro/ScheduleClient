import {auditoryReq} from "./auditoryReq";
import {groupReq} from "./groupReq";
import {DayReq} from "./DayReq";
import {TimeReq} from "./TimeReq";

export interface scheduleReq {
    day: DayReq
    time: TimeReq
    week: number
    auditory: auditoryReq
    group: groupReq
}