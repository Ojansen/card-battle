import type { CardInterface, rarityType } from "global";

export const useCurrency = () => {
	const player = usePlayer();
	const collection = useCollection();
	
	const prices: Record<rarityType, number> = {
		common: 100,
		uncommon: 200,
		rare: 300,
		epic: 400,
		legendary: 500,
	};

	function buyKeys() {
		if (player.medals.value >= 1) {
			player.keys.value++;
			player.medals.value -= 1;
		}
	}

	function buyGold() {
		if (player.medals.value >= 1) {
			player.gold.value += 1000;
			player.medals.value -= 1;
		}
	}

	function buyCard(card: CardInterface) {
		const copy = { ...card };
		if (player.gold.value >= prices[card.rarity]) {
			player.gold.value -= prices[card.rarity];
			copy.uuid = crypto.randomUUID();
			collection.cards.value.push(copy);
			copy.location = "collection";
		}
	}

	function sellCard(card: CardInterface) {
		player.gold.value += prices[card.rarity] / 2;
		removeFromArray(collection.cards.value, "uuid", card.uuid);
	}

	return {
		prices,
		buyKeys,
		buyGold,
		buyCard,
		sellCard,
	};
};
