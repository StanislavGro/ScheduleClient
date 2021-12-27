import {auditoryResp} from "./auditoryResp";

export interface scheduleResp {
    _id?: number
    day: string
    time: string
    week: number
    auditory: auditoryResp
    group: auditoryResp
}