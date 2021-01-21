import React from 'react';

import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
      <Container>
          <Content>
              <img src={logo} alt=""/>
              <form action="">
                <h1>Faça o login</h1>
                <Input icon={FiMail} name="email" type="text" placeholder="E-mail"/>

                <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                <Button type="submit">Entrar</Button>
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