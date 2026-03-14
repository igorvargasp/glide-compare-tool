import ToolchainColumn from "@/components/ToolchainColumn";
import LessonCard from "@/components/LessonCard";
import { lessonSections } from "@/data/lessonSections";
import { weatherLessonSections } from "@/data/weatherLessonSections";
import { playgroundLessonSections } from "@/data/playgroundLessonSections";
import { boardGameLessonSections } from "@/data/boardGameLessonSections";

const oldToolchainContent = `### Build System
- **Webpack 4** with custom config
- Babel transpilation
- \`babel-loader\`, \`css-loader\`, \`style-loader\`

### Package Manager
- \`npm\` with \`package-lock.json\`
- Slow install times (~45s)

### Testing
- Jest + Enzyme
- \`@testing-library/react\` (partial)

### Linting
- ESLint with \`.eslintrc.js\`
- Prettier as separate step

### Dev Server
- \`webpack-dev-server\`
- HMR via \`react-hot-loader\`
- Cold start: **~12s**

\`\`\`bash
npm run build  # ~90s on CI
\`\`\`
`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-2 tracking-tight">
          Farmers Market Math: Sort, Price, and Play
        </h1>
        <p className="text-muted-foreground font-mono text-sm mb-8">
          Side-by-side view of migration changes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ToolchainColumn
            title="Old Toolchain"
            content={oldToolchainContent}
            variant="old"
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-2 px-5 py-3 border border-column-new/30 rounded-t-lg bg-card border-b-0">
              <span className="inline-block w-2 h-2 rounded-full bg-column-new" />
              <h2 className="text-sm font-mono font-semibold tracking-wider uppercase text-column-new">
                New Toolchain
              </h2>
            </div>
            <div className="flex flex-col gap-2 p-3 border border-column-new/30 rounded-b-lg bg-card/50">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground px-2 pt-2">Farmers Market Math</h3>
              {lessonSections.map((section, index) => (
                <LessonCard
                  key={`farm-${index}`}
                  title={section.title}
                  content={section.content}
                  duration={section.duration}
                  defaultOpen={section.defaultOpen}
                />
              ))}
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground px-2 pt-4">Weather Reporters</h3>
              {weatherLessonSections.map((section, index) => (
                <LessonCard
                  key={`weather-${index}`}
                  title={section.title}
                  content={section.content}
                  duration={section.duration}
                  defaultOpen={section.defaultOpen}
                />
              ))}
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground px-2 pt-4">Design a Dream Playground</h3>
              {playgroundLessonSections.map((section, index) => (
                <LessonCard
                  key={`playground-${index}`}
                  title={section.title}
                  content={section.content}
                  duration={section.duration}
                  defaultOpen={section.defaultOpen}
                />
              ))}
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground px-2 pt-4">Design & Play: Board Game</h3>
              {boardGameLessonSections.map((section, index) => (
                <LessonCard
                  key={`boardgame-${index}`}
                  title={section.title}
                  content={section.content}
                  duration={section.duration}
                  defaultOpen={section.defaultOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
