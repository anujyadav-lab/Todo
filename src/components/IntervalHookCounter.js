import React,{useEffect, useState} from "react"
export default function IntervalHookCounter(){
const[count,setCount] = useState(0)
const tick =()=>{
    setCount(prevcount=>prevcount + 1)
}
useEffect(()=>{
    function doSomething(){
        console.log(someProp)
    }
})

doSomething()
    const interval = setInterval(tick,1000)
    return()=>{
        clearInterval(interval)
    }
},[someProp])
  
return <>{count}</>}
