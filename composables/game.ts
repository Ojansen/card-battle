import type { CardInterface, gamePhaseType } from "global";

export const useGame = () => {
	const phase = useState<gamePhaseType>("game-phase", () => "startGame");

	const player = usePlayer();
	const playerHand = usePlayerHand();
	const deck = usePlayerDeck();
	const enemy = useEnemy();
	const card = useCard();
	const lootbox = useLoot();

	const phases: gamePhaseType[] = [
		"startRound",
		"playCard",
		"endTurn",
		"enemyTurn",
		"enemyIntent",
	];

	function nextPhase(setPhase?: gamePhaseType) {
		if (setPhase) {
			phase.value = setPhase;
			return;
		}
		const currentIndex = phases.indexOf(phase.value);
		const nextIndex = (currentIndex + 1) % phases.length;
		phase.value = phases[nextIndex];
	}

	watchEffect(async () => {
		// console.log("checking state", phase.value);
		if (enemy.currentEnemy.value.health <= 0 || player.health.value <= 0) {
			phase.value = "endGame";
			return;
		}
		// if (playerHand.copyDeck.value.length === 0) {
		// 	playerHand.resurrectHand();
		// 	return;
		// }
	});

	watch(phase, async (newPhase) => {
		switch (newPhase) {
			case "drawCard":
				drawCard();
				break;
			case "startGame":
				startGame();
				break;
			case "endTurn":
				endTurn();
				break;
			case "enemyIntent":
				enemyIntent();
				break;
			case "enemyTurn":
				enemyTurn();
				break;
			case "endGame":
				endGame();
				break;
			case "startRound":
				startRound();
				break;
		}
		await nextTick();
	});

	function startGame() {
		playerHand.startingHand();
		nextPhase("startRound");
	}

	function startRound() {
		player.mana.value = player.baseStats.mana;
		player.shield = player.shieldAmount;

		if (playerHand.copyDeck.value.length === 0) {
			playerHand.resurrectHand();
		}
		for (let i = 0; i < 3; i++) {
			if (playerHand.copyDeck.value.length > 0) {
				drawCard();
			} else {
				console.warn("No more cards in the deck to draw!");
				break;
			}
		}
		nextPhase();
	}

	function drawCard() {
		const maxHandSize = 3;

		if (deck.deck.value.length >= maxHandSize) {
			console.warn("Hand is full. Cannot draw more cards.");
			return;
		}

		if (deck.deck.value.length > 0) {
			const randomIndex = Math.floor(Math.random() * deck.deck.value.length);
			const drawnCard = deck.deck.value.splice(randomIndex, 1)[0];
			drawnCard.location = "hand";
		} else {
			console.warn("No more cards in the deck to draw!");
		}
	}

	async function playCard(playedCard: CardInterface) {
		const result = await card.playCard(playedCard);
		if (result) {
			playerHand.discardCard(playedCard);

			if (playerHand.currentHand.value.length < 3) {
				drawCard();
			}
		}
	}

	function endTurn() {
		playerHand.discardHand();
		for (let i = 0; i < 3; i++) {
			if (playerHand.copyDeck.value.length > 0) {
				drawCard();
			} else {
				console.warn("No more cards in the deck to draw!");
				break;
			}
		}
		nextPhase();
	}

	function endGame() {
		playerHand.copyDeck.value = [];
		player.reset();
		enemy.reset();
		alert(
			`Game won gained ${lootbox.dropGold()} gold, defeated ${enemy.currentEnemy.value.name}`,
		);
	}

	async function enemyTurn() {
		nextPhase();
	}

	function enemyIntent() {
		nextPhase();
	}

	return {
		phase,
		startGame,
		drawCard,
		playCard,
		endTurn,
		endGame,
		enemyTurn,
		enemyIntent,
		startRound,
	};
};
