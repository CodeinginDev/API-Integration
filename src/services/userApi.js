import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/user",
});

export function getUser() {
  const data = api.get("/").then((res) => res.data);
  return data;
}

export async function addUser(data) {
  await api.post("/", { ...data });
}
