/* eslint-disable @typescript-eslint/no-explicit-any */
type Constructor<T = Record<never, never>> = new (...args: any[]) => T;

/** 走る */
export function Runnable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    run() {
      console.log('Running!');
    }
  };
}

/** 鳴く */
export function Cryable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    cry() {
      console.log('Cring!');
    }
  };
}

/** 飛ぶ */
export function Flyable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    fly() {
      console.log('Flying!');
    }
  };
}

export class Animal {}
