import { useState, useEffect } from 'react'

import '../App.css'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // Fetch files from backend
    fetch('https://vpb1hm0m-5173.usw2.devtunnels.ms/headers')
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
    <>
      <div id="body">
        
      </div>
    </>
  )
}

export default App
