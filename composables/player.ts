import { useStorage } from "@vueuse/core";

export const usePlayer = () => {
	const baseStats = {
		gold: 1000,
		keys: 3,
		medals: 1,
		health: 200,
		attack: 60,
		shield: 30,
		mana: 3,
	};

	const gold = useStorage('gold', ref(baseStats.gold));
	const keys = useStorage('keys', ref(baseStats.keys));
	const medals = useStorage('medals', ref(baseStats.medals));
	const health = useStorage('health', ref(baseStats.health));
	const attack = useStorage('attack', ref(baseStats.attack));
	const shield = useStorage('shield', ref(baseStats.shield));
	const mana = useStorage('mana', ref(baseStats.mana));

	const inventory = usePlayerInventory();

	const shieldAmount = computed(
		() =>
			(inventory.head.value?.amount ?? 0) +
			(inventory.hands.value?.amount ?? 0) +
			baseStats.shield,
	);

	const attackAmount = computed(
		() => (inventory.weapon.value?.amount ?? 0) + baseStats.attack,
	);

	const maxHealth = computed(
		() => (inventory.torso.value?.amount ?? 0) + baseStats.health,
	);

	function reset() {
		health.value = maxHealth.value;
		shield.value = shieldAmount.value;
		attack.value = attackAmount.value;
	}

	return {
		health,
		attack,
		shield,
		mana,
		gold,
		keys,
		medals,
		shieldAmount,
		maxHealth,
		baseStats,
		reset,
	};
};
