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
      <a href="#" class="logo">MOVIES</a>
      <div class="header-right">
          <a href="../comedy file/comedy.html">Comedy</a>
          <a href="../romance file/romance.html">Romance</a>
          <a href="../animation file/animation.html">Animation</a>
          <a href="../list file/list.html">Favorite</a>
          <input type="text" class="search-bar" placeholder="Search...">
      </div>
  </div>
`;
