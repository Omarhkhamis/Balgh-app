import { GoogleGenerativeAI } from '@google/generative-ai';

const getApiKeys = () => {
    const keys: string[] = [];

    // Primary key
    if (process.env.GEMINI_API_KEY) keys.push(process.env.GEMINI_API_KEY);

    // Backup keys
    if (process.env.GEMINI_API_KEY_1) keys.push(process.env.GEMINI_API_KEY_1);
    if (process.env.GEMINI_API_KEY_2) keys.push(process.env.GEMINI_API_KEY_2);
    if (process.env.GEMINI_API_KEY_3) keys.push(process.env.GEMINI_API_KEY_3);

    return keys;
};

export const getGeminiClient = () => {
    const keys = getApiKeys();

    if (keys.length === 0) {
        throw new Error('No GEMINI_API_KEY found in environment variables');
    }

    // For now, we return a client using the first available key.
    // In a more advanced implementation, we could track failure rates or rotate per request.
    // But for simple redundancy, we can just try to use the first one, and the caller can retry with others if needed.
    // However, to make it seamless for the caller, let's return a list of clients or a function that tries them.

    // Actually, the simplest robust way for this app is to return a helper function
    // that executes a callback with a valid model, retrying on failure.

    return {
        generateContent: async (modelName: string, promptParts: any[], options: any = {}) => {
            let lastError;

            for (const key of keys) {
                try {
                    const genAI = new GoogleGenerativeAI(key);
                    const model = genAI.getGenerativeModel({
                        model: modelName,
                        ...options
                    });

                    const result = await model.generateContent(promptParts);
                    return result; // Success!
                } catch (error: any) {
                    console.warn(`Gemini API failed with key ending in ...${key.slice(-4)}: ${error.message}`);
                    lastError = error;

                    // If it's a client error (like 400 Bad Request), retrying with another key won't help.
                    // But 403 (Quota/Ban) or 429 (Rate Limit) or 5xx (Server) are worth retrying.
                    // Simple heuristic: if error message contains "API key", "quota", "permission", retry.
                    const isRetryable = error.message?.toLowerCase().includes('quota') ||
                        error.message?.toLowerCase().includes('key') ||
                        error.message?.toLowerCase().includes('permission') ||
                        error.status === 429 ||
                        error.status === 403 ||
                        error.status >= 500;

                    if (!isRetryable) {
                        throw error;
                    }
                    // Continue to next key
                }
            }

            throw lastError || new Error('All Gemini API keys failed');
        }
    };
};
