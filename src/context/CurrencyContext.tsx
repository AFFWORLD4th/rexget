"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CurrencyCode = "AED" | "USD" | "GBP" | "EUR" | "INR" | "CAD" | "AUD" | "JPY" | "CNY" | "CHF";

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  exchangeRate: number;
  formatPrice: (priceInAED: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Fixed exchange rates relative to AED
// 1 USD = 3.6725 AED
export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  AED: 1,
  USD: 0.27229, // 1 / 3.6725
  GBP: 0.215,   // 1 / 4.65
  EUR: 0.25,    // 1 / 4.00
  INR: 22.70,   // 1 AED = ~22.70 INR
  CAD: 0.38,    // 1 AED = ~0.38 CAD
  AUD: 0.42,    // 1 AED = ~0.42 AUD
  JPY: 42.0,    // 1 AED = ~42.0 JPY
  CNY: 1.97,    // 1 AED = ~1.97 CNY
  CHF: 0.24,    // 1 AED = ~0.24 CHF
};

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  AED: "AED",
  USD: "$",
  GBP: "£",
  EUR: "€",
  INR: "₹",
  CAD: "C$",
  AUD: "A$",
  JPY: "¥",
  CNY: "¥",
  CHF: "Fr",
};

export const AVAILABLE_CURRENCIES: CurrencyCode[] = ["AED", "USD", "EUR", "GBP", "INR", "CAD", "AUD", "JPY", "CNY", "CHF"];

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>("AED");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("preferredCurrency") as CurrencyCode;
    if (savedCurrency && EXCHANGE_RATES[savedCurrency]) {
      setCurrency(savedCurrency);
    }
  }, []);

  const handleSetCurrency = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    localStorage.setItem("preferredCurrency", newCurrency);
  };

  const formatPrice = (priceInAED: number): string => {
    if (!priceInAED && priceInAED !== 0) return "N/A";
    
    // If currency is AED, just format normally
    // If other currency, convert first
    const rate = EXCHANGE_RATES[currency];
    const convertedPrice = Math.round(priceInAED * rate);
    
    return `${CURRENCY_SYMBOLS[currency]} ${convertedPrice.toLocaleString()}`;
  };

  const value = {
    currency,
    setCurrency: handleSetCurrency,
    exchangeRate: EXCHANGE_RATES[currency],
    formatPrice,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
