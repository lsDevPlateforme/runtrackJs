const chargerDonneesUtilisateurs = async () => {
  const response = await fetch("./assets/files/utilisateur.json");
  const utilisateurs = await response.json();

  const tbody = document
    .getElementById("tableUtilisateurs")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  utilisateurs.forEach((user) => {
    const tr = `<tr>
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        </tr>`;
    tbody.innerHTML += tr;
  });
};
chargerDonneesUtilisateurs();

document
  .getElementById("update")
  .addEventListener("click", chargerDonneesUtilisateurs);
