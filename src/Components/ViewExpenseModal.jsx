import React from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudget } from '../Contexts/BudgetContext'
import { currencyFormatter } from '../utils'
import CenterCard from './CenterCard'

function ViewExpenseModal({ budgetId, viewExpenseModalCloseHandler }) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudget()

    const expenses = getBudgetExpenses(budgetId)

    const budget = UNCATEGORIZED_BUDGET_ID === budgetId
        ? { name: 'Uncategorized', id: UNCATEGORIZED_BUDGET_ID }
        : budgets.find(b => b.id === budgetId)

    return (
        <>
            {budgetId ? (
                <CenterCard>
                    <div className='w-full h-full opacity-10 bg-black absolute z-10 inset-0'>
                    </div>
                    <div className='absolute -inset-y-0 rounded z-50 bg-white container h-[350px] sm:max-w-xl m-10 p-2.5 overflow-y-auto'>
                        <div className=' flex justify-between text-xl text-center border-b font-medium'>
                            {budgetId !== UNCATEGORIZED_BUDGET_ID ? (
                                <button
                                    className='bg-white opacity-50 hover:opacity-100 p-1 text-red-500 text-sm'
                                    onClick={
                                        () => {
                                            deleteBudget(budget)
                                            viewExpenseModalCloseHandler()
                                        }
                                    }
                                >
                                    Delete Budget
                                </button>
                            )
                                : null}
                            <span className='mr-10'>Expenses - {budget?.name}</span>
                            <button
                                className='bg-white opacity-50 hover:opacity-100 p-1 text-gray-500 text-sm'
                                onClick={
                                    () => {
                                        viewExpenseModalCloseHandler()
                                    }
                                }
                            >
                                close
                            </button>
                        </div>
                        <div>
                            {expenses.map(expense => (
                                <div className=' flex justify-between text-md text-center border-b font-medium' key={expense.id}>
                                    <div>
                                        {expense.description}
                                    </div>
                                    <div>
                                        {currencyFormatter.format(expense.amount)}
                                    </div>
                                    <button onClick={() => deleteExpense(expense)}>
                                        -
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </CenterCard>

            ) : (<></>)}
        </>


    )
}

export default ViewExpenseModal