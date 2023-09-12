FROM denoland/deno:alpine-1.36.4

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache src/main.ts

EXPOSE 3123

CMD ["run", "--unstable", "-A", "src/main.ts"]
