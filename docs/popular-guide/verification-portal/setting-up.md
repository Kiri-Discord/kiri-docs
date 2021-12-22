---
sidebar_position: 2
title: Setting up verification portal
description: A guide show you how to set up verification portal
---

# Setting up verification portal

For the verification feature to work, a few things must be set up, including the verification channel and the verification role. You can also add a kick timeout duration to kick unverified users after a certain time.

:::danger
Kick timeout duration should not be mistaken with verification link expire time! Kick timeout duration is the time after which a user will be kicked from the server if he can't verify his account, and will override the verification link expire time (the verification link expire time is set to 15 minutes by default).
:::

### Setting up the roles:

To begin with, you should create a role that give users access to features that you want to allow newcomers. That being said, the `@everyone` default role should deny all access to the server, and when members are verified, they will get the role that gain them access, which is the role that we created earlier.