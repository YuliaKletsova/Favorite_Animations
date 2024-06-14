const config = {
    printWidth: 80, // Maximum line length
    tabWidth: 4, // Number of spaces per tab
    useTabs: false, // Use spaces instead of tabs
    semi: true, // Use semicolons
    singleQuote: true, // Use single quotes instead of double quotes
    quoteProps: 'as-needed', // Only add quotes around object properties where required
    jsxSingleQuote: false, // Use double quotes in JSX
    trailingComma: 'es5', // Print trailing commas wherever possible (ES5: objects, arrays, etc.)
    bracketSpacing: true, // Print spaces between brackets in object literals
    endOfLine: 'lf', // Use LF (Unix) line endings
    embeddedLanguageFormatting: 'auto', // Format embedded code if Prettier can automatically identify it
    htmlWhitespaceSensitivity: 'css', // Respect the default value of CSS display property
    proseWrap: 'preserve', // Do not wrap prose
};

export default config;
