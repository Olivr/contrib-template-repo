# -----------------------------------------------------------------------------
# This makefile sets the most common targets found in a typical Makefile.
#
# Notable file modification history (see commits in each repository for details):
#   2022-06-06: Created for https://github.com/olivr/template-repo
#
# Copyright 2022 Romain Barissat. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# -----------------------------------------------------------------------------
.DEFAULT_GOAL:=list

# -----------------------------------------------------------------------------
# Configuration options
# -----------------------------------------------------------------------------
JS_INSTALLER:=yarn# Could be "npm"

# -----------------------------------------------------------------------------
# Tools
# -----------------------------------------------------------------------------
GITLEAKS:=$(shell [[ $$(command -v gitleaks 2> /dev/null) ]]\
	&& echo "gitleaks" || echo\
	"docker run -v $$PWD:/project zricethezav/gitleaks:latest --source /project"\
)
MAKE_DOCS:=$(shell [[ $$(command -v make-docs 2> /dev/null) ]]\
	&& echo "make-docs" || echo "npx make-docs"\
)
ACTION_LINT:=$(shell [[ $$(command -v actionlint 2> /dev/null) ]]\
	&& echo "actionlint" || echo\
	"docker run -v $$PWD:/project --workdir /project rhysd/actionlint:latest"\
)
YAML_LINT:=$(shell [[ $$(command -v yamllint 2> /dev/null) ]]\
	&& echo 'yamllint "."'\
	|| echo '@echo "⚠️ Skipping Yamllint: not installed."'\
)
HOMEBREW_INSTALLED:=$(shell command -v brew 2> /dev/null)
JS_INSTALLER_INSTALLED:=$(shell command -v $(JS_INSTALLER) 2> /dev/null)

# -----------------------------------------------------------------------------
# List all phony targets of this Makefile
# -----------------------------------------------------------------------------
.PHONY: list
list:
	@${MAKE_DOCS} --format console --sort "."

# -----------------------------------------------------------------------------
# Setup developer environment
#
# - Install the developer dependencies listed in `Brewfile` and `package.json`
# - Setup the git pre-commit hooks
# -----------------------------------------------------------------------------
.PHONY: setup
setup:
	@echo -----------------------------------------------------------------------
	@echo -- Setup developer environment
	@echo -----------------------------------------------------------------------

ifdef HOMEBREW_INSTALLED
ifeq ($(CI),true)
	brew bundle
else
	@echo "Do you want to install dependencies with Homebrew? [Y/n] ";\
		read ANSWER;\
		if [[ $${ANSWER:-Y} == Y ]]; then brew bundle; fi;
endif
else
	@echo "Homebrew is not installed. \
	Skipping automated dependencies installation."
endif

ifdef JS_INSTALLER_INSTALLED
	$(JS_INSTALLER) install
else
	@echo "$(JS_INSTALLER) is not installed. \
	Skipping JS dependencies installation."
endif

	pre-commit install --install-hooks -t pre-commit -t commit-msg

	@echo

# -----------------------------------------------------------------------------
# Build {{project_name}}
# -----------------------------------------------------------------------------
.PHONY: build
build:
	@echo -----------------------------------------------------------------------
	@echo -- Build {{project_name}}
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'build' target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Remove all {{project_name}} build files
# -----------------------------------------------------------------------------
.PHONY: clean
clean: docs-clean
	@echo -----------------------------------------------------------------------
	@echo -- Remove all {{project_name}} build files
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'clean' target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Lint source code
# Lint the whole code base, respecting .gitignore rules.
# -----------------------------------------------------------------------------
.PHONY: lint
lint:
	@echo -----------------------------------------------------------------------
	@echo -- Lint source code
	@echo -----------------------------------------------------------------------
	npx prettier --ignore-path .gitignore --loglevel warn --check "."
	npx textlint --ignore-path .gitignore "." ".*/*"
	npx markdownlint --ignore-path .gitignore --dot "."
	${YAML_LINT}
	pre-commit run check-dependabot --all-files
	pre-commit run check-renovate --all-files
	${ACTION_LINT}
	${GITLEAKS} detect --log-level warn
	@echo

# -----------------------------------------------------------------------------
# Fix linting errors in source code
# -----------------------------------------------------------------------------
.PHONY: fix
fix:
	@echo -----------------------------------------------------------------------
	@echo -- Fix linting errors in source code
	@echo -----------------------------------------------------------------------
	npx prettier --ignore-path .gitignore --loglevel warn --write "."
	npx textlint --ignore-path .gitignore --fix "." ".*/*"
	npx markdownlint --ignore-path .gitignore --fix --dot "."
	@echo

# -----------------------------------------------------------------------------
# Run all test suites
# -----------------------------------------------------------------------------
.PHONY: test
test: test-unit test-integration

# -----------------------------------------------------------------------------
# Run unit tests
# -----------------------------------------------------------------------------
.PHONY: test-unit
test-unit:
	@echo -----------------------------------------------------------------------
	@echo -- Run unit tests
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'test-unit' target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Run integration tests
# -----------------------------------------------------------------------------
.PHONY: test-integration
test-integration:
	@echo -----------------------------------------------------------------------
	@echo -- Run integration tests
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'test-integration' target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Run {{project_name}} in debug mode
# -----------------------------------------------------------------------------
.PHONY: debug
debug:
	@echo -----------------------------------------------------------------------
	@echo -- Run {{project_name}} in debug mode
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'debug' target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Run {{project_name}} and watch for changes
# -----------------------------------------------------------------------------
.PHONY: watch
watch:
	@echo -----------------------------------------------------------------------
	@echo -- Run {{project_name}} and watch for changes
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'watch' target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Run {{project_name}}
# -----------------------------------------------------------------------------
.PHONY: run
run:
	@echo -----------------------------------------------------------------------
	@echo -- Run {{project_name}}
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'run' target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Install {{project_name}} locally
# It is used for projects that can be installed on a workstation (ie. locally).
# -----------------------------------------------------------------------------
.PHONY: install
install:
	@echo -----------------------------------------------------------------------
	@echo -- Install {{project_name}} locally
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The 'install' target has not been configured yet."
	@echo "It is used for projects that can be installed on a workstation."
	@echo

