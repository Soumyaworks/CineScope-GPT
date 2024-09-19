import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,    // since we are doing it from frontend, so OpenAI gives warning that it should be done from backend like Node
});

export default openai;