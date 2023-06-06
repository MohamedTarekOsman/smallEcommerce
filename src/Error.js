import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Error() {
    let navigate=useNavigate();
    useEffect(
        ()=>
        {
            setTimeout(() => {
                navigate("/");
            }, 1000);
            
        }
    ,[])
    return (
        <div style={{color:"white"}}>Error 404 not found!</div>
    )
}
