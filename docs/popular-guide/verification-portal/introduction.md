---
sidebar_position: 1
title: Introduction
description: Introduction to Kiri's verification feature!
---

# Introduction to verification

Kiri comes with an awesome verification system made to separate self bots from genuine members. As we all know, Discord is against bots that blatantly kick new accounts. But, we also hate raiders and usually bad users joining your server and taking advantage of that. This is where the verification comes in handy.

## Verification process

Below is the process of how new users will be verified:

- 🟡 An user, for example Anne joined your server
- 🟡 I will attempt to send Anne a verification link via DM
    * 🔴 If Anne turned off her DMs and the verification link couldn't be sent, and an instruction will be sent in the guiding channel, and Anne must turn on her DM before continuing
- 🟡 I will send a unique verification link to Anne's DM which she must enter to verify her account
- 🟢 If the verification process is completed, I will send a message to the user informing her that her account is now verified on the server
- 🔴 If she failed to verify her account within 15 minutes, she will lose the chance to verify with the link and have to type `resend` in the verification channel to get a new link
    * 🔴 If kick timeout duration is also set, she will be kicked from the server if she can't verify within that time


## Alternative usage

Aside from using the verification feature to give users access to the server, it can also be used to give users a certain role that grant users to a certain permission, such as special voice chat and channels!

:::warning
If you plan to do this, kick timeout must be off at all times, otherwise the user will be kicked from the server upon joining.
:::
