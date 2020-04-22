.PHONY: lint-check
lint-check:
	npm run lint-check

.PHONY: lint-fix
lint-fix:
	npm run lint-fix

.PHONY: dist
dist:
	npm run dist

.PHONY: clean
clean:
	npm run clean

.PHONY: update
update:
	npm install

.PHONY: docker
docker: clean update lint-check dist
	npm run docker-build

