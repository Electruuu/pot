import { DrawTickManager } from "../../dist/tickMachine.js"
import PhysicalObject from "../../dist/PhysicalObject.js"
import DrawComponent from "../../dist/components/DrawComponent.js"

let can = document.getElementById("can")
let tickMachine = new DrawTickManager(can)

let player = new PhysicalObject()
player.addComponent(new DrawComponent({ sprites: null }))
// tickMachine.addComponent(player)
tickMachine.addComponent(player.getComponent(DrawComponent)) 

tickMachine.startTicking()