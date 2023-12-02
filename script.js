const div = document.createElement("div")
div.className="container"

const result = fetch("https://anapioficeandfire.com/api/characters/583")

result.then((data)=> data.json())
       .then((element)=>{
        div.innerHTML=`<div class="card text-bg-info mb-3" style="max-width: 32rem;">
        <div class="card-header" style="color:aquamarine"><h3>ICE AND FIRE</h3></div>
        <div class="card-body">
          <h5 class="card-title">Name: ${element.name}</h5>
          <p class="card-text"><b>Title:</b> ${element.titles}</p>
          <p class="card-text"><b>Gender:</b> ${element.gender}</p>
          <p class="card-text"><b>Born:</b> ${element.born}</p>
          <p class="card-text"><b>Culture:</b> ${element.culture}</p>
          <p class="card-text"><b>Book:</b> ${element.books}</p>
          <p class="card-text"><b>Series:</b> ${element.tvSeries}</p>
          <p class="card-text"><b>Playby:</b> ${element.playedBy}</p>
          <p class="card-text"><b>Allegiances:</b> ${element.allegiances}</p>
          <p class="card-text"><b>POV Books:</b> ${element.povBooks}</p>

        </div>
      </div>`
      document.body.append(div)
       })