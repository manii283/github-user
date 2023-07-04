import "./App.css";
import React, {useState} from "react";

function App() {

  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <main className="main">
        <h2>GitHub User Search</h2>
        <Form
          value={query}
        />
      </main>
    </div>
  );
}
function Form({ onSubmit, onChange, value }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default App;
