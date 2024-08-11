import type { CardInterface, gamePhaseType } from "global";

export const useGame = () => {
	const phase = useState<gamePhaseType>("game-phase", () => "startGame");

	const player = usePlayer();
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

	const isGameOver = computed(() => enemy.currentEnemy.value.health <= 0 || player.health.value <= 0);

	watch(phase, async (newPhase) => {
		console.log(newPhase);
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
		deck.shuffle();
		// playerHand.startingHand();
		for (let i = 0; i < 3; i++) {
			if (deck.locationFilter("hand").length >= 0) {
				drawCard();
			} else {
				console.warn("Max cards in hand!");
				break;
			}
		}
		nextPhase("startRound");
	}

	function startRound() {
		player.mana.value = player.baseStats.mana;
		player.shield = player.shieldAmount;

		// if (playerHand.copyDeck.value.length === 0) {
		// 	playerHand.resurrectHand();
		// }
		if (deck.locationFilter("deck").length < 3) {
			for (
				let index = 0;
				index < deck.locationFilter("graveyard").length;
				index++
			) {
				const element = deck.locationFilter("graveyard")[index];
				element.location = "deck";
			}
		}
		for (let i = 0; i < 3; i++) {
			if (deck.locationFilter("hand").length >= 0) {
				drawCard();
			} else {
				console.warn("Max cards in hand!");
				break;
			}
		}
		nextPhase();
	}

	function drawCard() {
		const maxHandSize = 3;

		if (deck.locationFilter("hand").length >= maxHandSize) {
			console.warn("Hand is full. Cannot draw more cards.");
			return;
		}

		if (deck.locationFilter("deck").length) {
			const randomIndex = Math.floor(Math.random() * deck.locationFilter("deck").length);
			const drawnCard = deck.locationFilter("deck")[randomIndex];
			if (drawnCard) {
				drawnCard.location = "hand";
			}
		} else {
			for (
				let index = 0;
				index < deck.locationFilter("graveyard").length;
				index++
			) {
				const element = deck.locationFilter("graveyard")[index];
				element.location = "deck";
			}
			console.warn("No more cards in the deck to draw!");
		}
	}

	async function playCard(playedCard: CardInterface) {
		const result = await card.playCard(playedCard);
		if (result) {
			if (isGameOver.value) {
				nextPhase('endGame');
			}
			
			playedCard.location = "graveyard";

			if (deck.locationFilter("hand").length < 3) {
				drawCard();
			}
		} else {
			console.warn("No mana remaining");
		}
	}

	function endTurn() {
		// playerHand.discardHand();
		for (let index = 0; index < deck.locationFilter("hand").length; index++) {
			const element = deck.locationFilter("hand")[index];
			element.location = "graveyard";
		}
		nextPhase();
	}

	function endGame() {
		for (let index = 0; index < deck.deck.value.length; index++) {
			const element = deck.deck.value[index];
			element.location = 'deck';
		}
		player.reset();
		enemy.reset();
		alert(
			`Game won gained ${lootbox.dropGold()} gold, defeated ${enemy.currentEnemy.value.name}`,
		);
		nextPhase('startGame');
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
