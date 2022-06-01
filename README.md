# USING THIS TEMPLATE

1. Search/replace for these variables:

   - `{{repo_owner}}` (GitHub repo username)
   - `{{repo_name}}` (GitHub repo name)
   - `{{project_name}}` (Project name)
   - `{{security_email}}` (Email to send vulnerabilities with `-noreply` somewhere)

## GitHub Actions

Some GitHub Actions bundled in this template require a personal access token (PAT). This can be sourced either from an app (recommended) or from a user.

### From an app

1. Create an app [with the minimum permissions](https://github.com/settings/apps/new?&name=-bot&description=Bot%20account&url=https%3A%2F%2Fwww.github.com&user_token_expiration_enabled=true&webhook_active=false&contents=write&issues=write&pull_requests=write) or add the following permissions to an existing app:

    - **Contents**: Read and write
    - **Issues**: Read and write
    - **Pull requests**: Read and write

2. Set the `GH_APP_ID` and `GH_APP_PRIVATE_KEY` repo secrets.
3. Install the app to your repository (click `Install App` on the left menu of the app page)

### From a user

1. [Create a personal access token](https://github.com/settings/tokens/new?scopes=repo) with the `repo` permissions.

2. Set the `GH_PERSONAL_TOKEN` repo secret.

3. Look into each file in [.github/workflows](.github/workflows):
    - Remove every step called `Generate app token`
    - Replace `${{ steps.generate_token.outputs.token }}` with `${{ secrets.GH_PERSONAL_TOKEN }}`

## Dependency updates

You can pick between [Dependabot](https://docs.github.com/en/code-security/dependabot) or [Renovate](https://docs.renovatebot.com/) for your dependency updates.

### Dependabot

Just remove the file `.github/renovate.json`

### Renovate

1. [Install it](https://docs.renovatebot.com/getting-started/running/#running-renovate)
2. Remove the file `.github/dependabot.yaml`
