class DrawTickManager {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private drawObjects: DrawComponent[];
    private previousTimeStamp: DOMHighResTimeStamp;
    private shouldTick: boolean;

    constructor (canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    public addComponent(drawComponent: DrawComponent) {
        this.drawObjects.push(drawComponent);
    }

    public startTicking() {
        this.shouldTick = true;
        this.tick();
    }

    public stopTicking() {
        this.shouldTick = false;
    }

    protected tick(timestamp: DOMHighResTimeStamp = 0) {
        const deltaTime = timestamp - this.previousTimeStamp;

        this.drawObjects.forEach((drawComponent: DrawComponent) => {
            drawComponent.trigger(this.ctx);
        })

        this.previousTimeStamp = timestamp;
        window.requestAnimationFrame(this.tick);
    }
}