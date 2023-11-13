import {useState} from "react";

function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] // variable (selectedIndex)
  //arr[1] // updater function (setSelectedIndex)


  const getMessage = () => {
    return items.length === 0 && <p>No items</p>;
  };

  
  return (
    // this is fragment syntax, which allows us to return multiple elements
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={()=> setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
