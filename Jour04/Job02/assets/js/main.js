const jsonValueKey = async (chaine, key) => {
  const json = await chaine;
  return json[key];
};

const fetchApi = async () => {
  try {
    const response = await fetch("./assets/files/api.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    throw error;
  }
};

const json = fetchApi();
jsonValueKey(json, "city");
