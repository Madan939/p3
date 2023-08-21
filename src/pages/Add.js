import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/listSlice'
import Show from './Show'
const Add = () => {
    const products = useSelector(state => state.cardState)
    const list = products.cartlist
    const [data, setdata] = useState("")
    const dispatch = useDispatch()
    function sub(e) {
        e.preventDefault()
    
            const newtask = {
                id: Date.now(),
                task: data
            }
            dispatch(add(newtask))
            setdata("")

    }
    return (
        <>
            <form className='mt-5' onSubmit={sub}>
                <div className='d-flex justify-content-center mb-4 w-50 m-auto'>
                    <input type='text' className='form-control' onChange={(e) => setdata(e.target.value)} value={data} />
                    <button type='submit' className='btn btn-primary m-1'>Add</button>
                </div>
            </form>
            <p className='h4 text-center text-primary'>Total added task={list.length}</p>
            <table className='table table-stripped '>
                <thead>
                    <tr>
                        <th className='text-center'>SN</th>
                        <th className='text-center'>Id</th>
                        <th className='text-center'>Task</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, idx) => (
                        <Show key={item.id} item={item} idx={idx} />
                    ))}

                </tbody>
            </table>

        </>
    )
}

export default Add
