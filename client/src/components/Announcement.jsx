import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: dodgerblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Promo Spesial - Free Ongkir Untuk Pembelian Diatas Rp 199.000</Container>;
};

export default Announcement;
