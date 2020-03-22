





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-5Bs4ERl99/u2AUfpOZF2F0cdfNby7+Vd9teUshXUBPo5CjwECR7IAEf+weI/eCk5tF7K1h3O8hd8k0+P/HePeg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-e41b3811197df7fbb60147e939917617.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-vna9AxrJa9t+A93H0lxAPca1mXWQB5A/jIBppkp+Ys/EV2l+rsMcCyU/Fj4BpmEZ3nY4hHwJ/FqUEeMFXiYl0w==" rel="stylesheet" href="https://github.githubassets.com/assets/github-be76bd031ac96bdb7e03ddc7d25c403d.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>morse-decoder/test.js at master · Kurantsov/morse-decoder</title>
    <meta name="description" content="Contribute to Kurantsov/morse-decoder development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/54472600?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="Kurantsov/morse-decoder" /><meta name="twitter:description" content="Contribute to Kurantsov/morse-decoder development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/54472600?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="Kurantsov/morse-decoder" /><meta property="og:url" content="https://github.com/Kurantsov/morse-decoder" /><meta property="og:description" content="Contribute to Kurantsov/morse-decoder development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDg5Mjk4MzAzOmMyYTRhYmNhMjk3ZTM2YTU0ZWQ5Y2VmY2Q4ZDgyOTdmOWUwNzMxNWFhMDA4OTYyMzk1YzBhMmQ5YjFmZWIwMDA=--a1188df191ce9b44eb73932c5eabdad705a5e576">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="76D9:3F631:5411005:78FF32E:5E77F080" data-pjax-transient="true" /><meta name="html-safe-nonce" content="4ff620719cfb68d253c047671619a57a45478d21" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9LdXJhbnRzb3YvbW9yc2UtZGVjb2RlciIsInJlcXVlc3RfaWQiOiI3NkQ5OjNGNjMxOjU0MTEwMDU6NzhGRjMyRTo1RTc3RjA4MCIsInZpc2l0b3JfaWQiOiI2NDM0NzE4ODAxODQ5OTI3NjQyIiwicmVnaW9uX2VkZ2UiOiJhbXMiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-pjax-transient="true" /><meta name="visitor-hmac" content="71662507e531f1691fddaecc7d2df8e44b337d66921cbb2dd13aae1a918940d0" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="57674806" /><meta name="octolytics-actor-login" content="LaraEvdokimova" /><meta name="octolytics-actor-hash" content="d50c5c28ac93281dac4f0ad1461c9a8210d184ad251320f02267e6931106749c" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="80a5cb7f8dc1fbdb2e38b77255f201c4">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="LaraEvdokimova">

      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="NDIyMjQxZmFiMzk3MmQzYWQwMzdjZGUxOTY1OTEzM2MxMWEyNjdkODI5ZDU3NGZjNzc4ODg5NWMxNWY2ZmI1OHx7InJlbW90ZV9hZGRyZXNzIjoiMTg1LjQ0LjEzLjM2IiwicmVxdWVzdF9pZCI6Ijc2RDk6M0Y2MzE6NTQxMTAwNTo3OEZGMzJFOjVFNzdGMDgwIiwidGltZXN0YW1wIjoxNTg0OTE4NjY2LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,RELATED_ISSUES,GHE_CLOUD_TRIAL,PAGE_STALE_CHECK">

  <meta http-equiv="x-pjax-version" content="b9d38bbfa74751e01413c8f9baeaddf8">
  

      <link href="https://github.com/Kurantsov/morse-decoder/commits/master.atom" rel="alternate" title="Recent Commits to morse-decoder:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/Kurantsov/morse-decoder git https://github.com/Kurantsov/morse-decoder.git">

  <meta name="octolytics-dimension-user_id" content="54472600" /><meta name="octolytics-dimension-user_login" content="Kurantsov" /><meta name="octolytics-dimension-repository_id" content="248513417" /><meta name="octolytics-dimension-repository_nwo" content="Kurantsov/morse-decoder" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="true" /><meta name="octolytics-dimension-repository_parent_id" content="206243671" /><meta name="octolytics-dimension-repository_parent_nwo" content="romacher/morse-decoder" /><meta name="octolytics-dimension-repository_network_root_id" content="206243671" /><meta name="octolytics-dimension-repository_network_root_nwo" content="romacher/morse-decoder" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/Kurantsov/morse-decoder/blob/master/test.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    



        <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

  <div class="Header-item d-none d-lg-flex">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

  </div>

  <div class="Header-item d-lg-none">
    <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>
  </div>

  <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
      <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="248513417" data-scoped-search-url="/Kurantsov/morse-decoder/search" data-unscoped-search-url="/search" action="/Kurantsov/morse-decoder/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="9WJxnjMFlyAYO8aUs2onOOyiZ8zVqGsPhDXQfme0yUdBAGlZcDgRNpU2jSwzZSK7ECSAlsGiHnGGw14/iQvxNg==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/LaraEvdokimova">
      <img class="avatar" height="20" width="20" alt="@LaraEvdokimova" src="https://avatars2.githubusercontent.com/u/57674806?s=60&amp;u=fe5def75f6e967ebc1ef7dd0c0d65b4d6325ff59&amp;v=4" />
      LaraEvdokimova
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="eZhUjerdM+C7DQS1BluW1E9nw16Jo/6/gGvwL7q0VRjv5388dxGPBVuzUwa8khQedhAAvQSlQSYeXhou2DILOA==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
    <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
    <a class="Header-link" href="/Kurantsov">Kurantsov</a>
    /
    <a class="Header-link" href="/Kurantsov/morse-decoder">morse-decoder</a>

