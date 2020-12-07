import React, { Component } from 'react';
import data from "./response";
import styled from 'styled-components';

class Calc extends Component {
	render() {
		return (
        <Container>
                        {
                            data.map((courses, i) => {
                                return (
                                        <p key={i}>{courses}</p>
                                );
                            })
                        }
        </Container>
        );
    }
}

export default Calc;

const Container = styled.div``