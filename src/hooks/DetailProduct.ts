import { DetailProductInterface } from "../interfaces/DetaillProductInterface";
import { PaketTripsInterfaces } from "../interfaces/PaketTripsInterfaces";
import paketTripsData from "./PaketTrips";
import PopularItem from "./PopularItems";

export const getDetailProduct = (
  slug: string
): DetailProductInterface | undefined => {
  return PopularItem.find((item) => item.slug === slug);
};

export const getDetilPaket = (
  slug: string
): PaketTripsInterfaces | undefined => {
  return paketTripsData.find((item) => item.slug === slug);
};
