import type { ItemInterface, PlayerInterface } from "global";

export const usePlayerInventory = () => {
	const head = useState<ItemInterface | undefined>("head-equipment");
	const torso = useState<ItemInterface | undefined>("torso-equipment");
	const weapon = useState<ItemInterface | undefined>("weapon-equipment");
	const hands = useState<ItemInterface | undefined>("hand-equipment");

	const inventoryItems = useState<ItemInterface[]>(
		"player-inventory-items",
		() => [],
	);

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
