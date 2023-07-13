import React from 'react'

const page = ({params}:any) => {
  return (
    <div>{params.videoId}</div>
  )
}

export default page