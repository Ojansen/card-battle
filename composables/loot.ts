export const useLoot = () => {
	const allItems = useItems();
	const player = usePlayer();
	const playerInventory = usePlayerInventory();

	function randomItemWithDropRates() {
		const rarities = ["common", "uncommon", "rare", "epic", "legendary"];
		const dropRates = [70, 20, 5, 4, 1]; // Adjust drop rates as needed

		// Calculate cumulative drop rates
		const cumulativeDropRates = dropRates.reduce(
			(acc: number[], rate, index) => {
				acc[index] = acc[index - 1] ? acc[index - 1] + rate : rate;
				return acc;
			},
			[],
		);

		// Generate a random number between 0 and 100
		const randomValue = Math.floor(Math.random() * 100);

		// Find the index of the corresponding rarity based on the random value
		let index = 0;
		while (randomValue > cumulativeDropRates[index]) {
			index++;
		}

		const selectedRarity = rarities[index];

		// Filter items based on the selected rarity
		const filteredItems = allItems.items.filter(
			(item) => item.rarity === selectedRarity,
		);

		// Return a random item from the filtered array
		return filteredItems[Math.floor(Math.random() * filteredItems.length)];
	}

	function openChest() {
		if (player.keys.value > 0) {
			playerInventory.inventoryItems.value.push(randomItemWithDropRates());
			player.keys.value--;
		}
	}

	function dropGold() {
		const enemy = useEnemy().currentEnemy;
		let droppedGold = 0;

		switch (enemy.value.difficulty) {
			case "normal":
				droppedGold = randomGoldDrop(70, 100);
				break;
			case "elite":
				droppedGold = randomGoldDrop(100, 300);
				break;
			case "boss":
				droppedGold = randomGoldDrop(300, 500);
				break;
			case "worldboss":
				droppedGold = randomGoldDrop(500, 1000);
				break;
			default:
				console.warn("No enemy difficulty found!");
				break;
		}
		player.gold.value += droppedGold;

		return droppedGold;
	}

	function randomGoldDrop(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return {
		openChest,
		dropGold,
	};
};
