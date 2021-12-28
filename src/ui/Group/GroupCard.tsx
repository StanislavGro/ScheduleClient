import React, {useEffect, useState} from 'react'
import {Properties} from '../Properties'
import {GroupForm} from './GroupForm'
import {groupReq} from '../../api/entities/request/groupReq'
import '../Schedule/css/main.css'
import '../Schedule/css/scheduleCard.css'
import '../Schedule/css/scheduleForm.css'
import '../Schedule/css/schedulePage.css'
import {deleteGroup, getGroupArr, updateGroup} from "../../api/ScheduleApi";
import {groupResp} from "../../api/entities/response/groupResp";


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
        console.log("Редактируем " + groupRequest.group)
        console.log("Редактируем " + newGroup.group)
        console.log("Редактируем " + groupId)
        updateGroup(groupId, newGroup).finally(() => refresh())
        setIsEdit(false)
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