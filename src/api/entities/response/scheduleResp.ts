import {auditoryResp} from "./auditoryResp";
import {groupResp} from "./groupResp";
import {DayResp} from "./DayResp";
import {TimeResp} from "./TimeResp";

export interface scheduleResp {
    id: number
    day: DayResp
    time: TimeResp
    week: number
    auditory: auditoryResp
    group: groupResp
}