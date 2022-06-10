import{_ as e,c as o,o as t,a as r}from"./app.cc91a4fa.js";const b='{"title":"USING THIS TEMPLATE","description":"","frontmatter":{},"headers":[{"level":2,"title":"GitHub Actions","slug":"github-actions"},{"level":3,"title":"From an app","slug":"from-an-app"},{"level":3,"title":"From a user","slug":"from-a-user"},{"level":2,"title":"Dependency updates","slug":"dependency-updates"},{"level":3,"title":"Renovate","slug":"renovate"},{"level":3,"title":"Dependabot","slug":"dependabot"}],"relativePath":"README.md"}',a={name:"README.md"},n=r('<h1 id="using-this-template" tabindex="-1">USING THIS TEMPLATE <a class="header-anchor" href="#using-this-template" aria-hidden="true">#</a></h1><span><ol><li><p>Search/replace for these variables:</p><ul><li><code>{{repo_owner}}</code> - GitHub repository username</li><li><code>{{repo_name}}</code> - GitHub repository name</li><li><code>{{project_name}}</code> - Project name</li><li><code>{{project_tagline}}</code> - Project tagline</li><li><code>{{security_email}}</code> - Email to send vulnerabilities add <code>-noreply</code> before the <code>@</code></li><li><code>{{author_name}}</code> - Your name</li><li><code>{{docs_base_url}}</code> - Base URL to the documentation (no trailing slash). It could be: <ul><li><code>https://&lt;repo_owner&gt;.github.io/&lt;repo_name&gt;</code> (GitHub Pages default)</li><li><code>https://&lt;your_domain&gt;</code> (GitHub Pages with CNAME file)</li><li><code>https://github.com/&lt;repo_owner&gt;/&lt;repo_name&gt;/blob/main</code> (if you removed/don&#39;t want the documentation site)</li></ul></li><li><code>{{docs_extension}}</code> - Should be <code>html</code> if you use the documentation site, otherwise <code>md</code></li><li><code>{{forum_url}}</code> - URL to your forum for users to ask questions. It could be: <ul><li><code>https://github.com/&lt;repo_owner&gt;/&lt;repo_name&gt;/discussions</code> (if you enabled the discussions feature on your repo)</li><li><code>https://github.com/orgs/&lt;repo_owner&gt;/discussions</code> (if you enabled the discussions feature at your org level)</li><li><code>https://&lt;your_domain&gt;</code> (if you maintain a separate discussion forum, or a link to your community on Slack, Discord, etc.)</li></ul></li></ul><blockquote><p>For any decent-sized project, it is better to <strong>own</strong> your brand and use your own domain rather than GitHub links.</p></blockquote></li><li><p>Remove this <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md</a> and move docs/README.md to the root</p></li></ol><h2 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-hidden="true">#</a></h2><p>Some GitHub Actions bundled in this template require a personal access token (PAT). This can be sourced either from an app (recommended) or from a user.</p><h3 id="from-an-app" tabindex="-1">From an app <a class="header-anchor" href="#from-an-app" aria-hidden="true">#</a></h3><ol><li><p>Create an app <a href="https://github.com/settings/apps/new?&amp;name=-bot&amp;description=Bot%20account&amp;url=https%3A%2F%2Fwww.github.com&amp;user_token_expiration_enabled=true&amp;webhook_active=false&amp;contents=write&amp;issues=write&amp;pull_requests=write" target="_blank" rel="noopener noreferrer">with the minimum permissions</a> or add the following permissions to an existing app:</p><ul><li><strong>Contents</strong>: Read and write</li><li><strong>Issues</strong>: Read and write</li><li><strong>Pull requests</strong>: Read and write</li></ul></li><li><p>Set the <code>GH_APP_ID</code> and <code>GH_APP_PRIVATE_KEY</code> repository secrets.</p></li><li><p>Install the app to your repository (click <code>Install App</code> on the left menu of the app page)</p></li></ol><h3 id="from-a-user" tabindex="-1">From a user <a class="header-anchor" href="#from-a-user" aria-hidden="true">#</a></h3><ol><li><p><a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank" rel="noopener noreferrer">Create a personal access token</a> with the <code>repo</code> permissions.</p></li><li><p>Set the <code>GH_PERSONAL_TOKEN</code> repository secret.</p></li><li><p>Look into each file in <a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/blob/main/.github/workflows" target="_blank" rel="noopener noreferrer">.github/workflows</a>:</p><ul><li>Remove every step called <code>Generate app token</code></li><li>Replace <code>${{ steps.generate_token.outputs.token }}</code> with <code>${{ secrets.GH_PERSONAL_TOKEN }}</code></li></ul></li></ol><h2 id="dependency-updates" tabindex="-1">Dependency updates <a class="header-anchor" href="#dependency-updates" aria-hidden="true">#</a></h2><p>You can pick between <a href="https://docs.renovatebot.com/" target="_blank" rel="noopener noreferrer">Renovate</a> (recommended) or <a href="https://docs.github.com/en/code-security/dependabot" target="_blank" rel="noopener noreferrer">Dependabot</a> for your dependency updates.</p><blockquote><p>Dependabot <a href="https://github.com/dependabot/dependabot-core/issues/1524" target="_blank" rel="noopener noreferrer">won&#39;t keep your pre-commit hooks up to date</a> as opposed to Renovate.</p></blockquote><h3 id="renovate" tabindex="-1">Renovate <a class="header-anchor" href="#renovate" aria-hidden="true">#</a></h3><ol><li><a href="https://docs.renovatebot.com/getting-started/running/#running-renovate" target="_blank" rel="noopener noreferrer">Install it</a></li><li>Remove the file <code>.github/dependabot.yaml</code></li></ol><h3 id="dependabot" tabindex="-1">Dependabot <a class="header-anchor" href="#dependabot" aria-hidden="true">#</a></h3><p>Just remove the file <code>.github/renovate.json</code>.</p></span>',2),i=[n];function s(l,d,c,p,u,h){return t(),o("div",null,i)}var _=e(a,[["render",s]]);export{b as __pageData,_ as default};
