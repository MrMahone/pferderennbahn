import { Snack } from ".";

export type Player = {
    index:number,
    name: string,
    credits:number,
    inventory:Snack[]
};