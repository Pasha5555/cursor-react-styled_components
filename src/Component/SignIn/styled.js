import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10px;
    background-color: #15202B;
    text-align: center;
    font-family:  Roboto;
    max-width: 600px;
    margin: 150px auto;
    border: 1px solid #0c0909;
    height: 700px;
`;

export const Header = styled.h2`
    margin-top: -110px;
    color: #fff;
`;
export const Input = styled.input`
    width: 300px;
    height: 35px;
    padding: 2px 3px 2px 7px;
    margin-bottom: 20px;
    border: ${ props => props.emptyInput? '2px solid rgb(85, 85, 151)' : props.border ? '2px solid green' :'2px solid red'};
    color: rgb(85, 85, 151);
    border-radius:3px;
    background: #15202B;;
    border-radius: 5px;
    opacity: 0.7;

`;

export const Label = styled.div`
    margin-right: 215px;
    color: white;
`;

export const CheckBox = styled.input`
    margin-right: 7px;
    margin-top: -10px;
`;

export const Text = styled.span`
    font-size: 13px;
    color: #fff;
`;
export const Button = styled.button`
    margin-top: 25px;
    width: 310px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid grey;
    color: white;
    background-color: rgb(153, 153, 245);
    margin-bottom: 15px;
    cursor: pointer;
`;
export const Txt_forgot = styled.span`
    display: inline;
    margin-right: 5px;
    color: rgb(153, 153, 245);
    font-size: 13px;
`;

export const Link_signUp = styled.span`
    margin-left: 37px;
    font-size: 13px;
    color: rgb(153, 153, 245);
`
export const Footer = styled.div`
    margin-top: 50px;
    color: rgb(139, 137, 145);
    font-size: 85%;
`;

export const Ikon = styled.img`
    width: 20px;
    background-color: pink;
    border-radius: 100px;
    padding: 8px;
    margin: 120px;
`