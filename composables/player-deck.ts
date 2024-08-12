import type { CardInterface } from "global";
import { useStorage } from "@vueuse/core";

export const usePlayerDeck = () => {
	const deck = useStorage('player-deck', ref<CardInterface[]>([]));

	function add(card: CardInterface) {
		deck.value.push(card);
		card.location = "deck";
	}

	function remove(card: CardInterface) {
		deck.value = [...removeFromArray(deck.value, "uuid", card.uuid)];
		// console.log(deck.value);
		card.location = "collection";
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
