# Flourish
Ashia Agarwal, Harini Champooranam, Keerthana Thatikonda, Nidhi Kunta, Grace Trinh

**Females investing in females.**

A concept built for Fidelity's "Smart Money Moves" hackathon challenge: helping early career women build smart money habits, connect finances to career growth, build community, and feel confident making their first money moves.

## What it does

Flourish reframes a first job's tangle of decisions, first investments, first raises, first "should I care about this headline" moments, into one calm, plain English home base.

- **Home**: your linked portfolio, decoded. A daily return explained in plain English, a "your stocks are close friends" correlation insight, an earning power card that treats your salary as your biggest asset, and a collapsible data section (charts, correlation matrix, forecast) so the page never feels overwhelming.
- **Translate**: paste any financial headline and get it rewritten at your level, "explain like I'm 18" through "I'm building wealth."
- **Discover**: a "women invest in women" hub, women led companies, women CEOs, and gender lens funds, each fit checked against your actual portfolio.
- **Coach**: a chat coach with three modes, live chat, a browsable knowledge base (what the coach is grounded in), and Quick Prep, a pocket cheat sheet generator for a money conversation you have coming up in five minutes.
- **After Dark**: the whole app shifts tone and palette at night, plus a "Find your light" anonymous community panel for the questions people don't ask in daylight.

## Tech stack

- **React 18 + Vite** for the app shell and build tooling.
- **Tailwind CSS** for styling.
- **JavaScript XML** for backend.
- **Recharts** for the portfolio forecast and history charts.
- **lucide-react** for icons.
- **Claude (Anthropic API, `claude-sonnet-4-6`)** powers every live AI surface: the News Translator, the Discover briefings, the Coach chat, and Quick Prep. Calls are made directly from the client for this prototype.
- **RAG pipeline**: the Coach's "Knowledge base" tab and the "How Flourish thinks" panel (account menu) document the retrieval, personalization, generation, and guardrail layers the design is built around. Generation is live in this build; the retrieval layer is represented with a curated, mocked knowledge base for the demo rather than a deployed vector database.

## Running it locally

```bash
npm install
cp .env.example .env
# add your own Anthropic API key to .env
npm run dev
```

Open the printed local URL. The app works fully without an API key too, every AI feature falls back to a static demo response if `VITE_ANTHROPIC_API_KEY` isn't set.

To build for production:

```bash
npm run build
npm run preview
```

## Notes for judges

This is a hackathon prototype. Portfolio holdings, correlation figures, and community posts are sample data for demo purposes, not a real linked account. Nothing in the app is investment advice, every AI surface is scoped to education and scenario exploration.

## Team

Built for Fidelity's Smart Money Moves hackathon challenge.
