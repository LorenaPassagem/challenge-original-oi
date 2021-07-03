import styled from 'styled-components';

export const Circles = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 100%;
    
    display: inline-flex;
    justify-content: space-around;
    margin: 2px;
    background-color: var(--color-${(props) => props.color || "gray-light"});
    
`;

export const LabelColor = styled.div``;