import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Joke = props => {
    return (
        <Card>
            <CardTitle><strong>{props.joke.type}</strong></CardTitle>
            <CardText>{props.joke.setup}</CardText>
            <CardText>{props.joke.punchline}</CardText>
        </Card>
    )
}

export default Joke;