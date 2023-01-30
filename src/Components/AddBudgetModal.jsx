import React from 'react'
import CenterCard from './CenterCard'

function AddBudgetModal() {
    return (
        <CenterCard>
            <div className='w-full h-full opacity-10 bg-black absolute z-10 inset-0'>
            </div>
            <div className='absolute -inset-y-0 rounded z-50 bg-white container h-[350px] sm:max-w-xl m-10 p-2.5'>
                <div>
                    <h1 className='text-xl text-center border-b font-medium'>
                        Add New Budget
                    </h1>
                </div>
                <form className='flex flex-col gap-4 items-center my-6 '>
                    <span
                        className='text-lg font-medium'>
                        Budget Name
                    </span>
                    <input type="text"
                        className='block w-3/4 h-10 px-2 border-b-2 border-black focus:outline-none focus:border-blue-600 focus:border-2 focus:rounded  '
                        placeholder='Enter Budget Name'
                    />
                    <span
                        className='text-lg font-medium'>
                        Budget Amount
                    </span>
                    <input type="number"
                        className='block w-3/4 h-10 px-2 border-b-2 border-black focus:outline-none focus:border-blue-600 focus:border-2 focus:rounded  '
                        min={0}
                        placeholder='Enter Maximum Budget Amount'
                    />


                    <div className='flex justify-between gap-4 sm:gap-16'>
                        <button type='submit' className='bg-blue-600 p-1 sm:p-2 text-white text-sm sm:text-lg md:text-xl '>
                            Add New Budget
                        </button>
                        <button className='bg-white opacity-50 hover:opacity-100 p-1 sm:p-2 text-red-500 border-2 border-red-600 text-sm sm:text-lg md:text-xl'
                            onClick={closeModalHandler}
                        >
                            Close
                        </button>
                    </div>


                </form>

            </div>


        </CenterCard>


    )
}

export default AddBudgetModal