import React from 'react';

function Cabecalho() {
  return (
    <header className="topo-site">
      <div className="topo-container">
        <div className="logo">
          <p>Sua Peça em Alta Performance</p>
        </div>
        
        <nav className="menu-topo">
          <ul>
            <li><a href="#produtos">Catálogo</a></li>
            <li><a href="#contato">Suporte</a></li>
          </ul>
        </nav>

        <div className="status-loja">
          <span className="bolinha-online"></span>
          Loja Online Aberta
        </div>
      </div>
    </header>
  );
}

export default Cabecalho;