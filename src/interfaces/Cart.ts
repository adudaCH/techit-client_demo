import { Product } from "./Product";

export interface Cart{
    id?: string;
    userId:string;
    products: string[];
    active:boolean;
}