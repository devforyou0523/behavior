import { world } from "@minecraft/server";

import "index.js";
import { player1, player2, player3, player4, player5, player6, worldStart, worldReset, memberSet } from "../world/world.js"
import { costSet } from "../gui/costGUI/costGUI.js";


console.warn("commands/commands.js loaded")

world.afterEvents.chatSend.subscribe(({ sender, message }) => {

    console.warn(`player: ${sender.name} sent message: ${message}`)
    console.warn(`initial letter is ${message.slice(0, 1)}`)

    if (message.slice(0, 1) == "!") {
        switch (message.slice(1,)) {
            case "itemSet":
                player1.runCommand(``)
            case "npcSet":
                player1.runCommand(`effect @e[name = 장비구매] instant_health infinite 255 true`)
                player1.runCommand(`effect @e[name = 장비구매] slowness infinite 255 true`)
                player1.runCommand(`tp @e[name = 장비구매] 878.50 66 -727.2`)

                player1.runCommand(`effect @e[name = 작물판매] instant_health infinite 255 true`)
                player1.runCommand(`effect @e[name = 작물판매] slowness infinite 255 true`)
                player1.runCommand(`tp @e[name = 작물판매] 879.50 66 -727.2`)

                player1.runCommand(`effect @e[name = 변명이] instant_health infinite 255 true`)
                player1.runCommand(`effect @e[name = 변명이] slowness infinite 255 true`)
                player1.runCommand(`tp @e[name = 변명이] 840 68 -881`)

                player1.runCommand(`effect @e[name = 꽁드_드_눈사람] instant_health infinite 255 true`)
                player1.runCommand(`effect @e[name = 꽁드_드_눈사람] slowness infinite 255 true`)
                player1.runCommand(`tp @e[name = 꽁드_드_눈사람] 826 68 -881`)

                player1.runCommand(`effect @e[name = 여울이] instant_health infinite 255 true`)
                player1.runCommand(`effect @e[name = 여울이] slowness infinite 255 true`)
                player1.runCommand(`effect @e[name = 여울이] fire_resistance infinite 255 false`)
                player1.runCommand(`effect @e[name = 여울이] water_breathing infinite 255 false`)
                player1.runCommand(`tp @e[name = 여울이] 826 69 -889`)

                break;

            case "worldReset":
                worldReset();
                break;

            case "worldStart":
                worldStart();
                break;

            case "memberSet":
                memberSet();
                break;

            case "costSet":
                costSet();
                break;

            case "member":
                if (player1 == null) {
                    console.warn(`player1 is null`)
                } else {
                    console.warn(`player1 is ${player1.name}`)
                }

                if (player2 == null) {
                    console.warn(`player2 is null`)
                } else {
                    console.warn(`player2 is ${player2.name}`)
                }

                if (player3 == null) {
                    console.warn(`player3 is null`)
                } else {
                    console.warn(`player3 is ${player3.name}`)
                }

                if (player4 == null) {
                    console.warn(`player4 is null`)
                } else {
                    console.warn(`player4 is ${player4.name}`)
                }

                if (player5 == null) {
                    console.warn(`player5 is null`)
                } else {
                    console.warn(`player5 is ${player5.name}`)
                }

                if (player6 == null) {
                    console.warn(`player6 is null`)
                } else {
                    console.warn(`player6 is ${player6.name}`)
                }
                break;


            case "sp":
                sender.runCommand("gamemode spectator")
                break;

            case "h":
                sender.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"명령어 목록: \n!help: 명령어 목록을 보여줍니다.\n!s: 게임모드를 서바이벌로 전환합니다. \n!c: 게임모드를 크리에이티브로 전환합니다. \n!unlock: 새 구역을 잠금해제합니다.\"}]}")
                break;

            case "c":
                sender.runCommand("gamemode c")
                break;

            case "s":
                sender.runCommand("gamemode s")
                break;

            default:
                sender.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c명령어 목록을 확인 후 다시 시도해주세요!\"}]}")
        }
    }


}); 
