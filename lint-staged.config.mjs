import path from "node:path";

const buildEslintCommand = filenames =>
  `eslint ${filenames
    .map(f => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

const buildPrettierCommand = filenames =>
  `prettier --check ${filenames
    .map(f => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

const config = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
};

export default config;
