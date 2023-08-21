import React from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../store/listSlice'

const Show = ({item,idx}) => {
  const dispatch=useDispatch()
  const {id,task}=item
  
  return (
    <>
    <tr>
      <td className='text-center'>{idx+1}</td>
      <td className='text-center'>{id}</td>
      <td className='text-center'>{task}</td>
      <td className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-success m-1 text-light'onClick={()=>dispatch(edit(item))} >Edit</button>
          <button className='btn btn-danger m-1 text-light'onClick={()=>dispatch(remove(item))}>Delete</button>
        </td>
    </tr>
    </>
  )
}

export default Show