// 1. IMPORTAÇÕES COM O CAMINHO CORRETO (Dentro de componentes/imagens)
import imgAbs from './componentes/imagens/abs.png';
import imgAtu from './componentes/imagens/atu.png';
import imgBand from './componentes/imagens/band.png';
import imgBie from './componentes/imagens/bie.png';
import imgCaboEmb from './componentes/imagens/cabo_emb.png';
import imgCabo from './componentes/imagens/cabo.png';
import imgCilindro from './componentes/imagens/cilindro.png';
import imgCoifa from './componentes/imagens/coifa.png';
import imgCoxim from './componentes/imagens/coxim.png';
import imgCubo from './componentes/imagens/cubo.png';
import imgDisco from './componentes/imagens/disco.png';
import imgEixo from './componentes/imagens/eixo.jpg';
import imgEmbr from './componentes/imagens/embr.jpg';
import imgHomoc from './componentes/imagens/homoc.png';
import imgMola from './componentes/imagens/mola.png';
import imgOleoTrans from './componentes/imagens/oleo_trasmissao.png';
import imgOleo from './componentes/imagens/oleo.jpg';
import imgPastilha from './componentes/imagens/pastilha.png';
import imgPinca from './componentes/imagens/pinca.jpg';
import imgPivo from './componentes/imagens/pivo.png';
import imgRolamento from './componentes/imagens/rolamento.png';
import imgSapata from './componentes/imagens/sapata.png';
import imgServo from './componentes/imagens/servo.png';
import imgTambor from './componentes/imagens/tambor.png';
import imgTerminal from './componentes/imagens/terminal.jpg';
import imgTrambulador from './componentes/imagens/trambulador.png';
import imgTras from './componentes/imagens/tras.png';
import imgTulipa from './componentes/imagens/tulipa.png';
import imgVolante from './componentes/imagens/volante_motor.png';

