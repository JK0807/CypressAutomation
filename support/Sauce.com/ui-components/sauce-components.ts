import { Isauce } from "../models/interface";

export class sauceEcommerce implements Isauce{
    login(username: string, password: string): void {
        cy.get('#user-name').type(username)
        
    }
}