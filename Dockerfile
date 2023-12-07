FROM denoland/deno:alpine-1.38.5

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache src/main.ts
RUN deno --unstable run -A src/dev.ts build

EXPOSE 3123

CMD ["run", "--unstable", "-A", "src/main.ts"]
