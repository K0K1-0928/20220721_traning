import { Animal } from './animal';
import { Cryable } from './animal';
import { Flyable } from './animal';

const CryableAndFlyableAnimal = Cryable(Flyable(Animal));

const hawk = new CryableAndFlyableAnimal();
hawk.cry();
hawk.fly();
