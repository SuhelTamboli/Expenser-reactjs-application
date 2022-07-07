import React from 'react'
import AddForm from '../../components/add-form/addForm';
import TopFold from '../../components/topfold/topfold';
import './addExpense.css'

const AddExpense = () => {
    return <div className='add-expense'>
        <TopFold />
        <AddForm />
  </div>;
}

export default AddExpense;