</div>
  </div>

  <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
    

    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:57674806" href="/notifications/beta">
        <span class="js-indicator-modifier mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </div>


  <div class="Header-item position-relative d-none d-lg-flex">
    <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <a role="menuitem" class="dropdown-item" href="/new/project" data-ga-click="Header, create new project">
    New project
  </a>

  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0 d-none d-lg-flex">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/LaraEvdokimova/feature_preview/indicator_check.json">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img class="avatar " alt="@LaraEvdokimova" width="20" height="20" src="https://avatars2.githubusercontent.com/u/57674806?s=60&amp;u=fe5def75f6e967ebc1ef7dd0c0d65b4d6325ff59&amp;v=4">


      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/LaraEvdokimova" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">LaraEvdokimova</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:54472600,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:57674806,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;}}" data-hydro-click-hmac="2aa4500d66f7a6f590a5a9309cc3ee23741c3fce9b35ff9bedca999045f0ad7c">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1  lh-condensed-ultra v-align-bottom" style="margin-top: 2px;">
            <div><g-emoji class="g-emoji" alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji></div>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
                <span>Бегу</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="qAZLh5r2UxNIGA27JmPkFqf5UbXPt9B3thicI95BeiN2tJ8gmSaYwr5mg7RXUKggZnprl2BQU2lSDiPOJGBiNg==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value=":dart:">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden><div><g-emoji class="g-emoji" alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji></div></span>
                  <span class="js-user-status-custom-emoji"><div><g-emoji class="g-emoji" alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji></div></span>
                  <span class="js-user-status-no-emoji-icon" hidden>
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value="Бегу"
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-03-23T02:41:06+03:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-03-23T03:11:06+03:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-03-23T06:11:06+03:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-03-23T23:59:59+03:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-03-29T23:59:59+03:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit"  class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button"  class="width-full js-clear-user-status-button btn ml-2 js-user-status-exists">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/LaraEvdokimova" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/LaraEvdokimova?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/LaraEvdokimova?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/LaraEvdokimova?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/LaraEvdokimova/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}"
    data-feature-preview-close-hmac="916ee5b2bac728f81642eaadbe4d55c294096c897a4c40fdf4878a672df898f4"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}"
    data-hydro-click-hmac="fadcb765342117affa93b574038584d5f53010cb43a356a67aaf885f4fa920e5"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="xb1MqDVF0pJ0jkzYyw6EbczK4MELNaqJ+Aqnl4yvNfFTwmcZqIlud5QwG2txxwan9b0jIoYzFRBmP02W7ilr0Q==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_918e" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1584918666703" class="form-control" /><input type="hidden" name="timestamp_secret" value="9df90271a6adc7d7a9ece8a39df0f632b7dee60e14c4a4ce78b902b70a320b2b" class="form-control" />
</form>  </details-menu>
</details>

  </div>

