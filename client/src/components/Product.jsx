import { Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID',
    {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }
  ).format(price);
};

const Product = ({ item }) => {
  return (
    <Container style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      width: '300px',
      margin: '10px',
    }}>
      <Card style={{ width: '18rem'}}>
        <Card.Img style={{
          margin: '10px',
          width: '260px',
          height: '315px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e6f5fa',
        }}
          variant="top" src={item.img} />
        <Card style={{textAlign: 'center'}}>
          <Card.Body>
            <Card.Title> <b>{item.title}</b>
             </Card.Title>
            <Card.Subtitle style={{     paddingBottom: 10 }}>
            <span>{formatRupiah(item.price)}</span>
            </Card.Subtitle>
            <Button variant="primary" href={`/product/${item._id}`} > Selengkapnya
            </Button>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};

export default Product;