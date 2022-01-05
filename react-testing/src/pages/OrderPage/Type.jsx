import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';
function Type({ orderType }) {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/${orderType}`);
      setItems(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const ItemComponents = orderType === 'products' ? Products : null;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
}

export default Type;
