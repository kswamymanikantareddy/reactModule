import React from 'react'

export const SideBar = ({items}:{items:{
    name:string,
    href:string,
    id:number
}[]}) => {
  return (
    <div>
        {items.map((item)=>{return(<div key={item.id}>
            <a role='navigation' href={item.href}>{item.name}</a>
        </div>)})}
    </div>
  )
}
