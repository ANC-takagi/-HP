import OpengraphImage from "./opengraph-image";
import { company } from "@/lib/company";

export const runtime = "nodejs";

export const alt = `${company.name} | 熱絶縁工事・保温板金`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return OpengraphImage();
}
