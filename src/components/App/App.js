import React from "react";
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1005 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 56
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

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
        <BusinessList businesses={businesses}/>
      </div>
  );
}

export default App;
