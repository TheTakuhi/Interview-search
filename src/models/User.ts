import {Address} from "./Address.ts";
import {Company} from "./Company.ts";

export interface User {
    id: string;
    "name": string,
    "username": string,
    "email": string,
    "address": Address,
    "phone": string,
    "website": string,
    "company": Company
}