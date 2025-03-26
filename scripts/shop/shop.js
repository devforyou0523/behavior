import { system, world } from "@minecraft/server"
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

import "index.js";
import { beetCost, carrotCost, potatoCost, pumpkinCost, cactusCost, sugarCaneCost, sweetBerryCost, watermelonCost, wheatCost } from "../gui/costGUI/costGUI.js"
import { player1 } from "../world/world.js"


console.warn("shop/shop.js loaded")

world.beforeEvents.playerInteractWithEntity.subscribe(({ player, target }) => {
    system.run(() => openShopDialog(player, target));
})

function openShopDialog(player, target) {
    console.warn(`${player.name} interact ${target.id}`)

    if (target.id == "-433791696768") { //작물 판매
        console.warn(`player interact itemSellDialog`)
        var itemIdList = ["minecraft:wheat", "minecraft:carrot", "minecraft:potato", "minecraft:beetroot", "minecraft:pumpkin", "minecraft:melon_slice", "minecraft:sugar_cane", "minecraft:sweet_berries", "minecraft:cactus"]
        var itemNameList = ["wheat", "carrot", "potato", "beetroot", "pumpkin", "melon_slice", "sugar_cane", "sweet_berries", "cactus"]
        var koreanItemNameList = ["밀", "당근", "감자", "비트", "호박", "수박 조각", "사탕수수", "달콤한 열매", "선인장"]
        var costList = [wheatCost, carrotCost, potatoCost, beetCost, pumpkinCost, watermelonCost, sugarCaneCost, sweetBerryCost, cactusCost]

        const form = new ModalFormData()
            .title("작물 판매")
            .slider(`   밀    : ${wheatCost}원`, 0, 64, 1, 0)
            .slider(`   당근    : ${carrotCost}원`, 0, 64, 1, 0)
            .slider(`   감자    : ${potatoCost}원`, 0, 64, 1, 0)
            .slider(`   비트    : ${beetCost}원`, 0, 64, 1, 0)
            .slider(`   호박    : ${pumpkinCost}원`, 0, 64, 1, 0)
            .slider(`   수박 <조각>    : ${watermelonCost}원`, 0, 64, 1, 0)
            .slider(`   사탕수수    : ${sugarCaneCost}원`, 0, 64, 1, 0)
            .slider(`   달콤한 열매    : ${sweetBerryCost}원`, 0, 64, 1, 0)
            .slider(`   선인장    : ${cactusCost}원`, 0, 64, 1, 0)

        form
            .show(player)
            .then((formData) => {
                //player.runCommand(`tellraw @s {"rawtext":[{"text":"Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}"}]}`);
                for (let i = 0; i <= 8; i++) { //품목수(9) 만큼 반복하여 판매 선택 개수 확인
                    if (formData.formValues[i] > 0) {
                        if (formData.formValues[i] <= checkItemAmount(player, itemIdList[i])) {
                            player1.runCommand(`clear ${player.name} ${itemNameList[i]} 0 ${formData.formValues[i]}`)
                            player.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"§a${koreanItemNameList[i]} ${formData.formValues[i]}개 판매 완료!\"}]}`)
                            player1.runCommand(`scoreboard players add ${player.name} money ${costList[i] * formData.formValues[i]}`)
                        } else {
                            player.runCommand(`tellraw @s {\"rawtext\":[{\"text\":\"§c${koreanItemNameList[i]} 판매 실패! (개수 부족)\"}]}`)
                        }
                        console.warn(`player select ${itemIdList[i]} amount is ${formData.formValues[i]}`)
                        console.warn(`${itemIdList[i]} amount is ${checkItemAmount(player, itemIdList[i])}`)

                    } else if (formData.formValues[i] == 0) {
                        console.warn(`formValue[${i}] is 0`)
                    } else if (formData.formValues[i] == null) {
                        console.warn(`formValue[${i}] is null`)
                    }
                }

            })

    }

    if (target.id == "-433791696769") { //장비 구매
        console.warn(`player interact hoeBuyDialog`)

        const form = new ActionFormData()
            .title("장비 구매")
            .button(`   나무 괭이   \n[가격: 300원]`)
            .button(`   돌 괭이   \n[가격: 1,000원]`)
            .button(`   철 괭이   \n[가격: 3,000원]`)
            .button(`   금 괭이   \n[가격: 9,900원]`)
            .button(`   다이아몬드 괭이   \n[가격: 12,000원]`)
            .button(`   네더라이트 괭이   \n[가격: 20,000원]`)

        form
            .show(player)
            .then((r) => {
                switch (r.selection) {
                    case 0:
                        if (checkMoneyAmount(player, 300) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a나무 괭이 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 300`)
                            player.runCommand(`give @s wooden_hoe 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 1:
                        if (checkMoneyAmount(player, 1000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a돌 괭이 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 1000`)
                            player.runCommand(`give @s stone_hoe 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 2:
                        if (checkMoneyAmount(player, 3000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a철 괭이 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 3000`)
                            player.runCommand(`give @s iron_hoe 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 3:
                        if (checkMoneyAmount(player, 9900) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a금 괭이 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 9900`)
                            player.runCommand(`give @s golden_hoe 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 4:
                        if (checkMoneyAmount(player, 12000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a다이아몬드 괭이 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 12000`)
                            player.runCommand(`give @s diamond_hoe 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 5:
                        if (checkMoneyAmount(player, 20000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a네더라이트 괭이 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 20000`)
                            player.runCommand(`give @s netherite_hoe 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;

                }
            });


    }

    if (target.id == "-433791696820") { //씨앗 구매 (변명이)
        console.warn(`player interact seedBuyDialog`)

        const form = new ActionFormData()
            .title("씨앗 구매")
            .body("\n뭐 사러 왔어?\n골라.값은 여기 써 있잖아 안 보여?\n계산은 저기서 해.")
            .button(`   밀 씨앗   \n[가격: 100원]`)
            .button(`   당근   \n[가격: 500원]`)
            .button(`   감자   \n[가격: 500원]`)
            .button(`   비트 씨앗   \n[가격: 1,000원]`)
            .button(`   호박 씨앗   \n[가격: 2,000원]`)
            .button(`   수박 씨앗   \n[가격: 2,000원]`)
            .button(`   사탕수수   \n[가격: 2,000원]`)
            .button(`   달콤한 열매   \n[가격: 7,000원]`)
            .button(`   선인장   \n[가격: 5,000원]`)



        form
            .show(player)
            .then((r) => {
                switch (r.selection) {
                    case 0:
                        if (checkMoneyAmount(player, 100) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a밀 씨앗 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100`)
                            player.runCommand(`give @s wheat_seeds 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 1:
                        if (checkMoneyAmount(player, 500) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a당근 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500`)
                            player.runCommand(`give @s carrot 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 2:
                        if (checkMoneyAmount(player, 500) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a감자 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 500`)
                            player.runCommand(`give @s potato 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 3:
                        if (checkMoneyAmount(player, 1000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a비트 씨앗 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 1000`)
                            player.runCommand(`give @s beetroot_seeds 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 4:
                        if (checkMoneyAmount(player, 2000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a호박 씨앗 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 2000`)
                            player.runCommand(`give @s pumpkin_seeds 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 5:
                        if (checkMoneyAmount(player, 2000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a수박 씨앗 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 2000`)
                            player.runCommand(`give @s melon_seeds 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 6:
                        if (checkMoneyAmount(player, 2000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a사탕수수 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 2000`)
                            player.runCommand(`give @s sugar_cane 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 7:
                        if (checkMoneyAmount(player, 7000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a달콤한 열매 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 7000`)
                            player.runCommand(`give @s sweet_berries 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 8:
                        if (checkMoneyAmount(player, 5000) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a선인장 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 5000`)
                            player.runCommand(`give @s cactus 1`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;

                }
            });

    }

    if (target.id == "-000000000000") { //씨앗-뼛가루 변환
        console.warn(`player interact seedChangeDialog`)

        const form = new ActionFormData()
            .title("씨앗-뼛가루 변환")
            .button(`   밀 씨앗 1세트   \n[뼛가루 2개]`)
            .button(`   비트 씨앗 1세트   \n[뼛가루 3개]`)

        form
            .show(player)
            .then((r) => {
                switch (r.selection) {
                    case 0:
                        if (checkItemAmount(player, "minecraft:wheat_seeds") >= 64) {
                            player1.runCommand(`clear ${player.name} wheat_seeds 0 64`)
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a밀 씨앗-뼛가루 교환 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`give ${player.name} bone_meal 2`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c씨앗 개수 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                    case 1:
                        if (checkItemAmount(player, "minecraft:beetroot_seeds") >= 64) {
                            player1.runCommand(`clear ${player.name} beetroot_seeds 0 64`)
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a바트 씨앗-뼛가루 교환 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`give ${player.name} bone_meal 3`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c씨앗 개수 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                }

            })

    }

    if (target.id == "-433791696754") { //눈덩이 구매 (꽁드_드_눈사람)
        console.warn(`player interact snowBallBuyDialog`)

        const form = new ActionFormData()
            .title("눈덩이 구매")
            .body(`\n워매—! 반갑소잉!
이거 하나 사볼랑가?
후회 안 할 거랑께요!\n`)
            .button(`   눈덩이 한 세트   \n[가격: 100원]`)

        form
            .show(player)
            .then((r) => {
                switch (r.selection) {
                    case 0:
                        if (checkMoneyAmount(player, 100) == true) {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a눈덩이 구매 성공!\"}]}")
                            player.runCommand(`playsound random.levelup ${player.name}`)
                            player1.runCommand(`scoreboard players remove ${player.name} money 100`)
                            player.runCommand(`give @s snowball 16`)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                }
            });

    }

    if (target.id == "-433791696690") { //오늘의 운세 (여울이)
        console.warn(`player interact luckyDrawDialog`)
        var luckyDrawRandomNumber;



        const form = new ActionFormData()
            .title("오늘의 운세")
            .body(`\n너의 운세?\n미리 볼 수 있지만 그건 비밀이야.\n하지만 힌트는 줄 수 있지!\n`)
            .button(`   운세 뽑기   \n[가격: 1000원]`)

        form
            .show(player)
            .then((r) => {
                switch (r.selection) {
                    case 0: //나약, 멀미, 구속, 점프강화, 신속, 성급함
                        if (checkMoneyAmount(player, 1000) == true) {
                            player.runCommand(`scoreboard players remove ${player.name} money 1000`)
                            luckyDraw(player)
                        } else {
                            player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c잔액 확인 후 다시 시도해주세요!\"}]}")
                        }
                        break;
                }
            });

        function luckyDraw(player) {

            player.runCommand(`scoreboard players random ${player.name} luckyDrawPercent 1 6`);
            luckyDrawRandomNumber = world.scoreboard.getObjective("luckyDrawPercent").getScore(player);
            console.warn(`${player.name}\'s luckyDrawPercent is ${world.scoreboard.getObjective("luckyDrawPercent").getScore(player)}`)

            switch (luckyDrawRandomNumber) { //오늘의 운세 종류

                case 1: //나약
                    player.runCommand(`playsound random.break ${player.name}`);
                    player.runCommand(`effect @s weakness 600 255 true`)
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c난 분명 비밀이라고 했어!\"}]}")
                    break;
                case 2: //멀미
                    player.runCommand(`playsound random.break ${player.name}`);
                    player.runCommand(`effect @s nausea 30 1 true`)
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c난 분명 비밀이라고 했어!\"}]}")
                    break;
                case 3: //구속
                    player.runCommand(`playsound random.break ${player.name}`);
                    player.runCommand(`effect @s slowness 420 1 true`)
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c난 분명 비밀이라고 했어!\"}]}")
                    break;
                case 4: //점프 강화
                    player.runCommand(`playsound random.levelup ${player.name}`);
                    player.runCommand(`effect @s jump_boost 600 1 true`)
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a난 분명 비밀이라고 했어!\"}]}")
                    break;
                case 5: //신속
                    player.runCommand(`playsound random.levelup ${player.name}`);
                    player.runCommand(`effect @s speed 600 2 true`)
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a난 분명 비밀이라고 했어!\"}]}")
                    break;
                case 6: //성급함
                    player.runCommand(`playsound random.levelup ${player.name}`);
                    player.runCommand(`effect @s haste 600 2 true`)
                    player.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§a난 분명 비밀이라고 했어!\"}]}")
                    break;
            }
        }

    }

}

function checkItemAmount(player, itemName) {

    const inventory = player.getComponent("minecraft:inventory").container;
    let totalAmount = 0;


    for (let i = 0; i < inventory.size; i++) {
        const item = inventory.getItem(i);
        if (item && item.typeId === itemName) {
            totalAmount = totalAmount + item.amount;
        }
    }

    return totalAmount;
}

function checkMoneyAmount(player, requireMoney) {
    if (world.scoreboard.getObjective("money").getScore(player) >= requireMoney) {
        return true
    } else {
        return false
    }
}
