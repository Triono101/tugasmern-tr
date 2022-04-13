import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 375px;
  background-color: #e6f5fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 20px;
  color: dodgerblue;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: 1px solid #1d80e0;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #1d80e0;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #1e90ff;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc><i>"Dapatkan pembaruan Email untuk informasi penawaran produk kami"</i></Desc>
      <InputContainer>
        <Input placeholder="Masukkan Email Anda ..." />
        <Button>
          <Send 
            onClick={() => alert('MAAF! Untuk saat ini belum bisa menerima Email pembaruan - Syntax error 404')}/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;