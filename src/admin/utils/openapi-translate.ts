type TranslateOptions = {
  currentLocale: string; // Kaynak dil (örneğin: 'en')
  targetLocale: string; // Hedef dil (örneğin: 'tr')
};

export async function openApiTranslateArray(
  texts: string[],
  { currentLocale, targetLocale }: TranslateOptions
): Promise<string[]> {
  try {
    const prompt = `
  You are a translation assistant. Translate the following array of texts from ${currentLocale} to ${targetLocale}:
  ${JSON.stringify(texts)}
  Return only the translated array without explanations or additional information.
  `;

    const _response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_ADMIN_OPENAI_KEY}`,
        },
        method: "POST",
      }
    );
    const response = await _response.json();

    // Çıktıyı JSON olarak pars et ve string array olarak döndür
    const completionText = response?.choices[0]?.message?.content?.trim();
    const translatedTexts = JSON.parse(completionText);

    if (Array.isArray(translatedTexts)) {
      return translatedTexts;
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error during translation:", error);
    throw new Error("Failed to translate texts");
  }
}
