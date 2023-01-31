import './App.css'
import BudgetCard from './Components/BudgetCard'
import Navbar from './Components/Navbar'
import { useBudget } from './Contexts/BudgetContext'

function App() {
  const { budgets, getBudgetExpenses } = useBudget()
  return (
    <div className="App">
      <Navbar />
      <div className='flex flex-col'>
        {budgets.map((budget) => {
          const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
          return (
            <BudgetCard name={budget.name} amt={amount} max={budget.max} />
          )
        })}
      </div>



    </div >
  )
}

export default App
