import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import EditDetails from "./Components/Edit Detail/EditDetails";
import ViewDetails from "./Components/ViewDetails/ViewDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ExpenseForm />}></Route>
      </Routes>
      <Routes>
        <Route path="/view" element={<ViewDetails />}></Route>
      </Routes>
      <Routes>
        <Route path="/edit" element={<EditDetails />}></Route>
      </Routes>

      {/* <Route path="*" element={<PageNotFound />}></Route> */}
    </div>
  );
}

export default App;
