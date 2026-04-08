import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    imagem: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200", 
    titulo: "Performance Máxima",
    subtitulo: "Peças de suspensão com 20% de desconto."
  },
  {
    id: 2,
    imagem: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200",
    titulo: "Revisão de Freios",
    subtitulo: "Segurança em primeiro lugar para sua família."
  },
  {
    id: 3,
    imagem: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
    titulo: "Linha Premium",
    subtitulo: "As melhores marcas do mercado mundial."
  }
];

function Slideshow() {
  const [atual, setAtual] = useState(0);

  
  useEffect(() => {
    const intervalo = setInterval(() => {
      proximoSlide();
    }, 5000);
    return () => clearInterval(intervalo);
  }, [atual]);

  const proximoSlide = () => {
    setAtual(atual === slides.length - 1 ? 0 : atual + 1);
  };

  const slideAnterior = () => {
    setAtual(atual === 0 ? slides.length - 1 : atual - 1);
  };

  return (
    <section className="slideshow">
      <button className="seta esquerda" onClick={slideAnterior}>&#10094;</button>
      
      {slides.map((slide, index) => (
        <div 
          className={index === atual ? "slide ativo" : "slide"} 
          key={slide.id}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.imagem})` }}
        >
          {index === atual && (
            <div className="slide-info">
              <h2>{slide.titulo}</h2>
              <p>{slide.subtitulo}</p>
            </div>
          )}
        </div>
      ))}

      <button className="seta direita" onClick={proximoSlide}>&#10095;</button>
      
      <div className="pontos">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={index === atual ? "ponto ativo" : "ponto"}
            onClick={() => setAtual(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Slideshow;