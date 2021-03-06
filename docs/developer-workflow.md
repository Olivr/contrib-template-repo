<!-----------------------------------------------------------------------------
This guide serves as generic contributing guidelines for open source projects.

File modification history (see commits in each repository for details):
  - 2022-06-06: Created for https://github.com/olivr/template-repo

Copyright 2022 Romain Barissat. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
------------------------------------------------------------------------------>

# Developer workflow

🎉 Thank you for taking the time to contribute to {{project_name}} 🎉

If you haven't done so yet, please star this repository to help boost its
visibility on GitHub. Then follow the process below to start working straight
away.

You can install the [GitHub CLI](https://cli.github.com/) for more automation.

## Pull request process

1. [Fork this repository](https://github.com/{{repo_owner}}/{{repo_name}}/fork)
   and clone **your fork** on your workstation.

   Using [GitHub CLI](https://cli.github.com/):

   ```sh
   gh repo fork {{repo_owner}}/{{repo_name}} --clone
   cd {{repo_name}}
   ```

2. Install the developer dependencies (they are listed in
   [Brewfile](https://github.com/{{repo_owner}}/{{repo_name}}/blob/main/Brewfile)
   and
   [package.json](https://github.com/{{repo_owner}}/{{repo_name}}/blob/main/package.json)):

   ```sh
   make setup
   ```

3. Create a branch named after the feature or bug you're working on:

   ```sh
   git switch --create <branch_name>
   ```

4. Write your code!

   > Please don't forget to write tests for your change.

5. Ensure all the tests pass:

   ```sh
   make test
   ```

6. Commit to your working branch and push to your fork:

   ```sh
   git add .
   git commit
   git push --set-upstream origin <branch_name>
   ```

   > ⚠️ We follow the
   > [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
   > specification in order to benefit from a proper semantic versioning and an
   > auto-generated changelog. Please familiarize yourself with the spec before
   > you commit.

7. [Open a pull request](https://github.com/{{repo_owner}}/{{repo_name}}/compare)
   from your branch against this project's main branch.

   Using GitHub CLI:

   ```sh
   gh pr create --web --repo {{repo_owner}}/{{repo_name}}
   ```

8. Wait for your pull request to be merged and watch it to answer any questions
   or make any changes you're asked. You will make these changes directly on
   your working branch by following steps 4-6 as many times as necessary.

   The project maintainers may ask you to rebase your branch. You can do it
   **either**:

   - From your pull request by commenting `/rebase`
   - From your workstation:

     Ensure you added this repository as upstream (already done if you used
     GitHub CLI in step 1):

     ```sh
     git remote add upstream git@github.com:{{repo_owner}}/{{repo_name}}.git
     ```

     Ensure you are on the correct local branch:

     ```sh
     git switch <branch_name>
     ```

     Rebase the changes in your branch on top of the upstream changes:

     ```sh
     git pull --rebase upstream main
     ```

     [Resolve any conflicts](https://docs.github.com/en/get-started/using-git/resolving-merge-conflicts-after-a-git-rebase)
     and re-push your branch. Your pull request will be automatically re-synced:

     ```sh
     git push --force
     ```

9. Once your pull request is merged, you can delete your working branch

   ```sh
   git checkout main
   git branch -d <branch_name>
   git push origin --delete <branch_name>
   ```

## Makefile reference

The makefile contains all the processes you usually need to work on this
project. You can see a list of all targets by simply running `make` in your
terminal.

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- The documentation below is generated by make-docs (https://github.com/olivr/make-docs) -->
<!-- BEGIN_MAKE_DOCS -->

### Build {{project_name}}

```sh
make build
```

### Remove all {{project_name}} build files

```sh
make clean
```

### Run {{project_name}} in debug mode

```sh
make debug
```

### Deploy latest version of {{project_name}}

It is used for projects that can be deployed on a server (ie. remotely).

```sh
make deploy
```

### Generate Markdown documentation

```sh
make docs
```

### Build documentation site

```sh
make docs-build
```

### Remove all documentation site build files

```sh
make docs-clean
```

### Deploy documentation site

```sh
make docs-deploy
```

### Run documentation site locally

```sh
make docs-run
```

### Watch documentation site

```sh
make docs-watch
```

### Fix linting errors in source code

```sh
make fix
```

### Install {{project_name}} locally

It is used for projects that can be installed on a workstation (ie. locally).

```sh
make install
```

### Lint source code

Lint the whole code base, respecting .gitignore rules.

```sh
make lint
```

### List all phony targets of this Makefile

```sh
make list
```

### Release new version of {{project_name}}

```sh
make release
```

### Run {{project_name}}

```sh
make run
```

### Setup developer environment

- Install the developer dependencies listed in `Brewfile` and `package.json`
- Setup the git pre-commit hooks

```sh
make setup
```

### Run all test suites

```sh
make test
```

### Run integration tests

```sh
make test-integration
```

### Run unit tests

```sh
make test-unit
```

### Test developer workflow

Test a typical developer workflow by running all non-destructive commands.
These are commands that don't change a remote state (eg. deploy) nor hang the
shell (eg. watch).

```sh
make test-workflow
```

### Uninstall {{project_name}} locally

It is used to uninstall {{project_name}} from the workstation.

```sh
make uninstall
```

### Run {{project_name}} and watch for changes

```sh
make watch
```

<!-- END_MAKE_DOCS -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
