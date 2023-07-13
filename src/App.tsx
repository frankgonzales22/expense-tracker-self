import { useState } from 'react'
import { DisplayExpense } from './Components/DisplayExpense'
import './App.css'
import FilterExpense from './Components/FilterExpense'
import FormExpense from './Components/FormExpense'


function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Eggs', amount: 38, category: 'Foods' },
    { id: 2, description: 'Rice', amount: 250, category: 'Foods' },
    { id: 3, description: 'Computer', amount: 9999, category: 'Entertainment' },
    { id: 4, description: 'Motorcycle', amount: 5500, category: 'Utilities' },
    { id: 5, description: 'Tumbler', amount: 599, category: 'Utilities' }
   
  ])

  const [selectedCategory, setSelectedCategory] = useState("")



  const diplayExpenses = selectedCategory ? expenses.filter(item => item.category === selectedCategory) : expenses

  return (
    <>
      <div className="mb-5">
        <FormExpense onSubmit={expense => setExpenses([
          ...expenses,
          {
            ...expense,
            id: Date.now()
          }])} />
      </div>

      <div className="mb-3">
        <FilterExpense selectedItem={(a) => setSelectedCategory(a)} />
      </div>

      {expenses &&
        <DisplayExpense
          item={diplayExpenses}
          onRemove={(id) => setExpenses(expenses.filter(item => item.id !== id))}
        />}
   
    </>
  )
}

export default App
