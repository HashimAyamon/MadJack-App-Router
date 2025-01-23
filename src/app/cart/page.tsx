import type { Metadata } from "next";
import ClientCartPage from "../components/ClientCartPage";

export const metadata: Metadata = {
  title: "Cart Page",
  description: "An Hashim Website",
};

export default function CartPage() {
  return <ClientCartPage />;
}
