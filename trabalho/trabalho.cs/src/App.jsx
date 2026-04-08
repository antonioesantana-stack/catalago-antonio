import React, { useState } from 'react';
import './App.css';
import { produtos } from './dados'; 
import Slideshow from './componentes/Slideshow';
import Cabecalho from './componentes/Cabecalho';
import Home from './componentes/Home';
import Rodape from './componentes/Rodape';
import ProdutoCard from './componentes/ProdutoCard';

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [busca, setBusca] = useState('');

  const listaProdutos = produtos || [];

  // Lógica de filtragem: Se categoriaAtiva for 'Todos', ignora o filtro de categoria
  const produtosExibidos = listaProdutos.filter(item => {
    const porCategoria = categoriaAtiva === 'Todos' || item.categoria === categoriaAtiva;
    const porNome = item.nome.toLowerCase().includes(busca.toLowerCase());
    return porCategoria && porNome;
  });

  const selecionarCategoria = (categoria) => {
    setCategoriaAtiva(categoria);
    
    const secaoProdutos = document.getElementById('produtos');
    if (secaoProdutos) {
      secaoProdutos.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const voltarAoTopoGeral = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Cabecalho />
      <Slideshow />

      <Home aoClicar={selecionarCategoria} />

      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="🔎 O que você está procurando hoje?"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <h2 className="titulo-secao">
          {busca !== '' 
            ? `Resultados para: "${busca}"` 
            : (categoriaAtiva === 'Todos' ? 'Nosso Catálogo Completo' : `Peças de ${categoriaAtiva}`)}
        </h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          {produtosExibidos.length} produtos encontrados
        </p>
      </div>

      <main className="container" id="produtos">
        <div className="vitrine">
          {produtosExibidos.length > 0 ? (
            produtosExibidos.map(prod => (
              <ProdutoCard key={prod.id} item={prod} />
            ))
          ) : (
            <div className="no-results">
              <p>Nenhuma peça encontrada.</p>
              <button 
                onClick={() => {setBusca(''); setCategoriaAtiva('Todos');}}
                style={{ background: 'none', border: '1px solid #ff0000', color: '#ff0000', marginTop: '10px', cursor: 'pointer', padding: '5px 15px' }}
              >
                Ver catálogo completo
              </button>
            </div>
          )}
        </div>
      </main>

      <button 
        className="btn-voltar-topo"
        onClick={voltarAoTopoGeral}
        title="Voltar ao início"
      >
        ↑
      </button>

      <Rodape />
    </div>
  );
}

export default App;