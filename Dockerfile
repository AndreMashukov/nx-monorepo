# Stage 1: Build
FROM node:16 AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the React project
RUN npx nx build:main --prod

# Stage 2: Serve
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist/apps/main /usr/share/nginx/html

# Copy Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
