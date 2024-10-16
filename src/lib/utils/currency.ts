/**
 * Converts an amount of money to its base form.
 * @param amount - The amount in cedis (or any other main currency unit).
 * @param factor - The base unit factor (e.g., 100 for cedis to pesewas).
 * @returns The amount in base form (e.g., 1 cedi = 100 pesewas).
 */
export function toBaseForm(amount: number, factor: number = 100): number {
	return Math.round(amount * factor);
}

/**
 * Converts an amount in base form (pesewas) back to its main currency unit (cedis).
 * @param amountInBaseForm - The amount in base form (e.g., 8000 pesewas).
 * @param factor - The base unit factor (e.g., 100 for pesewas to cedis).
 * @returns The equivalent amount in cedis.
 */
export function fromBaseForm(amountInBaseForm: number, factor: number = 100): number {
	return amountInBaseForm / factor;
}
