APPNAME = fresh-web
TAG = $(shell git rev-parse --short=8 HEAD)
HUB = registry.cn-shanghai.aliyuncs.com
NAMESPACE = arsk

dev:
	deno task start
build:
	docker build --build-arg GIT_REVISION=$(TAG) --rm -t $(APPNAME):$(TAG) .
run:
	docker run -it -p 3123:3123 --rm $(APPNAME):$(TAG)
push:
	docker image tag $(APPNAME):$(TAG) $(HUB)/$(NAMESPACE)/$(APPNAME):$(TAG)
	docker push $(HUB)/$(NAMESPACE)/$(APPNAME):$(TAG)

.PHONY: build run push dev
