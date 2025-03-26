import { system, world } from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui";

import "index.js";
import { player1 } from "../../world/world.js";

console.warn("gui/costGUI/costGUI.js loaded")

export var wheatCost;
export var carrotCost;
export var potatoCost;
export var beetCost;
export var pumpkinCost;
export var watermelonCost;
export var sugarCaneCost;
export var sweetBerryCost;
export var cactusCost;


export function costSet() { //랜덤 가격 생성

    wheatCost = 10; //밀 (10)
    // console.warn(`wheatCost is ${wheatCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 2 5`); //당근 (2~5)
    carrotCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`carrotCost is ${carrotCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 1 6`); //감자 (1~6)
    potatoCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`potatoCost is ${potatoCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 4 10`); //비트 (4~10)
    beetCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`beetCost is ${beetCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 8 17`); //호박 (8~17)
    pumpkinCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`pumpkinCost is ${pumpkinCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 3 8`); //수박 (3~8)
    watermelonCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`watermelonCost is ${watermelonCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 6 13`); //사탕수수 (6~13)
    sugarCaneCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`sugarCaneCost is ${sugarCaneCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 1 2`); //달콤한 열매 (1~2)
    sweetBerryCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`sweetBerryCost is ${sweetBerryCost}`)

    player1.runCommand(`scoreboard players random ${player1.name} randomCost 1 100`); //선인장 (1~100)
    cactusCost = world.scoreboard.getObjective("randomCost").getScore(player1);
    // console.warn(`cactusCost is ${cactusCost}`)

    player1.runCommand(`tellraw @a {\"rawtext\":[{\"text\":\"§2상품 가격이 업데이트 되었습니다!\"}]}`)
    // console.warn(`시세 재설정 완료`)

}

export function costGUI() {
    const form = new ActionFormData()
        .title("오늘의 시세")
        .body(`\n   밀 가격    : ${wheatCost}원\n\n
   당근 가격    : ${carrotCost}원\n\n
   감자 가격    : ${potatoCost}원\n\n
   비트 가격    : ${beetCost}원\n\n
   호박 가격    : ${pumpkinCost}원\n\n
   수박 <조각> 가격    : ${watermelonCost}원\n\n
   사탕수수 가격    : ${sugarCaneCost}원\n\n
   달콤한 열매 가격    : ${sweetBerryCost}원\n\n
   선인장 가격    : ${cactusCost}원\n\n`)
        .button(`닫기`)

    form.show(player1).then(r => {
        if (r.selection == 0) {            
        }
    })

}