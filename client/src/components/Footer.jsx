import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Telegram,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    margin-top: 30px;
    width: 85%;
    height: 75px;
    cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Link
              style={{ color: "dodgerblue", textDecoration: "none" }}
              to="/"> SHINSEGAE </Link>
        </Logo>
        <Desc style={{textAlign: "justify", fontWeight: "bold"}}>
          Toko kami berfokus dibidang penjualan produk pakaian remaja masa kini, sepatu serta beberapa aksesoris lainnya. Kami berusaha untuk mengutamakan kepuasan pelanggan, serta berusaha mempermudah para konsumen untuk mendapatkan produk-produk terbaik yang mereka inginkan.
        </Desc>
        <SocialContainer style={{marginTop:"10px"}}>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E1306C">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="229ED9">
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right>
        <Title>Kontak Personal</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Lampung Timur, Lampung, Indonesia 34385
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +62 123 4567 8900
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> shinsegae@test-shop.com
        </ContactItem>
        <Payment src="https://sundaweb.co.id/wp-content/uploads/2021/03/Semua-Logo-Pembayaran-Transparant-1024x222-1.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
