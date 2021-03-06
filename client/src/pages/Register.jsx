import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-right: 10%;
  ${mobile({ fontSize: "24px" })}
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border: 1px solid dodgerblue;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Logo>
        <Link
        style={{ color: "dodgerblue", textDecoration: "none" }}
        to="/"> SHINSEGAE </Link>
      </Logo>
      <Wrapper>
        <Title>
          <FontAwesomeIcon icon={faUser} style={{
            marginRight: '15px'
          }} /> BUAT AKUN
        </Title>
        <Form>
          <Input placeholder="Nama" />
          <Input placeholder="Nama Belakang" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Komfirmasi Password" />
          <Agreement>
          Dengan mendaftar, maka Anda setuju dengan <b>Syarat, Ketentuan,</b> & <b>Kebijakan Privasi</b> toko kami
          </Agreement>
          <Button onClick={() => alert('Maaf untuk sementara belum bisa melakukan registrasi - Syntax error 404')} >Sign In</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;