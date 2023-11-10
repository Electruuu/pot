type Bitmap = ImageBitmap|ImageBitmap[];

interface DrawComponentConstructor {
    sprites: Bitmap;
}


class DrawComponent {
    private sprites: Bitmap; 

    constructor(
        {
            sprites
        }: DrawComponentConstructor
    ) {

    }

    trigger(ctx: CanvasRenderingContext2D) {
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
    }
}