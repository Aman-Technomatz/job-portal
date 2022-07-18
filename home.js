function fetchData() {
  fetch("https://www.arbeitnow.com/api/job-board-api")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const html = data.data
        .map((user) => {
          return `
            <div class="card" style="float:left;">
            <p><b>Job:</b> ${user.title}</p>
            <p><b>Job Type:</b> ${user.job_types}</p>
            <p><b>Company name:</b> ${user.company_name}</p>
            <p><b>Job Field:</b>${user.tags}</p>
            <p><button>Select</button></p>
        </div>    
            `;
        })
        .join("");
      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .cache((error) => {
      console.log(error);
    });
}
fetchData();
