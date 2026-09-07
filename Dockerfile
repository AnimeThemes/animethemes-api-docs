FROM oven/bun:1.3.8

WORKDIR /app

COPY package.json bun.lock ./

RUN apt-get update \
    && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

RUN bun install --frozen-lockfile

COPY . .

CMD ["bun", "run", "docs:build"]