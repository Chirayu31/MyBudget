import React from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudget } from '../Contexts/BudgetContext'
import BudgetCard from './BudgetCard'

export default function UncategorizedBudgetCard(props) {
    const { getBudgetExpenses } = useBudget()

    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID)
        .reduce((total, expense) => total + expense.amount, 0)

    if (amount === 0) return null

    return (
        <BudgetCard name={"Uncategorized"} amt={amount} {...props} />
    )
}
