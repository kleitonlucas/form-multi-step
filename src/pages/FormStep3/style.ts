import styled from "styled-components";

export const Container = styled.div`
    p{
        font-size: 13px;
        color: #B8B8D4;
    }
    h1{
        font-size: 26px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #4B9EBF;
        margin: 30px 0;
    }
    label{
        font-size: 13px;

        input{
            display: block;
            margin-top: 7px;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #11BF9F;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #30698C;
        }
    }
    button{
        background-color: #11BF9F;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;