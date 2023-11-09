# nightwatchjs.org website

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6732c16-83fb-40cb-83e9-da1873f89298/deploy-status)](https://app.netlify.com/sites/zesty-starlight-195300/deploys)

## Development

### Run the website locally

The website is built with **PostDoc** (a new static site generator built with Vite and EJS, currently in preview). It supports Markdown, EJS, and front matter.

It comes with a dev server with hot reload.

```bash
npm install
npm start
```

### PostDoc CLI

To view the available options, run:

```bash
npx postdoc --help
```

#### Automatically open the website in the browser

```bash
npm start -- --open [chrome|firefox|edge|safari]
```

## Build

To build the website, run:

```bash
npm run build
```

The generated files will be in the `out` folder. You can serve them with any static server.

Quickly serve the generated files with:

```bash
npx serve out
```

## Deploy to Production

In order to deploy to the production server, you need to create a PR for the `release/v1.0` branch. 

The PR requires at least 2 approvals from the maintainers. Once the PR is merged, the website will be automatically deployed to the production server.

## License
MIT

