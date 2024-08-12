# Currency Converter

This is a technical test for a company who would probably rather not be named here.

## Running locally

After cloning this repo, install dependencies with NPM:

```bash
npm install
```

Add your Currency Beacon API key to your environment. The simplest way is to add a `.env.local` file at the project root:

```bash
API_KEY="My super secret API key"
```

Start the app in dev mode:

```bash
npm run dev
```

The console output will provide a local URL, the default is http://localhost:5173/

## Tests

After installing dependencies, component tests with Vitest and React Testing Library can be run with:

```bash
npm run test
```

## Notes

### UI

The task specified not to focus on design, but I added some simple UI styling with DaisyUI (based on Tailwind CSS).

The app can be reviewed without UI styles by checking out the git tag `task-complete`:

```bash
git checkout task-complete
```

### API key

This is a client-side app which interfaces directly with the Currency Beacon API. As such, the Currency Beacon API key is exposed to the browser, potentially a security risk.

One solution to this would be to delegate the fetching from Currency Beacon to a server-side app, e.g. Next.js.
