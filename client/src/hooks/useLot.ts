import { useState, useEffect } from "react";
import axios from "axios";

interface Lot {
  lotId: number;
  name: string;
  total: number;
  numOfEntries: number;
  averageOccupancy: number;
}

const useLot = (lotID: number): Lot | null => {
  const [lot, setLot] = useState<Lot | null>(null);

  useEffect(() => {
    const fetchLot = async () => {
      try {
        const response = await axios.get(`/lots/${lotID}`);
        setLot(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLot();
  }, [lotID]);

  return lot;
};

export default useLot;
