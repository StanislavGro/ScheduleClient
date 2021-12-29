import React, {useState} from 'react'
import {Properties} from '../Properties'
import {GroupForm} from './GroupForm'
import {groupReq} from '../../api/entities/request/groupReq'
import '../Schedule/css/main.css'
import '../Schedule/css/scheduleCard.css'
import '../Schedule/css/scheduleForm.css'
import '../Schedule/css/schedulePage.css'


interface Props {
    groupRequest: groupReq
    groupId: number
    editGroup: (groupId: number ,newGroup: groupReq) => void
    deleteGroup: (groupId: number) => void
}

export const GroupCard: React.FC<Props> = ({ groupRequest, groupId, editGroup, deleteGroup }) => {

    const [isEdit, setIsEdit] = useState(false)

    const onEdit = (newGroup: groupReq) => {
        editGroup(groupId, newGroup)
        setIsEdit(false)
    }

    const onDelete = () => {
        if (groupRequest.group === '') return
        deleteGroup(groupId)
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