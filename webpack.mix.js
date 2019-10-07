let mix = require('laravel-mix')
require('laravel-mix-purgecss')

mix
  .copy('src/app.html', 'dist/')
  .copy('src/manifest.json', 'dist/')
  .copyDirectory('src/assets/img', 'dist/img')
  .js('src/assets/js/app.js', 'dist/')
  .postCss('src/assets/css/app.css', 'dist/')
  .options({
    postCss: [
      require('postcss-import')(),
      require('tailwindcss')( './tailwind.config.js' ),
      require('postcss-nesting')(),
    ]
  })
  .purgeCss({
    folders: ['dist']
  })
