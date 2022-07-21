"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const animal_2 = require("./animal");
const animal_3 = require("./animal");
const RunnableAndCryableAnimal = (0, animal_2.Runnable)((0, animal_3.Cryable)(animal_1.Animal));
const tiger = new RunnableAndCryableAnimal();
tiger.run();
tiger.cry();
