import {
    URL_SCHEDULE, METHOD_PUT, api,
    METHOD_DELETE, METHOD_POST, URL_GET_POST_AUDITORY, URL_DELETE_PUT_AUDITORY, URL_GET_POST_GROUP, URL_DELETE_PUT_GROUP
}
    from "./base/Api"
import {auditoryReq} from "./entities/request/auditoryReq";
import {auditoryResp} from "./entities/response/auditoryResp";
import {groupResp} from "./entities/response/groupResp";
import {groupReq} from "./entities/request/groupReq";
import {scheduleResp} from "./entities/response/scheduleResp";
import {scheduleReq} from "./entities/request/scheduleReq";

export function getAuditoryArr(): Promise<Array<auditoryResp>> {
    return api<Array<auditoryResp>>(URL_GET_POST_AUDITORY())
}

export function addAuditory(auditory: auditoryReq): Promise<auditoryResp> {
    return api<auditoryResp>(URL_GET_POST_AUDITORY(), METHOD_POST(auditory) )
}

export function deleteGroup(groupId: number) {
    console.log("!!!! "+groupId)
    return api(URL_DELETE_PUT_GROUP(groupId), METHOD_DELETE())
}

export function getGroupArr(): Promise<Array<groupResp>> {
    return api<Array<groupResp>>(URL_GET_POST_GROUP())
}

export function addGroup(group: groupReq): Promise<groupResp> {
    return api<groupResp>(URL_GET_POST_GROUP(), METHOD_POST(group) )
}

export function deleteAuditory(auditoryId: number) {
    console.log("!!!! " + auditoryId)
    return api(URL_DELETE_PUT_AUDITORY(auditoryId), METHOD_DELETE())
}

export function getScheduleArr(): Promise<Array<scheduleResp>> {
    return api<Array<scheduleResp>>(URL_SCHEDULE())
}

export function addSchedule(schedule: scheduleReq): Promise<scheduleResp> {
    return api<scheduleResp>(URL_SCHEDULE(), METHOD_POST(schedule) )
}

export function updateAuditory(auditoryId: number, auditory: auditoryReq): Promise<auditoryResp> {
    return api<auditoryResp>(URL_DELETE_PUT_AUDITORY(auditoryId), METHOD_PUT(auditory))
}