import { world } from "@minecraft/server"

import "index.js"
import "../gui/index.js";
import { player1 } from "../world/world.js"

console.warn("area/area.js loaded")

export var player1StartX = 764;
export var player1StartZ = -743;
export var player1EndX = 745;
export var player1EndZ = -762;
//764 62 -743, 745 65 -762

export var player2StartX = 884;
export var player2StartZ = -640;
export var player2EndX = 865;
export var player2EndZ = -659;
//884 71 -640, 865 71 -659

export var player3StartX = 764;
export var player3StartZ = -621;
export var player3EndX = 745;
export var player3EndZ = -640;
//764 63 -621, 745 63 -640

export var player4StartX = 656;
export var player4StartZ = -668;
export var player4EndX = 637;
export var player4EndZ = -687;
//656 63 -668, 637 63 -687

export var player5StartX = 979;
export var player5StartZ = -792;
export var player5EndX = 960;
export var player5EndZ = -811;
//979 63 -792, 960 63 -811

export var player6StartX = 891;
export var player6StartZ = -936;
export var player6EndX = 872;
export var player6EndZ = -955;
//891 71 -936, 872 75 -955

export function areaUnlock(startx, startz, endx, endz, areaLevel, player) {

    switch (areaLevel) {
        case 1:
            startx = startx - 0;
            startz = startz + 20;
            endx = endx - 0;
            endz = endz + 20;
            player1.runCommand(`fill ${startx} 60 ${startz - 1} ${endx} 80 ${endz} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)

            break;
        case 2:
            startx = startx - 0 - 20;
            startz = startz + 20;
            endx = endx - 0 - 20;
            endz = endz + 20;
            player1.runCommand(`fill ${startx} 60 ${startz - 1} ${endx + 1} 80 ${endz} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)
            break;
        case 3:
            startx = startx - 0 - 20;
            startz = startz + 20 - 20;
            endx = endx - 0 - 20;
            endz = endz + 20 - 20;
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx + 1} 80 ${endz} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)
            break;
        case 4:
            startx = startx - 0 - 20;
            startz = startz + 20 - 20 - 20;
            endx = endx - 0 - 20;
            endz = endz + 20 - 20 - 20;
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx + 1} 80 ${endz + 1} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)
            break;
        case 5:
            startx = startx - 0 - 20 + 20;
            startz = startz + 20 - 20 - 20;
            endx = endx - 0 - 20 + 20;
            endz = endz + 20 - 20 - 20;
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz + 1} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)
            break;
        case 6:
            startx = startx - 0 - 20 + 20 + 20;
            startz = startz + 20 - 20 - 20;
            endx = endx - 0 - 20 + 20 + 20;
            endz = endz + 20 - 20 - 20;
            player1.runCommand(`fill ${startx - 1} 60 ${startz} ${endx} 80 ${endz + 1} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)
            break;
        case 7:
            startx = startx - 0 - 20 + 20 + 20;
            startz = startz + 20 - 20 - 20 + 20;
            endx = endx - 0 - 20 + 20 + 20;
            endz = endz + 20 - 20 - 20 + 20;
            player1.runCommand(`fill ${startx - 1} 60 ${startz} ${endx} 80 ${endz} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)
            break;
        case 8:
            startx = startx - 0 - 20 + 20 + 20;
            startz = startz + 20 - 20 - 20 + 20 + 20;
            endx = endx - 0 - 20 + 20 + 20;
            endz = endz + 20 - 20 - 20 + 20 + 20;
            player1.runCommand(`fill ${startx - 1} 60 ${startz - 1} ${endx} 80 ${endz} air replace oak_log`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace dirt`)
            player1.runCommand(`fill ${startx} 60 ${startz} ${endx} 80 ${endz} grass_block replace coarse_dirt`)
            break;

    }
    player.runCommand(`playsound random.levelup ${player.name}`)
    player.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"§e⁜${world.scoreboard.getObjective("areaLevel").getScore(player)}번 구역이 해제되었습니다!⁜\"}]}`)

}

