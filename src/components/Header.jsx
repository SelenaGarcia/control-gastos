import React from 'react';
import NewBudget from './NewBudget';

const Header = ({
    budget, 
    setBudget, 
    setIsValidBudge}) => {
    return (
        <header>
            <h1>
                Planning
            </h1>
            {isValidBudge ? (
                <p> valido </p>
            ) : (
            <NewBudget 
                budget={ budget }
                setBudget={ setBudget }
                setIsValidBudge = { isValidBudge }
            />)
        
        }
            
        </header>
    )
}
export default Header;