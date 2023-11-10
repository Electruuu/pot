class PhysicalObject {
    protected _x: number = 0;
    protected _y: number = 0;
    protected _rotation: number = 0;
    protected _width: number = 1;
    protected _height: number = 1;
    protected _modules: Component[];

    constructor () {

    }

    public set x(x: number) {
        this._x = x;
    }
    public set y(y: number) {
        this._y = y;
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
}