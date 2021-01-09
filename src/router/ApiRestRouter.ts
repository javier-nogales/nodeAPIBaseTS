import { Router } from "express";

export default interface ApiRestRouter {
    get(): Router;    
}