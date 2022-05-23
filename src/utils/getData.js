const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const reponse = await fetch(apiURL);
    const data = await reponse.json();
    return data;
  } catch (error) {
    console.error('Fetch Error', error);
  }
}

export default getData;