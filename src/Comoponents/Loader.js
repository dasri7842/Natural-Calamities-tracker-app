import React from 'react'
import loader from './../images/loader.gif'

const Loader = () => {
   return (
      <div className="loader">
         <img src={loader} alt="loader"/>
         <h1>Fetching around the globe..</h1>
      </div>
   )
}

export default Loader
