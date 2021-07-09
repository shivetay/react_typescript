import React from 'react'


/*
zdefiniowana lista propsów
*/
interface ChildProps{
  color: string
  onClick: ()=> void
}

const Child: React.FC<ChildProps> = ({color, onClick}) => {
  return (
    <div>
      <h1>Child component</h1>
      <div>
        {color}
      </div>
      <button onClick={onClick}>Clcik</button>
    </div>
  )
}

  export default Child
