import dotenv from "dotenv"
dotenv.config()

export const config = {
  port: parseInt(process.env.PORT || "3000", 10),
  env: process.env.NODE_ENV || "development",
  sheets: {
    apiKey: process.env.SHEETS_API_KEY,
    spreadsheetID: process.env.TRANSLATION_SPREADSHEET_ID,
    sheetName: process.env.TRANSLATION_SHEET_NAME,
  },
}
