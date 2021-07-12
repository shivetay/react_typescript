import React, {useState} from 'react'

const users = [{name: 'Mieszko', age: 2},
{name: 'Chili', age: 13},
{name: 'Mama', age: 34},
{name: 'Tata', age: 35},
{name: 'Miś', age: 30}]
  

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{name: string, age: number} | undefined>()

  const onClick = () =>{
  const foundUser = users.find((user) => {
    return user.name === name
  })
  setUser(foundUser)
}
  return (
    <div>
      <h2>Search User</h2>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
       <button onClick={onClick}>Find User</button>
       <div>
         {user && user.name}
         {user && user.age}
       </div>
    </div>
  )
}

export default UserSearch
