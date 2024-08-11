import type { CardInterface } from "global";

export const usePlayerDeck = () => {
	const deck = useState<CardInterface[]>("player-deck", () => []);

	function add(card: CardInterface) {
		deck.value.push(card);
		card.location = "deck";
	}

	function remove(card: CardInterface) {
		const index = deck.value.findIndex((obj) => obj.id === card.id);
		if (index !== -1) {
			deck.value.splice(index, 1);
			card.location = "collection";
		}
	}

	function shuffle() {
		deck.value = shuffleArray(deck.value);
	}

	function locationFilter(location: CardInterface["location"]) {
		return [
			...deck.value.filter((card: CardInterface) => card.location === location),
		];
	}

	return {
		deck,
		add,
		remove,
		shuffle,
		locationFilter,
	};
};
