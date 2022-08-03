import { Card, Row, Col } from "react-bootstrap";

const items = [
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/Path 401.png" },
    { title: "Asset Mantle", text: "Mainnet", url: "/images/homepage/Image 10.png" },
    { title: "Axelar", text: "Mainnet", url: "/images/homepage/Image 11.png" },
    { title: "Crescent", text: "Mainnet", url: "/images/homepage/Image 12.png" },
    { title: "Mainnet", text: "Mainnet", url: "/images/homepage/Image 13.png" },
    { title: "Juno", text: "Mainnet", url: "/images/homepage/Image 14.png" },
    { title: "Nym", text: "Mainnet", url: "/images/homepage/Image 15.png" },
    { title: "OmniFlix", text: "Mainnet", url: "/images/homepage/Image 16.png" },
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/Path 401.png" },
    { title: "Asset Mantle", text: "Mainnet", url: "/images/homepage/Image 10.png" },
    { title: "Axelar", text: "Mainnet", url: "/images/homepage/Image 11.png" },
    { title: "Crescent", text: "Mainnet", url: "/images/homepage/Image 12.png" },
    { title: "Mainnet", text: "Mainnet", url: "/images/homepage/Image 13.png" },
    { title: "Juno", text: "Mainnet", url: "/images/homepage/Image 14.png" },
    { title: "Nym", text: "Mainnet", url: "/images/homepage/Image 15.png" },
    { title: "OmniFlix", text: "Mainnet", url: "/images/homepage/Image 16.png" },
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/Path 401.png" },
    { title: "Asset Mantle", text: "Mainnet", url: "/images/homepage/Image 10.png" },
    { title: "Axelar", text: "Mainnet", url: "/images/homepage/Image 11.png" },
    { title: "Crescent", text: "Mainnet", url: "/images/homepage/Image 12.png" },
    { title: "Mainnet", text: "Mainnet", url: "/images/homepage/Image 13.png" },
    { title: "Juno", text: "Mainnet", url: "/images/homepage/Image 14.png" },
    { title: "Nym", text: "Mainnet", url: "/images/homepage/Image 15.png" },
    { title: "OmniFlix", text: "Mainnet", url: "/images/homepage/Image 16.png" },
    { title: "AgoricAgoric", text: "Mainnet", url: "/images/homepage/Path 401.png" },
    { title: "Asset Mantle", text: "Mainnet", url: "/images/homepage/Image 10.png" },
    { title: "Axelar", text: "Mainnet", url: "/images/homepage/Image 11.png" },
    { title: "Crescent", text: "Mainnet", url: "/images/homepage/Image 12.png" },
    { title: "Mainnet", text: "Mainnet", url: "/images/homepage/Image 13.png" },
    { title: "Juno", text: "Mainnet", url: "/images/homepage/Image 14.png" },
    { title: "Nym", text: "Mainnet", url: "/images/homepage/Image 15.png" },
    { title: "OmniFlix", text: "Mainnet", url: "/images/homepage/Image 16.png" },
]

const Body = () => {
    return (
        <div className="container body">
            <p className="text">Best Cosmos Based Network Explorers</p>
            <Row className="explorer_bg">
                { items.map((item, i) => (
                    <Col className="p-1" md={3}>
                        <div className="d-flex justify-content-center align-items-center item_field">
                            <img className="item_img" src={item.url} />
                            <div className="d-flex flex-column">
                                <strong>{item.title}</strong>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    </Col>
                )) }
            </Row>
        </div>
    )
}

export default Body