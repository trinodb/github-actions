FROM --platform=linux/amd64 node:20-bookworm-slim

COPY dist /dist

ENTRYPOINT ["node", "/dist/index.js"]
