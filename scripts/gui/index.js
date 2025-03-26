import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

import "index.js";
import { daycount, isWorldRunning } from "../world/world.js"
import { BGMUI } from "./BGMGUI/BGMGUI.js"
import { buyAreaGUI } from "./buyAreaGUI/buyAreaGUI.js"
import { costGUI } from "./costGUI/costGUI.js"
import { guestGUI } from "./guestGUI/guestGUI.js";

console.warn("gui/main.js loaded")

export var player;
var playerTag;

world.beforeEvents.itemUse.subscribe(data => {
    player = data.source

    if (data.itemStack.typeId == "minecraft:compass") {
        system.run(() => mainGUI(player))
    }

    function mainGUI() {
        if (player.getTags[0] = ! undefined) {
            playerTag = player.getTags()[0]
        } else {
            playerTag = "태그 미부여"
        }
        const form = new ActionFormData()
            .title(`홈화면 [${isWorldRunning}]`)
            .body(`[${daycount}일차]\n
플레이어 태그: ${playerTag}\n
§d이름: ${player.name}\n
§a돈: ${world.scoreboard.getObjective("money").getScore(player)} \n
§6구역 해금 레벨: ${world.scoreboard.getObjective("areaLevel").getScore(player)}\n
`)
            .button(`   부동산   \n[ 클릭 ]`)
            .button(`   시세   \n[ 클릭 ]`)
            .button(`   권한 설정   \n[ 클릭 ]`)
            .button(`   배경음악   \n[ 클릭 ]`)

        form.show(player).then(r => {
            if (r.selection == 0) buyAreaGUI(player)
            if (r.selection == 1) costGUI(player)
            if (r.selection == 2) guestGUI(player)
            if (r.selection == 3) BGMUI(player)

        })

    }
}

)