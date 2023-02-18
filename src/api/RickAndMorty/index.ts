import axios from "axios";
import { getCharactersResponseSchema } from "./schema";

const {
  get,
  post,
  put,
  delete: destory,
} = axios.create({ baseURL: "https://rickandmortyapi.com/api" });

export const getCharacters = async () => {
  const { data } = await get("/character");
  return getCharactersResponseSchema.parse(data);
};
