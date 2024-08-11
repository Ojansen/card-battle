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

	const gold = useState("player-gold", () => baseStats.gold);
	const keys = useState("player-keys", () => baseStats.keys);
	const medals = useState("player-medals", () => baseStats.medals);
	const health = useState("health", () => baseStats.health);
	const attack = useState("attack", () => baseStats.attack);
	const shield = useState("shield", () => baseStats.shield);
	const mana = useState("mana", () => baseStats.mana);

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
