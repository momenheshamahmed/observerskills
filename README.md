# ◎ Observer Studio — Claude Skills

A collection of Claude.ai skills built by [Observer Studio](https://observer.studio), an AI-native design consultancy based in Cairo.

Each skill is a standalone npm package — install any of them via `npx` in seconds.

---

## Available Skills

| Skill | npx command | Description |
|---|---|---|
| [Product Discovery & Strategy](./skills/product-discovery-strategy) | `npx claude-skill-product-discovery` | Structured discovery, research plans, strategy docs, competitive analysis |

*More skills coming soon.*

---

## How to install any skill

```bash
# 1. Run the npx installer
npx claude-skill-product-discovery

# 2. Upload the .skill file in Claude.ai
# claude.ai → Settings → Skills → Add Skill
```

---

## For contributors

This is an npm workspaces monorepo. Each skill lives in `skills/<skill-name>/` and is published independently to npm.

```
claude-skills/
├── skills/
│   ├── product-discovery-strategy/   # npx claude-skill-product-discovery
│   │   ├── skill/                    # .skill file + SKILL.md
│   │   ├── bin/install.js            # CLI installer
│   │   ├── package.json
│   │   └── README.md
│   └── your-next-skill/              # same structure
├── scripts/                          # monorepo utilities
├── package.json
└── README.md
```

### Adding a new skill

1. Create `skills/<your-skill-name>/` following the structure above
2. Add the `.skill` file to `skill/`
3. Update the bin name in `package.json`
4. Add it to the table in this README
5. Run `npm publish` from inside the skill folder

---

## About Observer Studio

Observer Studio is an AI-native design consultancy. We design products, build systems, and ship strategy for clients across MENA and beyond.

→ [observerstudio.co](https://observerstudio.co)

---

## License

MIT
# observerskills
