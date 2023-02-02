import React, { useState } from 'react'
import AddBudgetModal from './AddBudgetModal'
import AddExpensesModal from './AddExpensesModal'

function Navbar({ showExpenseModal, expenseModalOpenHandler, expenseModalCloseHandler, addExpenseModalBudgetId }) {
    const [showBudgetModal, setShowBudgetModal] = useState(false)

    const budgetModalOpenHandler = () => {
        setShowBudgetModal(true)
    }
    const budgetModalCloseHandler = () => {
        setShowBudgetModal(false)
    }
    return (<>
        <div className='mb-2 h-16 md:border-b '>
            <div className='container mx-auto '>
                <div className='flex justify-between gap-2 mx-2 py-2'>
                    <h1 className='text-black text-xl sm:text-2xl md:text-3xl font-semibold md:pl-8'>
                        MyBudget
                    </h1>
                    <div className='flex justify-between gap-4 sm:gap-16'>
                        <button
                            className='bg-blue-600 p-1 sm:p-2 text-white text-sm sm:text-lg md:text-xl '
                            onClick={expenseModalOpenHandler}
                        >
                            Add Expenses
                        </button>
                        <button
                            className='bg-white border-solid border-2 border-grey hover:border-blue-600 p-1 sm:p-2 text-blue-600 text-sm sm:text-lg md:text-xl sm:mr-6 md:mr-10'
                            onClick={budgetModalOpenHandler}
                        >
                            Add Budget
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <AddBudgetModal showBudgetModal={showBudgetModal}
            budgetModalCloseHandler={budgetModalCloseHandler} />

        <AddExpensesModal
            showExpenseModal={showExpenseModal}
            expenseModalCloseHandler={expenseModalCloseHandler}
            defaultBudgetId={addExpenseModalBudgetId}
        />
    </>
    )
}

export default Navbar