import type { CardInterface } from "global";

const cards: CardInterface[] = [
	{
		uuid: crypto.randomUUID(),
		id: 1,
		name: "Quick attack",
		desciption: "Quick before the enemy can attack",
		type: "attack",
		effect: "damage",
		cost: 1,
		target: "enemy",
		location: undefined,
		rarity: "common",
	},
	{
		uuid: crypto.randomUUID(),
		id: 2,
		name: "Block",
		desciption: "Gain shield",
		type: "defence",
		effect: "shield",
		cost: 1,
		target: "self",
		location: undefined,
		rarity: "common",
	},
	{
		uuid: crypto.randomUUID(),
		id: 3,
		name: "Lunge",
		desciption: "",
		type: "attack",
		effect: "damage",
		cost: 1,
		target: "enemy",
		location: undefined,
		rarity: "common",
	},
	{
		uuid: crypto.randomUUID(),
		id: 4,
		name: "Lunge II",
		desciption: "",
		type: "attack",
		effect: "damage",
		cost: 1,
		target: "enemy",
		location: undefined,
		rarity: "common",
	},
];

export const useCard = () => {
	const cardList = useState("card-list", () => cards);
	const enemy = useEnemy().currentEnemy;
	const player = usePlayer();
	const playerHand = usePlayerHand();

	function playCard(selectedCard: CardInterface) {
		return new Promise((resolve, reject) => {
			if (player.mana.value < selectedCard?.cost) {
				resolve(false);
				return;
			}
			player.mana.value -= selectedCard.cost;

			switch (selectedCard.type) {
				case "attack":
					damage(selectedCard);
					break;
				case "defence":
					shield(selectedCard);
					break;
				case "status":
					if (selectedCard.target === "self") {
					}
					if (selectedCard.target === "enemy") {
					}
					break;
				default:
					resolve(false);
					break;
			}

			resolve(true);
		});
	}

	function heal(card: CardInterface) {}

	function damage(card: CardInterface) {
		if (card.effect === "damage" && card.target === "enemy") {
			enemy.value.health -= player.attack.value;
		}
	}

	function shield(card: CardInterface) {
		if (card.effect === "shield") {
			player.shield.value += player.shieldAmount.value;
		}
	}

	return {
		cardList,
		playCard,
	};
};
