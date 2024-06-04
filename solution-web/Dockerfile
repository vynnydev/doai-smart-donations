# Stage 1: Install dependencies and build the app
FROM node:lts-alpine AS builder
WORKDIR /app

COPY package.json ./
RUN npm install --production=false

COPY . .
RUN npm run build

# Stage 2: Install production dependencies
FROM node:lts-alpine AS production-dependencies
WORKDIR /app

COPY package.json ./
RUN npm install --production=true

# Stage 3: Prepare the final image
FROM node:lts-alpine
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY package.json ./

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["npm", "start"]