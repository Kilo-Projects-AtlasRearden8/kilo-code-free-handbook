# Free Models, No Account

You can use Kilo Code with free AI models and you do not need to create an account to get started. This section walks you through picking free models, using them without signing in, and understanding the limits of the free tier.

## What "free model" means

Kilo sends your code and requests to an AI model, which generates suggestions. Some models are free to use within limits; others require payment or a paid account. This handbook focuses on the free options so you can try Kilo without spending money.

## Step 1: See which models are available

Run:

```bash
kilo models list
```

(If this command doesn't exist in your version, run `kilo --help` and look for a models or config command.)

Look for models marked **free** or with a `$0` price. Common free options include community models and provider free tiers.

## Step 2: Choose a free model

Set a free model as your default:

```bash
kilo config set model <free-model-name>
```

Replace `<free-model-name>` with the exact name from `kilo models list`, for example:

```bash
kilo config set model free-default
```

If you're not sure which name to use, run `kilo config list` to see what's currently configured.

## Step 3: Use Kilo without an account

You do not need to sign in to use free models. Simply run:

```bash
kilo
```

or open the Kilo panel in VS Code and start typing. Kilo will use the free model you selected in Step 2.

## Step 4: Understand free-tier limits

Free models usually have limits, such as:

- A maximum number of requests per day or per month
- Slower response times during busy periods
- Smaller context windows (the model "remembers" less of your code at once)

If you hit a limit, Kilo will tell you. Wait until the limit resets, switch to a different free model, or sign in if you want higher limits.

## Cost is always $0 for free models

When you use only free models without signing into a paid plan, your cost is $0. You can verify this anytime — see [Checking cost is $0](checking-cost-is-zero.md).

## Quick checklist

- [ ] `kilo models list` runs and shows available models
- [ ] You selected a free model with `kilo config set model`
- [ ] You ran `kilo` without signing in
- [ ] You checked your cost and saw $0 (see [Checking cost is $0](checking-cost-is-zero.md))

## Safety reminder

Never paste API keys, passwords, or personal data into Kilo prompts, even when using free models. Free models are still AI services, and you should treat anything you type as potentially visible to the model provider. See [Safe permissions](safe-permissions.md).
