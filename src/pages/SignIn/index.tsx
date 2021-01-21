import React from 'react';

import { Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';

const SignIn: React.FC = () => {
  return (
      <Container>
          <Content>
              <form action="">
                <h1>Faça o login</h1>
                <input type="text" placeholder="E-mail"/>

                <input type="password" placeholder="Senha"/>

                <button type="submit">Entrar</button>
              </form>

              <a href=""> 
                <FiLogIn /> 
                Criar Conta
              </a>
          </Content>
          <Background />
      </Container>
  );
}

export default SignIn;