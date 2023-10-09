import { Container, Col, Row } from 'react-bootstrap';
import './lane.css';

import { DiceValue } from '../../enums';
import { ReactElement } from 'react';
import { UPPER_DISTANCE_BOUNDARY } from '../../constants/distance';

export interface LaneProps {
    dice: DiceValue;
    progress: number;
}

export const Lane = (props: LaneProps) => {
    const { dice, progress } = props;

    /**
     * The amount of laps or in the context of a dice game. The total amount of available dices gets
     * determined by the upper distance boundary (60 = max. d20 * 3)/ the dice value.
     */
    const amountLaps = (dice: DiceValue) => UPPER_DISTANCE_BOUNDARY / dice;

    const fields = (amount: number) => {
        const fields: ReactElement[] = [];

        for (let i = 0; i < amount; i++) {
            fields.push(
                <Col key={`col-${i}-${dice}`}>
                    <div key={`field-${i}-${dice}`} className="field">
                        {i + 1}
                    </div>
                </Col>
            );
        }

        return fields;
    };

    return <Row>{fields(amountLaps(dice))}</Row>;
};
