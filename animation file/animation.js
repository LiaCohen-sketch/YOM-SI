async function movies(){
    const response = await fetch("../movies.csv");

    const data = await response.text();
    

    Papa.parse(data, {
        complete: function(results) {
         console.log(results.data);

         const SN_img = document.getElementById("img1");
         SN_img.src = results.data[17][1];
         const SN_info = document.getElementById("p1");
         SN_info.textContent = results.data[17][2];
         const SN_name = document.getElementById("s1");
         SN_name.textContent = results.data[17][0];

         const TA_img = document.getElementById("img2");
         TA_img.src = results.data[18][1];
         const TA_info = document.getElementById("p2");
         TA_info.textContent = results.data[18][2];
         const TA_name = document.getElementById("s2");
         TA_name.textContent = results.data[18][0];

         const RH_img = document.getElementById("img3");
         RH_img.src = results.data[19][1];
         const RH_info = document.getElementById("p3");
         RH_info.textContent = results.data[19][2];
         const RH_name = document.getElementById("s3");
         RH_name.textContent = results.data[19][0];

         const TMAOWTP_img = document.getElementById("img4");
         TMAOWTP_img.src = results.data[20][1];
         const TMAOWTP_info = document.getElementById("p4");
         TMAOWTP_info.textContent = results.data[20][2];
         const TMAOWTP_name = document.getElementById("s4");
         TMAOWTP_name.textContent = results.data[20][0];

         const pinocchio_img = document.getElementById("img5");
         pinocchio_img.src = results.data[21][1];
         const pinocchio_info = document.getElementById("p5");
         pinocchio_info.textContent = results.data[21][2];
         const pinocchio_name = document.getElementById("s5");
         pinocchio_name.textContent = results.data[21][0];

         const dumbo_img = document.getElementById("img6");
         dumbo_img.src = results.data[22][1];
         const dumbo_info = document.getElementById("p6");
         dumbo_info.textContent = results.data[22][2];
         const dumbo_name = document.getElementById("s6");
         dumbo_name.textContent = results.data[22][0];

         const Cinderella_img = document.getElementById("img7");
         Cinderella_img.src = results.data[23][1];
         const Cinderella_info = document.getElementById("p7");
         Cinderella_info.textContent = results.data[23][2];
         const Cinderella_name = document.getElementById("s7");
         Cinderella_name.textContent = results.data[23][0];

         const sb_img = document.getElementById("img8");
         sb_img.src = results.data[24][1];
         const sb_info = document.getElementById("p8");
         sb_info.textContent = results.data[24][2];
         const sb_name = document.getElementById("s8");
         sb_name.textContent = results.data[24][0];

    }});

    console.log(data);


}



movies();

document.addEventListener("DOMContentLoaded", () => {
    const animatedMovies = [
        "Snow White",
        "The Aristocats",
        "Robin Hood",
        "The Many Adventures of Winnie the Pooh",
        "Pinocchio",
        "Dumbo",
        "Cinderella",
        "Sleeping Beauty"
      ];
      
  
    document.querySelectorAll(".list").forEach((fav_list, index) => {
      const title = animatedMovies[index] || "Unknown Movie";
      fav_list.innerHTML = `
        <div class="add">
          <button id="add" class="add-btn" data-name="${title}" onclick="add(this)">+</button>
          <button id="ad" class="add-text">Add To favorite</button>
        </div>
      `;
    });
  
window.add = function(button) {
  const movieName = button.getAttribute('data-name');

  // Get existing favorites from localStorage or initialize empty array
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Avoid duplicates
  if (!favorites.includes(movieName)) {
    favorites.push(movieName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  // Optionally update UI (e.g., show added message)
  const li = document.createElement("li");
  li.textContent = movieName;
  document.getElementById("fav_list").appendChild(li);
}});