# -----------------------------------------------------------------------------
# Uninstall {{project_name}} locally
# It is used to uninstall {{project_name}} from the workstation.
# -----------------------------------------------------------------------------
.PHONY: uninstall
uninstall:
	@echo -----------------------------------------------------------------------
	@echo -- Uninstall {{project_name}} locally
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The uninstall target has not been configured yet."
	@echo "It is used for projects that can be installed on a workstation."
	@echo

# -----------------------------------------------------------------------------
# Release new version of {{project_name}}
# -----------------------------------------------------------------------------
.PHONY: release
release:
	@echo -----------------------------------------------------------------------
	@echo -- Release new version of {{project_name}}
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The release target has not been configured yet."
	@echo

# -----------------------------------------------------------------------------
# Deploy latest version of {{project_name}}
# It is used for projects that can be deployed on a server (ie. remotely).
# -----------------------------------------------------------------------------
.PHONY: deploy
deploy:
	@echo -----------------------------------------------------------------------
	@echo -- Deploy latest version of {{project_name}}
	@echo -----------------------------------------------------------------------
	@echo "ℹ️  The deploy target has not been configured yet."
	@echo "It is used for projects that can be deployed on a server."
	@echo

# -----------------------------------------------------------------------------
# Generate Markdown documentation
# -----------------------------------------------------------------------------
.PHONY: docs
docs:
	@echo -----------------------------------------------------------------------
	@echo -- Generate Markdown documentation
	@echo -----------------------------------------------------------------------
	@${MAKE_DOCS} --sort --inject docs/developer-workflow.md "."

# -----------------------------------------------------------------------------
# Build documentation site
# -----------------------------------------------------------------------------
.PHONY: docs-build
docs-build: docs-clean
	@echo -----------------------------------------------------------------------
	@echo -- Building documentation site
	@echo -----------------------------------------------------------------------
	npx vitepress build
	@echo

# -----------------------------------------------------------------------------
# Watch documentation site
# -----------------------------------------------------------------------------
.PHONY: docs-watch
docs-watch:
	@echo -----------------------------------------------------------------------
	@echo -- Watch documentation site
	@echo -----------------------------------------------------------------------
	npx vitepress dev
	@echo

# -----------------------------------------------------------------------------
# Remove all documentation site build files
# -----------------------------------------------------------------------------
.PHONY: docs-clean
docs-clean:
	@echo -----------------------------------------------------------------------
	@echo -- Remove all documentation site build files
	@echo -----------------------------------------------------------------------
	rm -rf .vitepress/dist
	@echo

# -----------------------------------------------------------------------------
# Run documentation site locally
# -----------------------------------------------------------------------------
.PHONY: docs-run
docs-run:
	@echo -----------------------------------------------------------------------
	@echo -- Run documentation site locally
	@echo -----------------------------------------------------------------------
# Using port 5001 because 5000 is already taken on MacOS Monterey.
	npx vitepress serve --port 5001
	@echo

# -----------------------------------------------------------------------------
# Deploy documentation site
# -----------------------------------------------------------------------------
GIT_URL:=$(shell git config --get remote.origin.url)
.PHONY: docs-deploy
docs-deploy: docs-build
	@echo -----------------------------------------------------------------------
	@echo -- Deploy documentation site
	@echo -----------------------------------------------------------------------
	@$(shell [[ -e "CNAME" ]] && cp "CNAME" ".vitepress/dist/CNAME")
	@$(shell [[ -e "docs/CNAME" ]] && cp "docs/CNAME" ".vitepress/dist/CNAME")
ifeq ($(GITHUB_ACTIONS),true)
	cd .vitepress/dist\
	&& git init --initial-branch gh-pages\
	&& git remote add origin\
	https://x-access-token:$(GITHUB_TOKEN)@github.com/$(GITHUB_REPOSITORY)\
	&& git add --all\
	&& git commit --message 'chore: deploy documentation site'\
	&& git push --force origin gh-pages:gh-pages
else
	cd .vitepress/dist\
	&& git init --initial-branch gh-pages\
	&& git add --all\
	&& git commit --message 'chore: deploy documentation site'\
	&& git push --force $(GIT_URL) gh-pages:gh-pages
endif
	@echo

# -----------------------------------------------------------------------------
# Test developer workflow
#
# Test a typical developer workflow by running all non-destructive commands.
# These are commands that don't change a remote state (eg. deploy) nor hang the
# shell (eg. watch).
# -----------------------------------------------------------------------------
.PHONY: test-workflow
test-workflow: setup lint fix build test-unit install uninstall docs docs-build docs-clean clean
	@echo -----------------------------------------------------------------------
	@echo -- Test developer workflow
	@echo -----------------------------------------------------------------------
	@git stash || true

	temp_file=$$(mktemp ./XXXXXX) \
		&& echo "Test\n" > $$temp_file \
		&& git add $$temp_file \
		&& git commit -m"chore: test dev workflow" \
		&& git reset --soft HEAD^ \
		&& git restore --staged $$temp_file \
		&& rm -f $$temp_file

	@git stash apply --index || true
	@echo
