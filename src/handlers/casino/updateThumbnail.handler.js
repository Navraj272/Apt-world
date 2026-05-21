// import fs from "fs";
// import path from "path";
// import db from "@src/db/models";
// import { BaseHandler } from "@src/libs/baseHandler";
// import { UpdateCasinoGameHandler } from "@src/handlers/casino/updateCasinoGame.handler";

// export class UpdateThumbnailHandler extends BaseHandler {
//   async run() {
//     const thumbnailsDir = path.join(__dirname, "../../../thumbnails");

//     if (!fs.existsSync(thumbnailsDir)) {
//       throw new Error(`Thumbnails directory not found at ${thumbnailsDir}`);
//     }

//     const files = fs.readdirSync(thumbnailsDir);
//     const results = {
//       totalFound: files.length,
//       updated: 0,
//       skipped: 0,
//       failed: 0,
//       errors: [],
//     };

//     for (const file of files) {
//       if (!file.endsWith(".png")) {
//         results.skipped++;
//         continue;
//       }

//       // Extract casino_game_id from filename (e.g., "1000000_300x400_en.png" -> "1000000")
//       const casinoGameIdStr = file.split("_")[0];

//       if (!casinoGameIdStr) {
//         results.skipped++;
//         continue;
//       }

//       // Find the game by casino_game_id column
//       const game = await db.CasinoGame.findOne({
//         where: { casinoGameId: casinoGameIdStr },
//         transaction: this.context.sequelizeTransaction,
//       });

//       if (!game) {
//         results.failed++;
//         results.errors.push(
//           `Game not found for casinoGameId: ${casinoGameIdStr} (file: ${file})`,
//         );
//         continue;
//       }

//       const filePath = path.join(thumbnailsDir, file);
//       const buffer = fs.readFileSync(filePath);

//       // Prepare image object to match multer file structure expected by UpdateCasinoGameHandler
//       const imageObj = {
//         buffer,
//         originalname: file,
//         mimetype: "image/png",
//       };

//       const args = {
//         casinoGameId: game.id,
//         images: {
//           desktop: imageObj,
//           mobile: imageObj,
//         },
//       };

//       try {
//         // Call the existing UpdateCasinoGameHandler
//         await UpdateCasinoGameHandler.execute(args, this.context);
//         results.updated++;
//       } catch (err) {
//         results.failed++;
//         results.errors.push(
//           `Error updating ${game.name} (${casinoGameIdStr}): ${err.message}`,
//         );
//       }
//     }

//     return results;
//   }
// }
