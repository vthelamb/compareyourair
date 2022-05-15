import './index';
import Header from "./components/Header";
import Search from './components/Search';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [cities,setCities] = useState([]);
  useEffect(() => {
    const loadCities = async ()=>{
      const response = await axios.get('https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/cities?limit=200&page=1&offset=0&sort=asc&country_id=gb&order_by=city');
  
    const results = response.data.results;
    setCities(results.map((country)=>country.city));
    }
    loadCities();
  }, [])

  return (
    <div>
      <Header />
      <Search cities={cities}/>
    </div>
  );
}
export default App;
