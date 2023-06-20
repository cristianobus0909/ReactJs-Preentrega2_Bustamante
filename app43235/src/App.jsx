
import styles from './App.module.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='Item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT fOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
