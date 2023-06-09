import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeaftNev from '../../Shared/LeftNav/LeaftNev';
import { Outlet } from 'react-router-dom';
import RightNav from '../../Shared/RightNav/RightNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeaftNev></LeaftNev>
                    </Col>
                    <Col lg={6}>
                       <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;