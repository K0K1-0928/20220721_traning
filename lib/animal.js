"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.Flyable = exports.Cryable = exports.Runnable = void 0;
/** 走る */
function Runnable(Base) {
    return class extends Base {
        run() {
            console.log('Running!');
        }
    };
}
exports.Runnable = Runnable;
/** 鳴く */
function Cryable(Base) {
    return class extends Base {
        cry() {
            console.log('Cring!');
        }
    };
}
exports.Cryable = Cryable;
/** 飛ぶ */
function Flyable(Base) {
    return class extends Base {
        fly() {
            console.log('Flying!');
        }
    };
}
exports.Flyable = Flyable;
class Animal {
}
exports.Animal = Animal;
