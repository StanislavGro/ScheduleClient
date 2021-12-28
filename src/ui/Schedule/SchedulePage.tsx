import React, {useEffect, useState} from 'react';
import {ScheduleCard} from './ScheduleCard';
import {ScheduleForm} from './ScheduleForm';
import {ScheduleFormFindOne} from './ScheduleFormFindOne';
import {ScheduleFormFindTwo} from './ScheduleFormFindTwo';
import {scheduleResp} from '../../api/entities/response/scheduleResp'
import {scheduleReq} from '../../api/entities/request/scheduleReq'
import {addSchedule, getAuditoryArr, getScheduleArr} from "../../api/ScheduleApi";


export const SchedulePage: React.FC = () => {

    const [scheduleRespArr, setScheduleRespArr] = useState<scheduleResp[]>()
    const [addFormShow, setAddFormShow] = useState(false)
    const [findFormShow, setFindFormShow] = useState(false)
    const [findFormShow2, setFindFormShow2] = useState(false)


    const [search, setSearch] = useState<{ [key: string]: any }>({})

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

    const onFindSubmit = (time: string) => {
        setSearch(sch => ({ ...sch, time: new RegExp(`${time}`) }))
    }

    const onFindSubmit2 = (week: number) => {
        if (week == 0)
            setSearch(finding => ({ ...finding, week: { $gte: 1, $lte: 18 } }))
        else
            setSearch(sch => ({ ...sch, week: week }))

    }

    return (
        <div className="schedule-page">
            <div className="card1">
                <button className="button1" onClick={() => setAddFormShow(!addFormShow)}>{`${addFormShow ? 'Отмена' : 'Добавить новую запись'}`}</button>
                {addFormShow &&
                    <ScheduleForm onSubmit={onAddSubmit} />
                }
            </div>
            {/*<div className="card2">*/}
            {/*    <button className="button2" onClick={() => {*/}
            {/*        if (findFormShow)*/}
            {/*            onFindSubmit('')*/}
            {/*        setFindFormShow(!findFormShow)*/}
            {/*    }}>{`${findFormShow ? 'Отмена' : 'Поиск по всему семестру'}`}</button>*/}
            {/*    {findFormShow &&*/}
            {/*        <ScheduleFormFindOne onSubmit={onFindSubmit} />*/}
            {/*    }*/}
            {/*</div>*/}
            {/*<div className="card3">*/}
            {/*    <button className="button3" onClick={() => {*/}
            {/*        if (findFormShow2)*/}
            {/*            onFindSubmit2(0)*/}
            {/*        setFindFormShow2(!findFormShow2)*/}
            {/*    }}>{`${findFormShow2 ? 'Отмена' : 'Поиск по недели'}`}</button>*/}
            {/*    {findFormShow2 &&*/}
            {/*        <ScheduleFormFindTwo onSubmit={onFindSubmit2} />*/}
            {/*    }*/}
            {/*</div>*/}
            <div>
                {
                    scheduleRespArr != undefined &&
                    scheduleRespArr.map(schedule => <ScheduleCard key={schedule.id} scheduleReqArr={s => getScheduleArr().finally(() => refresh())} scheduleId={schedule.id} scheduleRequest={schedule} />)
                }
            </div>
        </div>
    )
}