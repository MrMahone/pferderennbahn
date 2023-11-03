import { Snacks } from '../constants';
import { Snack } from '../types';

export const isSnackBuyable = (
    credits: number,
    snackToCheck: Snack
): boolean => {
    if (credits - snackToCheck.price < 0) {
        return false;
    } else if (credits - snackToCheck.price === 0) {
        return true;
    }

    return Snacks.map((snack) =>
        isSnackBuyable(credits - snackToCheck.price, snack)
    ).some((value) => value);
};

export const PossibleBuys = (creditsAmount: number): Snack[] => {
    const possibleSnacks: Snack[] = [];

    Snacks.forEach((snack: Snack) => {
        if (isSnackBuyable(creditsAmount, snack)) {
            possibleSnacks.push(snack);
        }
    });

    return possibleSnacks;
};
