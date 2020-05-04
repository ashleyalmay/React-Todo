import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

const villagers = [
    {
      name: "Raymond",
      id: 123,
      purchased: false
    },
    {
      name: "Lucky",
      id: 124,
      purchased: false
    },
    {
      name: "Bob",
      id: 1235,
      purchased: false
    },
    {
      name: "Diana",
      id: 1246,
      purchased: false
    },
    {
      name: "Ankha",
      id: 1237,
      purchased: false
    },
    {
      name: "Ketchup",
      id: 1248,
      purchased: false
    },
    {
      name: "Dobie",
      id: 1259,
      purchased: false
      },
  ];
  class App extends React.Component {
    
    constructor() {
      super();
      this.state = {
        villagers,
        anotherStateProperty: "hello!"
      };
    }

    addVillager = villagerName => {
      
      const newVillager = {
        name: villagerName,
        id: Date.now(),
        purchased: false
      };
      this.setState({
        villagers: [...this.state.villagers, newVillager]
      });
    };
  
    toggleItem = () => {};
  
    deleteVillagers = (key) => {
      const filteredVillagers = this.state.villagers.filter(villagers => villagers.key!==key);
      this.setState({
        item:filteredVillagers

      })
    };
  

    render() {
      return (
        <div className="App">
          <div className="header">
            <h1>Animal Crossing Villager List!</h1>
            <TodoForm addVillager={this.addVillager} />
          </div>
          <TodoList villagers={this.state.villagers}
          deleteVillagers = {this.deleteVillagers} />

        </div>
      );
    }
  }
  export default App;

 

