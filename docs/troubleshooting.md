# Troubleshooting

Something not working? Start here. These are the most common problems beginners run into, with plain-English fixes.

## Problem: `kilo: command not found`

**Cause:** Kilo isn't installed, or your terminal can't find it.

**Fix:**
- Install it: `npm install -g kilo`
- Or run it without installing: `npx kilo`
- If you installed globally and it's still not found, run `npm config get prefix` and add the `bin` folder it prints to your terminal's `PATH`, then restart your terminal.

## Problem: `node: command not found`

**Cause:** Node.js isn't installed.

**Fix:** Install Node.js from [nodejs.org](https://nodejs.org), or with Homebrew on macOS (`brew install node`). Close and reopen your terminal after installing, then run `node --version`.

## Problem: Kilo asks to sign in and I don't want an account

**Fix:** Choose "Continue without signing in" or skip sign-in. Free models work without an account — see [Free models, no account](free-models-no-account.md).

## Problem: Kilo says "model not found" or "unknown model"

**Cause:** The model name in your config doesn't match what's available.

**Fix:**
- Run `kilo models list` to see available models
- Set a real free model: `kilo config set model <exact-name-from-list>`

## Problem: Kilo suggests changes I don't understand

**Fix:** Reject them. Ask Kilo to explain: "Explain this change in plain English." Only accept changes you understand. See [Safe permissions](safe-permissions.md).

## Problem: Kilo made a mess of my files

**Fix:** Undo the changes:
- If you use git: `git checkout -- .` or `git reset --hard HEAD`
- Otherwise, restore from the backup copy you made before running Kilo (you did back up, right?)

Next time, work in a practice folder and review diffs before accepting.

## Problem: Headless run hangs or opens a browser

**Cause:** Kilo is trying to sign in or open an auth page even in headless mode.

**Fix:** Use a free model with no account. Set `KILO_NO_AUTH=1` if your version supports it (check `kilo --help`). Avoid `--prompt` with account-requiring features.

## Problem: Cost shows more than $0

**Fix:** Switch to a free model and check your settings. See [Checking cost is $0](checking-cost-is-zero.md). If you never added a payment method and see a charge, stop using Kilo and contact support — you should not be charged without signing up for a paid plan.

## Problem: VS Code extension doesn't appear

**Fix:**
- Reload the window: press `Ctrl+Shift+P` (or `Cmd+Shift+P`), type `Developer: Reload Window`, and press Enter.
- Check for updates in the Extensions view.
- Reinstall the extension: Uninstall, then install again from the Extensions view.

## Problem: "Permission denied" running a script

**Cause:** Your script file isn't executable.

**Fix:** Run `chmod +x your-script.sh`, then run `./your-script.sh`.

## Still stuck?

1. Run `kilo --help` and read the full list of commands.
2. Re-read the relevant section of this handbook.
3. Search the Kilo documentation or community forums.
4. Open an issue in this handbook's repository — we'll improve the guide.

## Quick checklist

- [ ] `node --version` and `kilo --version` both work
- [ ] You're using a free model
- [ ] You've checked your cost is $0
- [ ] You can undo changes with git or a backup
- [ ] You haven't pasted any secrets into Kilo
