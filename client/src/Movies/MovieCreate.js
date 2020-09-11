import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const StyledForm = styled(Form)`
  width: 500px;
  margin-left: 12.8%;
`;
export default class MovieCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            director: '',
            metascore: '',
            stars: '',
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.starsArray = this.state.stars.split(',');

        let newMovie = {
            title: this.state.title,
            director: this.state.director,
            metascore: Number(this.state.metascore),
            stars: this.starsArray,
        };

        this.setState({ title: '', director: '', metascore: '', stars: '' });

        axios
            .post('http://localhost:5000/api/movies', newMovie)
            .then(response => this.props.updateMovies(response.data))
            .catch(err => console.log('ERROR:', err));

        window.location.replace('/');
    };

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    };

    handleDirectorChange = e => {
        this.setState({ director: e.target.value });
    };

    handleMetascoreChange = e => {
        this.setState({ metascore: e.target.value });
    };

    handleStarsChange = e => {
        this.setState({ stars: e.target.value });
    };

    render() {
        return (
            <StyledForm>
                <FormGroup row>
                    <Label for="Title" sm={2}>
                        Title
          </Label>
                    <Col sm={10}>
                        <Input
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            placeholder="enter title"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Director" sm={2}>
                        Director
          </Label>
                    <Col sm={10}>
                        <Input
                            value={this.state.director}
                            onChange={this.handleDirectorChange}
                            placeholder="enter director"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Metascore" sm={2}>
                        Metascore
          </Label>
                    <Col sm={10}>
                        <Input
                            type="number"
                            value={this.state.metascore}
                            onChange={this.handleMetascoreChange}
                            placeholder="enter metascore"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Stars" sm={2}>
                        Stars
          </Label>
                    <Col sm={10}>
                        <Input
                            value={this.state.stars}
                            onChange={this.handleStarsChange}
                            placeholder="enter stars"
                        />
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={this.handleSubmit}>
                    Submit
        </Button>
            </StyledForm>
        );
    }
}