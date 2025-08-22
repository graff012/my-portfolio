# ---- Stage 1: Build the Next.js app ----
FROM node:18-alpine AS builder
# Set working directory
WORKDIR /app

# Configure yarn for better network handling
RUN yarn config set network-timeout 300000
RUN yarn config set registry https://registry.npmjs.org/

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 300000

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN yarn build

# ---- Stage 2: Run the production build ----
FROM node:18-alpine AS runner
WORKDIR /app

# Set Node env
ENV NODE_ENV=production

# Install only production dependencies
COPY package.json yarn.lock ./
RUN yarn config set network-timeout 300000 && \
    yarn install --frozen-lockfile --production --network-timeout 300000

# Copy the build output from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Change ownership of the .next directory
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

# Expose the Next.js port
EXPOSE 3000

# Start Next.js
CMD ["yarn", "start"]
