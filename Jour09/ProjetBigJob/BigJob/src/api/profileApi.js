export const callProfileApi = async (token) => {
  const url = "http://localhost:3000/api/users/profile";
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        authorization: token,
      },
    });
    return response.json();
  } catch (e) {
    console.error(e);
  }
};
