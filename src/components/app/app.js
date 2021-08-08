import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components'
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

const Button = styled.button`
        background: rgb(0,1,24);
        background: linear-gradient(0deg, rgba(0,1,24,1) 0%, rgba(89,105,207,1) 93%, rgba(164,168,236,1) 100%);
        border-radius: 3px;
        border: none;
        outline: none;
        color: white;
        margin-bottom: 30px;
        padding: 10px 20px;
`

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        
        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button onClick={this.toggleRandomChar}>Toggle Random Char</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};