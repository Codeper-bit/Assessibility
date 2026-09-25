# Accessibility AI

An AI accessibility-focused learning tool. It will eventually take
educational text/PDFs and transform dense material into visual
learning representations — process diagrams, timelines, concept maps,
comparisons, and concept cards.

## Current development stage: Day 1 — Foundation only

What exists right now:
- A working React + Vite + Tailwind frontend with a polished UI shell
- A working FastAPI backend with a single `/health` endpoint
- The frontend can successfully reach the backend (see the status
  badge on the dashboard)

What does **not** exist yet (by design):
- No LLM integration
- No PDF processing
- No database (PostgreSQL/Supabase)
- No authentication
- No security hardening

See "Later Security & Reliability Checklist" below — nothing on that
list has been skipped, it's intentionally deferred.

## Project structure

```
accessibility-ai/
├── frontend/   React + Vite + Tailwind UI
├── backend/    FastAPI backend
└── README.md
```

## Frontend setup

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Runs at http://localhost:5173

## Backend setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

Runs at http://localhost:8000
Check it directly at http://localhost:8000/health — should return
`{"status": "ok"}`.

## Running both together

1. Start the backend first (`uvicorn app.main:app --reload`)
2. Start the frontend (`npm run dev`)
3. Open http://localhost:5173 — the dashboard's status badge should
   say "Backend connected"

## Later Security & Reliability Checklist

Deferred intentionally, not forgotten:

- [ ] Input validation (Pydantic schemas) on all future request bodies
- [ ] File size/type restrictions on PDF uploads
- [ ] PDF parsing security (malicious file handling)
- [ ] Authentication (likely Supabase, per existing login work)
- [ ] Authorization (users can only see their own transformations)
- [ ] Rate limiting on transform endpoint (LLM calls are expensive)
- [ ] Prompt injection protection (material text will be untrusted input)
- [ ] AI hallucination mitigation / output review
- [ ] SQL injection protection once the database is added
- [ ] Database constraints (foreign keys, not-null, etc.)
- [ ] Tighten CORS origins before any deployment (currently wide open
      for local dev only)
