import LessonCard from "@/components/LessonCard";
import { LessonSection } from "@/data/lessonSections";
import { lessonSections } from "@/data/lessonSections";
import { weatherLessonSections } from "@/data/weatherLessonSections";
import { playgroundLessonSections } from "@/data/playgroundLessonSections";
import { boardGameLessonSections } from "@/data/boardGameLessonSections";
import { gardenLessonSections } from "@/data/gardenLessonSections";
import { podcastLessonSections } from "@/data/podcastLessonSections";
import { snackShopLessonSections } from "@/data/snackShopLessonSections";
import { farmersMarketLessonSections } from "@/data/farmersMarketLessonSections";
import { oldWeatherLessonSections } from "@/data/oldWeatherLessonSections";
import { oldPlaygroundLessonSections } from "@/data/oldPlaygroundLessonSections";
import { oldBoardGameLessonSections } from "@/data/oldBoardGameLessonSections";
import { oldGardenLessonSections } from "@/data/oldGardenLessonSections";
import { oldPodcastLessonSections } from "@/data/oldPodcastLessonSections";
import { oldSnackShopLessonSections } from "@/data/oldSnackShopLessonSections";
import { oldCommunityArtLessonSections } from "@/data/oldCommunityArtLessonSections";
import { oldBridgeLessonSections } from "@/data/oldBridgeLessonSections";
import { bridgeLessonSections } from "@/data/bridgeLessonSections";

interface LessonPair {
  oldTitle: string;
  oldSections: LessonSection[];
  oldKey: string;
  newTitle?: string;
  newSections?: LessonSection[];
  newKey?: string;
}

const lessonPairs: LessonPair[] = [
  {
    oldTitle: "Pretend Farmers Market",
    oldSections: farmersMarketLessonSections,
    oldKey: "market",
    newTitle: "Farmers Market Math",
    newSections: lessonSections,
    newKey: "farm",
  },
  {
    oldTitle: "Weather Reporter Adventure",
    oldSections: oldWeatherLessonSections,
    oldKey: "old-weather",
    newTitle: "Weather Reporters",
    newSections: weatherLessonSections,
    newKey: "weather",
  },
  {
    oldTitle: "Dream Playground Design",
    oldSections: oldPlaygroundLessonSections,
    oldKey: "old-playground",
    newTitle: "Design a Dream Playground",
    newSections: playgroundLessonSections,
    newKey: "playground",
  },
  {
    oldTitle: "60-Minute Board Game Designers",
    oldSections: oldBoardGameLessonSections,
    oldKey: "old-boardgame",
    newTitle: "Design & Play: Board Game",
    newSections: boardGameLessonSections,
    newKey: "boardgame",
  },
  {
    oldTitle: "Save Our School Garden!",
    oldSections: oldGardenLessonSections,
    oldKey: "old-garden",
    newTitle: "Garden Detectives",
    newSections: gardenLessonSections,
    newKey: "garden",
  },
  {
    oldTitle: "Podcast Planning: Speak Up",
    oldSections: oldPodcastLessonSections,
    oldKey: "old-podcast",
    newTitle: "Plan a 3-Minute Podcast",
    newSections: podcastLessonSections,
    newKey: "podcast",
  },
  {
    oldTitle: "Snack Shop Simulation",
    oldSections: oldSnackShopLessonSections,
    oldKey: "old-snackshop",
    newTitle: "After-School Snack Shop",
    newSections: snackShopLessonSections,
    newKey: "snackshop",
  },

  {
    oldTitle: "Build a Strong Bridge",
    oldSections: oldBridgeLessonSections,
    oldKey: "old-bridge",
    newTitle: "Bridge Builders",
    newSections: bridgeLessonSections,
    newKey: "bridge",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-2 tracking-tight">
          Lesson Comparison Tool
        </h1>
        <p className="text-muted-foreground font-mono text-sm mb-8">
          Side-by-side view of migration changes
        </p>

        {/* Column headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
          <div className="flex items-center gap-2 px-5 py-3 border border-column-old/30 rounded-lg bg-card">
            <span className="inline-block w-2 h-2 rounded-full bg-column-old" />
            <h2 className="text-sm font-mono font-semibold tracking-wider uppercase text-column-old">
              Old Toolchain
            </h2>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 border border-column-new/30 rounded-lg bg-card">
            <span className="inline-block w-2 h-2 rounded-full bg-column-new" />
            <h2 className="text-sm font-mono font-semibold tracking-wider uppercase text-column-new">
              New Toolchain
            </h2>
          </div>
        </div>

        {/* Lesson pairs */}
        {lessonPairs.map((pair) => (
          <div
            key={pair.oldKey}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6"
          >
            {/* Old column */}
            <div className="flex flex-col gap-2 p-3 border border-column-old/30 rounded-lg bg-card/50">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground px-2 pt-2">
                {pair.oldTitle}
              </h3>
              {pair.oldSections.map((section, index) => (
                <LessonCard
                  key={`${pair.oldKey}-${index}`}
                  title={section.title}
                  content={section.content}
                  duration={section.duration}
                  defaultOpen={section.defaultOpen}
                />
              ))}
            </div>

            {/* New column */}
            {pair.newSections ? (
              <div className="flex flex-col gap-2 p-3 border border-column-new/30 rounded-lg bg-card/50">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground px-2 pt-2">
                  {pair.newTitle}
                </h3>
                {pair.newSections.map((section, index) => (
                  <LessonCard
                    key={`${pair.newKey}-${index}`}
                    title={section.title}
                    content={section.content}
                    duration={section.duration}
                    defaultOpen={section.defaultOpen}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 border border-dashed border-muted-foreground/20 rounded-lg">
                <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-wider">
                  No new toolchain version
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
