"use strict";
/**
 * 長方形
 */
class Rectangle {
    /**
     * @param {number} height 横の辺
     * @param {number} width 縦の辺
     */
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.getArea = () => this.height * this.width;
    }
}
/**
 * 円
 */
class Circle {
    /**
     * @param {number} radius 半径
     */
    constructor(radius) {
        this.radius = radius;
        this.getArea = () => Math.pow(this.radius, 2) * Math.PI;
    }
}
/**
 * 図形を格納するコンテナ
 * @template T 図形の型
 */
class Container {
    constructor() {
        this.shapes = [];
    }
    /**
     * @param {T} shape 図形
     */
    push(shape) {
        this.shapes.push(shape);
    }
    /**
     * 最後にpushした要素を取得します。
     * @returns {T | undefined} 先頭の要素。空の場合はundefined。
     */
    pop() {
        return this.shapes.pop();
    }
}
const c1 = new Container();
c1.push(new Rectangle(1, 1));
// c1.push(new Circle(1)); // コンパイルエラー
const c2 = new Container();
c2.push(new Circle(1));
