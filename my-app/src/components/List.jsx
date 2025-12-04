import { useState, useEffect } from 'react'
import Summary from './Summary.jsx'

import '../App.css'

function List() {
  const [data, setData] = useState();

  useEffect(() => {
    // Fetch files from backend
    fetch('https://vpb1hm0m-3001.usw2.devtunnels.ms/headers')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching files:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  else {
    console.log(data)
  }

  return (
    <div>
      {data.map((article, index) => (
        <Summary key={index} {...article} />
      ))}
    </div>
  );
}

export default List;
