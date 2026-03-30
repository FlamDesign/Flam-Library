// ─────────────────────────────────────────────────────────────
//  FLAM LIBRARY — Google Apps Script
//  Deploy this inside your Google Sheet to create a live API
//
//  HOW TO DEPLOY:
//  1. Open your Google Sheet
//  2. Click Extensions → Apps Script
//  3. Delete any existing code and paste ALL of this
//  4. Click Save (Ctrl+S)
//  5. Click Deploy → New deployment
//  6. Type = Web app
//  7. Execute as = Me
//  8. Who has access = Anyone
//  9. Click Deploy → Copy the Web App URL
//  10. Paste that URL into the Flam Library tool → Settings
// ─────────────────────────────────────────────────────────────

function doGet(e) {
  try {
    const ss     = SpreadsheetApp.getActiveSpreadsheet();
    const sheet  = ss.getSheets()[0]; // uses first sheet tab
    const data   = sheet.getDataRange().getValues();

    if (data.length < 2) {
      return jsonResponse({ headers: [], rows: [] });
    }

    const headers = data[0].map(h => String(h).trim()).filter(Boolean);
    const rows    = data.slice(1)
      .map(row => {
        const obj = {};
        headers.forEach((h, i) => {
          const val = row[i];
          obj[h] = val !== undefined && val !== null ? String(val).trim() : '';
        });
        return obj;
      })
      .filter(row => Object.values(row).some(v => v !== ''));

    return jsonResponse({ headers, rows, count: rows.length });

  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

function jsonResponse(data, code) {
  const output = ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
