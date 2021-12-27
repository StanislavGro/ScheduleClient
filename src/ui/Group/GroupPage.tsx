import React, {useEffect, useState} from 'react';
import { GroupCard } from './GroupCard';
import { GroupForm } from './GroupForm';
import {groupReq} from '../../api/entities/request/groupReq'
import {groupResp} from '../../api/entities/response/groupResp'
import {addAuditory, addGroup, getAuditoryArr, getGroupArr} from "../../api/ScheduleApi";
import {auditoryResp} from "../../api/entities/response/auditoryResp";
import {AuditoryCard} from "../Auditory/AuditoryCard";

export const GroupPage: React.FC = () => {

    const [groupRespArr, setGroupRespArr] = useState<groupResp[]>()
    const [addFormShow, setAddFormShow] = useState(false)

    const onAddSubmit = (group: groupReq) => {
        console.log("Добавление " + " " + group.group)
        addGroup(group).finally(()=>refresh())
        setAddFormShow(false)
    }

    const refresh = () => {
        return getGroupArr()
            .then(res => setGroupRespArr(res))
    }

    useEffect(() => {
        refresh()
    },[])

    return (
        <div className="schedule-page">
            <div className="card1">
                <button className="button1" onClick={() => setAddFormShow(!addFormShow)}>
                    {`${addFormShow ? 'Отмена действия' : 'Добавить новую группу'}`}
                </button>
                {addFormShow &&
                    <GroupForm onSubmit={onAddSubmit} />
                }
            </div>
            <div>
                {
                    groupRespArr != undefined &&
                    groupRespArr.map(gro => <GroupCard key={gro.id} groupRequest={gro} groupId = {gro.id} groupReqArr={a => getGroupArr().finally(() => refresh())} />)
                }
            </div>
        </div>
    )
}