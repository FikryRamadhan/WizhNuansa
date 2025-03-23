import { DetailProductInterface } from "../interfaces/DetaillProductInterface";
import PopularItem from "./PopularItems";

export const getDetailProduct = (
  slug: string
): DetailProductInterface | undefined => {
  return PopularItem.find((item) => item.slug === slug);
};
