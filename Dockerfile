# ---- Stage 1: Build the Next.js app ----
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN yarn install --frozen-lockfile && yarn cache clean || npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN yarn build || npm run build

# ---- Stage 2: Run the production build ----
FROM node:18-alpine AS runner

WORKDIR /app

# Set Node env
ENV NODE_ENV=production

# Install only production dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN yarn install --omit=dev || npm install --production --frozen-lockfile

# Copy the build output from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Expose the Next.js port
EXPOSE 3000

# Start Next.js
CMD ["yarn", "start"]
