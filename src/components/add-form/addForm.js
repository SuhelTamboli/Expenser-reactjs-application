import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { categories } from "../../constants/add-expense";
import { addExpense } from "../../redux/actions/expensesActions";
import "./addForm.css";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./success-modal";

const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
    const [category, setCategory] = useState(); //null by default
    const [modalOpen, setModalOpen] = useState(false);
    
    const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value); //this will give amount in decimals
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
      setCategory(category);
      setCategoryOpen(false);
    };
    
    const handleSubmit = () => {
        if (title === '' || amount === '' || !category ) {
            const notify = () => toast("Please enter valid data");
            notify();
            return;
        }

        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        }

        dispatch(addExpense(data));
        setModalOpen(true);

    }

  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
          />
          <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen } />
      <div className="form-item">
        <label htmlFor="">Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="">Amount ₹</label>
        <input
          className="amount-input"
          placeholder="Enter an amount of your expenditure"
          value={amount}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label htmlFor="">{category ? category.title : "Category"}</label>
            <i className="fi fi-rr-caret-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label htmlFor="">{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label htmlFor="">Add</label>
          <i className="fi fi-rr-shopping-cart-check"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
