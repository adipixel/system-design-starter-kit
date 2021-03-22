import wretch from "wretch";

export const authenticate = async (username: string, password: string) => {
  const params = {
    username,
    password,
  };
  const res = await wretch(`/auth/login`, params).post().json();
  if (!res) {
    throw new Error("Failed to authenticate.");
  }
  return res;
};
