import { AuthModel } from "./types/models";

export function isFile(value: any): value is File {
  return value instanceof File;
}

export function checkRole(role?: AuthModel["role"]) {
  return {
    isSupport: role === "support",
    isUser: role === "user",
    isAdmin: role === "admin",
  };
}

export function setLocal(key: string, value: any) {
  let _data = value;

  if (typeof value === "object") _data = JSON.stringify(value);
  localStorage.setItem(key, _data);
}

export function getLocal<T = any>(key: string) {
  const _data = localStorage.getItem(key);
  if (!_data) return null;
  try {
    return JSON.parse(_data) as T;
  } catch (e) {
    return _data as T;
  }
}
