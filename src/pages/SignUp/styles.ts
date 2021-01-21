import styled from 'styled-components';
import background from '../../assets/images/marvel-background.png';
import { shade } from 'polished';

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
  }

  > a {
    color: #FFF;
    font-family: 'Bangers';
    letter-spacing: 3px;
    display: flex;
    align-items: center;
    transition:all 200ms ease-in-out;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ED1D24')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center, #312E38;
  background-size: cover;
`;
