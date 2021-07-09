import { Fragment } from 'react'
import  Child  from './Child'
import ListState from './ListState'

const clickFucnk = () =>{
  alert('klik')
}

const Parent = () => {
  return (
  <Fragment>


  <Child onClick={clickFucnk} color="orange"/>
  <ListState />
    </Fragment>
  )
}

export default Parent