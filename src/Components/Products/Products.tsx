import { useState } from "react";
import Item from "./Product";

const Items = () => {
  const [items, setItems] = useState([]);
  return (
    <div style={{ height: "100%" }}>
      {items.map((item) => {
        return <Item />;
      })}
    </div>
  );
};

export default Items;
