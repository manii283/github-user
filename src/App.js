import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <form className="search-form">
        <input id="search" type="text" placeholder="Enter username or email" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default App;
