# ─────────────────────────────────────────────
# Stage 1 — Build (Node.js)
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production bundle
RUN npm run build

# ─────────────────────────────────────────────
# Stage 2 — Serve (Nginx)
# ─────────────────────────────────────────────
FROM nginxinc/nginx-unprivileged:alpine AS production

# Remove default Nginx config and replace with our own
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
