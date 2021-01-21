import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    cursor: pointer;
    
    span {
        width: 160px;
        background: #3586C3;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 400ms;
        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        visibility: hidden;

        &::before {
            content: '';
            border-style: solid;
            border-color: #3586C3 transparent;
            border-width: 6px 6px 0 6px;
            bottom: 20px;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover span {
       opacity: 1; 
       visibility: visible;
    }
`;