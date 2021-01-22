import React, { useCallback, useRef } from 'react';

import { Container, Content, Background } from './styles';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback( async (data:SignUpFormData) => {
      try {
          formRef.current?.setErrors({});
          const signUpSchema = Yup.object().shape({
              name: Yup.string().required("Nome obrigatório"),
              email: Yup.string().required("E-mail obrigatório").email('Digite um e-mail válido'),
              password: Yup.string().min(6, "Senha deve conter no mínimo 6 caracteres")
          });

          await signUpSchema.validate(data, {
              abortEarly: false,
          })

          await api.post('/users', {name: data.name, email: data.email, password: data.password});

          history.push('/');
      } catch (err) {

        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

      }
  }, []);

  return (
      <Container>
          <Background />
          <Content>
              <img src={logo} alt=""/>
              <Form onSubmit={handleSubmit} ref={formRef}>
                <h1>Criar sua conta</h1>
                <Input icon={FiUser} name="name" type="text" placeholder="Nome"/>

                <Input icon={FiMail} name="email" type="text" placeholder="E-mail"/>

                <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                <Button type="submit">CADASTRAR</Button>
              </Form>

              <Link to="/"> 
                <FiArrowLeft /> 
                Voltar para login
              </Link>
          </Content>
      </Container>
  );
}

export default SignUp;