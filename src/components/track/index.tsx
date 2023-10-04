import { Player } from '..';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';

import './track.css';

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
                    <Row>{players.map((player) => <Col><Card>{player.name}</Card></Col>)}</Row>
                </Container>
            </CardBody>
            </Card>
            
    );
};
