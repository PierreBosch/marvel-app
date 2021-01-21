import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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
        transition:all 200ms ease-in-out;

        &:hover {
            background: ${shade(0.2, '#ED1D24')}
        }
    }
`;
