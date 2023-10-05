import { Player } from '..';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';

import './track.css';
import { Lane } from './lane';

export interface TrackProps {
    players: Player[];
}

export const Track = (props: TrackProps) => {
    const { players } = props;

    return (
        <Card>
            <Card.Header>
                <h2>Race Track</h2>
            </Card.Header>
            <CardBody>
                <Container>
                    {players.map((player) => <Row><Card><Lane dice={player.dice} /></Card></Row>)}
                </Container>
            </CardBody>
            </Card>
            
    );
};
