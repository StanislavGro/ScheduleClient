import React, { useState } from 'react'
import { Properties } from '../Properties'
import {scheduleReq} from '../../api/entities/request/scheduleReq'
import {scheduleResp} from '../../api/entities/response/scheduleResp'

import './css/scheduleForm.css'
import {getGroupArr} from "../../api/ScheduleApi";
import {auditoryResp} from "../../api/entities/response/auditoryResp";
import {groupResp} from "../../api/entities/response/groupResp";

interface Props {
    scheduleRequest?: scheduleReq
    onSubmit: (scheduleReq_: scheduleReq) => void
}

export const ScheduleForm: React.FC<Props> = ({ scheduleRequest, onSubmit }) => {

    const [auditoryRespArr, setAuditoryRespArr] = useState<auditoryResp[]>()
    const [groupRespArr, setGroupRespArr] = useState<groupResp[]>()


    const [day, setDay] = useState(scheduleRequest?.day ?? '')
    const [time, setTime] = useState(scheduleRequest?.time ?? '')
    const [week, setWeek] = useState(scheduleRequest?.week ?? 0)
    const [auditory_, setAuditory] = useState(scheduleRequest?.auditory.auditory)
    const [group_, setGroup] = useState(scheduleRequest?.group.group)


    const onClick = () => {
        console.log("1 " + " " + day + " " + time + " " + group_ + " " + auditory_)
        if (day === '' || time === '' || week === 0 || auditory_ === '' || group_ === '') return
        onSubmit({
            day,
            time,
            week,
            auditory: {auditory: auditory_ ?? ''},
            group: { group: group_ ?? ''},
        })
        setDay('')
        setTime('')
        setWeek(0)
        setAuditory('')
        setGroup('')
        console.log("2 " + " " + day + " " + time + " " + group_ + " " + auditory_)
    }
    

    return (
        <div className="schedule-form">
            <Properties title="Номер недели:" >
                {/*    value={<input type="text" value={week} onChange={e => setWeek(Number.parseInt(e.target.value))} />}*/}
                <select defaultValue="defaultWeek" onChange={e => setWeek(Number.parseInt(e.target.value))}>
                    <option disabled value="defaultWeek">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                </select>
            </Properties>
            <Properties title="День недели:">
                {/*value={<input type="text" value={day} onChange={e => setDay(e.target.value)} />}*/}
                <select defaultValue="defaultDay" onChange={e => setDay(e.target.value)} >
                    <option disabled value="defaultDay">-</option>
                    <option value="Понедельник">Понедельник</option>
                    <option value="Вторник">Вторник</option>
                    <option value="Среда">Среда</option>
                    <option value="Четверг">Четверг</option>
                    <option value="Пятница">Пятница</option>
                    <option value="Суббота">Суббота</option>
                </select>
            </Properties>
            <Properties title="Промежуток времени:" >
                <select defaultValue="defaultTimePeriod" onChange={e => setTime(e.target.value)}>
                    <option disabled value="defaultTimePeriod">-</option>
                    <option value="8:30-10:00">8:30-10:00</option>
                    <option value="10:15-11:45">10:15-11:45</option>
                    <option value="12:00-13:30">12:00-13:30</option>
                    <option value="14:00-15:30">14:00-15:30</option>
                    <option value="15:45-17:15">15:45-17:15</option>
                    <option value="17:30-19:00">17:30-19:00</option>
                    <option value="19:15-20:45">19:15-20:45</option>
                </select>
            </Properties>
            <Properties title="Группа:">
                <select defaultValue="defaultGroup" onChange={e => setGroup(e.target.value)}>
                    <option disabled value="defaultGroup">-</option>
                    {
                        groupRespArr != undefined &&
                        groupRespArr.map(g =>
                            <option key={g.id} value={g.group}>
                                {
                                    g.group
                                }
                            </option>)
                    }
                </select>
            </Properties>
            <Properties title="Аудитория:" value={
                <select defaultValue="defaultAudtory" onChange={e => setAuditory(e.target.value)}>
                    <option disabled value="defaultAudtory">-</option>
                    {
                        auditoryRespArr != undefined &&
                        auditoryRespArr.map(a =>
                            <option key={a.id} value={a.auditory}>
                                {
                                    a.auditory
                                }
                            </option>)
                    }
                </select>
            } />
            <button className="button button_green" onClick={onClick}>OK</button>
        </div>
    )
}