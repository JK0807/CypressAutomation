import {Container} from "inversify";
import { SauceSymbol } from "./sauce.symbols";
import { sauceEcommerce } from "../ui-components/sauce-components";
import { Isauce } from "../models/interface";

export const sauceContainer=new Container();
sauceContainer
.bind<Isauce>(SauceSymbol.Isauce).to(sauceEcommerce);