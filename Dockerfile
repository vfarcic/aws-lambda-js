FROM node:10-slim

RUN npm install -g serverless
RUN apt update && apt install git -y