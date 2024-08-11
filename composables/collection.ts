import type { CardInterface } from "global";

export const useCollection = () => {
	const cards = useState<CardInterface[]>("player-collection", () => []);

	return {
		cards,
	};
};
