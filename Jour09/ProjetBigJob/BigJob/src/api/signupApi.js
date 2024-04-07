export const callSignupApi = async (data) => {
  const url = "http://localhost:3000/api/auth/signup";
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (e) {
    console.error(e);
  }
};
