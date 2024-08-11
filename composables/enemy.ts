import type { EnemyInterface } from "global";

const enemys: EnemyInterface[] = [
	{
		id: 1,
		name: "Rat",
		attack: 30,
		health: 400,
		shield: 0,
		difficulty: "normal",
	},
];

export const useEnemy = () => {
	const currentEnemy = useState("current-enemy", () => enemys[0]);

	function reset() {
		currentEnemy.value = enemys[0];
	}

	return {
		currentEnemy,
		reset,
	};
};
