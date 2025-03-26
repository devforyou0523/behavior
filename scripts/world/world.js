import { system, world } from "@minecraft/server"

import "index.js"
import "../area/area.js"
import "../commands/commands.js"
import "../gui/guestGUI/guestGUI.js"
import "../enchant/enchant.js"


console.warn("players/players.js loaded")

var member = world.getAllPlayers();

export var isWorldRunning = "§4서버 작동 오류§r";

export var player1 = member[0];
export var player2 = member[1];
export var player3 = member[2];
export var player4 = member[3];
export var player5 = member[4];
export var player6 = member[5];

export var player1Name;
export var player2Name;
export var player3Name;
export var player4Name;
export var player5Name;
export var player6Name;

export var daycount = 0;

export function addDay () {
    daycount = daycount+1;
}

worldStart(); //삭제 필요



export function worldStart() {

    member = world.getAllPlayers();
    player1 = member[0];
    player2 = member[1];
    player3 = member[2];
    player4 = member[3];
    player5 = member[4];
    player6 = member[5];

    if (player1 == null) { //플레이어6인 확인, 태그, 이름 부여
        console.warn(`player1 is null`)
        player1Name = "null";
    } else {
        console.warn(`player1 is ${player1.name}`)
        player1Name = player1.name;
        player1.runCommand(`tag @s add player1`)
    }

    if (player2 == null) {
        console.warn(`player2 is null`)
        player2Name = "null";
    } else {
        console.warn(`player2 is ${player2.name}`)
        player2Name = player2.name;
        player2.runCommand(`tag @s add player2`)
    }

    if (player3 == null) {
        console.warn(`player3 is null`)
        player3Name = "null";
    } else {
        console.warn(`player3 is ${player3.name}`)
        player3Name = player3.name;
        player3.runCommand(`tag @s add player3`)
    }

    if (player4 == null) {
        console.warn(`player4 is null`)
        player4Name = "null";
    } else {
        console.warn(`player4 is ${player4.name}`)
        player4Name = player4.name;
        player4.runCommand(`tag @s add player4`)
    }

    if (player5 == null) {
        console.warn(`player5 is null`)
        player5Name = "null";
    } else {
        console.warn(`player5 is ${player5.name}`)
        player5Name = player5.name;
        player5.runCommand(`tag @s add player5`)
    }

    if (player6 == null) {
        console.warn(`player6 is null`)
        player6Name = "null";
    } else {
        console.warn(`player6 is ${player6.name}`)
        player6Name = player6.name;
        player6.runCommand(`tag @s add player6`)
    }

    //초기 scoreboard 생성,초기화

    player1.runCommand(`scoreboard objectives add areaLevel dummy areaLevel`) //구역해금 레벨
    player1.runCommand(`scoreboard players set @a areaLevel 1`)
    player1.runCommand(`scoreboard objectives setdisplay list areaLevel`) //삭제필요

    player1.runCommand(`scoreboard objectives add money dummy money`) //돈
    player1.runCommand(`scoreboard players set @a money 0`)
    player1.runCommand(`scoreboard objectives setdisplay sidebar money`) //삭제필요

    player1.runCommand(`scoreboard players set snu0523 money 50000`) //삭제필요

    player1.runCommand(`scoreboard objectives add enchantPercent dummy enchantPercent`) // 강화 난수 반환 스코어보드

    player1.runCommand(`scoreboard objectives add luckyDrawPercent dummy luckyDrawPercent`) // 오늘의 운세 난수 반환 스코어보드

    player1.runCommand(`scoreboard objectives add randomCost dummy randomCost`) // 랜덤 가격 지정 스코어보드

    world.setTimeOfDay(23980) //월드 시간 0으로 초기화
    daycount = 0; //날짜 초기화
    

    console.warn("worldStart function loaded")
    isWorldRunning = "§2서버 작동 정상§r"

}

