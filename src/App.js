import React from "react";
import Footer from "./components/Footer";
import AddTodo from "../src/components/AddTodo";
import VisibleTodoList from "../src/containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
