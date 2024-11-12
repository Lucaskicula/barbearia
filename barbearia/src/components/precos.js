import React from 'react';
import '../css/estilo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Prices = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '5542999108838'; // Número do WhatsApp com o código do país
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }
  return (
    <div>
      <main>
        <div id="container">
          <div className="coluna-esquerda">
            <h3>Tabela de Preços</h3>
            <p>
              Na nossa barbearia, sabemos que qualidade não precisa ser sinônimo de preços altos. Por isso, oferecemos  
              <strong> serviços de qualidade a preços acessíveis</strong> para que todos possam cuidar do visual sem precisar 
              gastar muito. Além disso, contamos com formas de pagamento facilitadas para que você possa escolher a opção que 
              mais se adequa ao seu orçamento.
            </p>
            <p>
              Aceitamos cartões de crédito e débito, e também oferecemos opções de parcelamento. Na nossa barbearia, você 
              não precisa se preocupar com preços exorbitantes ou formas de pagamento complicadas. Venha nos visitar e 
              experimente nossos serviços com preços justos e formas de pagamento facilitadas!
            </p>
          </div>

          <div className="coluna-direita">
            <table>
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Corte de Cabelo</td>
                  <td>R$ 40,00</td>
                </tr>
                <tr>
                  <td>Barba Simples</td>
                  <td>R$ 25,00</td>
                </tr>
                <tr>
                  <td>Barba Completa</td>
                  <td>R$ 40,00</td>
                </tr>
                <tr>
                  <td>Cabelo e Barba</td>
                  <td>R$ 70,00</td>
                </tr>
                <tr>
                  <td>Tratamento Capilar</td>
                  <td>R$ 60,00</td>
                </tr>
              </tbody>
            </table>

            <p><strong>Interessado em nossos serviços? Entre em contato conosco e solicite um agendamento.</strong></p>
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

export default Prices;
