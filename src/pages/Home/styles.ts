import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

  h1 {
      font-size: 20px;
      font-family: 'Bangers';
  }

  .basic-single {
      margin-bottom: 24px;
      color: #000;
  }

  width: 100%;
  max-width: 960px;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ListItem = styled.li`
    display: flex;
    position: relative;
    width: 100%;
    height: 270px;
    overflow: hidden;
    cursor: pointer;

    :hover span {
        opacity: 1;
    }

    span {
        align-items: center;
        background-color: rgba(0,0,0,.8);
        color: #fff;
        display: inline-flex;
        font-size: 14px;
        font-weight: bold;
        justify-content: center;
        left: 0;
        opacity: 0;
        padding: 10px;
        position: absolute;
        text-align: center;
        text-decoration: none;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 300ms;
    }
    
    img {
        width: 100%;
    }
`;

export const ResultList = styled.ul`
    width: calc(100%);
    margin:auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: 20px;
    margin-top: 32px;
    background: ${shade(0.5, '#213544')};
    border-radius: 4px;
    padding: 24px;
`;