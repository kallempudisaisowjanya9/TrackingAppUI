import React from 'react'
import {  useFormik } from 'formik'
import { useAddTicketMutation } from '../../services/ticketapi'
import { Navigate, useNavigate } from 'react-router-dom';
function AddTicket() {
    var navigate=useNavigate()
  var [addTktFn]=useAddTicketMutation();
    var ticketForm=useFormik({
        initialValues:{
            issue:'',
            productName:'',
            image:'',
            date:Date.now(),
            customerId: JSON.parse( window.localStorage.getItem('user'))[0].id
        },
        onSubmit:(values)=>{
            addTktFn(values).then((res)=>{
                alert(JSON.stringify(res))
                navigate("/dashboard/listTicket")
            })
            .catch((err)=>{
                alert(JSON.stringify(err))
              
            })
        }
    })
  return (
    <div>
        <h1>AddTicket</h1>
        <form onSubmit={ticketForm.handleSubmit}>
            Issue: <textarea name='issue' onChange={ticketForm.handleChange}></textarea>
            <br />
            Product Name: <input type="text" name='productName'  onChange={ticketForm.handleChange}/>
            <br />
            <button>Raise Ticket</button>
        </form>
    </div>
  )
}

export default AddTicket