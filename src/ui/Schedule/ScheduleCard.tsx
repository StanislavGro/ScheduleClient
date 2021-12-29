import React, {useState} from 'react'
import {Properties} from '../Properties'
import {ScheduleForm} from './ScheduleForm'
import {scheduleReq} from '../../api/entities/request/scheduleReq'
import './css/main.css'
import './css/scheduleCard.css'
import './css/scheduleForm.css'
import './css/schedulePage.css'
import {getAuditoryArr, getGroupArr} from "../../api/ScheduleApi";
import {groupResp} from "../../api/entities/response/groupResp";
import {auditoryResp} from "../../api/entities/response/auditoryResp";


interface Props {
    scheduleRequest: scheduleReq
    scheduleId: number
    deleteSchedule: (scheduleId: number) => void
    editSchedule: (scheduleId: number, newSchedule: scheduleReq) => void
}

export const ScheduleCard: React.FC<Props> = ({ scheduleRequest, scheduleId, deleteSchedule, editSchedule}) => {

    const [isEdit, setIsEdit] = useState(false)

    const onEdit = (newSchedule:scheduleReq) => {
        editSchedule(scheduleId, newSchedule)
        setIsEdit(false)
    }

    const onDelete = () => {
        if (scheduleRequest.day.day === '' || scheduleRequest.time.timeStart === ''|| scheduleRequest.time.timeEnd === ''
            || scheduleRequest.week === 0 || scheduleRequest.auditory.auditory === '' || scheduleRequest.group.group === '') return
        deleteSchedule(scheduleId)
    }

    return (
        <div className="card schedule-card">
            {isEdit ?
                <ScheduleForm scheduleRequest={scheduleRequest} onSubmit={onEdit} />
                :
                <div className="schedule-card__main">   
                    <Properties title="Номер недели:" value={scheduleRequest.week} />
                    <Properties title="День недели:" value={scheduleRequest.day.day} />
                    <Properties title="Время начала:" value={scheduleRequest.time.timeStart} />
                    <Properties title="Время окончания:" value={scheduleRequest.time.timeEnd} />
                    <Properties title="Группа:" value={scheduleRequest.group.group} />
                    <Properties title="Аудитория:" value={scheduleRequest.auditory.auditory} />
                </div>
            }
            <div className="schedule-card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Отмена' : 'Редактировать'}</button>
                <button className="button button_red" onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
}