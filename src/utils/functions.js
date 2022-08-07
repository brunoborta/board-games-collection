export function getInfoXML(xmlResponse) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlResponse, "text/xml");

  const name = xml.getElementsByTagName("name")[0].attributes.value.nodeValue;
  const rating =
    xml.getElementsByTagName("average")[0].attributes.value.nodeValue;
  const ranks = xml.getElementsByTagName("rank");
  const yearPublished =
    xml.getElementsByTagName("yearpublished")[0].attributes.value.nodeValue;
  const type = xml.getElementsByTagName("item")[0].attributes.type.nodeValue;
  const image = xml.getElementsByTagName("image")[0].innerHTML;
  const description = xml.getElementsByTagName("description")[0].innerHTML;
  const minPlayers =
    xml.getElementsByTagName("minplayers")[0].attributes.value.nodeValue;
  const maxPlayers =
    xml.getElementsByTagName("maxplayers")[0].attributes.value.nodeValue;

  let rank;
  for (const r of ranks) {
    if (r.attributes.name.nodeValue === "boardgame") {
      rank = r.attributes.value.nodeValue;
      break;
    }
  }
  if (!rank) {
    rank = "Not found";
  }

  return {
    name,
    rating,
    yearPublished,
    type,
    rank,
    image,
    description,
    minPlayers,
    maxPlayers,
  };
}