</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>


      

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

  


      <div class="border-bottom shelf intro-shelf js-notice mb-0 pb-4">
  <div class="width-full container">
    <div class="width-full mx-auto shelf-content">
      <h2 class="shelf-title">Learn Git and GitHub without any code!</h2>
      <p class="shelf-lead">
          Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.
      </p>
      <a class="btn btn-primary shelf-cta" target="_blank" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;READ_GUIDE&quot;,&quot;repository_id&quot;:248513417,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}" data-hydro-click-hmac="8e8e52c7d7632281f59486afe719a30a0c0fe9e9b12419153f879041ae0fc6b8" href="https://guides.github.com/activities/hello-world/">Read the guide</a>
    </div>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="shelf-dismiss js-notice-dismiss" action="/dashboard/dismiss_bootcamp" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="t0jZAohh/sTGHW2AZSsxCcEQood3Rhb+cQf01POy9XLJRuIukSmsY467b3Aq8ZrfbiZK58dFmCcXbMNg1PElBQ==" />
      <button name="button" type="submit" class="mr-1 close-button tooltipped tooltipped-w" aria-label="Hide this notice forever" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;DISMISS_BANNER&quot;,&quot;repository_id&quot;:248513417,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}" data-hydro-click-hmac="a2bc625b3095755f2d5cd4837f616532ee4eddece1b16b777da2b3babbee017c">
        <svg aria-label="Hide this notice forever" class="octicon octicon-x v-align-text-top" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
</button></form>  </div>
</div>










  <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-0 pt-lg-3">

    <div class="d-flex container-lg mb-4 p-responsive d-none d-lg-flex">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
    <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
  <span class="author ml-1 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/Kurantsov/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Kurantsov">Kurantsov</a>
  </span>
  <span class="path-divider flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/Kurantsov/morse-decoder">morse-decoder</a>
  </strong>
  
</h1>

  <span class="fork-flag mt-1" data-repository-hovercards-enabled>
    <span class="text">forked from <a data-hovercard-type="repository" data-hovercard-url="/romacher/morse-decoder/hovercard" href="/romacher/morse-decoder">romacher/morse-decoder</a></span>
  </span>

      </div>

      <ul class="pagehead-actions flex-shrink-0 " >




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="wSsrWGhoN3FGaVDH44ihGaYdvlDo4YRj3gvXHKeQygb9xSm1J0T5+2gzytE4Oz22HOur68D3c8OOB+yZRKVccA==" />      <input type="hidden" name="repository_id" value="248513417">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:248513417,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}" data-hydro-click-hmac="8339afc6e17da39393458bc302522e663480a1a3c5b236881fae7d733f4677c3" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/Kurantsov/morse-decoder/watchers"
          aria-label="0 users are watching this repository">
          0
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/Kurantsov/morse-decoder/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="nuB9RQHc3wk8TOKVjcrqUbHhEgamaI3sqxq9IZ9Huug7rZdwH1fa8TQWRyWRz2Og9nmqTSDlAMUZwGYlGTdfBA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar Kurantsov/morse-decoder" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:248513417,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}" data-hydro-click-hmac="03111628fa1653708d1ea8809bdd96aa0b7db468fb764528e44440f44f31c2c5" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/Kurantsov/morse-decoder/stargazers"
           aria-label="0 users starred this repository">
           0
        </a>
</form>
    <form class="unstarred js-social-form" action="/Kurantsov/morse-decoder/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="qPu8dCsdGBGZW3ozN1uhHbnrqOpxpvPiM/dU8RFiiN5k4MULU/GZehmSDJPk3Z/VlewIZupG3hyttjUm02hKUA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star Kurantsov/morse-decoder" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:248513417,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}" data-hydro-click-hmac="4a1ae2e9f4cd6377d3e223c0de959d9097de68800c192a391ad4306bb8989217" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>

        Star
</button>        <a class="social-count js-social-count" href="/Kurantsov/morse-decoder/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/Kurantsov/morse-decoder/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="KuKQyEgbjEL/RaIRKxy28pbp1Gcq4gqRJgVYPqKzr7GWi3U7LoUaSMIHx/Qv+32AWniPqj3jQ6mX727oP3/YJw==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:248513417,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}" data-hydro-click-hmac="a3d289acb7068c1f5d6819c636cfc54a77973875793a1cdcdc8bf04222265915" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of Kurantsov/morse-decoder to your account" aria-label="Fork your own copy of Kurantsov/morse-decoder to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</button></form>
    <a href="/Kurantsov/morse-decoder/network/members" class="social-count"
       aria-label="1583 users forked this repository">
      1.6k
    </a>
  </li>
