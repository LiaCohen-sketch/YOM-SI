document.querySelectorAll(".list").forEach(fav_list => {
    fav_list.innerHTML = `
      <div class="add">
        <button id="add" onclick="add()">+</button>
        <button id="ad">Add To favorite</button>
      </div>
    `;
  });

  document.getElementsByClassName("list").innerHTML = `
        <div class="add">
        <button id="add" onclick="add()">+</button>
        <button id="ad">Add To favorite</button>
      </div>
  `
  
  document.getElementsByClassName("list").innerHTML = `
        <h1>Favorites</h1>
        <ul id="favorites-list"></ul>
      
        <script>
          document.addEventListener("DOMContentLoaded", () => {
            const list = document.getElementById("favorites-list");
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      
            if (favorites.length === 0) {
              list.innerHTML = "<li>No favorite movies yet.</li>";
            } else {
              favorites.forEach(movie => {
                const li = document.createElement("li");
                li.textContent = movie;
                list.appendChild(li);
              });
            }
          });
        </script>
`
