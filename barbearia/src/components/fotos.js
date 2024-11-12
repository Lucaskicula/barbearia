import React, { useState } from 'react';
import '../css/estilo.css';

const Photos = () => {
  const [modalImg, setModalImg] = useState('');

  const openModal = (src) => {
    setModalImg(src);
  };

  const closeModal = () => {
    setModalImg('');
  };

  return (
    <div>
      <main>
        <div id="container">
          <div className="coluna-unica">
            <h1>Galeria de Fotos</h1> <br></br>

            <div className="gallery">
              <img
                src="imagens/foto1.jpg"
                alt="Foto 1"
                onClick={() => openModal('imagens/foto1.jpg')}
              />
              <img
                src="imagens/foto2.jpg"
                alt="Foto 2"
                onClick={() => openModal('imagens/foto2.jpg')}
              />
              <img
                src="imagens/foto3.jpg"
                alt="Foto 3"
                onClick={() => openModal('imagens/foto3.jpg')}
              />
              <img
                src="imagens/foto4.jpg"
                alt="Foto 4"
                onClick={() => openModal('imagens/foto4.jpg')}
              />
              <img
                src="imagens/foto5.jpg"
                alt="Foto 5"
                onClick={() => openModal('imagens/foto5.jpg')}
              />
            </div>

            {modalImg && (
              <div id="myModal" className="modal">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <img className="modal-content" src={modalImg} alt="Imagem Modal" />
              </div>
            )}
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>Sobre Nós</h3>
            <p>Somos uma barbearia dedicada a oferecer um atendimento de qualidade, com profissionais qualificados e
               um ambiente acolhedor. Nosso objetivo é realçar a confiança e a autoestima de cada cliente.</p>
          </div>
          <div className="footer-column">
            <h3>Atendimento</h3>
            <p>Seg - Sex: 9:00 - 19:00</p>
            <p>Sábado: 9:00 - 15:00</p>
            <p>Domingo: Fechado</p>
          </div>
          <div className="footer-column">
            <h3>Localização</h3>
            <p>Rua Exemplo, 123</p>
            <p>Bairro, Cidade - Estado</p>
            <p>CEP: 12345-678</p>
          </div>
          <div className="footer-column">
            <h3>Contato</h3>
            <p>Telefone: (11) 1234-5678</p>
            <p>Email: contato@kibeleza.com.br</p>
            <p>WhatsApp: <a href={`https://wa.me/5542999108838`} target="_blank" rel="noopener noreferrer">Clique aqui</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Photos;
