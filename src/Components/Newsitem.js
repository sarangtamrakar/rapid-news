import React from 'react';


function Newsitem(props) {
   
   return (
      <div className="card my-3 mx-2">
         <img className="card-img-top" src={props.urlToImage} alt="Card cap" width="30" height="400" />
         <div className="card-body" style={{ color: props.mode ? 'white' : 'gray', backgroundColor: props.mode ? 'gray' : 'white' }}>
            <h5 className="card-title">{props.title.slice(0, 80)} <span class={`badge badge-pill badge-${props.mode ? 'dark' : 'primary'}`}>{props.source}</span> </h5>
            <p className="card-text">{props.description.slice(0, 100)} ...</p>
            <p className="card-text">{new Date(props.date).toGMTString()}</p>
            <a href={props.url} rel="noreferrer" target="_blank" className={`btn btn-${props.mode ? 'dark' : 'primary'}`}> Read More</a>
         </div>
      </div>
   )
}

export default Newsitem
