import json5 from "json5";

export function jsonParser(str: string) {
  return JSON.parse(JSON.stringify(json5.parse(str), null, 2));
}
