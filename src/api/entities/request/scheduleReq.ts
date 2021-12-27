import {auditoryReq} from "./auditoryReq";
import {groupReq} from "./groupReq";

export interface scheduleReq {
    day: string
    time: string
    week: number
    auditory: auditoryReq
    group: groupReq
}