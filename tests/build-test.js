// tests/build-test.js - Verifies the static site build output.
const assert = require("assert");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_DIR = path.join(ROOT, "site");

const EXPECTED_PAGES = [
  "index.html",
  "installing-the-cli.html",
  "installing-the-vs-code-extension.html",
  "free-models-no-account.html",
  "headless-runs.html",
  "modes-and-agents.html",
  "safe-permissions.html",
  "checking-cost-is-zero.html",
  "troubleshooting.html",
  "glossary.html",
  "checklist.html",
];

function read(file) {
  return fs.readFileSync(path.join(SITE_DIR, file), "utf8");
}

let failures = 0;

function check(name, condition) {
  if (!condition) {
    console.error("FAIL: " + name);
    failures++;
  } else {
    console.log("ok: " + name);
  }
}

// 1. Build first
const { build } = require(path.join(ROOT, "build.js"));
let results = build();
console.log("Build produced " + results.length + " pages.");

// 2. Every expected page exists
EXPECTED_PAGES.forEach(function (page) {
  check("site contains " + page, fs.existsSync(path.join(SITE_DIR, page)));
});

// 3. style.css exists
check("site contains style.css", fs.existsSync(path.join(SITE_DIR, "style.css")));

// 4. Content spot checks
let index = read("index.html");
check("index has site title", index.includes("Kilo Code Free Handbook"));
check("index credits Asdale Dynamics", index.includes("Asdale Dynamics, LLC"));
check("index links to CLI page", index.includes('href="installing-the-cli.html"'));
check("index has no dangling .md links", !index.includes(".md"));

// 5. Each page has the credit footer and title
EXPECTED_PAGES.forEach(function (page) {
  let html = read(page);
  check(page + " credits Asdale Dynamics", html.includes("Asdale Dynamics, LLC"));
  check(page + " has copyright line", html.includes("Copyright (c) 2026 Asdale Dynamics, LLC"));
  check(page + " has no dangling .md links", !html.includes(".md"));
  check(page + " has nav", html.includes('<nav class="top-nav">'));
});

// 6. Specific content
check("CLI page mentions npx", read("installing-the-cli.html").includes("npx"));
check("Free models page mentions no account", read("free-models-no-account.html").toLowerCase().includes("no account"));
check("Headless page mentions --prompt", read("headless-runs.html").includes("--prompt"));
check("Safe permissions page mentions golden rule", read("safe-permissions.html").includes("golden rule"));
check("Cost page mentions $0", read("checking-cost-is-zero.html").includes("$0"));
check("Glossary page defines CLI", read("glossary.html").includes("Command Line Interface"));
check("Checklist page has master checklist", read("checklist.html").includes("Master checklist"));

if (failures > 0) {
  console.error("\n" + failures + " test(s) failed.");
  process.exit(1);
}
console.log("\nAll tests passed.");
