import { Animal } from './animal';
import { Runnable } from './animal';
import { Cryable } from './animal';

const RunnableAndCryableAnimal = Runnable(Cryable(Animal));

const tiger = new RunnableAndCryableAnimal();
tiger.run();
tiger.cry();
