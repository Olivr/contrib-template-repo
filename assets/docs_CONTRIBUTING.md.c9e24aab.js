import{_ as a,c as r,b as e,t as s,d as o,a as t,o as i}from"./app.cc91a4fa.js";const j='{"title":"Contributing","description":"","frontmatter":{},"headers":[{"level":2,"title":"Spread the Word","slug":"spread-the-word"},{"level":2,"title":"Report Bugs","slug":"report-bugs"},{"level":2,"title":"Improve the Documentation","slug":"improve-the-documentation"},{"level":2,"title":"Resolve Issues and Features","slug":"resolve-issues-and-features"},{"level":3,"title":"Pull Request Process","slug":"pull-request-process"},{"level":2,"title":"Code of Conduct","slug":"code-of-conduct"},{"level":2,"title":"License","slug":"license"}],"relativePath":"docs/CONTRIBUTING.md"}',l={name:"docs/CONTRIBUTING.md"},p=e("h1",{id:"contributing",tabindex:"-1"},[o("Contributing "),e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#")],-1),c=t('<p>The following is a set of guidelines for contributing. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.</p><p><strong>Here are four ways you can contribute:</strong></p><ol><li><a href="#spread-the-word">Spread the word</a></li><li><a href="#report-bugs">Report bugs</a></li><li><a href="#improve-the-documentation">Improve the documentation</a></li><li><a href="#resolve-issues-and-features">Resolve issues and implement new features</a></li></ol><h2 id="spread-the-word" tabindex="-1">Spread the Word <a class="header-anchor" href="#spread-the-word" aria-hidden="true">#</a></h2>',4),u=o("The easiest to show your support: "),h=o(" on GitHub."),d=e("a",{href:"https://www.reddit.com/submit?url=https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D",target:"_blank",rel:"noopener noreferrer"},"Reddit",-1),g=o(", "),m=e("a",{href:"https://twitter.com/intent/tweet?url=https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D",target:"_blank",rel:"noopener noreferrer"},"Twitter",-1),_=o(", "),f=e("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D",target:"_blank",rel:"noopener noreferrer"},"LinkedIn",-1),b=o(", "),y=e("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D",target:"_blank",rel:"noopener noreferrer"},"Facebook",-1),D=o(", etc."),w=t(`<h2 id="report-bugs" tabindex="-1">Report Bugs <a class="header-anchor" href="#report-bugs" aria-hidden="true">#</a></h2><p>If you found a bug, thank you for taking the time to report it \u{1F64F}</p><p>To do so, please <a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/issues/new" target="_blank" rel="noopener noreferrer">open an issue</a> and give as much information as you can about the bug you found and how to reproduce it.</p><p>If you <strong>know</strong> this is a quick fix, you can apply the labels <code>good first issue</code> and <code>easy</code> so new contributors can find it easily to resolve it.</p><blockquote><p>\u26A0\uFE0F If you found a vulnerability, please see <a href="./SECURITY.html">our security policy</a></p></blockquote><h2 id="improve-the-documentation" tabindex="-1">Improve the Documentation <a class="header-anchor" href="#improve-the-documentation" aria-hidden="true">#</a></h2><p>We welcome improvements to the documentation.</p><p>If you want to fix a typo, add a sentence or two, an example, etc., you can open a pull request directly.</p><p>For bigger changes to the documentation, we recommend to discuss it in an issue before spending any time making huge changes that could be rejected.</p><h2 id="resolve-issues-and-features" tabindex="-1">Resolve Issues and Features <a class="header-anchor" href="#resolve-issues-and-features" aria-hidden="true">#</a></h2><p>If you are into coding, you can <strong>resolve issues</strong> or <strong>implement new features</strong>.</p><p>New contributors should look for issues <a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/issues?q=is%3Aopen+label%3A%22good+first+issue%22,easy" target="_blank" rel="noopener noreferrer">labelled <strong>good first issue</strong> or <strong>easy</strong></a>.</p><blockquote><p>\u26A0\uFE0F Before you start coding, please <strong>first discuss</strong> the change you wish to make by commenting on an existing issue or by <a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/issues/new" target="_blank" rel="noopener noreferrer">opening an issue</a>.</p></blockquote><h3 id="pull-request-process" tabindex="-1">Pull Request Process <a class="header-anchor" href="#pull-request-process" aria-hidden="true">#</a></h3><ol><li><p><a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/fork" target="_blank" rel="noopener noreferrer">Fork this repository</a>.</p></li><li><p>Clone <strong>your fork</strong> on your workstation.</p></li><li><p>Setup the developer dependencies (listed in <a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/blob/main/Brewfile" target="_blank" rel="noopener noreferrer">Brewfile</a> and <a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/blob/main/package.json" target="_blank" rel="noopener noreferrer">package.json</a>):</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">make setup</span></span>
<span class="line"></span></code></pre></div></li><li><p>Create a branch named after the feature or bug you&#39;re working on:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git switch -c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branch_name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>Write code and tests for your change then commit them to your working branch and push them to your repository:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branch_name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u26A0\uFE0F We follow the <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noopener noreferrer">Conventional Commits</a> specification in order to benefit from a proper semantic versioning and an auto-generated changelog. Please familiarize yourself with the spec before you commit.</p></blockquote></li><li><p><a href="https://github.com/%7B%7Brepo_owner%7D%7D/%7B%7Brepo_name%7D%7D/compare" target="_blank" rel="noopener noreferrer">Open a pull request</a> against this project</p></li><li><p>Wait for your pull request to be merged and watch it to answer any questions or make any changes you&#39;re asked. You will make these modifications directly on your working branch.</p></li><li><p>The project maintainers may ask you to rebase your branch. You can do it <strong>either</strong>:</p><ul><li><p>From your pull request by commenting <code>/rebase</code></p></li><li><p>From your workstation:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git remote add upstream git@github.com:{{repo_owner}}/{{repo_name}}.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git switch </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branch_name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch upstream</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase upstream/main</span></span>
<span class="line"><span style="color:#A6ACCD;">git push --force origin </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branch_name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>Once it is merged, you can delete your working branch</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git checkout main</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branch_name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin --delete </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">branch_name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="code-of-conduct" tabindex="-1">Code of Conduct <a class="header-anchor" href="#code-of-conduct" aria-hidden="true">#</a></h2><p><a href="./CODE_OF_CONDUCT.html"><img src="https://img.shields.io/badge/Contributor%20Covenant-2.1-informational.svg?style=flat-square" alt="Contributor Covenant"></a></p>`,17),C=e("a",{href:"./CODE_OF_CONDUCT.html"},"code of conduct",-1),B=o(". We adopted the "),A=e("a",{href:"https://www.contributor-covenant.org/",target:"_blank",rel:"noopener noreferrer"},"Contributor Covenant",-1),k=o(" which has been adopted by many popular open source projects."),v=t('<h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-hidden="true">#</a></h2><p><a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/License-Apache--2.0-informational?style=flat-square" alt="Apache 2.0 license"></a></p><p>By contributing to this project, you agree to license your contribution under the terms of our <a href="/LICENSE.html">license</a>.</p>',3);function F(n,T,I,q,S,N){return i(),r("div",null,[p,e("p",null,"\u{1F389} Thank you for taking the time to contribute to "+s(n.project_name)+" \u{1F389}",1),c,e("ul",null,[e("li",null,[e("p",null,[u,e("strong",null,"Star "+s(n.project_name),1),h])]),e("li",null,[e("p",null,[o("You can bring up "+s(n.project_name)+" in a conversation at the coffee machine, ",1),d,g,m,_,f,b,y,D])]),e("li",null,[e("p",null,s(n.project_name)+" and how you use it can be a good subject for an article if you are into blogging.",1)])]),w,e("p",null,[o("For all your interactions with "+s(n.project_name)+", you must adhere to our ",1),C,B,A,k]),v])}var P=a(l,[["render",F]]);export{j as __pageData,P as default};
