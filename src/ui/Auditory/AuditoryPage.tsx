import React, {useEffect, useState} from 'react';
import { AuditoryCard } from './AuditoryCard';
import { AuditoryForm } from './AuditoryForm';
import {auditoryReq} from '../../api/entities/request/auditoryReq'
import {auditoryResp} from '../../api/entities/response/auditoryResp'
import {addAuditory, getAuditoryArr} from "../../api/ScheduleApi";

export const AuditoryPage: React.FC = () => {
    // const auditories = useTracker(() => AuditoryCollection.find({}, { sort: { name: 1 } }).fetch())

    const [auditoryRespArr, setAuditoryRespArr] = useState<auditoryResp[]>()
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (auditory: auditoryReq) => {
        console.log("Добавление " + " " + auditory.auditory)
        addAuditory(auditory).finally(()=>refresh())
        setAddFormShow(false)
    }

    const refresh = () => {
        return getAuditoryArr()
            .then(res => setAuditoryRespArr(res))
    }

    useEffect(() => {
        refresh()
    },[])

    return (
        <div className="schedule-page">
            <div className="card1">
                <button className="button1" onClick={() => setAddFormShow(!addFormShow)}>
                    {`${addFormShow ? 'Отмена' : 'Добавить новую аудиторию'}`}
                </button>
                {addFormShow &&
                    <AuditoryForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {
                    auditoryRespArr != undefined &&
                    auditoryRespArr.map(audit => <AuditoryCard key={audit.id} auditoryRequest={audit} auditoryReqArr={a => getAuditoryArr().finally(() => refresh())} />)
                }
            </div>
        </div>
    )
}