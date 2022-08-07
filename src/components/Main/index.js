import { useEffect } from "react";
import { getInfoXML } from "../../utils/functions";

import apiBGG from "../../services/apiBGG";

function Main() {
  const catanId = 13;
  useEffect(() => {
    async function loadCatan() {
      const response = await apiBGG.get(`/thing?stats=1&id=${catanId}`);
      //   const parser = new XMLParser();
      //   const data = parser.parse(response.data);
      console.log(getInfoXML(response.data));
    }
    loadCatan();
  });
  return <h1>Bruno Borta&apos;s amazing Collection</h1>;
}

export default Main;
