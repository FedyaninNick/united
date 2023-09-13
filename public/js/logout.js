const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:3100/api/users/logout");
    if (response.redirected) {
      window.location.href = response.url;
    }
  } catch (error) {
    console.error(error);
  }
});
