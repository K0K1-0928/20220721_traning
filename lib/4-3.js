"use strict";
/**
 * 単純なファクトリー
 */
class Factory {
    /**
     * @param {string} name 生成時に設定する名称
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * 引数に渡された型のインスタンスを生成します。
     *
     * @template 生成する型
     * @param type
     * @returns 型パラメータのインスタンス
     */
    getInstance(type) {
        return new type(this.name);
    }
}
const factory = new Factory('test');
class TypeA {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
console.log(factory.getInstance(TypeA).name);
