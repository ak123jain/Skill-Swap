import axios from 'axios';
import React, { useEffect } from 'react'

const Logout = () => {

    const onsubmit = async () =>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/logout` , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        onsubmit()
    }, [])

  return (
     
       <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl font-semibold">Logging you out...</h1>
    </div>
     
  )
}

export default Logout
