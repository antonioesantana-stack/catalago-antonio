import React from 'react';

function DestaquesHome({ aoClicar }) { 
  
  const categoriasDestaque = [
    { id: 1, nome: "Frenagem", icone: "🛑" },
    { id: 2, nome: "Suspensão", icone: "🔩" },
    { id: 3, nome: "Transmissão", icone: "⚙️" },
    { id: 4, nome: "Todos", icone: "🔧" } 
  ];

  return (
    <section className="categorias-home">
      <div className="grid-categorias">
        {categoriasDestaque.map(cat => (
          <div key={cat.id} className="card-categoria-home">
            <span className="icone-cat">{cat.icone}</span>
            <h3>{cat.nome}</h3>
            
            <button 
              className="btn-explorar"
              onClick={() => {
                aoClicar(cat.nome); 
                document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' }); 
              }}
            >
              Explorar {cat.nome}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestaquesHome;