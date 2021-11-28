import React from 'react'
import RealUser from './RealUser';
import ReelUser from './ReelUser'
 export default  function User(props){
     const isUser = props.isUser;
    return (
        <>
      {isUser ? <RealUser/>:<ReelUser/>}
        </>
    )
 }