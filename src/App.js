import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import AddExpense from "./pages/add-expense/addExpense";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
