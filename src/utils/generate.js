import axios from "axios";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export async function generateSuggestions(searchText) {
  const API_KEY = import.meta.env.VITE_GEMINI_API;

  if (!searchText?.trim()) throw new Error("Enter text");
  if (!API_KEY) throw new Error("Gemini API key not configured.");

  const payload = {
    contents: [
      {
        parts: [
          {
            text: `Act as a movie and series recommendation system and suggest some movies/series for the query : ${searchText}. Only give me 5 movies/series comma seperated like the example result given. Example Result: Harry Potter, Tourist Family, Premalu, Premam, Bngalore days`,
          },
        ],
      },
    ],
  };

  const response = await axios.post(API_URL, payload, {
    params: {
      key: API_KEY,
    },
  });

  const generatedText =
    response.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()?.split(", ");

  if (!generatedText) throw new Error("Failed to generate names.");
  return generatedText;
}
