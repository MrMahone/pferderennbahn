import { useSelector } from 'react-redux';
import { RootState } from '../main';
import { StartScene } from './start';

export * from './start';

export const SceneManager = () => {
    const {currentScene} = useSelector((state: RootState) => state.scene)

    const scene = () => {
        switch(currentScene) {
        case 0: 
            return <StartScene/>
        default:
            return <StartScene/>
        }
    }

    return scene();
}
