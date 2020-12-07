import React, { Component } from 'react';
import data from "./response";
import styled from 'styled-components';

class Ucas extends Component {
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

export default Ucas;

const Container = styled.div``