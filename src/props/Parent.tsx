import { Fragment } from 'react'
import  Child  from './Child'
import ListState from './ListState'
import UserSearch from './UserSearch'

const clickFucnk = () =>{
  alert('klik')
}

const Parent = () => {
  return (
  <Fragment>
  <Child onClick={clickFucnk} color="orange"/>
  <ListState />
   <UserSearch />
    </Fragment>
  )
}

export default Parent