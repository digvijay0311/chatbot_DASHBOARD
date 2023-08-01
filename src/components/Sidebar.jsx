import React from 'react'
import './sidebar.scss'
import {useNavigate} from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate();
  return (
          <div className="sidebar">
            <div className="sidebar-content">
              <li onClick={()=>navigate('/dashboard')}>Dashboard</li>
              <li onClick={()=>navigate('/departmentManagement')}>Department Management</li>
              <li onClick={()=>navigate('/manageBot')}>Manage Bot</li>
              <li onClick={()=>navigate('/helpQueryManagement')}>Help & Queries Management</li>
              <li onClick={()=>navigate('/queryTypeManagement')}>Query Type Management</li>
            </div>
          </div>
  )
}
