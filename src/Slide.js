import React, { useState } from 'react'
import {
    Container,
    Col,
    Navbar,
    Nav,
    Row,
    Media,
    NavLink
} from 'reactstrap';

class Slide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        this.setState({ ...this.state, index: params.page });
    }

    render() {
        let path = "assets/img/presentation/" + this.state.index + ".jpg";
        return (
            <Container fluid className="p-0">
                <Col noGutters>
                    <Navbar dark color="dark">
                        <Nav>
                            <NavLink href="#">Link</NavLink>
                            <NavLink href="#">Link</NavLink>
                        </Nav>
                    </Navbar>
                </Col>
                <Col noGutters>
                    <img src={path} className="fit-image img-responsive" />
                </Col>
            </Container>
        )
    }
}

export default Slide;