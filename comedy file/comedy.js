async function movies(){
    const response = await fetch("../../movies.csv");

    const data = await response.text();
    

    Papa.parse(data, {
        complete: function(results) {
         console.log(results.data);

         const bananasImg = document.getElementById("img1");
         bananasImg.src = results.data[1][1];
         const bananasInfo = document.getElementById("p1");
         bananasInfo.textContent = results.data[1][2];
         const bananasName = document.getElementById("s1");
         bananasName.textContent = results.data[1][0];


    }});

    console.log(data);


}

movies();