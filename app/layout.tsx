import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CommitteeWheel from "@/components/committee-wheel/CommitteeWheel";
import PaymentGate from "@/components/payment-gate/PaymentGate";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECOSOC 2027 — United Nations Economic and Social Council",
  description:
    "Global policy. Real diplomacy. ECOSOC 2027 — the principal platform for international economic and social cooperation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <CommitteeWheel>
          <PaymentGate>{children}</PaymentGate>
        </CommitteeWheel>
      </body>
    </html>
  );
}
