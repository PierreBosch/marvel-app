import React, { useRef, useCallback} from 'react';

import { Container, Content, Background } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback( async (data:object) => {
      try {
          formRef.current?.setErrors({});
          const signInSchema = Yup.object().shape({
              email: Yup.string().required("E-mail obrigatório").email('Digite um e-mail válido'),
              password: Yup.string().required("Senha é obrigatória")
          });

          await signInSchema.validate(data, {
              abortEarly: false,
          })
      } catch (err) {

        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

      }
  }, []);

  return (
      <Container>
          <Content>
              <img src={logo} alt=""/>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça o login</h1>

                <Input icon={FiMail} name="email" type="text" placeholder="E-mail"/>

                <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                <Button type="submit">Entrar</Button>
              </Form>

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