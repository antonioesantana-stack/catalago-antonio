import React from 'react';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <div className="rodape-info">
          <h3>Auto<span>Peças </span></h3>
          <p>Peças de Alta Performance para seu Veículo.</p>
        </div>
        
        <div className="rodape-links">
          <h4>Contato</h4>
          <p>📍 Av. das Peças, 1000 - Alagoinhas/BA</p>
          <p>📞 (75) 9999-9999</p>
        </div>
      </div>
      
      <div className="rodape-direitos">
        <p>&copy; 2026 Auto Peças Alagoinhas - Trabalho de Senai - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Rodape;