import React, { useRef } from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudget } from '../Contexts/BudgetContext'
import CenterCard from './CenterCard'

function AddExpensesModal({ showExpenseModal, expenseModalCloseHandler, defaultBudgetId }) {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()

    const { addExpense, budgets } = useBudget()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("inside handler")
        addExpense({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        })
        expenseModalCloseHandler()
    }

    return (
        <>
            {showExpenseModal ? (
                <CenterCard>
                    <div className='w-full h-full opacity-10 bg-black absolute z-10 inset-0'>
                    </div>
                    <div className='absolute -inset-y-0 rounded z-50 bg-white container h-[430px] sm:max-w-xl m-10 p-2.5'>
                        <div>
                            <h1 className='text-xl text-center border-b font-medium'>
                                Add New Expense
                            </h1>
                        </div>
                        <form className='flex flex-col gap-4 items-center my-6'
                            onSubmit={(e) => e.preventDefault()}>

                            <span
                                className='text-lg font-medium'>
                                Expense Description
                            </span>
                            <input type="text"
                                className='block w-3/4 h-10 px-2 border-b-2 border-black focus:outline-none focus:border-blue-600 focus:border-2 focus:rounded  '
                                placeholder='Enter Expense Description'
                                ref={descriptionRef} required
                            />

                            <span
                                className='text-lg font-medium'>
                                Expense Amount
                            </span>
                            <input type="number"
                                className='block w-3/4 h-10 px-2 border-b-2 border-black focus:outline-none focus:border-blue-600 focus:border-2 focus:rounded  '
                                min={0}
                                placeholder='Enter Expense Amount'
                                ref={amountRef}
                                required
                            />
                            <span
                                className='text-lg font-medium'>
                                Select Budget
                            </span>
                            <select
                                className='block w-3/4 h-10 px-2 border-b-2 border-black focus:outline-none focus:border-blue-600 focus:border-2 focus:rounded  '
                                name="budgets"
                                id="budget-select"
                                ref={budgetIdRef}
                                defaultValue={defaultBudgetId}
                                required>
                                <option value={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>

                                {budgets.map((budget) => (

                                    <option key={budget.id} value={budget.id}>
                                        {budget.name}
                                    </option>


                                ))}

                            </select>


                            <div className='flex justify-between gap-4 sm:gap-16'>

                                <button type='submit'
                                    className='bg-blue-600 p-1 sm:p-2 text-white text-sm sm:text-lg md:text-xl'
                                    onClick={handleSubmit}
                                >
                                    Add New Budget
                                </button>

                                <button
                                    className='bg-white opacity-50 hover:opacity-100 p-1 sm:p-2 text-red-500 border-2 border-red-600 text-sm sm:text-lg md:text-xl'

                                    onClick={(e) => {
                                        e.preventDefault()
                                        expenseModalCloseHandler()
                                    }}
                                >
                                    Close
                                </button>
                            </div>


                        </form>

                    </div>
                </CenterCard>

            ) : (<></>)}
        </>


    )
}

export default AddExpensesModal