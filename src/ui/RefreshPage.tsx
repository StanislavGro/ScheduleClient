import React, {useEffect, useState} from "react";
import {deleteAuditory, getAuditoryArr} from "../api/ScheduleApi";
import {auditoryResp} from "../api/entities/response/auditoryResp";
import {AuditoryCard} from "./Auditory/AuditoryCard";
import {auditoryReq} from "../api/entities/request/auditoryReq";

export const RefreshPage = (auditoryRequest?:auditoryReq) => {

    const [auditoryRespArr, setAuditoryRespArr] = useState<auditoryResp[]>()
    const [addFormShow, setAddFormShow] = useState(false)

    const refresh = () => {
        return getAuditoryArr()
            .then(res => setAuditoryRespArr(res))
    }

    useEffect(() => {
        refresh()
    },[])

    return({refresh} &&
        auditoryRespArr)
}
