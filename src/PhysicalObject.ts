import DrawComponent from "./components/DrawComponent.js";
import { Component } from "./types.js";

export default class PhysicalObject {
    protected _x: number = 0;
    protected _y: number = 0;
    protected _rotation: number = 0;
    protected _width: number = 1;
    protected _height: number = 1;
    public _components: Component[] = [];

    constructor () {

    }

    public set x(x: number) {
        this._x = x;
    }
    public set y(y: number) {
        this._y = y;
    }
    public get x() {
        return this._x;
    }
    public set rotation(rotation: number) {
        this._rotation = rotation;
    }
    public set width(width: number) {
        this._width = width;
    }
    public set height(height: number) {
        this._height = height;
    }
    public addComponent(component: Component) {
        component.parent = this;
        this._components.push(component);
    }
    public getComponent(component) {
        if (typeof component === "number") {
            return this._components[component]
        }
        return this._components.find((element: Component) => element instanceof component)
    }
}