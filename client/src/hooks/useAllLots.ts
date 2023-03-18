import lots from "../data/lots";

export interface Lot {
  lotId: number;
  name: string;
  total: number;
  numOfEntries: number;
  averageOccupancy: number;
}

const useAllLots = (): Lot[] => {
  return lots;
};

export default useAllLots;