export function worldReset() {

    //기존 scoreboard 삭제

    player1.runCommand(`scoreboard objectives remove areaLevel`) //구역해금 레벨

    player1.runCommand(`scoreboard objectives remove money`) //돈

    player1.runCommand(`scoreboard objectives remove enchantPercent`) // 강화 난수 반환 스코어보드

    player1.runCommand(`scoreboard objectives remove luckyDrawPercent`) // 오늘의 운세 난수 반환 스코어보드

    player1.runCommand(`scoreboard objectives remove randomCost`) // 랜덤 가격 지정 스코어보드

    //플레이어6인 태그 삭제(runInterval을 통한 삭제 함수 반복)

    let tagRemoveStack = 0;
    let tag1RemoveIntervalID;
    let tag2RemoveIntervalID;
    let tag3RemoveIntervalID;
    let tag4RemoveIntervalID;
    let tag5RemoveIntervalID;
    let tag6RemoveIntervalID;

    if (player1 == null) {
        console.warn(`player1 is null`);
    } else {
        console.warn(`player1 is ${player1.name}`);
        tag1RemoveIntervalID = system.runInterval(() => tagRemove(player1, tag1RemoveIntervalID), 1);

        if (player2 == null) {
            console.warn(`player2 is null`)
        } else {
            console.warn(`player2 is ${player2.name}`);
            tag2RemoveIntervalID = system.runInterval(() => tagRemove(player2, tag2RemoveIntervalID), 1);

            if (player3 == null) {
                console.warn(`player3 is null`)
            } else {
                console.warn(`player3 is ${player3.name}`);
                tag3RemoveIntervalID = system.runInterval(() => tagRemove(player3, tag3RemoveIntervalID), 1);

                if (player4 == null) {
                    console.warn(`player4 is null`)
                } else {
                    console.warn(`player4 is ${player4.name}`);
                    tag4RemoveIntervalID = system.runInterval(() => tagRemove(player4, tag4RemoveIntervalID), 1);

                    if (player5 == null) {
                        console.warn(`player5 is null`)
                    } else {
                        console.warn(`player5 is ${player5.name}`);
                        tag5RemoveIntervalID = system.runInterval(() => tagRemove(player5, tag5RemoveIntervalID), 1);

                        if (player6 == null) {
                            console.warn(`player6 is null`)
                        } else {
                            console.warn(`player6 is ${player6.name}`);
                            tag6RemoveIntervalID = system.runInterval(() => tagRemove(player6, tag6RemoveIntervalID), 1);
                        }
                    }
                }
            }
        }
    }

    function tagRemove(player, IntervalID) { //태그 삭제 함수
        let playerTag = player.getTags();

        console.warn(`tagNumber is ${tagRemoveStack}`);

        if (playerTag.length > 0) { //태그 개수 확인
            player.removeTag(playerTag[0]);
            tagRemoveStack = tagRemoveStack + 1;
        } else {
            console.warn(`${player.name} does not have a tag`);
            console.warn(`${player.name}\'s tag was all removed`);
            system.clearRun(IntervalID);
        }


    }


    console.warn("worldReset function loaded")
    isWorldRunning = "§4서버 작동 오류§r"
}

export function memberSet() {
    if (player1 == null) { //플레이어 6인 확인 및 이름, 태그 부여
        console.warn(`player1 is null`)
        player1Name = "null";
    } else {
        console.warn(`player1 is ${player1.name}`)
        player1Name = player1.name;
        player1.runCommand(`tag @s add player1`)
    }

    if (player2 == null) {
        console.warn(`player2 is null`)
        player2Name = "null";
    } else {
        console.warn(`player2 is ${player2.name}`)
        player2Name = player2.name;
        player2.runCommand(`tag @s add player2`)
    }

    if (player3 == null) {
        console.warn(`player3 is null`)
        player3Name = "null";
    } else {
        console.warn(`player3 is ${player3.name}`)
        player3Name = player3.name;
        player3.runCommand(`tag @s add player3`)
    }

    if (player4 == null) {
        console.warn(`player4 is null`)
        player4Name = "null";
    } else {
        console.warn(`player4 is ${player4.name}`)
        player4Name = player4.name;
        player4.runCommand(`tag @s add player4`)
    }

    if (player5 == null) {
        console.warn(`player5 is null`)
        player5Name = "null";
    } else {
        console.warn(`player5 is ${player5.name}`)
        player5Name = player5.name;
        player5.runCommand(`tag @s add player5`)
    }

    if (player6 == null) {
        console.warn(`player6 is null`)
        player6Name = "null";
    } else {
        console.warn(`player6 is ${player6.name}`)
        player6Name = player6.name;
        player6.runCommand(`tag @s add player6`)
    }


}