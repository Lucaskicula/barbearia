import React from 'react';
import '../css/estilo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '5542999108838'; // Número do WhatsApp com o código do país
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }
  return (
    <div>
      <main>
        <div id="container">
          <div className="coluna-esquerda">
            <h3>Sobre Nós</h3>
            <p>
              <strong>Bem-vindo à nossa barbearia!</strong> Nós oferecemos um serviço de alta qualidade e
              personalizado, que vai além do simples corte de cabelo e aparar barbas. Nossa equipe altamente
              capacitada está sempre atualizada com as últimas tendências e técnicas de barbearia, oferecendo
              um serviço de qualidade que atende às necessidades e preferências de cada cliente.
            </p>
            <p>
              Além disso, valorizamos o relacionamento com nossos clientes e criamos um ambiente acolhedor e
              amigável, onde você possa relaxar e se sentir em casa. Oferecemos uma ampla gama de produtos de
              barbearia, cuidadosamente selecionados para garantir a qualidade e eficácia. Venha nos visitar e
              experimente o melhor em serviços de barbearia. Estamos ansiosos para cuidar de você!
            </p>
            <button onClick={handleWhatsApp} className="whatsapp-button">
              <i className="fab fa-whatsapp"></i> Fale conosco pelo WhatsApp
            </button>
          </div>

          <div className="coluna-direita">
            <img src="/imagens/sobre.jpg" alt="Sobre nós" style={{ maxWidth: '100%' }} />
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

export default About;
