# Research Desk

Build Research Desk: a multi-agent research assistant in TypeScript. It plans, researches with MCP tools, writes a cited brief, defends itself with guardrails, is measured by evals, and runs on any model through OpenRouter.

You ask a factual question. A planner agent splits it into sub-questions. Researcher agents answer each one using tools served by your own MCP server (Wikipedia search, page summary, allow-listed URL fetch). A writer agent produces a short brief with citations. Guardrails check the input and the output, budgets cap cost and runtime, and you approve before anything is saved. An eval suite scores the whole thing, and you can swap models per role with one line in a config file.

## Tech stack

- Node 22+, TypeScript, tsx
- openai SDK pointed at OpenRouter (OpenAI-compatible API)
- @modelcontextprotocol/sdk for the MCP server and client
- zod v4 for schemas and validation
- vitest for unit tests
- Express for the remote MCP server (day 13)