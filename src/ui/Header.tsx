import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header: React.FC = () => {

    return (
        <div className="header-outer">
            <div className="header container">
                <div className="header__links">
                    <Link className="header__link" to="/ScheduleReq">Расписание</Link>
                    <Link className="header__link" to="/AuditoryReq">Аудитории</Link>
                    <Link className="header__link" to="/GroupReq">Группы</Link>
                </div>
            </div>
        </div>
    )
}