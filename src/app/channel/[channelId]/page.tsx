import React from 'react'

const page = ({params}:any) => {
  return (
    <div>{params.channelId}</div>
  )
}

export default page