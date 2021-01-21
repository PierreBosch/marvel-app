import styled from 'styled-components';
import background from '../../assets/images/marvel-background.png';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 860px;

  form {
      margin: 80px 0;
      width: 340px;
      text-align: center;

      h1 {
          margin-bottom: 24px;
          font-family: 'Bangers';
      }

      input {
          background: #F2F2F2;
          border-radius: 10px;
          border: 2px solid #232129;
          padding: 16px 24px;
          width: 100%;
          color: #716975;

          & + input {
              margin-top: 16px;
          }
      }

      button {
        background: #ED1D24;
        border-radius: 10px;
        border: 0;
        padding: 16px;
        width: 100%;
        font-size: 18px;
        padding: 0 16px;
        color: #ffffff;
        text-transform: uppercase;
        height: 56px;
        font-family: 'Bangers';
        letter-spacing: 3px;
        margin-top: 16px;
        transition: 200ms all ease-in-out;

        :hover {
            background: ${darken(0.1, '#ED1D24')}
        }
      }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center, #312E38;
  background-size: cover;
`;
