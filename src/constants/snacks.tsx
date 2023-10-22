import { DiceValue, SnackValue } from '../enums';
import { Snack } from '../types';

export const Snacks: Snack[] = [
    { name: 'Blueberry', value: SnackValue.BLUEBERRY, price: DiceValue.SIX },
    { name: 'Carrot', value: SnackValue.CARROT, price: DiceValue.TEN },
    { name: 'Potato', value: SnackValue.POTATO, price: DiceValue.TWELVE },
    { name: 'Stew', value: SnackValue.STEW, price: DiceValue.TWENTY }
];
