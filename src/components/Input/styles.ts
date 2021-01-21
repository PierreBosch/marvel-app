import styled from 'styled-components';

export const Container = styled.div`
    background: #F2F2F2;
    border-radius: 10px;
    border: 2px solid #213544;
    padding: 16px;
    width: 100%;
    color: #716975;
    display: flex;
    align-items: center;

    input {
        flex: 1;
        border: 0;
        background: transparent;
    }

    svg {
        margin-right: 16px;
    }

    & + div {
        margin-top: 16px;
    }
`;
