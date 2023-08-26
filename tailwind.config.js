import preset from './vendor/filament/support/tailwind.config.preset'

module.exports = {
    content: [
        './app/Filament/**/*.php',
        './resources/views/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
    ],

    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