</ul>

    </div>
      
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax clearfix container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /Kurantsov/morse-decoder" href="/Kurantsov/morse-decoder">
      <div class="d-inline"><svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg></div>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" data-skip-pjax="true" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /Kurantsov/morse-decoder/pulls" href="/Kurantsov/morse-decoder/pulls">
      <div class="d-inline"><svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg></div>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="4">
</a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement" class="position-relative float-left">
      <a data-hotkey="g w" data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /Kurantsov/morse-decoder/actions" href="/Kurantsov/morse-decoder/actions">
        <div class="d-inline"><svg class="octicon octicon-play" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8A7 7 0 110 8a7 7 0 0114 0zm-8.223 3.482l4.599-3.066a.5.5 0 000-.832L5.777 4.518A.5.5 0 005 4.934v6.132a.5.5 0 00.777.416z"/></svg></div>
        Actions
</a>
    </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Kurantsov/morse-decoder/projects" href="/Kurantsov/morse-decoder/projects">
      <div class="d-inline"><svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg></div>
      Projects
      <span class="Counter">0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Kurantsov/morse-decoder/wiki" href="/Kurantsov/morse-decoder/wiki">
      <div class="d-inline"><svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg></div>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /Kurantsov/morse-decoder/security/advisories" href="/Kurantsov/morse-decoder/security/advisories">
      <div class="d-inline"><svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg></div>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /Kurantsov/morse-decoder/pulse" href="/Kurantsov/morse-decoder/pulse">
      <div class="d-inline"><svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg></div>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /Kurantsov/morse-decoder" href="/Kurantsov/morse-decoder">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /Kurantsov/morse-decoder/pulls" href="/Kurantsov/morse-decoder/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="4">
</a>    </span>


      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Kurantsov/morse-decoder/projects" href="/Kurantsov/morse-decoder/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_actions /Kurantsov/morse-decoder/actions" href="/Kurantsov/morse-decoder/actions">
          <span itemprop="name">Actions</span>
          <meta itemprop="position" content="6">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /Kurantsov/morse-decoder/wiki" href="/Kurantsov/morse-decoder/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="7">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy token_scanning code_scanning /Kurantsov/morse-decoder/security/advisories" href="/Kurantsov/morse-decoder/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="8">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Kurantsov/morse-decoder/pulse" href="/Kurantsov/morse-decoder/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>

  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>


<div class="container-lg clearfix new-discussion-timeline  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/Kurantsov/morse-decoder/blob/ac65774e5ed207186edb443d044edbadd2255737/test.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:5723d063748d87f1f269fdd2b47ea0a4 -->
    

    <div class="d-flex flex-items-start flex-shrink-0 flex-column flex-md-row pb-3">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay branch-select-menu " id="branch-select-menu">
  <summary class="btn btn-sm css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
    <span class="dropdown-caret"></span>
  </summary>

  <details-menu class="SelectMenu SelectMenu--hasFilter" src="/Kurantsov/morse-decoder/refs/master/test.js?source_action=show&amp;source_controller=blob" preload>
    <div class="SelectMenu-modal">
      <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
        <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
      </include-fragment>
    </div>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/Kurantsov/morse-decoder/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="test.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
          <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/Kurantsov/morse-decoder"><span>morse-decoder</span></a></span></span><span class="separator">/</span><strong class="final-path">test.js</strong><span> /</span>
