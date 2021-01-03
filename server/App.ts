import express from 'express';

export default class App {

    private app:express.Application;

    constructor() {
        this.app = express.application;
    }

}