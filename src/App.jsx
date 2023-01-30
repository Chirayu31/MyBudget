import './App.css'
import AddBudgetModal from './Components/AddBudgetModal'
import BudgetCard from './Components/BudgetCard'
import CenterCard from './Components/CenterCard'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <BudgetCard amt={1200} max={10000} />
      <AddBudgetModal />

    </div >
  )
}

export default App
