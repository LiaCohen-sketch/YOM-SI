let fav_list = document.getElementById("list");
fav_list.innerHTML = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
    </style>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap');
    </style>
    <link rel="stylesheet" href="../list.css">
    <div class="add">
      <button id="add" onclick="add()">+</button><button id="ad">Add To favorite</button>    
    </div>
  `;
