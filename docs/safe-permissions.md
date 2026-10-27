# Safe Permissions

Kilo can read your files and suggest changes. Used carefully, that's a superpower. Used carelessly, it can overwrite work or expose private information. This section shows how to use Kilo safely, especially as a beginner.

## The golden rule

**Never accept a change you cannot explain in plain English.** If Kilo suggests code and you don't know what it does, reject it or ask Kilo to explain it first.

## Before you start

1. **Work in a practice folder.** Don't run Kilo on your only copy of important files.
2. **Use git or backups.** Initialize a git repo in your project folder (`git init`) so you can review and undo changes with `git diff` and `git checkout`. If you don't use git, copy your folder before running Kilo.
3. **Never paste secrets.** API keys, passwords, personal data, and patient information should never go into a Kilo prompt. Kilo is an AI service — treat what you type as potentially visible to the model provider.
4. **Healthcare data:** If you work in healthcare, never enter real patient information into Kilo. Use made-up practice data only. Kilo is for education, not medical advice.

## Reviewing changes

When Kilo suggests an edit:

1. Read the full diff, not just the summary.
2. Ask: "What does each changed line do?"
3. Ask: "Could this delete or overwrite anything I need?"
4. Accept only the parts you understand. In many versions you can accept changes hunk by hunk (piece by piece).
5. Run your code or tests after accepting changes, to make sure nothing broke.

## Permissions in headless mode

Headless runs (see [Headless runs](headless-runs.md)) apply changes without pausing for each one. Only use `--yes`/auto-accept on:

- Code you've already reviewed once
- Practice folders you don't mind resetting
- Tasks with no secrets or personal data

Always check `git diff` afterward.

## Saying no is okay

You can reject any suggestion. You can stop Kilo at any time. You can close the panel or press `Ctrl+C` in the terminal. You are always in control.

## Quick checklist

- [ ] You are working in a practice folder or a git repo
- [ ] You can run `git diff` to review changes (or you backed up your files)
- [ ] You have not pasted any keys, passwords, or personal data
- [ ] You read every diff before accepting
- [ ] You rejected at least one suggestion just to practice saying no

## If something goes wrong

- Undo with git: `git checkout -- .` or `git reset --hard HEAD`
- Restore from your backup copy
- Close Kilo and restart — no changes are permanent until you accept them
- See [Troubleshooting](troubleshooting.md) for common problems
