import { useState, useEffect } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div id="datetime">{dateTime.toLocaleString()}</div>;
}

export default DateTime;
