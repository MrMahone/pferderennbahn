import { Card } from 'react-bootstrap';
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';

import './scene-controller.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../main';
import { Scenes } from '../../constants';
import { nextScence, previousScence } from '../../reducer/scene';


/**
 * Scene Controller UI Component.
 * @returns JSX of the rendered Component.
 */
export const SceneController = () => {
    const dispatch: AppDispatch = useDispatch();
    const currentScene = useSelector((state: RootState) => state.scene)
    
    /**
     * OnClick handler for the previous scene button.
     */
    const handlePreviesScene = () => {
        dispatch(previousScence());
    }

    /**
     * OnClick handler for the next scene button.
     */
    const handleNextScene = () => {
        dispatch(nextScence());
    }



    return (
        <Card className='scene-controller'>
            <i onClick={handlePreviesScene} className='chevron'>
                <ChevronLeft />
            </i>
                <div className='current-scene'>{Scenes[currentScene.currentScene]}</div>
            <i onClick={handleNextScene}  className='chevron'>
                <ChevronRight />
            </i>
        </Card>
    )
}