let header = document.getElementById("header");
header.innerHTML = `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
        opacity: 0.6;
        padding: 20px 10px;
        font-family: "Dancing Script", cursive;
        flex-wrap: wrap;
    }

    .header a {
        padding: 30px 20px;
        min-height: 60px;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 30px;
        line-height: 25px;
        border-radius: 4px;
    }

    .header a.logo {
        font-size: 25px;
        font-weight: bold;
    }

    .header a:hover {
        background-color: #ddd;
        color: black;
    }

    .header-right {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    .search-bar {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    @media screen and (max-width: 500px) {
        .header {
            flex-direction: column;
            text-align: center;
        }

        .header-right {
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }

        .header a {
            width: 100%;
        }

        .search-bar {
            width: 100%;
        }
    }
  </style>

  <div class="header">
      <a href="../index.html" class="logo">MOVIES</a>
      <div class="header-right">
          <a href="../comedy file/comedy.html">Comedy</a>
          <a href="../romance file/romance.html">Romance</a>
          <a href="../animation file/animation.html">Animation</a>
          <a href="../list file/list.html">Favorite</a>
          <input id="search" type="text" class="search-bar" placeholder="Search...">
          <button id="search-btn">🔍</button>

      </div>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("search-btn");
  
    if (btn) {
      btn.addEventListener("click", async () => {
        const response = await fetch("../movies.csv"); // Update path as needed
        const text = await response.text();
  
        Papa.parse(text, {
          header: true,
          complete: function (results) {
            const searchTerm = document.getElementById("search").value.trim().toLowerCase();
  
            const found = results.data.find(row =>
              row.name && row.name.trim().toLowerCase() === searchTerm
            );
  
            if (found) {
              const genre = found.genra.trim().toLowerCase();
  
              if (genre === "a") {
                window.location.href = "../animation file/animation.html";
              } else if (genre === "r") {
                window.location.href = "../romance file/romance.html";
              } else if (genre === "c") {
                window.location.href = "../comedy file/comedy.html";
              } else {
                window.location.href = "../error.html";
              }
            } else {
              window.location.href = "../error.html";
            }
          }
        });
      });
    }
  });