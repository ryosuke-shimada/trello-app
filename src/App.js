import { Header } from "./components/header/Header";
import React from "react";
import { TaskCard } from "./components/task/TaskCard";


function App (){
  return(
    <div className="app">
    <Header />
    <TaskCard />
    </div>
  )
}

export default App;