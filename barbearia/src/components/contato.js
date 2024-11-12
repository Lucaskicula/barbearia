import React from 'react';
import '../css/estilo.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contato = () => {
  return (
    <div>
      <main>
        <div id="container">
          
          {/* Coluna Esquerda */}
          <div className="coluna-esquerda">
            <h3>Contato</h3>			
            <p>Se você está interessado em nossos serviços, não hesite em entrar em contato com a nossa equipe de atendimento. Estamos disponíveis para responder a todas as suas perguntas e ajudá-lo a agendar um horário que seja conveniente para você.</p>
            <p>Para solicitar um agendamento, basta preencher o formulário de contato acima ou nos enviar um e-mail. Nossa equipe de atendimento entrará em contato com você o mais breve possível para confirmar o seu agendamento.</p>
            
            <ul>
              <li><FontAwesomeIcon icon={faPhone} /> Telefone - (42) 99999-9999</li>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Endereço - Rua das Tantas, Guarapuava/PR</li>
            </ul>			
			
          </div>
          
          {/* Coluna Direita (Formulário) */}
          <div className="coluna-direita">
            <form action="enviar.php" method="post">
              <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              <div>
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required />
              </div>
              <div>
                <label htmlFor="data">Data de agendamento:</label>
                <input type="date" id="data" name="data" required />
              </div>
              <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" required></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>	
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

export default Contato;
