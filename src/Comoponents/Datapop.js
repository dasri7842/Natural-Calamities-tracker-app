import React from 'react'

const Datapop = ({data, remove}) => {
   return (
      <div className="datapop">
         <h2>Event Info : <button className="btn" onClick={remove}>X</button></h2>
         <ul>
            <li> <span className="item">Source</span>  : <a href={data.sources[0].url} rel="noreferrer" target="_blank">{data.id}</a></li>
            <li> <span className="item">Title</span>  : {data.title}</li>   
            <li> <span className="item">Date</span> : {data.geometries[0].date}</li>
         </ul>
      </div>
   )
}

export default Datapop
