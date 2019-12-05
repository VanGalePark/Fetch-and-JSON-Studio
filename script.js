window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
    response.json().then( function(json){
      const container = document.getElementById("container")
      let index = 0
      for (let i = json.length; index < i; index++) {
        if(json[index].active === true) {
          container.innerHTML +=`
            <div class = "astronaut">
              <ul>
                <h3>${json[index].firstName}, ${json[index].lastName}</h3>
                <p>Astronaut Number: ${json[index].id}</p>
                <li>Hours in space: ${json[index].hoursInSpace}</li>
                <li style="color:green">Active: ${json[index].active}</li>
                <li>Skills: ${json[index].skills}</li>
              </ul>
              <img class="avatar" src=${json[index].picture} </img>
            </div>
          `;
        } else {
          container.innerHTML +=`
            <div class = "astronaut">
              <ul>
                <h3>${json[index].firstName}, ${json[index].lastName}</h3>
                <p>Astronaut Number: ${json[index].id}</p>
                <li>Hours in space: ${json[index].hoursInSpace}</li>
                <li style="color:red">Active: ${json[index].active}</li>
                <li>Skills: ${json[index].skills}</li>
              </ul>
              <img class="avatar" src=${json[index].picture} </img>
            </div>
            `;
        }
      }
    })
  })
})
