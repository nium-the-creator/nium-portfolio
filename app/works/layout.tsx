import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All works — NIUM",
  description: "Selected projects across brand, digital, and campaign work.",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
