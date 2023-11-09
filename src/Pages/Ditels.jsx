import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Ditels = () => {
    const params = useParams();

    const [user,setUser] = useState([])

console.log(user)
    useEffect(()=>{
      const url =`https://jsonplaceholder.typicode.com/users/${params.id}`

      console.log(url)

      fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
    },[])


  return (
    <> 
<div className="main w-fit p-5 rounded-xl bg-purple-400 border-2 border-blck ">
  <h1 className='text-xxl font-bold text-black'>  ID: {user.id}</h1>
  <h2 className='text-xxl font-bold text-black'> Name:- {user.name} </h2>
  <h3 className='text-xxl font-bold text-black'> Phone:- {user.phone}</h3>
</div>

    </>
  )
}

export default Ditels