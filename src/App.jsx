const runtimeItems = [
  {
    label: 'Runtime',
    value: 'React 19',
    detail: 'Client app entry is src/main.jsx.',
  },
  {
    label: 'Bundler',
    value: 'Vite 8',
    detail: 'Development server and production build.',
  },
  {
    label: 'Backend',
    value: 'Express 5',
    detail: 'Serves public files and the built SPA.',
  },
];

const routes = [
  {
    method: 'GET',
    path: '/',
    title: 'React shell',
    description: 'All browser routes return the compiled client entry.',
  },
  {
    method: 'STATIC',
    path: '/public',
    title: 'Public assets',
    description: 'Existing static files remain available through Express.',
  },
  {
    method: 'BUILD',
    path: '/dist',
    title: 'Production bundle',
    description: 'Vite output is served after npm run build.',
  },
];

const commands = [
  {
    command: 'npm run dev',
    description: 'Run the Vite development server.',
  },
  {
    command: 'npm run build',
    description: 'Create the production React bundle.',
  },
  {
    command: 'npm start',
    description: 'Serve the built app with Express.',
  },
];

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">node.sample</p>
          <h1>Vite React sample</h1>
          <p className="summary">
            A compact Node front-end template with a React client, Express fallback routing,
            and current package versions.
          </p>
        </div>
        <div className="hero__panel" aria-label="Migration status">
          <span className="panel-label">Status</span>
          <strong>Converted</strong>
          <p>Handlebars rendering removed. React now owns the browser UI.</p>
        </div>
      </section>

      <section className="status-grid" aria-label="Runtime status">
        {runtimeItems.map((item) => (
          <article className="status-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="split-layout">
        <div className="section-heading">
          <p className="eyebrow">Routes</p>
          <h2>Server surface</h2>
        </div>
        <div className="route-list">
          {routes.map((route) => (
            <article className="route-row" key={`${route.method}-${route.path}`}>
              <div>
                <span className="route-method">{route.method}</span>
                <code>{route.path}</code>
              </div>
              <div>
                <strong>{route.title}</strong>
                <p>{route.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="command-section">
        <div className="section-heading">
          <p className="eyebrow">Commands</p>
          <h2>Project workflow</h2>
        </div>
        <div className="command-grid">
          {commands.map((item) => (
            <article className="command-card" key={item.command}>
              <code>{item.command}</code>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
