import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Запись на консультацию",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-24 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Запись на консультацию</h1>
          <p className="mt-4 text-lg text-ink-500">Скоро здесь будет форма записи.</p>
        </Container>
      </main>
    </>
  );
}
