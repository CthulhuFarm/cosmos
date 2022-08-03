import { Row, Col, Card } from "react-bootstrap";

const items = [
    { text: "Height", num: '1,887,12', url: "/images/validators/4.png" },
    { text: "Bonded Tokens", num: '2,828,215,232', url: "/images/validators/5.png" },
    { text: "Validators", num: '100/15', url: "/images/validators/3.png" },
    { text: "Block Time", num: '10.60s', url: "/images/validators/2.png" },
]

const ValidatorsItem = () => {
    return (
        <div className="validatorsItem">
            <div className="d-flex align-items-center mb-3 mt-5">
                <img className="validators_icon" src='/images/validators/1.png' />
                <strong className="validators_title">VALIDATORS</strong>
            </div>
            <Row>
                { items.map((item, i) => (
                    <Col className="mb-2" md={3} key={i}>
                        <Card className="validators_card">
                            <Card.Header>{item.text}</Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center card_body">
                                    <div>{item.num}</div>
                                    <div className="validators_icon_field">
                                        <img className="validators_icon1" src={item.url} />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )) }
                
            </Row>
        </div>
    )
}

export default ValidatorsItem