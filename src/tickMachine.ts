import PhysicalObject from "./PhysicalObject";
import DrawComponent from "./components/DrawComponent.js";

export class DrawTickManager {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private drawComponents: DrawComponent[] = [];
    private previousTimeStamp: DOMHighResTimeStamp = 0;
    private shouldTick: boolean;

    constructor (canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    public addComponent(drawComponent: DrawComponent|PhysicalObject) {
        if (drawComponent instanceof DrawComponent)
            this.drawComponents.push(drawComponent);
        else
            this.drawComponents.push(drawComponent.getComponent(DrawComponent))
    }

    public startTicking() {
        this.shouldTick = true;
        this.tick();
    }

    public stopTicking() {
        this.shouldTick = false;
    }

    protected tick = (timestamp: DOMHighResTimeStamp = 0) => {
        let deltaTime = timestamp - this.previousTimeStamp;

        this.drawComponents.forEach((drawComponent: DrawComponent) => {
            drawComponent.trigger(this.ctx);
        })

        this.previousTimeStamp = timestamp;
        window.requestAnimationFrame(this.tick);
    }
}