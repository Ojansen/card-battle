import type { CardInterface } from "global";
export const usePlayerHand = () => {
	const playerDeck = usePlayerDeck();
	const copyDeck = ref(playerDeck.deck.value); // Create a copy of the player's deck
	const currentHand = useState<CardInterface[]>("player-hand", () => []);
	const graveyard = useState<CardInterface[]>("player-graveyard", () => []);

	function shuffleDeck() {
		copyDeck.value = shuffleArray(copyDeck.value);
	}

	function startingHand() {
		shuffleDeck(); // Shuffle deck at the start

		for (let i = 0; i < 3; i++) {
			drawCard();
		}
	}

	function discardHand() {
		graveyard.value.push(...currentHand.value);
		currentHand.value = [];
	}

	async function drawCard() {
		const maxHandSize = 3;

		if (currentHand.value.length >= maxHandSize) {
			console.warn("Hand is full. Cannot draw more cards.");
			return;
		}

		if (copyDeck.value.length > 0) {
			const randomIndex = Math.floor(Math.random() * copyDeck.value.length);
			const drawnCard = copyDeck.value.splice(randomIndex, 1)[0];
			drawnCard.location = "hand";
		} else {
			console.warn("No more cards in the deck to draw!");
		}
	}

	function discardCard(card: CardInterface) {
		const index = currentHand.value.findIndex((obj) => obj.id === card.id);
		if (index !== -1) {
			const [removedCard] = currentHand.value.splice(index, 1);
			graveyard.value.push(removedCard);
		} else {
			console.warn("Card not found in hand!");
		}
	}

	function resurrectHand() {
		if (graveyard.value.length > 0) {
			console.log(graveyard.value);
			copyDeck.value.push(...graveyard.value);
			graveyard.value = [];
			shuffleDeck();
		}
	}

	return {
		currentHand,
		graveyard,
		copyDeck,
		startingHand,
		discardHand,
		drawCard,
		discardCard,
		resurrectHand,
	};
};
