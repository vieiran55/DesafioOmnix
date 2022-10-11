import Home from 'pages/Home';
import Ofertas from 'pages/Ofertas';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

interface Opcoes {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string
  siafi: number
}


export default function AppRouter(){
  const [inputcep, setCep] = useState('');

  return(
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home inputcep={inputcep} setCep={setCep}/>} />
          <Route path='ofertas' element={<Ofertas inputcep={inputcep}/>} />
        </Routes>
      </Router>
    </main>
  );
}