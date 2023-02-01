import React from 'react'
import { useBudget } from '../Contexts/BudgetContext'
import BudgetCard from './BudgetCard'

export default function TotalBudgetCard(props) {
    const { expenses, budgets } = useBudget()

    const amount = expenses.reduce((total, expense) => expense.amount + total, 0)
    const max = budgets.reduce((total, budget) => budget.max + total, 0)


    return (
        <BudgetCard name={"Total"} amt={amount} max={max} {...props} hideButtons />
    )
}
