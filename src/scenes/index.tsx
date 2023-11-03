import { useSelector } from 'react-redux';
import { RootState } from '../main';
import { StartScene } from './start';
import { GameScene } from './game';
import { EndScene } from './end';
import { MarketScene } from './market';

export * from './start';

export const SceneManager = () => {
    const {currentScene} = useSelector((state: RootState) => state.scene)

    const scene = () => {
        switch(currentScene) {
            case 0: 
                return <StartScene/>
            case 1: 
                return <MarketScene/>
            case 2: 
                return <GameScene/>
            case 3: 
                return <EndScene/>
            default:
                return <StartScene/>
        }
    }

    return scene();
}
