# Jet VAE Anomaly Lab (frontend)
Research dashboard for *Unsupervised Jet Anomaly Detection in High-Energy Physics Collisions via Variational Autoencoders*.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```
## Status
UI-only. No backend, no training. All controls change local state only. Unknown metadata is shown as "unknown"; metrics show "Unavailable" until results exist.
Charts are labelled "Mock preview data".

## Connecting real data
- `src/types.ts` — interfaces (Dataset, ModelConfig, ExperimentRun, EvalMetrics).
- `src/mock/fixtures.ts` — all mock data; replace with fetch/JSON loaders returning these types.
- Pages read only from the `Ctx` object in `src/App.tsx`; chart components in `src/pages/Analytics.tsx` take plain arrays.
