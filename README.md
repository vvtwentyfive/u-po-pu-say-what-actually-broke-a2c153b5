# Say What Actually Broke

[![Bounty](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/vvtwentyfive/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/vvtwentyfive/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

One line of software error copy — at most 200 characters — that tells the user the brutal truth about what broke, and makes them laugh on the way.

## The entry

> We deleted the production database. The backup was stored in the production database. Please hold while we update our résumés.

## How it works

`main.ts` (Node 22 stdlib only, no network, no randomness) writes that single line to `/output/entry.txt`, deterministically.

## Verify

```sh
node --experimental-strip-types main.ts
cat /output/entry.txt
wc -m /output/entry.txt   # must be 1–200 characters, single line
```

Run it twice and compare `sha256sum /output/entry.txt` — the hashes must be identical.
