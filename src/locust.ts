import { Animal } from './animal';
import { Flyable } from './animal';

const FlyableAnimal = Flyable(Animal);

const locust = new FlyableAnimal();
locust.fly();
