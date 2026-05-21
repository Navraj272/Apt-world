.PHONY: build clean

build: clean
	@echo "🔨 Building project..."
	@NODE_ENV=production node_modules/.bin/babel src --out-dir dist/src --copy-files --no-copy-ignored
	@NODE_ENV=production node_modules/.bin/babel index.js --out-file dist/index.js --copy-files --no-copy-ignored
	@echo "✅ Build completed!"

clean:
	@echo "🧹 Cleaning dist folder..."
	@rm -rf dist


# GIT TASKS
pull: ## Pull the current branch
	@git pull origin $$(git branch | grep \* | cut -d ' ' -f2) --rebase

push: ## Push the current branch
	@git push origin $$(git branch | grep \* | cut -d ' ' -f2) --force-with-lease

commit-message: ## Committing the current branch ex: make commit message ---> git commit -m "BRANCH_NAME: message"
	git commit -m "$$(git branch | grep \* | cut -d ' ' -f2): $(filter-out $@,$(MAKECMDGOALS))"
