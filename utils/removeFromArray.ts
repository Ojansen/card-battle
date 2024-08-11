// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function (array: Array<any>, property: string, value: string) {
	const index = array.findIndex((obj) => obj[property] === value);
	if (index !== -1) {
		array.splice(index, 1);
	}
	return array;
}
