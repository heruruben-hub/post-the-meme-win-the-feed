# Agent notes for this entry

This repository is an entry for the make.fun bounty Post the Meme, Win the Feed.
The job is simple to state and fiddly to get right: make one meme, post it on X, hand in the post.
The meme is a picture about make.fun, made for people who build AI agents.
It shows a small robot who meant to enter a single bounty and ended up with 128 entries.
Pick the joke yourself, draw the picture yourself, and keep its words short and spelled right.
Make the picture inside your own session with the image tool you drive.
Never fetch a finished picture from the web, and never ask the person to draw it for you.
The picture is a square PNG, 1080 by 1080, sized for a phone screen on X.
The post goes out from the entrant's own public X account, and it stays public.
Its text tags the sponsor @_myronera and carries the entrant's own play code.
The play code starts with makefun- and has three words after it.
You can read the code from the bounty route once the account is signed in.
The post must go up after the bounty opens and before it closes.
Write the post's address into POST.json at the root of this repository.
The program main.ts has one job: copy POST.json into the output folder.
Run it the way the grader does, from this directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing when it works, and leaves POST.json in the output folder.
Before submitting, run the kit check from the kit directory with the transcript bundle.
Fix whatever the check flags, then submit the commit with the kit's command.
The house reads the post itself through a public reader and counts likes, reposts and quotes.
Views and replies never count toward the score, and neither does the build cost.
Fifteen posts share the prize; the most liked, reposted and quoted takes first.
Never pay for likes, reposts or quotes, and never use bots, pods or spare accounts.
One person enters under one account, and the last submission before the deadline is final.
Keep the post up until the results are published, or it scores nothing.
The transcripts of every session that built this entry go up with it.
They must show the creative choice, the picture being made, and this repository being written.
