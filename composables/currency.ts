import type { CardInterface } from "global";

export const useCurrency = () => {
	const player = usePlayer();
	const collection = useCollection();

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
		if (player.gold.value >= copy.price) {
			player.gold.value -= copy.price;
			copy.uuid = crypto.randomUUID();
			collection.cards.value.push(copy);
			copy.location = "collection";
		}
	}

	return {
		buyKeys,
		buyGold,
		buyCard,
	};
};
