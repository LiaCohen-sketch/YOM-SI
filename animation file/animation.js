async function movies(){
    const response = await fetch("../../movies.csv");

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

         const TGR_img = document.getElementById("img3");
         TGR_img.src = results.data[3][1];
         const TGR_info = document.getElementById("p3");
         TGR_info.textContent = results.data[3][2];
         const TGR_name = document.getElementById("s3");
         TGR_name.textContent = results.data[3][0];

         const MT_img = document.getElementById("img4");
         MT_img.src = results.data[4][1];
         const MT_info = document.getElementById("p4");
         MT_info.textContent = results.data[4][2];
         const MT_name = document.getElementById("s4");
         MT_name.textContent = results.data[4][0];

         const TGD_img = document.getElementById("img5");
         TGD_img.src = results.data[5][1];
         const TGD_info = document.getElementById("p5");
         TGD_info.textContent = results.data[5][2];
         const TGD_name = document.getElementById("s5");
         TGD_name.textContent = results.data[5][0];

         const opera_img = document.getElementById("img6");
         opera_img.src = results.data[6][1];
         const opera_info = document.getElementById("p6");
         opera_info.textContent = results.data[6][2];
         const opera_name = document.getElementById("s6");
         opera_name.textContent = results.data[6][0];

         const ds_img = document.getElementById("img7");
         ds_img.src = results.data[7][1];
         const ds_info = document.getElementById("p7");
         ds_info.textContent = results.data[7][2];
         const ds_name = document.getElementById("s7");
         ds_name.textContent = results.data[7][0];

         const tj_img = document.getElementById("img8");
         tj_img.src = results.data[8][1];
         const tj_info = document.getElementById("p8");
         tj_info.textContent = results.data[8][2];
         const tj_name = document.getElementById("s8");
         tj_name.textContent = results.data[8][0];

    }});

    console.log(data);


}

movies();