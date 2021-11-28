//Custom HOOks
import {useState} from 'react'
export default function useMyHook(){
const [count,setCount] = useState(0);
const handleIncrement = () =>{
    setCount(count + 1)
}
return{
    count,
    handleIncrement
}
}