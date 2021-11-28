import React,{useState} from 'react'
export default function MouseContainer(){
    const [display,setDisplay] = useState(true)
    return(
        <>
<button onClick={()=> setDisplay(!display)}>Toggle display</button>
{display && <Welcome/>}
        </>
    )
}