# Base Image 
FROM node:22-alpine 

# Set working directory 
WORKDIR /app 

# Only copy package.json and package-lock.json first
COPY package.json package-lock.json* ./

# Install dependencies 
RUN npm install --legacy-peer-deps

# Copy rest of the code 
COPY . . 

# Expose port 
EXPOSE 3000 

# Run command 
CMD ["npm", "start"] 
