# Violence and Hate Speech Observatory (مرصد خطاب العنف والكراهية)

A secure, production-ready web application for detecting hate speech using Google Gemini AI and generating legal reports.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    Create a `.env.local` file in the root directory with the following secrets:

    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    GOOGLE_SERVICE_ACCOUNT_CREDENTIALS={"type": "service_account", ...}
    SPREADSHEET_ID=your_google_sheet_id_here
    ```

    *   `GEMINI_API_KEY`: Get this from Google AI Studio.
    *   `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS`: The full JSON content of your Service Account key, minified into a single line.
    *   `SPREADSHEET_ID`: The ID of the Google Sheet to log results to. Ensure the Service Account has edit access to this sheet.

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Features

*   **AI Analysis**: Uses Gemini 2.0 Flash with HSIE-Syria v2.0 framework.
*   **RTL Interface**: Fully localized Arabic interface.
*   **Legal Reports**: Generates reports for 9 jurisdictions (Syria, Germany, France, etc.).
*   **Logging**: Automatically logs all analyses to Google Sheets.
