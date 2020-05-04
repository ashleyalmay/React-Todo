// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const VillagerList = props => {
  return (
    <div className="Favorite-list">
      {props.villagers.map(todo => (
        <Todo key={todo.id} item={todo} />
      ))}
      <button className="clear-btn" onClick={props.deleteVillagers(item.key)}>
      Delete Villager
      </button>
    </div>
  );
};
export default VillagerList;