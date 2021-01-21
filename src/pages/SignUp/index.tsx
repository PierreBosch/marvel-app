import React from 'react';

import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
      <Container>
          <Background />
          <Content>
              <img src={logo} alt=""/>
              <form action="">
                <h1>Criar sua conta</h1>
                <Input icon={FiUser} name="name" type="text" placeholder="Nome"/>

                <Input icon={FiMail} name="email" type="text" placeholder="E-mail"/>

                <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                <Button type="submit">CADASTRAR</Button>
              </form>

              <a href=""> 
                <FiArrowLeft /> 
                Voltar para login
              </a>
          </Content>
      </Container>
  );
}

export default SignUp;