## Project Details

1. Redux --server side redux store should be synced with client side
2. Async api calls at server side and send html from server side only. Then continue updating the same store which server sent to client. (An example of pagination - first page is build on server side then next pages can be called at client side)
3. Redux Saga
4. Immer

CSS

To add global css add in `pages/_app.js` file. Like below
`import '../styles.css'`

To add component specific css we have we fesiable options

1. With CSS modules
   https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css

2. CSS-in-JS

`<style jsx>{.label{color:#000}}`

3. Without CSS modules
   a. scss files
   npm install --save @zeit/next-sass node-sass

   ```
   // next.config.js // at root leval
     const withSass = require('@zeit/next-sass')
     module.exports = withSass({
     /* config options here */
     })
   ```

   // import it in component
   `import "../styles/styles.scss"`

   b. css file - similar to above. Update the next.config.js file with

   ```
   module.exports = withCSS(withSass({}));
   ```

Typescript
Continued...

# With Redux Wrapper Example

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app. This is an example on how you can use redux that also works with our universal rendering approach. This is just a way you can do it but it's not the only one.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-redux-wrapper)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-redux-wrapper with-redux-wrapper-app
# or
yarn create next-app --example with-redux-wrapper with-redux-wrapper-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
