import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
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

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

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

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }

    svg {
        margin: 0;
    }
`;