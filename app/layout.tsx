import type { Metadata } from "next";
import CommitteeWheel from "@/components/committee-wheel/CommitteeWheel";
import PaymentGate from "@/components/payment-gate/PaymentGate";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  title: "ECOSOC — SEAMUN I 2027",
  description:
    "Economic and Social Council at SEAMUN I 2027. Beginner traditional committee — UBI and military-to-health topics, allocations, schedule, ROP, position papers, and chair report.",
  icons: {
    icon: "/ecosoc-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CommitteeWheel>
          <PaymentGate>{children}</PaymentGate>
        </CommitteeWheel>
      </body>
    </html>
  );
}
