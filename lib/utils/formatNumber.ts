export function formatNumber(value: number, locale: string = "en-US"): string {
    return new Intl.NumberFormat(locale).format(value);
}
