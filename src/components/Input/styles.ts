import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #F2F2F2;
    border-radius: 10px;
    border: 2px solid #213544;
    padding: 16px;
    width: 100%;
    color: #716975;
    display: flex;
    align-items: center;

    ${props => props.isFocused && css`
        color: #3586C3;
        border-color: #3586C3;
    `}

    ${props => props.isFilled && css`
        color: #3586C3;
    `}

    input {
        flex: 1;
        border: 0;
        color: #5C6D7A;
        background: transparent;
    }

    svg {
        margin-right: 16px;
    }

    & + div {
        margin-top: 16px;
    }
`;
