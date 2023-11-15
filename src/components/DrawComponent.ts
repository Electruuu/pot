import PhysicalObject from "src/PhysicalObject";

type Bitmap = ImageBitmap|ImageBitmap[];

interface DrawComponentConstructor {
    sprites: Bitmap;
}


export default class DrawComponent {
    private _sprites: Bitmap; 
    protected _parent: PhysicalObject;

    constructor(
        {
            sprites
        }: DrawComponentConstructor
    ) {
        
    }

    public set parent(parent: PhysicalObject) {
        this._parent = parent;
    }

    trigger(ctx: CanvasRenderingContext2D) {
        if (this._parent == undefined) return
        // Copied from Bigos 2
        // ctx.save()
        // ctx.translate(
        //     this.x-(window.camera.x*window.canvas.width/100)-32, 
        //     this.y-(window.camera.y*window.canvas.height/100)-32
        // )
        // ctx.scale(this.scale, this.scale)
        // ctx.rotate(this.angle)
        // ctx.globalAlpha = this.alpha
        // for (let i in this.textures) {
        //     ctx.drawImage(
        //         this.textures[i], 
        //         -16+x, 
        //         -16
        //     )
        // }
        // ctx.restore()
        ctx.save()
        ctx.translate(
            this._parent.x,
            this._parent.y
        )
        ctx.fillRect(0, 0, 40, 40)
    }
}