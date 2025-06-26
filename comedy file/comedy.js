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

         const TMTR_img = document.getElementById("img2");
         TMTR_img.src = results.data[2][1];
         const TMTR_info = document.getElementById("p2");
         TMTR_info.textContent = results.data[2][2];
         const TMTR_name = document.getElementById("s2");
         TMTR_name.textContent = results.data[2][0];

         const TGR_img = document.getElementById("img3");
         TGR_img.src = results.data[3][1];
         const TGR_info = document.getElementById("p3");
         TGR_info.textContent = results.data[3][2];
         const TGR_name = document.getElementById("s3");
         TGR_name.textContent = results.data[3][0];


    }});

    console.log(data);


}

movies();