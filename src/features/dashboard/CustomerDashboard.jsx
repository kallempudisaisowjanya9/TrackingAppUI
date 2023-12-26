import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function CustomerDashboard() {
  var navigate=useNavigate()
  return (
    <div>
        <h1>CustomerDashboard</h1>
        <Link to="listTicket">List of Tickets</Link>
        <button onClick={()=>{navigate("addticket")}}>Raise Ticket</button>
        <Outlet></Outlet>
    </div>
  )
}

export default CustomerDashboard