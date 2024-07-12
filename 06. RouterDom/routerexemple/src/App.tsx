import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div>
      {/* no caso de haver o browser routes, tudo que estiver fora dele, será exibido em todas as rotas dentro do browser E não pode manipular links*/}
      <AppProvider>
        <BrowserRouter>
          {/* no caso de haver o browser routes, tudo que estiver dentro dele, mas fora do Routes, será exibido em todas as rotas dentro do browser E pode manipular links*/}
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='*' element={<About />} /> {/*para o caso de ser informado qualquer link não mapeado, ter onde cair, pode ser usado pra pagina 404*/}
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
