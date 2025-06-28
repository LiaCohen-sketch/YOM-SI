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