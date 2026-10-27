# Checking Your Cost Is $0

One of the best things about free models is that they cost nothing — but you should verify, not assume. This section shows how to check that your Kilo usage is still $0.

## Step 1: Check your cost from the CLI

Run:

```bash
kilo cost
```

or

```bash
kilo --cost
```

Exact command names vary by version. If neither works, run `kilo --help` and look for cost, billing, or usage commands.

You want to see something like:

```
Total cost: $0.00
```

or

```
Usage this month: $0.00 (free tier)
```

## Step 2: Check your cost in VS Code

Open the Kilo panel in VS Code and look for a "Usage," "Billing," or "Cost" section. It may be under settings or your account profile. Free usage without an account typically shows $0.00.

## Step 3: Make checking a habit

Check your cost:

- Before your first Kilo session of the week
- After any session where you tried a new model
- Before sharing your setup with someone else

If you ever see a charge greater than $0, stop using paid models, switch back to a free model (see [Free models, no account](free-models-no-account.md)), and check your settings.

## What $0.00 means

- You used only free models
- You did not sign into a paid plan
- You did not purchase credits or tokens

If you sign in later and add a payment method, your cost may change. You control that — Kilo should not charge you without a clear action on your part.

## Quick checklist

- [ ] `kilo cost` (or the equivalent in `kilo --help`) runs without error
- [ ] The output shows $0.00
- [ ] You checked the VS Code panel too, if you use the extension
- [ ] You know which model you're using and that it's free

## If cost isn't $0

- Switch to a free model: `kilo config set model <free-model-name>`
- Sign out of paid features if you don't need them
- Check `kilo --help` for a cost reset or usage command
- See [Troubleshooting](troubleshooting.md) if the cost command doesn't exist in your version
