import React, { useState } from 'react'
import { Properties } from '../Properties'
import {groupReq} from "../../api/entities/request/groupReq";

interface Props {
    groupRequest?: groupReq
    onSubmit: (groupReq_: groupReq) => void
}

export const GroupForm: React.FC<Props> = ({ groupRequest, onSubmit }) => {

    const [group, setGroupName] = useState(groupRequest?.group ?? '')

    const onClick = () => {
        console.log("1 " + group)
        if (group === '') return
        onSubmit({
            group,
        })
        setGroupName(groupRequest?.group ?? '')
        console.log("2 " + group)
    }

    return (
        <div className="schedule-form">
            <Properties title="Новая группа:" value={<input type="text" value={group} onChange={e => setGroupName(e.target.value)} />} />
            <button className="button button_green" onClick={onClick}>ОК</button>
        </div>
    )
}