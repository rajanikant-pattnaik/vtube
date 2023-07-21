import React from 'react'

const ChannelAbout = ({Channel}:any) => {
  console.log(Channel);
  return (
    <div>
      <h1>{Channel.title}</h1>
      <p>{Channel.description}</p>
      <h1>{Channel.country}</h1>
    </div>
  )
}

export default ChannelAbout