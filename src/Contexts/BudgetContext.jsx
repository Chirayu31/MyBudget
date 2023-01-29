import React from "react"
import { v4 as uuidv4 } from "uuid"
import useLocalStorage from "../Hooks/useLocalStorage"

const BudgetContext = React.createContext()

export const useBudget = () => {
    return useContext(BudgetContext)
}

// budgets: {
//     id: '',
//     name':'',
//     max: '',
// }
// expenses: {
//     id:'',budgetId:'', amt:'', desc:''
// }

export const BudgetProvider = ({ children }) => {

    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    function addExpense({ budgetId, name, amt, desc }) {
        setExpenses(prevExpense => {
            return [...prevExpense, { id: uuidv4(), budgetId, name, amt, desc }]
        })
    }

    function addBudget({ name, max }) {
        setBudgets(prevBudget => {
            if (prevBudget.find(budget => budget.name == name)) return prevBudget
            return [...prevBudget, { id: uuidv4(), name, max }]
        })
    }

    function deleteExpense({ id }) {
        setExpenses(prevExpense => {
            return prevExpense.filter(expense => expense.id === id)
        })
    }
    function deleteBudget({ id }) {
        setBudgets(prevBudget => {
            return prevBudget.filter(budget => budget.id === id)
        })
    }

    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteExpense,
            deleteBudget
        }}>
            {children}
        </BudgetContext.Provider>
    )
}