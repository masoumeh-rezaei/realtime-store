export function formatCurrency(
    value: number,
    locale: string = "en-US",
    currency: string = "USD"
): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
    }).format(value);
}
