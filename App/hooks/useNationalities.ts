import { getNationalities } from "../services/GetNationalities";
import { useState, useEffect, useRef } from "react";
import { NationalityItem } from "App/Interfaces/Nationalities";

const useGetNationalities = (url: string) => {
  const cache = useRef({});
  const [loading, setLoading] = useState(false);
  const [nationalities, setNationalities] = useState<Array<NationalityItem>>(
    []
  );
  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setLoading(true);
      if (cache.current[url]) {
        const data = cache.current[url];
        setNationalities(data);
        setLoading(false);
      } else {
        const { status, response } = await getNationalities(url);
        cache.current[url] = response; // set response in cache;
        setNationalities(response);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { nationalities, loading };
};
export { useGetNationalities };
