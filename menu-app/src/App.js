import React from 'react';
import './App.css';
import MenuApp from './components/MenuApp';

function App() {
  let menuData = [
    {
      menuName: "Dinner",
      menuItems: [
        {
        "itemId": 1,
        "itemPrice": "15",
        "itemName": "Lasagne",
        "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
    },
    {
    
        "itemId": 2,
        "itemPrice": "12",
        "itemName": "Spaghetti",
        "itemDescription": "Beef and cheese basked in tomato sauce with house-made pasta and onions."
    },
    {
    
      "itemId": 3,
      "itemPrice": "14",
      "itemName": "Chicken Parmesan",
      "itemDescription": "Breaded Chicken topped with marinara sauce and lots of cheese served over house spahgetti."
  },

    ]
  },
  {
      menuName: "Dessert",
      menuItems: [
        {
        "itemId": 4,
        "itemPrice": "10",
        "itemName": "Chocolate Lava Cake",
        "itemDescription": "Dark chocolate molten lava cake. Serves 2-3."
    },
    {
    
        "itemId": 5,
        "itemPrice": "10",
        "itemName": "Cannolis",
        "itemDescription": "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."
    },

    ]
    }
  ];
  
  return (
    <div className="App">
      <MenuApp data={menuData}/>
    </div>
  );
}


export default App;
