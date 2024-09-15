import { MouseEvent } from "react";

function ListGroup() {
  let items = ["dhaka", "ctg", "barisal", "khulna", "sylhet"];
  //   items = [];

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items</p> : null
  //   }

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
