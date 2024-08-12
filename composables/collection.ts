import type { CardInterface } from "global";
import { useStorage } from "@vueuse/core";

export const useCollection = () => {
	const cards = useStorage('player-collection', ref<CardInterface[]>([]));

	return {
		cards,
	};
};
