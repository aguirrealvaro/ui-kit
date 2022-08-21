module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "npm run lint",
    "eslint --fix --plugin tsc --rule 'tsc/config: [2, {configFile: ./tsconfig.json}]'",
  ],
};
