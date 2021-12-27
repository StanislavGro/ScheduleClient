import React, { useState } from 'react'
import { Properties } from '../Properties'
import { AuditoryForm } from './AuditoryForm'
import {auditoryReq} from '../../api/entities/request/auditoryReq'
import './../Schedule/schedule.css'
import './../Schedule/scheduleCard.css'
import './../Schedule/scheduleForm.css'
import './../Schedule/schedulePage.css'

interface Props {
    auditoryRequest: auditoryReq
    auditoryReqArr: ( a: auditoryReq) => void
}

export const AuditoryCard: React.FC<Props> = ({ auditoryRequest, auditoryReqArr }) => {

    // const schedulesFromDB = useTracker(() => ScheduleCollection.find({}).fetch())

    const [isEdit, setIsEdit] = useState(false)

    const onEdit = (newAuditory: auditoryReq) => {
        console.log("Редактируем" + auditoryRequest)
        // AuditoryCollection.update(auditory._id ?? new Mongo.ObjectID(''), newAuditory)
        setIsEdit(false)
    }

    const onDelete = () => {
        console.log("Удаляем" + auditoryRequest)

        // schedulesFromDB.forEach(sch => {
        //     if (sch.auditory._id.equals(auditory._id ?? new Mongo.ObjectID('')))
        //         ScheduleCollection.remove(sch._id ?? new Mongo.ObjectID(''));
        // })
        //
        // AuditoryCollection.remove(auditory._id ?? new Mongo.ObjectID(''))
    }

    return (
        <div className="card schedule-card">
            {isEdit ? <AuditoryForm auditoryRequest={auditoryRequest} onSubmit={onEdit} /> :
                <div className="schedule-card__main">
                    <Properties title="Аудитория:" value={auditoryRequest.auditory} />
                </div>
            }
            <div className="schedule-card__controls">
                <button className="button" onClick={() => setIsEdit(!isEdit)}>{isEdit ? 'Отмена' : 'Редактировать'}</button>
                <button className="button button_red" onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
}
