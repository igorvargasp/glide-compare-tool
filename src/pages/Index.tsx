import ToolchainColumn from "@/components/ToolchainColumn";

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

const newToolchainContent = `### Build System
- **Vite 5** with zero-config
- SWC transpilation
- Native ESM, no loaders needed

### Package Manager
- \`bun\` with \`bun.lockb\`
- Blazing installs (~3s)

### Testing
- Vitest + Testing Library
- \`@playwright/test\` for E2E

### Linting
- ESLint flat config (\`eslint.config.js\`)
- Prettier integrated via plugin

### Dev Server
- Vite native dev server
- HMR via **React SWC plugin**
- Cold start: **~300ms**

\`\`\`bash
bun run build  # ~8s on CI
\`\`\`
`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-2 tracking-tight">
          Toolchain Comparison
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
          <ToolchainColumn
            title="New Toolchain"
            content={newToolchainContent}
            variant="new"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
