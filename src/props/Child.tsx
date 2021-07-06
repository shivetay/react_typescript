import React from 'react'


/*
zdefiniowana lista propsów
*/
interface ChildProps{
  color: string
}

export const Child = ({color} : ChildProps) => {
  return (
    <div>
      <h1>Child component</h1>
      <div>
        {color}
      </div>
    </div>
  )
}

  
