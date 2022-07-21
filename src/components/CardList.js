import React from "react";
import { Row, Col } from 'react-bootstrap';
import CardItem from "./CardItem";
import image from "../assets/akatsui5.jpg";


const dummyProducts = [
    {
        id: 0,
        title: "Akatsuki",
        price: "20000",
        description: "Wahuyyy",
        image: image,
    },
    {
        id:1,
        title: "Produk B",
        price: "20000",
        description: "Wahuyyy",
        image: image,
    },
    {
        id: 2,
        title: "PAIN",
        price: "20000",
        description: "Wahuyyy",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/494d65d3-3b70-4f89-b274-76bc7fd5e470/df0upot-78092794-d971-4d5e-a2e0-452328ba11bc.png/v1/fill/w_1280,h_1795,q_80,strp/akatsuki_pain_yahiko_by_tokyosaiyan_df0upot-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5NGQ2NWQzLTNiNzAtNGY4OS1iMjc0LTc2YmM3ZmQ1ZTQ3MFwvZGYwdXBvdC03ODA5Mjc5NC1kOTcxLTRkNWUtYTJlMC00NTIzMjhiYTExYmMucG5nIiwiaGVpZ2h0IjoiPD0xNzk1Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDk0ZDY1ZDMtM2I3MC00Zjg5LWIyNzQtNzZiYzdmZDVlNDcwXC90b2t5b3NhaXlhbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.JsqlWPQv1ny_7EQw7YBk_fJh7GHJM4H29LUW2JJkBug",
    },
]

function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
            {dummyProducts.map((product) => (
                <Col key={product.id}>
                    <CardItem item={product} />
                </Col>
            ) )}
        </Row>
    );
}

export default CardList;