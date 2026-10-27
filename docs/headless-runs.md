# Headless Runs

"Headless" means running Kilo without a graphical interface — entirely from the terminal, with no windows popping up. This is useful for automation, servers, remote machines, and scripts.

## What a headless run looks like

Instead of opening an interactive chat, you give Kilo a single task on the command line and it does the work, then exits:

```bash
kilo --prompt "Add a TODO comment to every unfinished function in this folder"
```

Exact flags vary by version. If `--prompt` doesn't work, run `kilo --help` to find the headless/non-interactive flag for your version.

## Step 1: Pick a task folder

Create or choose a folder for your practice task:

```bash
mkdir kilo-headless-demo
cd kilo-headless-demo
```

Add a small file so Kilo has something to work with:

```bash
printf 'function add(a, b) {\n  return a + b;\n}\n' > math.js
```

## Step 2: Run Kilo headlessly

Run Kilo with a one-shot prompt:

```bash
kilo --prompt "Add JSDoc comments to every function in math.js" --yes
```

- `--prompt` gives the task directly on the command line.
- `--yes` (or `-y`) automatically accepts safe changes so the run doesn't pause for confirmation. Only use `--yes` on code you've reviewed or in practice folders.

Check the result:

```bash
cat math.js
```

You should see comments added above the function.

## Step 3: Use headless runs in scripts

Save the command in a script file:

```bash
cat > kilo-task.sh <<'EOF'
#!/usr/bin/env bash
set -euo pipefail
kilo --prompt "Add JSDoc comments to every function in math.js" --yes
EOF
chmod +x kilo-task.sh
./kilo-task.sh
```

Now you can run the same AI task repeatedly, or schedule it with cron or your task runner.

## Step 4: Combine with safe permissions

Headless runs make changes without pausing, so pair them with safe permission settings (see [Safe permissions](safe-permissions.md)). Review what changed afterward:

```bash
git diff
```

if the folder is a git repository, or compare files manually.

## Quick checklist

- [ ] You ran a headless `kilo` command with `--prompt`
- [ ] You checked the changed files afterward
- [ ] You saved the command in a script for reuse
- [ ] You reviewed changes before using `--yes` on real code

## If headless runs hang

Some versions of Kilo try to open a browser for sign-in even in headless mode. Use a free model with no account (see [Free models, no account](free-models-no-account.md)) and set `KILO_NO_AUTH=1` if your version supports it. See `kilo --help` for environment variables.
