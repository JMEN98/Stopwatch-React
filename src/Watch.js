import React, { useEffect, useRef, useState } from "react";
import './index.css'

function Watch (){

  const [time,SetTime]= useState(0)

useEffect(()=>{
  timeInc()
  return()=> clearInterval(timeHandler.current)
})

let timeHandler = useRef()

function timeInc (){
  timeHandler.current= setInterval(()=>{
    SetTime( pertime=> pertime +1)
  },1000)
}


return(
  <>
  <h1>{time}</h1>
  <button 
  onClick={()=>SetTime(0)}
  className ="btn-info"> Restart</button>
  <button
   onClick={()=> clearInterval(timeHandler.current)}
  className="btn-danger" > Pause </button>
  
  </>
)



}

export default Watch