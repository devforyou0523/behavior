import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

import "index.js";
import { player } from "../index.js";
import { player1 } from "../../world/world.js";
import { areaUnlock, player1EndX, player1EndZ, player1StartX, player1StartZ, player2EndX, player2EndZ, player2StartX, player2StartZ, player3EndX, player3EndZ, player3StartX, player3StartZ, player4EndX, player4EndZ, player4StartX, player4StartZ, player5EndX, player5EndZ, player5StartX, player5StartZ, player6EndX, player6EndZ, player6StartX, player6StartZ } from "../../area/area.js";

console.warn("gui/buyAreaGUI/buyAreaGUI.js loaded")

export function buyAreaGUI() {

    const form = new ActionFormData()
        .title("부동산")
        .button(`§2 1번땅 구매  \n[가격:5,000원]`)
        .button(`§2 2번땅 구매  \n[가격:15,000원]`)
        .button(`§2 3번땅 구매  \n[가격:30,000원]`)
        .button(`§2 4번땅 구매  \n[가격:60,000원]`)
        .button(`§2 5번땅 구매  \n[가격:100,000원]`)
        .button(`§2 6번땅 구매  \n[가격:150,000원]`)
        .button(`§2 7번땅 구매  \n[가격:300,000원]`)
        .button(`§2 8번땅 구매  \n[가격:500,000원]`)

    form
        .show(player)
        .then(r => {
            if (r.selection == 0) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 5000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 1) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 1, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 5000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 1, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 5000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 1, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 5000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 1, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 5000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 1, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 5000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 1, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 5000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
            if (r.selection == 1) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 15000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 2) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 2, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 15000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 2, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 15000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 2, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 15000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 2, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 15000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 2, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 15000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 2, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 15000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
            if (r.selection == 2) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 30000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 3) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 3, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 30000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 3, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 30000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 3, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 30000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 3, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 30000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 3, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 30000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 3, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 30000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
            if (r.selection == 3) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 60000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 4) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 4, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 60000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 4, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 60000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 4, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 60000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 4, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 60000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 4, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 60000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 4, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 60000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
            if (r.selection == 4) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 100000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 5) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 5, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 5, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 5, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 5, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 5, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 5, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
            if (r.selection == 5) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 150000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 6) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 6, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 150000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 6, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 150000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 6, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 150000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 6, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 150000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 6, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 150000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 6, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 150000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
            if (r.selection == 6) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 300000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 7) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 7, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 300000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 7, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 300000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 7, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 300000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 7, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 300000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 7, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 300000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 7, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 300000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
            if (r.selection == 7) {

                if (world.scoreboard.getObjective("money").getScore(player) >= 500000) {
                    if (world.scoreboard.getObjective("areaLevel").getScore(player) == 8) {
                        if (player.hasTag("player1") == true) {
                            areaUnlock(player1StartX, player1StartZ, player1EndX, player1EndZ, 8, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500000`)
                        } else if (player.hasTag("player2") == true) {
                            areaUnlock(player2StartX, player2StartZ, player2EndX, player2EndZ, 8, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500000`)
                        } else if (player.hasTag("player3") == true) {
                            areaUnlock(player3StartX, player3StartZ, player3EndX, player3EndZ, 8, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500000`)
                        } else if (player.hasTag("player4") == true) {
                            areaUnlock(player4StartX, player4StartZ, player4EndX, player4EndZ, 8, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500000`)
                        } else if (player.hasTag("player5") == true) {
                            areaUnlock(player5StartX, player5StartZ, player5EndX, player5EndZ, 8, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500000`)
                        } else if (player.hasTag("player6") == true) {
                            areaUnlock(player6StartX, player6StartZ, player6EndX, player6EndZ, 8, player)
                            player1.runCommand(`scoreboard players add ${player.name} areaLevel 1`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500000`)
                        }
                    } else {
                        player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 구매하였거나 구매 가능한 단계의 땅이 아닙니다!\"}]}")
                    }

                } else {
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인후 다시 시도해주세요!\"}]}")
                }

            }
        })
}