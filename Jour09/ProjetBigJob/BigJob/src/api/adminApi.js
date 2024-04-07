export const callUsersApi = async (token) => {
  const url = "http://localhost:3000/api/admin/users";
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

export const callUpdateRoleApi = async (token, id, newRole) => {
  const url = `http://localhost:3000/api/admin/users/${id}/role`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ newRole }),
    });
    return response;
  } catch (e) {
    console.error(e);
  }
};
