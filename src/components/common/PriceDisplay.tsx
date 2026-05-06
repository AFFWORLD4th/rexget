"use client";

import React from "react";
import { useCurrency } from "@/src/context/CurrencyContext";

interface PriceDisplayProps {
  priceInAED?: number;
  className?: string;
}

export default function PriceDisplay({ priceInAED, className }: PriceDisplayProps) {
  const { formatPrice } = useCurrency();

  if (priceInAED === undefined || priceInAED === null) {
    return <span className={className}>N/A</span>;
  }

  return <span className={className}>{formatPrice(priceInAED)}</span>;
}
