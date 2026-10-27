# Installing the Kilo CLI

The Kilo Command Line Interface (CLI) lets you run Kilo Code from your terminal. It works on macOS, Linux, and Windows, and the free tier requires no account to get started.

## Step 1: Check that you have Node.js

Kilo runs on Node.js. Open your terminal and run:

```bash
node --version
```

If you see a version number (for example `v20.19.2`), you're good. Continue to Step 2.

If you see "command not found", install Node.js first:

- **macOS**: install [Homebrew](https://brew.sh), then run `brew install node`
- **Windows**: download the installer from [nodejs.org](https://nodejs.org)
- **Linux**: use your package manager, for example `sudo apt install nodejs npm`

After installing, close and reopen your terminal, then run `node --version` again.

## Step 2: Install Kilo

You can run Kilo without installing anything globally by using `npx`, which downloads and runs the tool for you:

```bash
npx kilo --help
```

To install it globally so you can just type `kilo`:

```bash
npm install -g kilo
```

Then verify:

```bash
kilo --version
```

You should see a version number. If `kilo` is not found after a global install, your npm bin folder may not be on your `PATH`. Run `npm config get prefix` and add the `bin` folder it reports to your terminal's `PATH`, then restart your terminal.

## Step 3: Sign in (optional for free models)

Some Kilo features work without signing in. To use free models with no account, skip sign-in for now and go to [Free models, no account](free-models-no-account.md).

If you want to save preferences or use account features later:

```bash
kilo auth login
```

Follow the prompts. A browser window will open to complete sign-in. You do not need a paid plan to use free models.

## Step 4: Your first command

Pick a folder you want to work in, or create a practice folder:

```bash
mkdir kilo-practice
cd kilo-practice
```

Run Kilo in that folder:

```bash
kilo
```

Kilo will look at your files and offer to help. Type a plain-English request like:

> "Add a comment at the top of every file explaining what it does."

Review Kilo's suggested changes before accepting them. We cover safe reviewing in [Safe permissions](safe-permissions.md).

## Quick checklist

- [ ] `node --version` prints a version number
- [ ] `kilo --version` prints a version number (or `npx kilo --help` works)
- [ ] You have run `kilo` once in a practice folder
- [ ] You know where to find `kilo --help` if you get stuck

## If installation fails

See [Troubleshooting](troubleshooting.md) for common install errors and fixes.
