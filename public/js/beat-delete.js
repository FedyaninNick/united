const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", async (e) => {
  console.log("!!!!!");
  const { beatid } = e.target.dataset;
  try {
    const response = await fetch(`/api/beats/${beatid}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      console.log(response);
      window.location.href = "/beats";
    }

    if (response.status === 403) {
      const parent = e.target.closest(".container");
      const error = document.createElement("h5");
      error.innerText = "You do not have permission to delete";
      parent.appendChild(error);
    }
  } catch (error) {
    console.error(error);
  }
});
