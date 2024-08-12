import type { ItemInterface, PlayerInterface } from "global";
import { useStorage } from "@vueuse/core";

export const usePlayerInventory = () => {
	
	const head = useStorage('head-equipment', ref<ItemInterface | undefined>());
	const torso = useStorage('torso-equipment', ref<ItemInterface | undefined>());
	const weapon = useStorage('weapon-equipment', ref<ItemInterface | undefined>());
	const hands = useStorage('hand-equipment', ref<ItemInterface | undefined>());

	const inventoryItems = useStorage("player-inventory-items", ref<ItemInterface[]>([]));

	function equip(player: PlayerInterface, item: ItemInterface) {
		switch (item.location) {
			case "head":
				if (head.value === undefined) {
					head.value = item;
					player.shield.value += item.amount;
				}
				break;
			case "torso":
				if (torso.value === undefined) {
					torso.value = item;
					player.health.value += item.amount;
				}
				break;
			case "weapon":
				if (weapon.value === undefined) {
					weapon.value = item;
					player.attack.value += item.amount;
				}
				break;
			case "hands":
				if (hands.value === undefined) {
					hands.value = item;
					player.shield.value += item.amount;
				}
				break;
		}
	}

	function unEquip(player: PlayerInterface, item: ItemInterface) {
		switch (item.location) {
			case "head":
				player.shield.value -= item.amount;
				head.value = undefined;
				break;
			case "torso":
				player.health.value -= item.amount;
				torso.value = undefined;
				break;
			case "weapon":
				player.attack.value -= item.amount;
				weapon.value = undefined;
				break;
			case "hands":
				hands.value = undefined;
				player.shield.value -= item.amount;
				break;
		}
	}

	return {
		head,
		torso,
		weapon,
		hands,
		unEquip,
		equip,
		inventoryItems,
	};
};
