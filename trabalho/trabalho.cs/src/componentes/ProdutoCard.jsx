import React from 'react';

function ProdutoCard({ item }) {
  return (
    <div className="card-produto">
      {item.emPromocao && <span className="tag-oferta">OFERTA</span>}
      
      <div className="container-foto">
        <img src={item.imagem} alt={item.nome} className="foto-peca" />
      </div>
      
      <div className="info-peca">
        <small className="categoria-label">{item.categoria}</small>
        <h3>{item.nome}</h3>
        <p className="descricao-curta">{item.descricao}</p>
        
        <div className="footer-card">
          <strong className="preco">R$ {item.preco.toFixed(2)}</strong>
          <button className="btn-comprar">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProdutoCard;