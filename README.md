# nightwatchjs.org website

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

## License
MIT