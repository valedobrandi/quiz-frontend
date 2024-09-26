import StatCard from "../components/StatCard";

function Finish() {
  return (
    <section className="flex flex-col md:flex-row gap-16">
      <div className="space-y-6 lg:w-2/5">
        <span
          className="text-accent uppercase tracking-wide
     font-bold text-md ms:text-base"
        >
          Visualize your success
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
          Beat procastination
        </h2>
        <p className="text-base-content/90">
        Visualize Habit suggests good habits to pick in 2024. Discover how
        habits compound over 1 year, or 10 years to be motivated to start!
      </p>
      </div>
      <div>
      <StatCard
        title="Read"
        icon="📚"
        value={18}
        unit="books"
        description="I'll read for 3 days, 19 hours"
      />
      </div>
    </section>
  );
}

export default Finish;
