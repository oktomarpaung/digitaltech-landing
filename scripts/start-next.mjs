import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const port = process.env.PORT || "3000";
const __dirname = dirname(fileURLToPath(import.meta.url));
const nextBin = join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");

console.log(`[start-next] Starting Next.js on 0.0.0.0:${port}`);

const child = spawn(
  process.execPath,
  [nextBin, "start", "-H", "0.0.0.0", "-p", port],
  {
    stdio: "inherit",
  }
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
