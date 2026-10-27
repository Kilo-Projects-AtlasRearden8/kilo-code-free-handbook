# Modes and Agents

Kilo Code can work in different **modes** and, in some versions, as **agents** that plan and carry out multi-step tasks. This section explains the difference and how to choose the right one for your job.

## What is a mode?

A mode changes how Kilo behaves:

- **Chat mode**: Ask questions and get explanations. Good for learning and exploring.
- **Edit mode**: Kilo suggests changes to your files. You review and accept or reject each one. Best for beginners.
- **Agent mode** (where available): Kilo plans a multi-step task and carries it out across several files, asking for approval at key points.

Not every version has every mode. Run `kilo --help` or check the Kilo panel in VS Code to see what's available to you.

## Step 1: Start in chat mode

If you're new to Kilo, start here. Ask a question:

> "What does this function do?"

or

> "How do I add a comment to a JavaScript file?"

Kilo answers without changing your files. No risk, no review needed.

## Step 2: Try edit mode

When you're ready to change code, use edit mode. Example:

> "Add error handling to the save function in app.js."

Kilo will show you a diff — a before-and-after view of the change. Review it:

- Green lines are added.
- Red lines are removed.
- Accept changes you understand and want.
- Reject changes you don't understand.

Never accept a diff you can't explain in plain English. That's the golden rule of AI coding.

## Step 3: Try agent mode (if available)

For bigger jobs, agent mode can help:

> "Refactor the checkout flow: move tax calculation into its own file, add tests, and update the receipt page."

Kilo breaks this into steps and works through them. It may ask for approval before editing each file. Watch each approval prompt carefully.

Agent mode is powerful but moves faster than edit mode. Use it on practice folders first, and keep git or file backups handy so you can undo anything.

## Choosing a mode

| Situation | Suggested mode |
|-----------|----------------|
| Learning how something works | Chat mode |
| Small, careful edits to one file | Edit mode |
| Multi-file refactoring you understand | Agent mode |
| Anything with passwords, keys, or customer data | Avoid AI entirely until reviewed |

## Quick checklist

- [ ] You asked one question in chat mode
- [ ] You accepted one edit in edit mode after reading the diff
- [ ] You tried agent mode on a practice folder (if available)
- [ ] You rejected at least one suggestion you didn't understand — that's a win, not a failure

## Modes in VS Code

In the VS Code extension, look for a mode selector in the Kilo panel — often a dropdown or a set of icons. Switch modes the same way you would in the CLI: start with chat, move to edit when you're comfortable.
