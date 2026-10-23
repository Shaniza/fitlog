import type { Metadata } from "next";
import MyPlanView from "@/components/MyPlanView";

export const metadata: Metadata = {
  title: "My Plan | FitLog",
  description: "Your workout plan for today and your saved lifts.",
};

export default function MyPlanPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl font-bold uppercase">My Plan</h1>
      <p className="mb-6 text-muted">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <MyPlanView />
    </section>
  );
}