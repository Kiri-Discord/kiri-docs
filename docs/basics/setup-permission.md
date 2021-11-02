---
sidebar_position: 2
title: Setting up permission
---

# 🔑 Setting up permission

I also needs several permissions to be able to provides you functionality and features. Below
is every permission that i need, and what features or commands you lose if you
don't grant that permission 😔

:::note

In most situation, if i don't have the permission to run a certain command, i will let you know about it via an error prompt!

:::

## 📖 Text permission

Below are a list of permission that involve with messages and text channel, from most to least important:

- **View Channels** and **Send Messages** is required for every single command to work. It allows me to send you response to commands, as well as reading them!
- **Embed Links** is required to allow commands that send embeds to work, such as `help`. I use it in a lot of commands, so it's too long to list it here.
- **Add Reactions** allows me to add reactions to messages in certain commands. `pay-respect` command and a bunch others utilize this permission.
- **Read Message History** allows me to fetch messages in channels. The `prune` and `first-message` command use this permission.
	* It is also required to react to messages alongside **Add Reactions**.
- **Manage Webhooks** allows me to add and remove webhooks which is utilize in moderation logs.

## 🎙 Voice permission

Below are a list of permission that involve with voice and voice channel, from most to least important:

- **Connect** allows me to connect to voice channels. This is needed for me to play audio.
- **Speak** allows me to speak in voice channels. This is needed for me to play audio.
- **Use Voice Activity** technically is not _needed_, but is included as an extra precaution.

## 🔒 Server permission

Below are are list of permission that perform adminstrative permission, which are mostly used for moderation command.

- **Manage Roles** allows me to give and remove roles that i can use. Verification and the removing/adding role command use this permission.
- **Ban Members**: Pretty self explained. This is required for banning members that i have permission to.
- **Kick Members**: The same with **Ban Members**, however this will kick the members instead of banning them.
- **Manage Channels**: allows me to set or change channels's slowmode. The `slowmode` command utilize this permission.
- **Manage Nicknames**: allows me to set nicknames for members who i have permission to. My `nickname` command utilize this permission.

:::tip hey!

Those are permission needed for me to provide features and command for you, not the permission that you need to grant :)

:::