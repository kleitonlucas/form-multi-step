import styled from "styled-components";

export const Container = styled.div<{selected: boolean;}>`
    border: 2px solid ${props=>props.selected ? '#11BF9F' : '#B8B8D4'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover{
        border: 2px solid #11BF9F;
    }
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
`;