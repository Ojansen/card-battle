import type { ItemInterface } from "global";

export const useItems = () => {
	// const prisma = usePrismaClient();
	// const items = await prisma.item.findMany();
	const items: ItemInterface[] = [
		{
			id: 1,
			name: "Rapier",
			rarity: "common",
			buff: "attack",
			amount: 10,
			location: "weapon",
		},
		{
			id: 2,
			name: "Helmet",
			rarity: "common",
			buff: "defence",
			amount: 10,
			location: "head",
		},
		{
			id: 3,
			name: "Chainmail",
			rarity: "common",
			buff: "defence",
			amount: 20,
			location: "torso",
		},
		{
			id: 4,
			name: "Gloves",
			rarity: "common",
			buff: "status",
			amount: 40,
			location: "hands",
		},
		{
			id: 5,
			name: "Rapier",
			rarity: "uncommon",
			buff: "attack",
			amount: 20,
			location: "weapon",
		},
		{
			id: 6,
			name: "Rapier",
			rarity: "rare",
			buff: "attack",
			amount: 30,
			location: "weapon",
		},
		{
			id: 7,
			name: "Rapier",
			rarity: "epic",
			buff: "attack",
			amount: 50,
			location: "weapon",
		},
		{
			id: 8,
			name: "Rapier",
			rarity: "legendary",
			buff: "attack",
			amount: 100,
			location: "weapon",
		},
	];

	return { items };
};