// 2. EXPORTAÇÃO DO ARRAY COM OS 30 ITENS
export const produtos = [
  // --- FRENAGEM (10 itens) ---
  { id: 1, nome: "Disco de Freio", categoria: "Frenagem", preco: 289.90, imagem: imgDisco, descricao: "Disco ventilado de alta performance.", emPromocao: true },
  { id: 2, nome: "Pastilha de Freio", categoria: "Frenagem", preco: 145.00, imagem: imgPastilha, descricao: "Cerâmica para frenagem silenciosa.", emPromocao: false },
  { id: 3, nome: "Fluido de Freio", categoria: "Frenagem", preco: 55.00, imagem: imgOleo, descricao: "Fluido DOT 4 de alta resistência.", emPromocao: false },
  { id: 4, nome: "Cilindro Mestre", categoria: "Frenagem", preco: 310.00, imagem: imgCilindro, descricao: "Pressão hidráulica precisa.", emPromocao: false },
  { id: 5, nome: "Sensor ABS", categoria: "Frenagem", preco: 215.00, imagem: imgAbs, descricao: "Sensor de velocidade eletrônico.", emPromocao: true },
  { id: 6, nome: "Pinça de Freio", categoria: "Frenagem", preco: 380.00, imagem: imgPinca, descricao: "Componente original de fábrica.", emPromocao: false },
  { id: 7, nome: "Sapata de Freio", categoria: "Frenagem", preco: 120.00, imagem: imgSapata, descricao: "Kit para freio traseiro.", emPromocao: false },
  { id: 8, nome: "Tambor de Freio", categoria: "Frenagem", preco: 240.00, imagem: imgTambor, descricao: "Par de tambores traseiros.", emPromocao: false },
  { id: 9, nome: "Cabo de Freio", categoria: "Frenagem", preco: 75.00, imagem: imgCabo, descricao: "Aço galvanizado reforçado.", emPromocao: false },
  { id: 10, nome: "Servo Freio", categoria: "Frenagem", preco: 420.00, imagem: imgServo, descricao: "Sistema de auxílio hidrovácuo.", emPromocao: false },

  // --- SUSPENSÃO (10 itens) ---
  { id: 11, nome: "Amortecedor Dianteiro", categoria: "Suspensão", preco: 450.00, imagem: imgTras, descricao: "Pressurizado a gás.", emPromocao: false },
  { id: 12, nome: "Mola Helicoidal", categoria: "Suspensão", preco: 220.00, imagem: imgMola, descricao: "Aço temperado de alta carga.", emPromocao: true },
  { id: 13, nome: "Bandeja de Suspensão", categoria: "Suspensão", preco: 340.00, imagem: imgBand, descricao: "Completa com buchas inclusas.", emPromocao: false },
  { id: 14, nome: "Pivô de Suspensão", categoria: "Suspensão", preco: 95.00, imagem: imgPivo, descricao: "Articulação de alta resistência.", emPromocao: false },
  { id: 15, nome: "Bieleta", categoria: "Suspensão", preco: 55.00, imagem: imgBie, descricao: "Estabilização lateral.", emPromocao: true },
  { id: 16, nome: "Coxim Amortecedor", categoria: "Suspensão", preco: 135.00, imagem: imgCoxim, descricao: "Com rolamento superior.", emPromocao: false },
  { id: 17, nome: "Cubo de Roda", categoria: "Suspensão", preco: 275.00, imagem: imgCubo, descricao: "Furação original 4 furos.", emPromocao: false },
  { id: 18, nome: "Rolamento Roda", categoria: "Suspensão", preco: 160.00, imagem: imgRolamento, descricao: "Blindagem dupla contra sujeira.", emPromocao: false },
  { id: 19, nome: "Terminal Direção", categoria: "Suspensão", preco: 88.00, imagem: imgTerminal, descricao: "Alinhamento preciso.", emPromocao: false },
  { id: 20, nome: "Amortecedor Traseiro", categoria: "Suspensão", preco: 410.00, imagem: imgTras, descricao: "Máximo conforto e estabilidade.", emPromocao: false },

  // --- TRANSMISSÃO (10 itens) ---
  { id: 21, nome: "Kit Embreagem", categoria: "Transmissão", preco: 890.00, imagem: imgEmbr, descricao: "Platô, disco e rolamento.", emPromocao: true },
  { id: 22, nome: "Junta Homocinética", categoria: "Transmissão", preco: 220.00, imagem: imgHomoc, descricao: "Transmissão de torque suave.", emPromocao: false },
  { id: 23, nome: "Volante Motor", categoria: "Transmissão", preco: 1450.00, imagem: imgVolante, descricao: "Peça forjada em aço.", emPromocao: false },
  { id: 24, nome: "Tulipa Câmbio", categoria: "Transmissão", preco: 195.00, imagem: imgTulipa, descricao: "Conexão lado câmbio.", emPromocao: true },
  { id: 25, nome: "Atuador Embreagem", categoria: "Transmissão", preco: 260.00, imagem: imgAtu, descricao: "Sistema hidráulico suave.", emPromocao: false },
  { id: 26, nome: "Cabo Embreagem", categoria: "Transmissão", preco: 85.00, imagem: imgCaboEmb, descricao: "Modelo auto-ajustável.", emPromocao: false },
  { id: 27, nome: "Semieixo Completo", categoria: "Transmissão", preco: 750.00, imagem: imgEixo, descricao: "Pronto para instalação.", emPromocao: false },
  { id: 28, nome: "Coifa Homocinética", categoria: "Transmissão", preco: 35.00, imagem: imgCoifa, descricao: "Proteção contra impurezas.", emPromocao: false },
  { id: 29, nome: "Trambulador", categoria: "Transmissão", preco: 210.00, imagem: imgTrambulador, descricao: "Precisão na troca de marchas.", emPromocao: false },
  { id: 30, nome: "Óleo Transmissão", categoria: "Transmissão", preco: 58.00, imagem: imgOleoTrans, descricao: "Lubrificante sintético 75W80.", emPromocao: false },
];