import { useMemo } from "react";

export const useCurrencyFormatter = ({
  locale = "en-US",
  currency = "NGN",
} = {}) => {
  const formatter = useMemo(() => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    });
  }, [locale, currency]);

  const formatCurrency = (amount) => {
    return formatter.format(amount);
  };

  return { formatCurrency };
};
