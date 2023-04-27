import React from 'react'
import Delete from './delete'
import {FakeUserData} from '../api'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '@/store/slices/UserSlices';
import { RiDeleteBin6Fill } from 'react-icons/Ri';



export default function UserDetail() {
  const dispatch=useDispatch();
  const data=useSelector((state:any)=>{
    return state.users;
    
  })
  console.log(data)
  const addNewUser=(payload:any)=>{
    dispatch(addUser(payload))
  
     
  }
  const deleteUser=(id:any)=>{
    dispatch(removeUser(id))
  }

  return (
    <>
      <div className='flex justify-center p-4 items-center h-screen '>
    <div className='bg-[#282828] rounded-md w-full md:w-5/12 p-4  '>
      <div className='w-full flex justify-between items-center text-[#eff1f6bf]'>
<p className='text-xl  font-semibold'>List of all Users</p>
<button className='bg-white bg-opacity-50 rounded-md hover:shadow-black hover:shadow-md font-bold hover:text-black hover:bg-opacity-70  py-2 px-4 text-[#282828] ' onClick={()=>addNewUser(FakeUserData())}>Add users</button>
      </div>
      <div className='pt-2 opacity-20 '>
      <hr />
      </div>

      <div className='h-72 overflow-y-auto px-2'> 
    {data.map((item:any,id:any)=>{
      return (<>
 <div className='pt-4 '>
      <div className='bg-white bg-opacity-80 rounded-md p-2 text-lg flex justify-between items-center'>
        
       <p> {item}</p>
       <i className='text-red-800 cursor-pointer' onClick={()=>deleteUser(id)}> <RiDeleteBin6Fill/></i>
        
        </div>
      </div>
      </>)
    })}
    </div>
     
      
      <div className='flex justify-end pt-4'>
      <Delete/>
      </div>
      </div>
    </div>
   
    
    </>
  )
}
