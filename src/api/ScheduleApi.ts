import {
    URL_SCHEDULE, METHOD_PUT, api,
    METHOD_DELETE, METHOD_POST, URL_GET_POST_AUDITORY, URL_DELETE_PUT_AUDITORY
}
    from "./base/Api"
import {auditoryReq} from "./entities/request/auditoryReq";
import {auditoryResp} from "./entities/response/auditoryResp";

export function getAuditoryArr(): Promise<Array<auditoryResp>> {
    return api<Array<auditoryResp>>(URL_GET_POST_AUDITORY())
}

export function addAuditory(auditory: auditoryReq): Promise<auditoryResp> {
    return api<auditoryResp>(URL_GET_POST_AUDITORY(), METHOD_POST(auditory) )
}

export function deleteParking(parkingId: number) {
    return api(URL_DELETE_PUT_AUDITORY(parkingId), METHOD_DELETE())
}