import React, {useEffect, useState} from 'react'
import { Properties } from '../Properties'
import { AuditoryForm } from './AuditoryForm'
import {auditoryReq} from '../../api/entities/request/auditoryReq'
import '../Schedule/css/main.css'
import '../Schedule/css/scheduleCard.css'
import '../Schedule/css/scheduleForm.css'
import '../Schedule/css/schedulePage.css'
import {deleteAuditory, getAuditoryArr, updateAuditory} from "../../api/ScheduleApi";
import {auditoryResp} from "../../api/entities/response/auditoryResp";
import {AuditoryPage} from "../../ui/Auditory/AuditoryPage"
import {RefreshPage} from "../RefreshPage"

interface Props {
    auditoryRequest: auditoryReq
    auditoryId: number
    editParking: (auditoryId: number ,newAuditory: auditoryReq) => void
    deleteParking: (auditoryId: number) => void

}

export const AuditoryCard: React.FC<Props> = ({ auditoryRequest, auditoryId, editParking, deleteParking}) => {

    const [isEdit, setIsEdit] = useState(false)
    // const [auditoryRespArr, setAuditoryRespArr] = useState<auditoryResp[]>()

    // const refresh = () => {
    //     return getAuditoryArr()
    //         .then(res => setAuditoryRespArr(res))
    // }
    //
    // useEffect(() => {
    //     refresh()
    // },[])

    const onEdit = (newAuditory: auditoryReq) => {
        editParking(auditoryId,newAuditory)
        setIsEdit(false)
    }

    const onDelete = () => {
        if (auditoryRequest.auditory === '') return
        deleteParking(auditoryId)
    }

    // const onDelete = () => {
    //     console.log("Удаляем " + auditoryId)
    //     deleteAuditory(auditoryId).finally(() => refresh())
    // }

    return (
        <div className="card schedule-card">
            {isEdit ? <AuditoryForm auditoryRequest={auditoryRequest} onSubmit={onEdit} /> :
                <div className="schedule-card__main">
                    <Properties title="Аудитория:" value={auditoryRequest.auditory} />
                </div>
            }
            <div className="schedule-card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Отмена' : 'Редактировать'}</button>
                <button className="button button_red" onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
}
