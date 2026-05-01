# forge-auth

OAuth, SAML, magic links, sessions, and step-up flows.

> A Forge framework. **Live preview**: https://cdn.jsdelivr.net/gh/seeron6/forge-auth@main/preview/index.html

## What it is

The auth layer you keep rewriting. OAuth providers, SAML for enterprise, passwordless magic links, durable sessions, and a step-up MFA flow that doesn't make users hate you.

## Features

- **OAuth** — Google, GitHub, Microsoft
- **SAML** — Enterprise SSO
- **Magic links** — Passwordless email
- **Step-up MFA** — TOTP + WebAuthn

## Stack

`node`, `postgres`, `redis`

## Layout

```
src/
└── index.ts          # Reference implementation
preview/
└── index.html        # Live preview surface (loaded by Forge sandbox)
forge.config.json     # Registry manifest (stripped at fork time)
forge.schema.json     # Config schema — drives the dashboard UI
```

## Forking

This repo is a GitHub template. Fork it through the Forge dashboard or directly via:

```
gh repo create your-org/your-auth --template seeron6/forge-auth --public
```

When you fork through Forge, the registry records the diff and links your fork
to the variant tree.

---

Forge is a living framework registry — every fork sharpens the next adoption.
Browse more at the registry: <https://github.com/seeron6/ForgeAI>.
