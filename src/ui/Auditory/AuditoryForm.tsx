import React, {useState} from 'react'
import {Properties} from '../Properties'
import {auditoryReq} from '../../api/entities/request/auditoryReq'

//в поле можно ничего не передавать, поэтому auditoryRequest?
interface Props {
    auditoryRequest?: auditoryReq
    onSubmit: (auditoryReq_: auditoryReq) => void
}

export const AuditoryForm: React.FC<Props> = ({ auditoryRequest, onSubmit }) => {

    const [auditory, setAuditoryName] = useState(auditoryRequest?.auditory ?? '')

    const onClick = () => {
        console.log("1 "+auditory)
        if (auditory === '') return
        onSubmit({
            auditory,
        })
        setAuditoryName(auditoryRequest?.auditory ?? '')
        console.log("2 "+auditory)
    }

    return (
        <div className="schedule-form">
            <Properties title="Новая аудитория:" value={<input type="text" value={auditory} onChange={e => setAuditoryName(e.target.value)} />} />
            <button className="button button_green" onClick={onClick}>OK</button>
        </div>
    )
}