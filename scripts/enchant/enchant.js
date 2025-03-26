import { system, world, EnchantmentType } from "@minecraft/server"
import { ActionFormData } from "@minecraft/server-ui";

import "index.js"

console.warn("enchant/enchant.js loaded")

world.afterEvents.entityHitBlock.subscribe(({ damagingEntity, hitBlock }) => {

    console.warn(`player hit ${hitBlock.type.id}`)
    if (hitBlock.type.id == "minecraft:cracked_stone_bricks") {

        damagingEntity.runCommand(`playsound random.click ${damagingEntity.name}`);
        var enchantLevel;
        var enchantCost;
        var inventory = damagingEntity.getComponent("minecraft:inventory");
        var SelectedItem = inventory.container.getItem(0);

        if (inventory.container.getItem(0) != undefined) { //1번칸에 아이템이 있는지 구분
            if (inventory.container.getItem(0).nameTag == undefined) { //아이템의 이름이 수정된 이름인지 구분하여 beforeEnchantLevel 지정
                enchantLevel = 0
                enchantCost = 1000;
                console.warn(`enchantLevel is ${enchantLevel}`)
            } else {
                enchantLevel = Number(SelectedItem.nameTag.substring(damagingEntity.getComponent("minecraft:inventory").container.getItem(0).nameTag.indexOf("[") + 1, SelectedItem.nameTag.indexOf("]")).slice(1))
                console.warn(`enchantLevel is ${enchantLevel}`)

                switch (enchantLevel) { //기존 인챈트 레벨에 따른 인챈트 비용 구분

                    case 0:
                        enchantCost = 1000;
                        break;
                    case 1:
                        enchantCost = 5000;
                        break;
                    case 2:
                        enchantCost = 3000;
                        break;
                    case 3:
                        enchantCost = 4000;
                        break;
                    case 4:
                        enchantCost = 5000;
                        break;
                    case 5:
                        enchantCost = 6000;
                        break;
                    case 6:
                        enchantCost = 7000;
                        break;
                    case 7:
                        enchantCost = 8000;
                        break;
                    default:
                        enchantCost = 1000;
                        break;

                }
            }
        }
        const form = new ActionFormData()
            .title("잃어버린 고대신의 석상")
            .body("\n오셨군요, 낯선이여. 당신의 여정에 축복을 드리고자 하니, 저의 은총을 받아 세상에 빛을 전하시길 바랍니다.\n\n")
            .button(`§9장비 강화의 축복\n[강화 단계: ${enchantLevel}, 강화 비용: ${enchantCost} ]`)
        //.button(`§9장비 소생의 축복\n[ 기도하기 ]`)


        if (damagingEntity.getComponent("minecraft:inventory").container.getItem(0) != undefined) {
            if (damagingEntity.getComponent("minecraft:inventory").container.getItem(0).hasTag("minecraft:is_hoe") == true) {
                if (enchantLevel != 8) {
                    form
                        .show(damagingEntity)
                        .then(r => {
                            if (r.selection == 0) {
                                if (enchantCost <= world.scoreboard.getObjective("money").getScore(damagingEntity)) {
                                    damagingEntity.runCommand(`scoreboard players remove ${damagingEntity.name} money ${enchantCost}`)
                                    enchant(damagingEntity)
                                } else {
                                    damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c석상이 반응하지 않는다...\n\n(돈이 부족한 것 같다)\"}]}");
                                }
                            }
                            //if (r.selection == 1) console.warn("click button1")
                        })
                } else {
                    damagingEntity.runCommand(`playsound random.break ${damagingEntity.name}`);
                    damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c이미 장비가 최고레벨이다..\"}]}");
                }
            } else {
                damagingEntity.runCommand(`playsound random.break ${damagingEntity.name}`);
                damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c석상이 반응하지 않는다...\n\n(괭이만 강화 가능하다)\"}]}");
            }

        } else {
            damagingEntity.runCommand(`playsound random.break ${damagingEntity.name}`);
            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c석상이 반응하지 않는다...\n\n(아이템을 강화하기 위해서는 인벤토리의 첫 번째 칸에 두어야 한다)\"}]}");
        }

        function enchant() {
            const particleTimeIntervalID = system.runInterval(tryEnchant, 2)
            var rotatingArmorStand = 0
            var enchantPhase = 1
            var enchantRandomNumber;

            function tryEnchant() {

                spawnParticle();

                if (rotatingArmorStand % 120 == 0) {
                    damagingEntity.runCommand(`playsound random.orb ${damagingEntity.name}`)
                    enchantPhase = enchantPhase + 1

                    switch (enchantPhase) {
                        case 1:
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§k0"}]}`)
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비 강화중"}]}`)
                            break;
                        case 2:
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§k00"}]}`)
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비 강화중."}]}`)
                            break;
                        case 3:
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§k000"}]}`)
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비 강화중.."}]}`)
                            break;
                        case 4:
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§k0000"}]}`);
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비 강화중..."}]}`);
                            break;
                        case 5:
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§k00000"}]}`);
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비 강화중...."}]}`);
                            break;
                        case 6:
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§k000000"}]}`);
                            damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비 강화중....."}]}`);
                            break;
                    }

                }

                if (rotatingArmorStand == 720) {
                    damagingEntity.runCommand(`scoreboard players random ${damagingEntity.name} enchantPercent 1 1000`);
                    enchantRandomNumber = world.scoreboard.getObjective("enchantPercent").getScore(damagingEntity);
                    console.warn(`${damagingEntity.name}\'s enchantPercent is ${world.scoreboard.getObjective("enchantPercent").getScore(damagingEntity)}`)
                    rotatingArmorStand = 0;
                    enchantPhase = 1;
                    switch (enchantLevel) { //강화 확률표
                        case 0: //0 to 1
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 1 && enchantRandomNumber <= 1000) { //100%
                                enchantSuccess();
                            }
                            break;
                        case 1: //1 to 2
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 1 && enchantRandomNumber <= 250) { //25%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 251 && enchantRandomNumber <= 1000) { //75%
                                enchantSuccess();
                            }
                            break;
                        case 2: //2 to 3
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 1 && enchantRandomNumber <= 450) { //45%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 451 && enchantRandomNumber <= 1000) { //55%
                                enchantSuccess();
                            }
                            break;
                        case 3: //2 to 3
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 1 && enchantRandomNumber <= 600) { //60%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 601 && enchantRandomNumber <= 1000) { //40%
                                enchantSuccess();
                            }
                            break;
                        case 4: //3 to 4
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 1 && enchantRandomNumber <= 650) { //65%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 651 && enchantRandomNumber <= 1000) { //35%
                                enchantSuccess();
                            }
                            break;
                        case 5: //5 to 6
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 0 && enchantRandomNumber <= 750) { //75%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 751 && enchantRandomNumber <= 1000) { //25%
                                enchantSuccess();
                            }
                            break;
                        case 6: //6 to 7
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 1 && enchantRandomNumber <= 850) { //85%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 851 && enchantRandomNumber <= 1000) { //15%
                                enchantSuccess();
                            }
                            break;
                        case 7: //7 to 8
                            if (enchantRandomNumber >= 0 && enchantRandomNumber <= 0) { //0%
                                enchantDestoryed();
                            } else if (enchantRandomNumber >= 1 && enchantRandomNumber <= 950) { //95%
                                enchantFailed();
                            } else if (enchantRandomNumber >= 951 && enchantRandomNumber <= 1000) { //5%
                                enchantSuccess();
                            }
                            break;
                    
                    }

                    system.clearRun(particleTimeIntervalID);
                }

            }

            function spawnParticle() { //파티클 생성
                console.warn(`rotatingArmorStand: ${rotatingArmorStand}`)
                damagingEntity.runCommand("execute at @e[name=particle] run effect @e[name=particle] invisibility infinite 1 true")
                damagingEntity.runCommand("execute at @e[name=particle] run effect @e[name=particle] regeneration infinite 1 true")
                damagingEntity.runCommand("execute at @e[name=particle] run particle minecraft:endrod ^ ^3 ^1.5")
                damagingEntity.runCommand("execute at @e[name=particle] run particle minecraft:endrod ^ ^3 ^3")
                damagingEntity.runCommand("execute at @e[name=particle] run particle minecraft:endrod ^ ^3 ^4.5")
                damagingEntity.runCommand("execute at @e[name=particle] run particle minecraft:endrod ^ ^3 ^6")
                damagingEntity.runCommand("execute at @e[name=particle] run particle minecraft:endrod ^ ^3 ^7.5")
                damagingEntity.runCommand("execute at @e[name=particle] run particle minecraft:endrod ^ ^3 ^9")
                damagingEntity.runCommand("execute at @e[name=particle] run particle minecraft:endrod ^ ^5 ^9")
                damagingEntity.runCommand(`tp @e[name=particle] 843 61 -726 ${rotatingArmorStand} 0`)
                rotatingArmorStand = rotatingArmorStand + 20

            }

            function enchantSuccess() { //강화 성공
                damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§a강화 성공!"}]}`);
                damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비의 강화 단계가 1 상승합니다"}]}`);
                damagingEntity.runCommand(`playsound random.levelup ${damagingEntity.name}`);

                enchantCase(enchantLevel + 1)
            }

            function enchantFailed() { //강화 실패
                damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§c강화 실패!"}]}`);
                damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비의 강화 단계가 유지됩니다"}]}`);
                damagingEntity.runCommand(`playsound random.break ${damagingEntity.name}`);
                enchantCase(enchantLevel);
            }

            // function enchantDestoryed() { //강화 파괴
            //     damagingEntity.runCommand(`titleraw ${damagingEntity.name} title {"rawtext": [{"text":"§0장비 파괴!"}]}`);
            //     damagingEntity.runCommand(`titleraw ${damagingEntity.name} subtitle {"rawtext": [{"text":"장비가 파괴됩니다"}]}`);
            //     damagingEntity.runCommand(`playsound random.explode ${damagingEntity.name}`);
            //     damagingEntity.runCommand(`summon lightning_bolt 843 68 -726`);

            // }

            function antiCheat() { //버그 남용 치트 방지용
                if (inventory.container.getItem(0) != undefined) {
                    if (inventory.container.getItem(0).type.id == SelectedItem.type.id) {
                        console.warn(`antiCheat return true`)
                        return true;
                    } else {
                        console.warn(`antiCheat return false`)
                        return false;
                    }
                } else {
                    console.warn(`antiCheat return false`)
                    return false;
                }
            }

            function enchantCase(enchantLevel) { //강화 단계 효과
                switch (enchantLevel) {
                    case 0:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§f${damagingEntity.name}의 축복받은 괭이 [+0]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 1:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§a§l${damagingEntity.name}의 축복받은 괭이 [+1]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 1 })
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 2:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§a§l${damagingEntity.name}의 축복받은 괭이 [+2]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 1 })
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:fortune"), level: 1 })
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 3:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§a§l${damagingEntity.name}의 축복받은 괭이 [+3]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 2 })
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:fortune"), level: 1 })
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 4:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§9§l${damagingEntity.name}의 축복받은 괭이 [+4]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 3 })
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:fortune"), level: 1 })
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 5:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§9§l${damagingEntity.name}의 축복받은 괭이 [+5]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 3 })
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:fortune"), level: 2 })
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 6:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§d§l${damagingEntity.name}의 축복받은 괭이 [+6]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 4 })
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:fortune"), level: 2 })
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 7:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§d§l${damagingEntity.name}의 축복받은 괭이 [+7]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 5 })
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:fortune"), level: 2 })
                            inventory.container.setItem(0, SelectedItem);

                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    case 8:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§e§l${damagingEntity.name}의 축복받은 괭이 [+8]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();

                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:efficiency"), level: 5 })
                            SelectedItem.getComponent("enchantable").addEnchantment({ type: new EnchantmentType("minecraft:fortune"), level: 3 })
                            inventory.container.setItem(0, SelectedItem);

                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;

                    default:
                        if (antiCheat() == true) {
                            console.warn(`beforeEnchantLevel is ${enchantLevel}`)
                            SelectedItem.nameTag = `§f${damagingEntity.name}의 축복받은 괭이 [+0]`;
                            SelectedItem.setLore(["그치만... 괭이인걸...?"]);
                            SelectedItem.getComponent("enchantable").removeAllEnchantments();
                            inventory.container.setItem(0, SelectedItem);
                        } else {
                            damagingEntity.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§c버그를 악용한 자. 처벌을 내리겠노라\"}]}");
                            damagingEntity.runCommand(`gamemode s ${damagingEntity.name}`);
                            damagingEntity.runCommand(`kill @s`);
                            damagingEntity.runCommand("kill @e[type=item]")
                        }
                        break;
                }

            }
        }
    }
})

