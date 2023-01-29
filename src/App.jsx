import './App.css'
import BudgetCard from './Components/BudgetCard'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="flex gap-4 content-center justify-center ">
        <BudgetCard amt={1200} max={10000} />
      </div>

    </div>
  )
}

export default App
