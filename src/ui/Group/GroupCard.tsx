import React, {useEffect, useState} from 'react'
import { Properties } from '../Properties'
import { GroupForm } from './GroupForm'
import {groupReq} from '../../api/entities/request/groupReq'
import './../Schedule/main.css'
import './../Schedule/scheduleCard.css'
import './../Schedule/scheduleForm.css'
import './../Schedule/schedulePage.css'
import {deleteAuditory, deleteGroup, getGroupArr} from "../../api/ScheduleApi";
import {groupResp} from "../../api/entities/response/groupResp";
import {auditoryReq} from "../../api/entities/request/auditoryReq";
import {auditoryResp} from "../../api/entities/response/auditoryResp";


interface Props {
    groupRequest: groupReq
    groupId: number
    groupReqArr: ( g: groupReq) => void}

export const GroupCard: React.FC<Props> = ({ groupRequest, groupId, groupReqArr }) => {

    const [isEdit, setIsEdit] = useState(false)
    const [groupRespArr, setGroupRespArr] = useState<groupResp[]>()

    const refresh = () => {
        return getGroupArr()
            .then(res => setGroupRespArr(res))
    }

    useEffect(() => {
        refresh()
    },[])

    const onEdit = (newGroup: groupReq) => {
        console.log("Редактируем" + groupRequest)
        // GroupCollection.update(group._id ?? new Mongo.ObjectID(''), newGroup)
        setIsEdit(false)
    }

    const onDelete = () => {
        console.log("Удаляем из группы " + groupId)
        deleteGroup(groupId).finally(() => refresh())
    }

    return (
        <div className="card schedule-card">
            {isEdit ? <GroupForm groupRequest={groupRequest} onSubmit={onEdit} />:
                <div className="schedule-card__main">
                    <Properties title="Группа:" value={groupRequest.group} />
                </div>
            }
            <div className="schedule-card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Отмена' : 'Редактировать'}</button>
                <button className="button button_red" onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
}