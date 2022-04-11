import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
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

const Logo = styled.h1``;

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
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
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
      <Center>
        <Title style={{textAlign: "center"}}>Link Lainnya</Title>
        <List style={{textAlign: "center"}}>
        <ListItem style={{ paddingLeft: "100px", color: "dodgerblue", textDecoration: "none" }} > Semua Produk
          </ListItem>
          <ListItem style={{ paddingLeft: "100px", color: "dodgerblue", textDecoration: "none" }} > Sepatu dan Sandal
          </ListItem>
          <ListItem
            style={{ paddingLeft: "100px", color: "dodgerblue", textDecoration: "none" }}> Jaket dan Outfit
          </ListItem>
          <ListItem
            style={{ paddingLeft: "100px", color: "dodgerblue", textDecoration: "none" }} > Berbagai Jenis Tas
          </ListItem>
        </List>
      </Center>
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
        <Payment src="https://manocodes.com/wp-content/uploads/2020/07/Semua-Logo-Pembayaran-Transparant-1024x222.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
