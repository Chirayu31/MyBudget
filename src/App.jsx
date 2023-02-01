import { useState } from 'react'
import './App.css'
import BudgetCard from './Components/BudgetCard'
import Navbar from './Components/Navbar'
import UncategorizedBudgetCard from './Components/UncategorizedBudgetCard'
import { useBudget } from './Contexts/BudgetContext'

function App() {
  const { budgets, getBudgetExpenses } = useBudget()
  const [showExpenseModal, setShowExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()

  const expenseModalOpenHandler = (budgetId) => {
    setShowExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  const expenseModalCloseHandler = () => {
    setShowExpenseModal(false)
  }

  return (
    <div className="App">
      <Navbar
        showExpenseModal={showExpenseModal}
        expenseModalOpenHandler={expenseModalOpenHandler}
        expenseModalCloseHandler={expenseModalCloseHandler}
        addExpenseModalBudgetId={addExpenseModalBudgetId}
        setAddExpenseModalBudgetId={setAddExpenseModalBudgetId} />

      <div className='flex flex-col'>
        {budgets.map((budget, idx) => {
          const amount = getBudgetExpenses(budget.id)
            .reduce((total, expense) => total + expense.amount, 0)
          return (
            <BudgetCard
              key={idx}
              name={budget.name}
              amt={amount}
              max={budget.max}
              onAddExpenseClick={() => expenseModalOpenHandler(budget.id)}
            />
          )
        })}
        <UncategorizedBudgetCard />
      </div>

    </div >
  )
}

export default App
