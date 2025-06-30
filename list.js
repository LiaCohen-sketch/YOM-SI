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
  