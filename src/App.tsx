import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router"
import { Header } from './ui/Header'
import { AuditoryPage } from './ui/Auditory/AuditoryPage'
import { GroupPage } from './ui/Group/GroupPage'




export const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Header/>

        <div className="container">
          <Routes>
            <Route path="/AuditoryReq" element={<AuditoryPage />} />
            <Route path="/GroupReq" element={<GroupPage />} />
            <Route path="/AuditoryReq" element={<GroupPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}
