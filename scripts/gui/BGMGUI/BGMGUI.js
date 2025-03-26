import { ActionFormData } from "@minecraft/server-ui";

import "index.js";
import { player } from "../index.js";

console.warn("gui/BGMGUI/BGMGUI.js loaded")

export function BGMUI() {
    const form = new ActionFormData()
        .title("배경음악")
        .body("§e❇BGM: 지능이 떨어지는 브금 \n(아무튼- Youtube)❇")
        .button("재생\n[ 클릭 ]")
        .button("배경음악 종료\n[ 클릭 ]")


    form.show(player).then(r => {
        if (r.selection == 0) {
            player.runCommand(`playsound record.13 ${player.name}`)
        }
        if (r.selection == 1) {
            player.runCommand(`stopsound ${player.name} record.13`)
        }
    }
    )

}