import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./expenseList.css";

const ExpenseList = () => {
  
  const { expenseList : list, query } = useSelector((state) => state.expense);
 const filteredList = list.filter(item => item.title.includes(query))

  const notifySuccess = () => toast.success("Expense Deleted");

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} key={item.title } />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="empty list"
            className="empty-image"
          />
          <label htmlFor="">Uh Oh! Your expense list is empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
