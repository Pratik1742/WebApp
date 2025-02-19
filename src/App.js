import React from "react";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor"; // new import
import UserForm from "./components/UserForm";
// import Dashboard from "./components/Dashboard"; // if ready

function App() {
  return (
    <div>
      <h1>React Project</h1>
      <Counter />
      <UserForm />
      <RichTextEditor />
      {/* <Dashboard />  Uncomment when ready */}
    </div>
  );
}

export default App;
