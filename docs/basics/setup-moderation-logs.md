---
sidebar_position: 4
title: Setup moderation logs
---

# 📖 Setup moderation logs channel

For each moderative action (such as kick, ban, prune), i also send logs so you can keep track of those update easily through a channel. This guide will guide you through the setup of moderation logs, and what i will and won't log.

## Setting up the channel

:::warning

Changing your server's moderation log channel require you to have the **Manage Server** permission!

:::

To change your server's moderation log channel, you could use this command `setmodlogs`:

```
k!setmodlogs <#channel>
```

Below is an example for changing the log channel to `#log`:

![Setup example](/img/tutorial/mod-log/example.png)

:::tip

Instead of mentioning the channel, you can also provide me an ID of the channel!

:::

Here are some example of my log messages (might be changed without notices):

![Log message](/img/tutorial/mod-log/1.png)

![Log message](/img/tutorial/mod-log/2.png)

Congratulations, you have setup the moderation logs!

## What do i log?

### What is logged

All moderative action processed through me, including:

* Usage of the `kick` and `ban` command, along with the user who was punished and the reason, as well as the responsible moderator.
* Usage of the `prune` command, along with the number of deleted messages coming from each author who was involved, as well as the responsible moderator.
* Members who wasn't finish verification and was kicked by the verification timeout (if set)

### What isn't logged

Other moderative action that isn't processed through me, and other event on the server 😔

If you want a logging bot for every event on the server, please consider inviting [Logger Bot](https://logger.bot) or [Carl bot](https://carl.gg)
