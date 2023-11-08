import React from 'react'
import { useParams } from 'react-router-dom'

const Ditels = () => {
    const param = useParams();

    console.log(param)
  return (
    <>
        this is ditels page
    </>
  )
}

export default Ditels