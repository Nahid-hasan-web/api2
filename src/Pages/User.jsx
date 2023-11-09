import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const User = () => {
const [user, setUser] =  useState([])

console.log(user)

useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
    .then(res=> res.json())
    .then ( data=> setUser(data))

},[])
  return (
    <> 
    <div className="main bg-indigo-300 w-100 py-[200px] flex gap-5  flex-wrap ">

      {
        user.map((item)=>{
          return(
            <div   key={item.id} className=" bg-indigo-100 w-[350px] h-[200px]   p-5 border-4 border-black rounded-sm"> 
                    <h1 className='text-xxl font-bold  '>USER ID : <span className=' text-[25px] font-bold text-indigo-700 '> {item.id}</span></h1>
                    <h2 className="text-xl font-bold text-indigo-300"> {item.name} </h2>
                    <h2 className="text-xl font-bold text-black-300"> {item.email} </h2>
                    <Link to={`/post/${item.id}`} className='inline-block w-fit bg-indigo-400 p-2 mt-4 rounded-[5px] border-2 border-black text-lg font-bold text-black' > Detales </Link>
                    
        </div>
          )
        })
      }
    
    </div>

    </>
  )
}

export default User