1. npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
    npm run dev
    Starts the development server.

    npm run build
    Builds the app for production.

    npm start
    Runs the built app in production mode.

    We suggest that you begin by typing:

    cd nextjs-blog
    npm run dev
2. npm install --save-dev typescript @types/react @types/node
3. touch tsconfig.json
4. npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes
5. Add "postcss.config.js" to root with this content
// postcss.config.js
module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}

6. Add "tailwind.config.js" to root and its content
// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ]
  // ...
}

7. npm install sass
8. Add "next.config.js" to root and its SASS configuration

const path = require('path')

// includePaths
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
