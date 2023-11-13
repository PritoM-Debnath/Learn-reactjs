import {MouseEvent} from "react";

function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston"];


  const getMessage = () => {
    return items.length === 0 && <p>No items</p>;
  };
  
  //event handler
  const handleClick = (event : MouseEvent) => console.log(event);
  return (
    // this is fragment syntax, which allows us to return multiple elements
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
