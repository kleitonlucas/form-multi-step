import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0;
    cursor: pointer;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    border: 1px solid #4B9EBF;
    border-left: none;
    border-top: none;
    border-radius: 50px;
    padding: 20px
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #EEE;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #B8B8D4;
`;

export const IconArea = styled.div<{active: boolean;}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props=>props.active ? '#11BF9F' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EEE;
`;

export const BarraIconInfo = styled.div`
    height: 1px;
    background-color: #4B9EBF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
`;

export const Point = styled.div<{active: boolean;}>`
    width: 12px;
    height: 12px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-right: -6px;
    background-color: ${props=>props.active ? '#11BF9F' : '#30698C'};
`;