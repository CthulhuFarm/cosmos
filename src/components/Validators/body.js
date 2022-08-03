import { Card, Row, Col } from "react-bootstrap";

const items = [
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/01.png" },
    { title: "Asset Mantle", text: "Mainnet", url: "/images/homepage/02.png" },
    { title: "Axelar", text: "Mainnet", url: "/images/homepage/03.png" },
    { title: "Crescent", text: "Mainnet", url: "/images/homepage/04.png" },
    { title: "Mainnet", text: "Mainnet", url: "/images/homepage/05.png" },
    { title: "Juno", text: "Mainnet", url: "/images/homepage/04.png" },
    { title: "Nym", text: "Mainnet", url: "/images/homepage/08.png" },
    { title: "OmniFlix", text: "Mainnet", url: "/images/homepage/06.png" },
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/07.png" },
    { title: "Asset Mantle", text: "Mainnet", url: "/images/homepage/12.png" },
    { title: "Axelar", text: "Mainnet", url: "/images/homepage/13.png" },
    { title: "Crescent", text: "Mainnet", url: "/images/homepage/20.png" },
    { title: "Mainnet", text: "Mainnet", url: "/images/homepage/26.png" },
    { title: "Juno", text: "Mainnet", url: "/images/homepage/14.png" },
    { title: "Nym", text: "Mainnet", url: "/images/homepage/15.png" },
    { title: "OmniFlix", text: "Mainnet", url: "/images/homepage/16.png" },
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/17.png" },
    { title: "Asset Mantle", text: "Mainnet", url: "/images/homepage/24.png" },
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/19.png" },
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/23.png" },
]

const Body = () => {
    return (
        <Row className="explorer_bg">
            { items.map((item, i) => (
                <Col className="p-1" md={3} >
                    <div className="item_field">
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="item_img" src={item.url} />
                            <div className="d-flex flex-column">
                                <strong>{item.title}</strong>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    </div>
                </Col>
                
            )) }
        </Row>
    )
}

export default Body