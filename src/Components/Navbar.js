import React from 'react'


import {
   Link,
 } from "react-router-dom";


function Navbar(props) {


   return (
      <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode ? 'dark' : 'light'} bg-${props.mode ? 'dark' : 'light'}`}>
            <Link className="navbar-brand" to="/">RapidNewsBySarang</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>

                  <li className="nav-item active">
                     <Link className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></Link>
                  </li>

               </ul>
               
               <div className="form-check form-switch mx-3" >
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={props.modeHandler} checked={props.mode} />
                  <label style={{ color: props.mode ? 'white' : 'gray' }} className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode </label>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Navbar
