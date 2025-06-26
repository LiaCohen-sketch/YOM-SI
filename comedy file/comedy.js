async function movies(){
    const response = await fetch("../../movies.csv");

    const data = await response.text();
    

    Papa.parse(data, {
        complete: function(results) {
         console.log(results.data);

         const bananasImg = document.getElementById("img1");
         bananasImg.src = results.data[1][1];
         const bananasInfo = document.getElementById("p1");
         bananasInfo.src = results.data[1][2];


    }});

    console.log(data);


}

movies();