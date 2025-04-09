import { useMemo } from "react";

interface CurrencyFormatterOptions {
  locale?: string;
  currency?: string;
}

interface CurrencyFormatterResult {
  formatCurrency: (amount: number) => string;
}

export const useCurrencyFormatter = ({
  locale = "en-US",
  currency = "NGN",
}: CurrencyFormatterOptions = {}): CurrencyFormatterResult => {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    });
  }, [locale, currency]);

  const formatCurrency = (amount: number): string => {
    return formatter.format(amount);
  };

  return { formatCurrency };
};
