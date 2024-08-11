export type rarityType = "common" | "uncommon" | "rare" | "epic" | "legendary";

export type gamePhaseType =
	| "drawCard"
	| "playCard"
	| "startGame"
	| "endTurn"
	| "enemyIntent"
	| "enemyTurn"
	| "endGame"
	| "startRound";

export type enemyDifficulty = "normal" | "elite" | "boss" | "worldboss";

export interface EnemyInterface {
	id: number;
	name: string;
	attack: number;
	health: number;
	shield: number;
	buff?: string;
	debuff?: string;
	difficulty: enemyDifficulty;
}

export interface PlayerInterface {
	health: Ref<number>;
	gold: Ref<number>;
	keys: Ref<number>;
	medals: Ref<number>;
	health: Ref<number>;
	attack: Ref<number>;
	shield: Ref<number>;
	mana: Ref<number>;
}

export interface ItemInterface {
	id: number;
	name: string;
	rarity: rarityType;
	buff?: CardInterface["type"];
	debuff?: CardInterface["type"];
	amount: number;
	price: number;
	location: "head" | "torso" | "weapon" | "hands";
}

export interface CardInterface {
	uuid: string;
	id: number;
	name: string;
	desciption: string;
	type: "attack" | "defence" | "status";
	effect: "damage" | "mana" | "shield";
	rarity: rarityType;
	location?: "hand" | "deck" | "graveyard" | "collection";
	price: number;
	cost: number;
	target: "self" | "enemy";
}
