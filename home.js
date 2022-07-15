function fetchData(){
    fetch("https://www.arbeitnow.com/api/job-board-api")
    .then(response => {
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
    })
    .then(data => {
        console.log(data.data);
        const html = data.data 
        .map(user => {
            return`
            <div class="card" style="float:left;">
            <p>Job: ${user.title}</p>
    <p>Job Type: ${user.job_types}</p>
  <p>Company_name: ${user.company_name}</p>
  <p>${user.tags}</p>
  <p><button>Search</button></p>
</div>    
            `;
        })
        .join("");
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
    })
    .cache(error => {
        console.log(error);
    })
}
fetchData();