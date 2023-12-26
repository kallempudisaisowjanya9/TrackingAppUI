import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    var [isLoggedIn,setLoggedIn]=useState(false)
  var navigate=  useNavigate();
    React.useEffect(()=>{
        if(window.localStorage.getItem('user'))
        {
            setLoggedIn(true)
        } 
        else{
            setLoggedIn(false)
            navigate("/login")
        }
    },[])
    function logout(){
        window.localStorage.removeItem('user')
        setLoggedIn(false)
        navigate("/login")
    }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Ticket App
          </a>
         
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              
                {
                    isLoggedIn && (<button onClick={logout()}>
                    Logout
                  </button>)
                }
                 {
                    !isLoggedIn && (<button class="nav-link active" aria-current="page" href="#">
                    Login
                  </button>)
                }   
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
