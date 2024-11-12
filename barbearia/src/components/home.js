import React from 'react';
import '../css/estilo.css'; // Importação do CSS para este componente
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '5542999108838'; // Número do WhatsApp com o código do país
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div>
      <main>
        <div id="container">
          <div className="coluna-unica">
            <h1>Bem-vindo a nossa Barbearia!</h1>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Aqui, nós nos esforçamos para oferecer aos nossos clientes uma experiência única e personalizada,
              que vai muito além de simplesmente cortar cabelos e aparar barbas.
            </p>

            <hr />

            <p>
              Nós acreditamos que cuidar da aparência é uma parte essencial do cuidado pessoal. Um bom corte de cabelo
              ou uma barba bem feita não apenas melhoram a sua aparência, mas também aumentam a sua autoconfiança e
              autoestima.
            </p>

            <p>
              Por isso, nossa equipe de profissionais altamente capacitados está sempre atualizada com as últimas
              tendências e técnicas de barbearia. Nós nos dedicamos a entender as necessidades e preferências de cada
              cliente, para oferecer um serviço personalizado e de qualidade.
            </p>

            <p>
              Além disso, aqui no nosso site, você encontrará informações sobre nossos serviços, produtos e valores.
              Nós também oferecemos dicas e truques para cuidados pessoais, para que você possa manter o seu visual
              sempre em dia.
            </p>

            <p>
              Se você está procurando por uma barbearia que ofereça um serviço de alta qualidade, atendimento
              personalizado e produtos de qualidade, você veio ao lugar certo! Navegue pelo nosso site e descubra
              tudo o que temos a oferecer. Estamos ansiosos para cuidar de você e ajudá-lo a se sentir ainda mais
              confiante e bonito!
            </p>

            <button onClick={handleWhatsApp} className="whatsapp-button">
              <i className="fab fa-whatsapp"></i> Fale conosco pelo WhatsApp
            </button>
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

export default Home;
