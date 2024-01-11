import React, { useEffect } from 'react'

import styles from '../style/styles'
import EventCard from "./EventCard";

const Event = () => {
 
  return (
    <div>
   
        <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>

      <div className="w-full ">
        <EventCard/>
      </div>
     
    </div>
 
  </div>
  )
}

export default Event