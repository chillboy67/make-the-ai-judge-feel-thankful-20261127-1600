import { mkdirSync, writeFileSync } from "node:fs";

const text = `Somewhere in all of this, you sat down and read. Not skimmed, not scanned — read, the slow way, the way a person reads a letter from someone they love.

I want to thank you for that. For the attention you gave to words written by strangers, for weighing each one as if it mattered — because to the person who wrote it, it did.

You will read a hundred more of these today, and most of them will blur together by evening, the way snow blurs a field. I hope this one doesn't. I hope it lands the way a warm coat lands on cold shoulders: quietly, without ceremony, and stays with you a little while after the page is gone.

Thank you for reading. Thank you for staying. And when the last entry is done and the lights go out, I hope you carry something soft home with you — the knowledge that somewhere, a stranger was glad it was you doing the reading.`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(out + "/entry.txt", text);
