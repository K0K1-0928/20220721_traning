"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const animal_2 = require("./animal");
const animal_3 = require("./animal");
const CryableAndFlyableAnimal = (0, animal_2.Cryable)((0, animal_3.Flyable)(animal_1.Animal));
const hawk = new CryableAndFlyableAnimal();
hawk.cry();
hawk.fly();
