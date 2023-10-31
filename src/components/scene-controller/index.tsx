import { Card } from 'react-bootstrap';

import './scene-controller.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../main';
import { Scenes } from '../../constants';
import { nextScence } from '../../reducer/scene';


/**
 * Scene Controller UI Component.
 * @returns JSX of the rendered Component.
 */
export const SceneController = () => {
    const dispatch: AppDispatch = useDispatch();
    const currentScene = useSelector((state: RootState) => state.scene)

    const handleNextScene = () => {
        dispatch(nextScence);
    }


    return <Card className='scene-controller'>{Scenes[currentScene.currentScene]}</Card>
}