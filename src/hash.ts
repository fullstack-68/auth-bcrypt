import "dotenv/config";
import Debug from "debug";
import bcrypt from "bcrypt";

const debug = Debug("app");

async function hashPassword(password: string, saltRounds: number) {
  // bcrypt can be used with await inside an async function in modern Node.js,
  // as its async methods return a Promise when no callback is provided.
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Log the generated hash for debugging purposes
  debug(`saltRounds=${saltRounds}, hash=${hashedPassword}`);

  // Uncomment the line below to generate hashes for the compare.ts file
  // console.log(`"${hashedPassword}",`);
}

async function main() {
  for (let i = 1; i < 16; i++) {
    await hashPassword("1234", i);
  }
}
main();
