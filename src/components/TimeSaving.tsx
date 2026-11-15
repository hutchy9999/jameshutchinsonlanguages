import { Clock, Target, TrendingUp } from "lucide-react";
export const TimeSaving = () => {
  return <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Why guessing does not work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most learners study without a plan. They do a bit of everything and progress at nothing.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border rounded-xl">
            <div className="p-3 bg-primary/10 rounded-lg shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">They do the wrong activity each day</h3>
              <p className="text-muted-foreground">
                Studying vocabulary when you need speaking practice. Doing grammar drills when you need listening input. Without a plan you just rotate randomly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border rounded-xl">
            <div className="p-3 bg-primary/10 rounded-lg shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">They have no daily structure</h3>
              <p className="text-muted-foreground">
                Without a plan, learners sit down and wonder what to do. A simple daily routine removes that decision and builds momentum.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border rounded-xl">
            <div className="p-3 bg-primary/10 rounded-lg shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">They confuse busy with progress</h3>
              <p className="text-muted-foreground">Spending time on a language is not the same as improving. The right 20 minutes each day beats two hours of random study.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
