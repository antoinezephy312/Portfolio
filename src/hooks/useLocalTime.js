import { useEffect, useState } from "react";

// Live clock for a given IANA timezone — a small "handcrafted" detail.
export default function useLocalTime(timeZone = "Asia/Manila") {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000 * 30);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return time;
}
