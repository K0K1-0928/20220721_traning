"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const animal_2 = require("./animal");
const FlyableAnimal = (0, animal_2.Flyable)(animal_1.Animal);
const locust = new FlyableAnimal();
locust.fly();
