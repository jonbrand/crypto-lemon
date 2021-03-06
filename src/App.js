import './App.css';
import { Header } from './components/Header/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LemonList } from './components/LemonList/LemonList';
import { Main } from './components/Main/Main';

function App() {
  const [lemonListData, setLemonListData] = useState([]);
  const [selectedLemon, setSelectedLemon] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x560c123BbbD1E65Fe85C5006A6b228B489e7bb5b&order_direction=asc')
      setLemonListData(openSeaData.data.assets)
    }

    return getMyNfts();
  }, [])

  return (
    <div className='app'>
      <Header />
      {
        lemonListData.length > 0 && (
          <>
            <Main lemonListData={lemonListData} selectedLemon={selectedLemon} />
            <LemonList lemonListData={lemonListData} setSelectedLemon={setSelectedLemon} />
          </>
        )
      }
    </div>
  );
}

export default App;
