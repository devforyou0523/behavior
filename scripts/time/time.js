import { system, world } from "@minecraft/server"

import "index.js"
import "../world/world.js"
import { player1, daycount, addDay } from "../world/world.js"
import { costSet } from "../gui/costGUI/costGUI"


console.warn("time/time.js loaded")

const timeIntervalID = system.runInterval(time, 20);
var nowTime;


function time() {
    nowTime = world.getTimeOfDay();
    // console.warn(`dayCount is ${daycount}`)
    // console.warn(`nowTime is ${nowTime}`)
    
    try {
        world.setTimeOfDay(nowTime - 10)
    } catch (e) {
        world.setTimeOfDay(0)
        addDay();
        player1.runCommand(`tellraw @a {\"rawtext\":[{\"text\":\"${daycount}일차 아침이 되었습니다!\"}]}`)
        costSet();
    }
    
}