import { deleteAllUser } from '@/store/actions';
import React from 'react'
// import { deleteAllUser } from '@/store/slices/UserSlices';
import { useDispatch } from 'react-redux';
export default function Delete() {
  const dispatch=useDispatch();

  const deleteUser=()=>{
    console.log("hi")
    dispatch(deleteAllUser())

  }
  return (
    <div>
        <button className='bg-white bg-opacity-50 rounded-md hover:shadow-black hover:shadow-md font-bold hover:text-black hover:bg-opacity-70  py-2 px-4 text-[#282828] ' onClick={()=>deleteUser()}>Delete All</button>

    </div>
  )
}
