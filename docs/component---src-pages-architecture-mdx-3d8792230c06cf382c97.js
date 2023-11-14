"use strict";(self.webpackChunk_monodeploy_gatsby=self.webpackChunk_monodeploy_gatsby||[]).push([[233],{1057:function(e,t,l){l.r(t);var n=l(5300),i=l(9742),a=l(5607);function o(e){const t=Object.assign({h2:"h2",a:"a",div:"div",h3:"h3",p:"p",code:"code",em:"em",ol:"ol",li:"li",ul:"ul"},(0,n.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.h2,{id:"architecture",style:{position:"relative"}},i.createElement(t.a,{href:"#architecture","aria-label":"architecture permalink",className:"anchor before"},i.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Architecture"),"\n",i.createElement(t.h3,{id:"code-organization",style:{position:"relative"}},i.createElement(t.a,{href:"#code-organization","aria-label":"code organization permalink",className:"anchor before"},i.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Code Organization"),"\n",i.createElement(t.p,null,"The Monodeploy codebase is organized as a monorepo, and ultimately uses monodeploy to publish itself."),"\n",i.createElement(t.p,null,"The ",i.createElement(t.code,null,"packages/cli")," directory contains the root ",i.createElement(t.code,null,"monodeploy")," package, which is a loose wrapper around ",i.createElement(t.code,null,"@monodeploy/node"),". The ",i.createElement(t.code,null,"@monodeploy/node")," package houses the pipeline logic and acts similar to the ",i.createElement(t.code,null,"@private/core")," package of other popular monorepo based projects."),"\n",i.createElement(t.h3,{id:"publish-pipeline",style:{position:"relative"}},i.createElement(t.a,{href:"#publish-pipeline","aria-label":"publish pipeline permalink",className:"anchor before"},i.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Publish Pipeline"),"\n",i.createElement(t.p,null,i.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1000px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 18.8%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/ElEQVQY0wXBC3KDIBAAUO9/tqYTihHxBwILjMZqjJmINbt9L2MSTqaegvU75u3gOGPEeY51o7FrOypbHy/Nmr6bJX1Vc7iqjQr7hoKzoytzAufQ9ZrAWpLxjzLtxrPyb1HHA50FN2lOi+G4mivOrqDRVFHAnmrYkvRHUMNOjd/gV/8cQ3OhzTK8W0mzk6TCSpkOj1OYVQg1ojUWfMtp0DmOrsXBG+q1iXk3JaHv6WZeoTYTVWaGyYhjgZJmJ9CqiqJVVJs7ZSYu5828RA4fNDC42XCarUDlH9i5kQr7CmX4JBk+SfgjyIhUwg5PKI7kGS2uxAF6Gl1L0u/0D1mQIb6koKC6AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Architecture Diagram"\n        title="Architecture Diagram"\n        src="https://tophat.github.io/monodeploy/static/de476725174feb6fc7c9e91781bb9b9b/00d43/architecture.png"\n        srcset="https://tophat.github.io/monodeploy/static/de476725174feb6fc7c9e91781bb9b9b/63868/architecture.png 250w,\nhttps://tophat.github.io/monodeploy/static/de476725174feb6fc7c9e91781bb9b9b/0b533/architecture.png 500w,\nhttps://tophat.github.io/monodeploy/static/de476725174feb6fc7c9e91781bb9b9b/00d43/architecture.png 1000w,\nhttps://tophat.github.io/monodeploy/static/de476725174feb6fc7c9e91781bb9b9b/aa440/architecture.png 1500w,\nhttps://tophat.github.io/monodeploy/static/de476725174feb6fc7c9e91781bb9b9b/9ce1c/architecture.png 1886w"\n        sizes="(max-width: 1000px) 100vw, 1000px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",i.createElement(t.p,null,"The high-level of the pipeline aims to be simple, with most complexities abstracted away."),"\n",i.createElement(t.p,null,"In the first stage of the pipeline, after initialization, we use the loaded conventional changelog config to determine the packages which have been explicitly bumped via commit messages. An explicitly bumped package is always directly included in the commits ranging from the base commit to the publish commit. The conventional changelog configuration is ultimately responsible for correct parsing of the commit messages, and for the correctness of the version strategy determiner algorithm."),"\n",i.createElement(t.p,null,'The determination of the version strategies by package is the beginning of the creation of Monodeploy\'s "changeset". This changeset is enhanced a few times throughout the pipeline before ultimately being written out to the changeset file.'),"\n",i.createElement(t.p,null,"Once we have the explicit version strategies, we determine the implicit strategies. This is accomplished by traversing the dependencies graph and finding all dependents of the explicitly bumped packages, excluding dependents which themselves are explicitly bumped. These dependent packages are automatically given a patch version strategy. This is to ensure downstream consumers of the explicitly bumped packages receive updates. If using package groups (similar to Lerna's fixed mode), the greatest strategy is assumed for each group. Note that if no groups are specified, monodeploy defaults to treat each package as its own independent group."),"\n",i.createElement(t.p,null,'The collection of version strategies associated with the individual packages are now read to apply the version strategy (e.g. "minor") to the latest version of each package. Each package group resolves to use the largest version number among the group for each of its members. Package manifests (',i.createElement(t.code,null,"package.json")," files) are updated so the ",i.createElement(t.code,null,"version")," of the manifest, and the versions listed in the ",i.createElement(t.code,null,"dependencies"),", ",i.createElement(t.code,null,"peerDependencies"),", and ",i.createElement(t.code,null,"devDependencies")," fields reflect the latest versions we are about to publish."),"\n",i.createElement(t.p,null,"After manifest files are updated, Yarn triggers an install to update the Yarn lockfile, as well as any other install state files."),"\n",i.createElement(t.p,null,"Once the manifests of all packages we will be publishing are updated, we trigger a publish to the specified NPM-like registry. Before and after publishing each package, the appropriate npm lifecycle hooks are executed. These hooks are guaranteed to be executed in topological order, if the topological configuration option is enabled."),"\n",i.createElement(t.p,null,"At this point, the changeset information for each published package is piped through the loaded conventional changelog config, and changelog files are written. Depending on configuration options, the changelog files, and the modified package manifests are committed. If enabled, release git tags are created then created, and the tagged commit is pushed to the remote git repository."),"\n",i.createElement(t.p,null,"At various steps throughout the pipepline, Monodeploy plugin hooks will be triggered."),"\n",i.createElement(t.h3,{id:"lifecycle-scripts",style:{position:"relative"}},i.createElement(t.a,{href:"#lifecycle-scripts","aria-label":"lifecycle scripts permalink",className:"anchor before"},i.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Lifecycle Scripts"),"\n",i.createElement(t.p,null,"At various points in the publish lifecycle, Monodeploy will execute special lifecycle scripts. If leveraging lifecycle scripts, you'll want to familiarize yourself with this section, since Monodeploy may act differently than NPM, Yarn, or Lerna."),"\n",i.createElement(t.p,null,'There are two types of lifecycle scripts, "pre" scripts and "post" scripts. Monodeploy will execute ',i.createElement(t.em,null,"all"),' "pre" scripts prior to actually publishing any packages, even if using topological sort. This enables you to leverage the pre lifecycle hooks to abort the publish early without leaving the repository in a half-published state.'),"\n",i.createElement(t.p,null,"Once all pre scripts are executed, Monodeploy publishes the package archive to the specified registry. Post scripts will then run, regardless of whether the publish was successful or not."),"\n",i.createElement(t.p,null,'You can think of the publish process as being split into distinct stages wherein each stage will execute exactly one type of lifecycle script, while respecting topological sort options while executing that stage. For example, when calling "prepublish", Monodeploy will trigger prepublish in topological order (if the topological config option is set) and will ',i.createElement(t.em,null,"not")," execute the prepack script until ",i.createElement(t.em,null,"all")," prepublish scripts have completed."),"\n",i.createElement(t.p,null,"The exact order of lifecycle scripts executed is as follows (this may differ from NPM, Yarn, and Lerna):"),"\n",i.createElement(t.ol,null,"\n",i.createElement(t.li,null,"prepublish","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"This is called before packing even starts. Since NPM will execute this lifecycle script on installs, NPM deprecated this lifecycle script in favour of 'prepublishOnly'. That being said, Yarn Modern ",i.createElement(t.em,null,"does not")," call prepublishOnly but calls 'prepublish'. Further, Yarn does not call prepublish on install."),"\n"),"\n"),"\n",i.createElement(t.li,null,"prepare","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"This is not called by Yarn, however it is called by NPM and by Lerna prior to packing. It is ",i.createElement(t.em,null,"not recommended")," to leverage this lifecycle hook for compilation."),"\n"),"\n"),"\n",i.createElement(t.li,null,"prepublishOnly","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"This is not directly supported by Yarn Modern, however was introduced by NPM as a replacement for the deprecated 'prepublish' script."),"\n"),"\n"),"\n",i.createElement(t.li,null,"prepack","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"This is the lifecycle hook that you should be using for any compilation, such as compiling TypeScript to JavaScript. Errors thrown here, or in any early pre lifecycle script, will abort the publish process."),"\n"),"\n"),"\n",i.createElement(t.li,null,"~",i.createElement(t.em,null,"publish"),"~","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"At this \"stage\" we pack and publish each package. We do not call any 'publish' lifecycle scripts here."),"\n"),"\n"),"\n",i.createElement(t.li,null,"postpack","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"This is guaranteed to execute after packing the archive, regardless of failure. This is useful script for build directory cleanup."),"\n"),"\n"),"\n",i.createElement(t.li,null,"postpublish","\n",i.createElement(t.ul,null,"\n",i.createElement(t.li,null,"This is guaranteed to execute after postpack and is the final lifecycle script called in the publish pipeline. Note that Monodeploy will still do work following this lifecycle script, mainly around changelog generation, and git management."),"\n"),"\n"),"\n"))}t.default=function(e){return void 0===e&&(e={}),i.createElement(a.A,e,i.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-architecture-mdx-3d8792230c06cf382c97.js.map