<details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:248513417,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}" data-hydro-click-hmac="245b562fbbe0df0bc5f7095ada05f62cc7794c2272102bb691d665b3a0c43128">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
    <span data-menu-button>Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </header>
        <div class="SelectMenu-filter">
          <input
            class="SelectMenu-input form-control js-filterable-field"
            id="jumpto-symbols-filter-field"
            type="text"
            autocomplete="off"
            spellcheck="false"
            autofocus
            placeholder="Filter definitions"
            aria-label="Filter definitions">
        </div>
      <div class="SelectMenu-list">
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
          
        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation index up-to-date
          <svg class="octicon octicon-primitive-dot text-green" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/Kurantsov/morse-decoder/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="test.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    <include-fragment src="/Kurantsov/morse-decoder/contributors/master/test.js" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
        <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>





    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      309 lines (258 sloc)
      <span class="file-info-divider"></span>
    39.9 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/Kurantsov/morse-decoder/raw/master/test.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/Kurantsov/morse-decoder/blame/master/test.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/Kurantsov/morse-decoder/commits/master/test.js">History</a>
    </div>


    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="x-github-client://openRepo/https://github.com/Kurantsov/morse-decoder?branch=master&amp;filepath=test.js"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
          </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/Kurantsov/morse-decoder/edit/master/test.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="WtqC6DaxYMOvPFAsN+QDSQu85YrpGrQmwtWMbU4Tznn6DslZyMZ3sxw9fXdAVrlGCELmzaku3I0Cdy13Pq72+g==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/Kurantsov/morse-decoder/delete/master/test.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="p5dVRqH+yIoPBqQYiEJoHIBvUcHWPwzLSAZ9LVOc22Ur8MDvTCOi78+wb4sU/i5c9yEARuKENLKnL9qPcTEzTQ==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>



      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-k>const</span> <span class=pl-kos>{</span> expect <span class=pl-kos>}</span> <span class=pl-c1>=</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;chai&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-k>const</span> <span class=pl-kos>{</span> decode <span class=pl-kos>}</span> <span class=pl-c1>=</span> <span class=pl-en>require</span><span class=pl-kos>(</span><span class=pl-s>&#39;./src/index.js&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class=pl-en>describe</span><span class=pl-kos>(</span><span class=pl-s>&quot;Easy&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 1&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hello world&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 2&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;the quick brown fox jumps over the lazy dog&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 3&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;rolling scope school&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 4&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0000101110000011111100000010110000111010**********00000000110000111111**********00101111100000101110000011111100001111100000101110000000101100000011110000001111000000101000000011100000111110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;road to programming&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 5&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0000101010000011111100000011110000000010000011111100000011100000000010**********00001011100000000010000000101100001110100000101010**********0000000011001010101000000010100000101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;someone reads this&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 6&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;001010101000000000100011101111**********001110111100001111110000101011**********0010101010000000001000101110100010111110**********00000011110000000010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hey you help me&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 7&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0000000011001010101000000000100011101111**********0000111011000000001000000000100010111110**********00000011110000000010**********00000010100000001110**********000000001100101010100000000010**********00111010100000001011000010101000000000100000001111000000001000000011100000000011&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;they keep me in the basement&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 8&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0000101010000000101100101010110000000010**********00000011110000000010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;save me&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 9&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0011101110000000101100101110100010111010**********000000001100101010100000000010**********001011111000001111110010111010000000101000111011100000000010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;call the police&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Sentence test 10&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;000000101100000011100000101010000010111100000000100000101110**********00001111110000001110**********000000001100101010100000000010**********00001010110010111010000000001100000010100000001111000000101100000000110000000010**********00111110110000101011000000001000001010100000000011000000101000001111110000001110**********00001111110010101110**********0010111010000000101000101011100000000010**********000000001100101010100000000010**********00001010110000001110000000101000101010110000000010000010111000001010100000000010**********000000101100000011100000111010**********0000000010001010101100000000100000101110001110111100000000110010101010000000101000000011100000111110**********00000010100000101010**********10101010111010111111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;answer on the ultimate question of life the universe and everything is 42&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class=pl-en>describe</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 1&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 2&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;11111110101010111111111111111000111010101010101011001110101011111110100011101110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;829b4b8c&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 3&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;11111111110000000010101010101011111111101110101010101011111111111111111111111111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0e596200&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 4&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;10111111111111101010001110101000101011101010111111101010101011111111101110101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;17bf2596&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 5&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00111010101010111111111110101000001110101111111111001110111010101010100011101110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;b27d0c5c&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 6&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00001110101010101111000011101000000000101111111010000000001000000010110011101110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;d3de8eac&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 7&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;11111111110000001011101111111110101010111010101010001110111010101010110010101110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0a145c4f&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 8&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;10101111111010101010001110101010101011111011111111000000101111101010101010101111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;25b31a63&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 9&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000101010111111000000001000111010100010101110101010111110101010111111111111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;e2ebf340&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 10&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00111011101010101011101010111110101011111010101010000000101111111110101010111111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;c4335a82&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 11&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;11101010100011101110101010101110101010111010101111000000001000111011100000000010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;6c443ece&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 12&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000010111110101010111111111111101010101111111110001010111010101010101111111111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;a6069f50&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 13&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000010111111111010101010111111101010100010101110000011101000111011101010101111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;a836fdc3&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 14&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;10101010100011101110001110111011101010100011101110101011111100000010111111111110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;5cc6c2a9&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 15&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;10101010110011101110000011101000101011101010101010000011101000000010111111111111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;4cdf5da0&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 16&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 17&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 18&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;11111110101010111111111111111000111010101010101011001110101011111110100011101110&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;829b4b8c&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 19&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;11111111110000000010101010101011111111101110101010101011111111111111111111111111&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;0e596200&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Medium line length test 20&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;10111111111111101010001110101000101011101010111111101010101011111111101110101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;17bf2596&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class=pl-en>describe</span><span class=pl-kos>(</span><span class=pl-s>&quot;Hard (what&#39;s going on)&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 1&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 2&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 3&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 4&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 5&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 6&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 7&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 8&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 9&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 10&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 11&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 12&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 13&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 14&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 15&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 16&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 17&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 18&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 19&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>it</span><span class=pl-kos>(</span><span class=pl-s>&quot;Awesome line length test 20&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>expr</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;00000000100000111010101010111100111011100000001011111110101011111010101010101010111111101010101111111111111110001110101010101010110011101010111111101000111011101111111111000000001010101010101111111110111010101010101111111111111111111111111110111111111111101010001110101000101011101010111111101010101011111111101110101010001110101010101111111111101010000011101011111111110011101110101010101000111011100000111010101010111100001110100000000010111111101000000000100000001011001110111011111111110000001011101111111110101010111010101010001110111010101010110010101110101011111110101010100011101010101010111110111111110000001011111010101010101011110000000010101011111100000000100011101010001010111010101011111010101011111111111100111011101010101011101010111110101011111010101010000000101111111110101010111111111010101000111011101010101011101010101110101011110000000010001110111000000000100000001011111010101011111111111110101010111111111000101011101010101010111111111100000010111111111010101010111111101010100010101110000011101000111011101010101111101010101000111011100011101110111010101000111011101010111111000000101111111111101010101011001110111000001110100010101110101010101000001110100000001011111111111100101011100011101010101010111100111010101110101010000000101100111011100011101010&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>const</span> <span class=pl-s1>result</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;ed3ca775829b4b8c0e59620017bf2596b27d0c5cd3de8eac0a145c4f25b31a63e2ebf340c4335a826c443ecea6069f50a836fdc35cc6c2a94cdf5da0fb3b6acb&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>expect</span><span class=pl-kos>(</span><span class=pl-en>decode</span><span class=pl-kos>(</span><span class=pl-s1>expr</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>to</span><span class=pl-kos>.</span><span class=pl-en>equal</span><span class=pl-kos>(</span><span class=pl-s1>result</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>)</span></td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/Kurantsov/morse-decoder/blame/ac65774e5ed207186edb443d044edbadd2255737/test.js">View git blame</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/Kurantsov/morse-decoder/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="test.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:248513417,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/Kurantsov/morse-decoder/blob/master/test.js&quot;,&quot;user_id&quot;:57674806}}"
     data-hydro-click-hmac="6201a3a8d1253b25ccd6fb744e25cedc54d748a6c75659eae48e3a0d27604707">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-o4vS4IKrjdy/HD+xr2+VhO6DxQmj5jikhHbEGrd8+JGhpmIOxRrpT1Qo5k3IhKimm8VXIu3pyYejLtOAkm+OsQ==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-a38bd2e0.js"></script>
    <script crossorigin="anonymous" integrity="sha512-6XqOrpzsRfeWz1MuH9q2GuzW4Ktvt+kA5KbChOp1ZjaoGbRl3tBng8HiA5B/lClMvkkj4h+vVuSwLeh14JzGuA==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-e97a8eae.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-1/6VVx6z9r6uphSoGlmYgbqD5KaY+GVMt1Gqa3DIa0U+3Pv2SWu8Fk1BZ2xPne5upvF8HdEWcGeiUjd2URl+oA==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-d7fe9557.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-RDggGUYWJq0pjfr/60y4ITVdK0zFDicDs0h46xLtUfsgDq6L6OWInB0F66615pE295U74v8ykPH/qsoL3U38ng==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-44382019.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-aIrRO9Sji3VKn3Usk8M8E+xiMDESpBJZj3BSwvg2Y9GHNyL/g57gL5srCoN6u5+WgvUBkHyFtthyr+IzaQVXWQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-688ad13b.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>
