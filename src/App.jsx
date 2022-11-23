import { useState } from 'react'
import Header from './components/Header';

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  return (
    <> 
    <Header 
    budget={ budget }
    setBudget={ setBudget }
    isValidBudget = {isValidBudget}
    setIsValidBudge = {setIsValidBudget}
    />
    </>
  )
}

export default App
