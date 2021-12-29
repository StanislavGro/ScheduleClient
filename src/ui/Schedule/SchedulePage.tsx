import React, {useEffect, useState} from 'react';
import {ScheduleCard} from './ScheduleCard';
import {ScheduleForm} from './ScheduleForm';
import {scheduleResp} from '../../api/entities/response/scheduleResp'
import {scheduleReq} from '../../api/entities/request/scheduleReq'
import {addSchedule, deleteSchedule, getScheduleArr, updateSchedule} from "../../api/ScheduleApi";


export const SchedulePage: React.FC = () => {

    const [scheduleRespArr, setScheduleRespArr] = useState<scheduleResp[]>()
    const [addFormShow, setAddFormShow] = useState(false)

    const refresh = () => {
        return getScheduleArr()
            .then(res => setScheduleRespArr(res))
    }

    useEffect(() => {
        refresh()
    },[])

    const onAddSubmit = (schedule: scheduleReq) => {
        console.log("Добавление " + schedule.auditory)
        addSchedule(schedule).finally(()=>refresh())
        setAddFormShow(false)
    }

    const onEditSubmit = (scheduleId:number, newSchedule: scheduleReq) => {
        updateSchedule(scheduleId, newSchedule).finally(() => refresh())
    }

    const onDeleteSubmit = (scheduleId:number) => {
        deleteSchedule(scheduleId).finally(() => refresh())
    }

    return (
        <div className="schedule-page">
            <div className="card1">
                <button className="button1" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Отмена' : 'Добавить новую запись'}`}</button>
                {addFormShow &&
                    <ScheduleForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {
                    scheduleRespArr != undefined &&
                    scheduleRespArr.map(schedule => <ScheduleCard key={schedule.id} scheduleId={schedule.id} scheduleRequest={schedule} deleteSchedule={onDeleteSubmit} editSchedule={onEditSubmit}/>)
                }
            </div>
        </div>
    )
}