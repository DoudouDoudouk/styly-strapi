import { openApiTranslateArray } from "./openapi-translate";
// Çevrilecek alanları tanımlayın
const translatableKeys = [
  "title",
  "description",
  "slug",
  "content",
  "keywords",
  "body",
  "copyRightText",
  "text",
  "caption",
  "subtitle",
  "label",
  "heading",
  "subtext",
  "comment",
  "line1",
  "line2",
];

// Veriyi flatten yapıya dönüştür
const flattenData = (
  data: any,
  path: string[] = []
): Record<string, string> => {
  let flattened: Record<string, string> = {};

  for (const key in data) {
    const currentPath = [...path, key];

    if (typeof data[key] === "string" && translatableKeys.includes(key)) {
      flattened[currentPath.join(".")] = data[key];
    } else if (typeof data[key] === "object" && data[key] !== null) {
      Object.assign(flattened, flattenData(data[key], currentPath));
    }
  }

  return flattened;
};

// Flatten edilmiş veriyi orijinal yapıya yerleştir
const unflattenData = (
  flattened: Record<string, string>,
  originalData: any
): any => {
  const unflattened = JSON.parse(JSON.stringify(originalData));

  for (const flatKey in flattened) {
    const keys = flatKey.split(".");
    let target = unflattened;

    // Son düğüme kadar nesne içinde gezin
    keys.slice(0, -1).forEach((key) => {
      if (!target[key]) target[key] = {};
      target = target[key];
    });

    // Çevrilmiş veriyi son düğüme yerleştir
    target[keys[keys.length - 1]] = flattened[flatKey];
  }

  return unflattened;
};

// Çeviri işlemini yapan mock bir fonksiyon (örneğin, Google Translate API)
const translateTexts = async (
  texts: Record<string, string>,
  currentLocale: string,
  targetLocale: string
): Promise<Record<string, string>> => {
  const translated = await openApiTranslateArray(Object.values(texts), {
    currentLocale,
    targetLocale,
  });

  const result = Object.fromEntries(
    Object.entries(texts).map(([key, value], i) => [
      key,
      translated[i] ?? value,
    ])
  );
  return result;
};

// Ana işlem
export const translateData = async (
  data: any,
  currentLocale: string,
  targetLocale: string
) => {
  // 1. Veriyi flatten yapıya çevir
  const flattenedData = flattenData(data);

  // 2. Flatten edilmiş veriyi tek API çağrısıyla çevir
  const translatedFlattenedData = await translateTexts(
    flattenedData,
    currentLocale,
    targetLocale
  );

  // 3. Çevrilmiş veriyi orijinal yapıya yerleştir
  const translatedData = unflattenData(translatedFlattenedData, data);

  return translatedData;
};
