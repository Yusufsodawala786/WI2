import React from 'react'
import {Input} from "@nextui-org/input";
import List from './list'

const home = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div className='h-1/6 bg-blue-100 flex flex-col sticky top-0'>
            <div className='flex justify-between p-8'>
                <span className='font-bold'>Explore </span>
                <span className='text-green-600 font-semibold'>Filter </span>
            </div>
            <div className='w-screen'>
            <div className='w-100 h-auto flex justify-center items-center'>
                <Input type='text' placeholder='Search'/>
            </div>
            </div>
        </div>
        <div className='h-4/6'>
            {/* <ul>
                <li className='flex flex-row justify-start items-center'>
                    <div className='w-20 flex justify-center items-center h-24'> 
                        <img src="#" alt="img"/>
                    </div>
                    <div className='w-80 flex justify-start items-center h-24'>
                        <h1>Item 1</h1>
                    </div>
                </li>
            </ul> */}
            <List/>
        </div>
    </div>
  )
}

export default home