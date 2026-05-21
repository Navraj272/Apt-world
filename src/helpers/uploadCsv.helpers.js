import { Readable } from "stream";
import readline from "readline";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";

const HEADER_VALUES = new Set([
  "userid",
  "userId",
  "user_id",
  "user id",
  "id",
]);

export const parseUserIdsCsv = async (buffer) => {
  const userIds = new Set();

  const stream = Readable.from(buffer.toString());
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  for await (let line of rl) {
    // Handle BOM + trim
    const value = line
      .replace(/^\uFEFF/, "")
      .trim()
      .replace(/^"(.*)"$/, "$1")
      .toLowerCase();
      
    // Skip header / empty
    if (!value || HEADER_VALUES.has(value)) continue;

    const id = Number(value);
    console.log(id," ")

    if (!Number.isFinite(id)) {
      throw new AppError(
        Errors.INVALID_REQUEST_BODY,
        `Invalid userId found in CSV: "${line}"`
      );
    }

    userIds.add(id);
    console.log(userIds,"idshere")

    // Safety guard
    if (userIds.size > 50_000) {
      throw new AppError(
        Errors.INVALID_REQUEST_BODY,
        "CSV exceeds maximum allowed rows (50,000)"
      );
    }
  }

  if (!userIds.size) {
    throw new AppError(
      Errors.INVALID_REQUEST_BODY,
      "CSV contains no valid userIds"
    );
  }

  return [...userIds];
};
