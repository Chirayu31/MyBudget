import React from 'react'
import { currencyFormatter } from '../utils'

function BudgetCard({ amt, max }) {
    return (
        <div className=' container sm:max-w-xl border-grey border-2 p-2.5 '>
            <div className='flex'>
                <div className='flex justify-around gap-x-8 min-[450px]:gap-x-20 sm:gap-x-40 '>
                    <h1 className='text-black text-lg sm:text-xl md:text-2xl font-semibold'>
                        Entertainment
                    </h1>
                    <div className='flex justify-between gap-1.5 '>
                        <span className='text-black text-lg sm:text-xl md:text-2xl '>
                            {currencyFormatter.format(amt)}
                        </span>

                        <span className='text-black text-md sm:text-lg md:text-xl mt-1'>
                            / {currencyFormatter.format(max)}
                        </span>
                    </div>
                </div>
            </div>
            {/* Progress bar */}
            <div className='flex my-5'>
                <div className='w-full bg-gray-300 rounded-full h-5'>
                    <div className={`w-full rounded-full h-5
                     ${amt / max > 0.75 ? `bg-red-500`
                            : amt / max > 0.5 ? `bg-yellow-500`
                                : `bg-blue-600`}`}
                        style={{ width: `${(amt / max) * 100}%`, maxWidth: '100%' }}>
                    </div>
                </div>
            </div>
            {/* Add Expense and View Expense Buttons */}
            <div className='flex justify-center'>
                <div className='flex justify-between gap-4 sm:gap-16'>
                    <button className='bg-blue-600 p-1 sm:p-2 text-white text-sm sm:text-lg md:text-xl '>
                        Add Expense
                    </button>
                    <button className='bg-white border-solid border-2 border-grey hover:border-blue-600 p-1 sm:p-2 text-blue-600 text-sm sm:text-lg md:text-xl sm:mr-6 md:mr-10'>
                        View Expenses
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BudgetCard