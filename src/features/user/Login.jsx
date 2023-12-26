import React from 'react'
import { useFormik } from 'formik'
import { useLazyAuthenticateQuery } from '../../services/userapi'
import { useNavigate } from 'react-router-dom'
function Login() {
   var [loginFn] =useLazyAuthenticateQuery()
   var navigate=useNavigate();
    var loginForm=useFormik({
        initialValues:{
            username:"",
            password:'',
           
        },
        onSubmit:(values)=>{
           loginFn(values).then((res)=>{
            window.localStorage.setItem("user",JSON.stringify(res.data))
            if(res.data.length===0){
                alert("Check your details")
            }
            else {
                navigate("/dashboard")
            }
            //alert(JSON.stringify(res))
           })
        }
    })
  return (
    <div>
    <h1>login</h1>
    <form onSubmit={loginForm.handleSubmit}>
        User Name: <input type="text" name="username" onChange={loginForm.handleChange}/> 
        <br />
        Password: <input type="text" name="password" onChange={loginForm.handleChange} />
        <br />
        <button>Login</button>
    </form>
    </div>
  )
}

export default Login