import React, {useEffect, useState} from 'react'
import {Properties} from '../Properties'
import {scheduleReq} from '../../api/entities/request/scheduleReq'
import './css/scheduleForm.css'
import {auditoryResp} from "../../api/entities/response/auditoryResp";
import {groupResp} from "../../api/entities/response/groupResp";
import {getAuditoryArr, getGroupArr} from "../../api/ScheduleApi";
import {auditoryReq} from "../../api/entities/request/auditoryReq";

interface Props {
    scheduleRequest?: scheduleReq
    onSubmit: (scheduleReq_: scheduleReq) => void
}

export const ScheduleForm: React.FC<Props> = ({ scheduleRequest, onSubmit }) => {

    const [auditoryRespArr, setAuditoryRespArr] = useState<auditoryResp[]>()
    const [groupRespArr, setGroupRespArr] = useState<groupResp[]>()


    const [day, setDay] = useState(scheduleRequest?.day.day ?? '')
    const [timeStart, setTimeStart] = useState(scheduleRequest?.time.timeStart ?? '')
    const [timeEnd, setTimeEnd] = useState(scheduleRequest?.time.timeEnd ?? '')
    const [week, setWeek] = useState(scheduleRequest?.week ?? 0)
    const [auditory_, setAuditory] = useState(scheduleRequest?.auditory.auditory ?? '')
    const [group_, setGroup] = useState(scheduleRequest?.group.group ?? '')


    const onClick = () => {
        console.log("1 " + " " + day + " " + timeStart + " " + timeEnd + " " + group_ + " " + auditory_)

        if (day === '' || timeStart === ''|| timeEnd === '' || week === 0 || auditory_ === '' || group_ === '') return
        onSubmit({
            day: { day:day},
            time: {timeStart: timeStart, timeEnd: timeEnd},
            week: week,
            auditory: {auditory: auditory_ ?? ''},
            group: { group: group_ ?? ''},
        })
        console.log("2 " + " " + day + " " + timeStart + " " + timeEnd + " " + group_ + " " + auditory_)
    }

    useEffect(() => {
        getGroupArr().then(res => setGroupRespArr(res))
        getAuditoryArr().then(res => setAuditoryRespArr(res))
    },[])

    return (
        <div className="schedule-form">
            <Properties title="?????????? ????????????:" >
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
            <Properties title="???????? ????????????:">
                <select defaultValue="defaultDay" onChange={e => setDay(e.target.value)} >
                    <option disabled value="defaultDay">-</option>
                    <option value="??????????????????????">??????????????????????</option>
                    <option value="??????????????">??????????????</option>
                    <option value="??????????">??????????</option>
                    <option value="??????????????">??????????????</option>
                    <option value="??????????????">??????????????</option>
                    <option value="??????????????">??????????????</option>
                </select>
            </Properties>
            <Properties title="?????????? ????????????:" >
                <select defaultValue="defaultTimePeriod" onChange={e => setTimeStart(e.target.value)}>
                    <option disabled value="defaultTimePeriod">-</option>
                    <option value="8:30">8:30</option>
                    <option value="10:15">10:15</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:45">15:45</option>
                    <option value="17:30">17:30</option>
                    <option value="19:15">19:15</option>
                </select>
            </Properties>
            <Properties title="?????????? ??????????????????:" >
                <select defaultValue="defaultTimePeriod" onChange={e => setTimeEnd(e.target.value)}>
                    <option disabled value="defaultTimePeriod">-</option>
                    <option value="10:00">10:00</option>
                    <option value="11:45">11:45</option>
                    <option value="13:30">13:30</option>
                    <option value="15:30">15:30</option>
                    <option value="17:15">17:15</option>
                    <option value="19:00">19:00</option>
                    <option value="20:45">20:45</option>
                </select>
            </Properties>
            <Properties title="????????????:">
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
            <Properties title="??????????????????:" value={
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