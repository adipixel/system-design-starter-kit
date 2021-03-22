import wretch from "wretch";

export function getWineTypes(): Promise<any> {
  return wretch("/wine/types").get().json();
}
