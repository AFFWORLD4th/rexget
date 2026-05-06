"use client";

import React from 'react';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import { CurrencyProvider } from "@/src/context/CurrencyContext";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CurrencyProvider>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </CurrencyProvider>
  );
}
