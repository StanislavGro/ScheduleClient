import React, {useEffect, useState} from 'react'
import {Properties} from '../Properties'
import {ScheduleForm} from './ScheduleForm'
import {scheduleReq} from '../../api/entities/request/scheduleReq'
import './css/main.css'
import './css/scheduleCard.css'
import './css/scheduleForm.css'
import './css/schedulePage.css'
import {getScheduleArr} from "../../api/ScheduleApi";
import {scheduleResp} from "../../api/entities/response/scheduleResp";


interface Props {
    scheduleRequest: scheduleReq
    scheduleId: number
    scheduleReqArr: ( s: scheduleReq) => void
}

export const ScheduleCard: React.FC<Props> = ({ scheduleRequest, scheduleId, scheduleReqArr}) => {

    console.log("Стелишь бро! "+scheduleRequest.day.day)

    const [isEdit, setIsEdit] = useState(false)
    const [scheduleRespArr, setScheduleRespArr] = useState<scheduleResp[]>()

    const refresh = () => {
        return getScheduleArr()
            .then(res => setScheduleRespArr(res))
    }

    useEffect(() => {
        refresh()
    },[])

    const onEdit = (newSchedule: scheduleReq) => {
        console.log("Редактируем" + scheduleRequest)
        setIsEdit(false)
    }

    const onDelete = () => {
        console.log("Удаляем " + scheduleId)
        // delete(scheduleId).finally(() => refresh())
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