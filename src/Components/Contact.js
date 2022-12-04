import React from 'react'
import {
  Link,
} from "react-router-dom";



export default function Contact(props) {
   return (
      <div style={{ color: props.mode ? 'white' : 'gray' }}>
         <div className="row my-4 mx-4">
            <div className="col-lg-3">
              
               <h2>Github</h2>

               <p><Link className="btn btn-secondary" to="https://github.com/sarangtamrakar" target="_blank" role="button">View details »</Link></p>
            </div>
            <div className="col-lg-3">
               
               <h2>LinkedIN</h2>

               <p><Link className="btn btn-secondary" to="https://www.linkedin.com/in/sarang-tamrakar-1649a21a9/" target="_blank" role="button">View details »</Link></p>
            </div>
            <div className="col-lg-3">
               
               <h2>LeetCode</h2>

               <p><Link className="btn btn-secondary" to="https://leetcode.com/user0204m/" target="_blank" role="button">View details »</Link></p>
            </div>
         </div>



      </div>
   )
}
