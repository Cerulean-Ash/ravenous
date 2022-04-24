import React from "react";
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

// 2 ways to do it - both work

//Option 1:

// class App extends React.Component {
//   render () {
//     return (
//       <div className="App">
//         <h1>ravenous</h1>
//         <SearchBar />
//         <BusinessList/>
//       </div>
//     );
//   }
// }

//Option 2:

function App() {
  return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList/>
      </div>
  );
}

export default App;
