// Telaga Kapur — make.fun entry
// "Make the AI judge feel awe" (make-the-ai-judge-feel-awe-20261121-1600)
// SPDX-License-Identifier: MIT
//
// Writes one short text, deterministically, to /output/entry.txt.
// No network, no randomness, no external input.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Kabut naik pelan dari telaga di kaki tebing kapur. Ujung jari menyentuh permukaan yang nyaris tak bergerak, dinginnya merambat. Di bawah air, langit dan batu pucat saling memantulkan, dan dasarnya tak terlihat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
