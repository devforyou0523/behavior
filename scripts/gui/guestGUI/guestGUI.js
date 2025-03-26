import { ModalFormData } from "@minecraft/server-ui";

import "index.js";
import { player } from "../index.js";
import { player1, player2, player3, player4, player5, player6, player1Name, player2Name, player3Name, player4Name, player5Name, player6Name } from "../../world/world.js"


console.warn("gui/guestGUI/guestGUI.js loaded")

export function guestGUI() {

    const form = new ModalFormData()
        .title("권한 설정")
        .toggle(`${player1Name}`)
        .toggle(`${player2Name}`)
        .toggle(`${player3Name}`)
        .toggle(`${player4Name}`)
        .toggle(`${player5Name}`)
        .toggle(`${player6Name}`)

    form.show(player)
        .then((formData) => {
            //player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`)

            if (player1 != null) {
                if (JSON.stringify(formData.formValues[0], undefined, 2) == "true") {
                    player1.addTag(`${player.getTags()[0]}Guest`);
                } else {
                    player1.removeTag(`${player.getTags()[0]}Guest`);
                }
            } else {
                console.warn("player1 is null")
            }
            if (player2 != null) {
                if (JSON.stringify(formData.formValues[1], undefined, 2) == "true") {
                    player2.addTag(`${player.getTags()[0]}Guest`);
                } else {
                    player2.removeTag(`${player.getTags()[0]}Guest`);
                }
            } else {
                console.warn("player2 is null")
            }
            if (player3 != null) {
                if (JSON.stringify(formData.formValues[2], undefined, 2) == "true") {
                    player3.addTag(`${player.getTags()[0]}Guest`);
                } else {
                    player3.removeTag(`${player.getTags()[0]}Guest`);
                }
            } else {
                console.warn("player3 is null")
            }
            if (player4 != null) {
                if (JSON.stringify(formData.formValues[3], undefined, 2) == "true") {
                    player4.addTag(`${player.getTags()[0]}Guest`);
                } else {
                    player4.removeTag(`${player.getTags()[0]}Guest`);
                }
            } else {
                console.warn("player4 is null")
            }
            if (player5 != null) {
                if (JSON.stringify(formData.formValues[4], undefined, 2) == "true") {
                    player5.addTag(`${player.getTags()[0]}Guest`);
                } else {
                    player5.removeTag(`${player.getTags()[0]}Guest`);
                }
            } else {
                console.warn("player5 is null")
            }
            if (player6 != null) {
                if (JSON.stringify(formData.formValues[5], undefined, 2) == "true") {
                    player6.addTag(`${player.getTags()[0]}Guest`);
                } else {
                    player6.removeTag(`${player.getTags()[0]}Guest`);
                }
            } else {
                console.warn("player6 is null")
            }

        })

}