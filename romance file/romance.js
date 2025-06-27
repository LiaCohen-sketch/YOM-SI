    async function movies(){
        const response = await fetch("../../movies.csv");

        const data = await response.text();
        

        Papa.parse(data, {
            complete: function(results) {
            console.log(results.data);

            const casablanca_Img = document.getElementById("img1");
            casablanca_Img.src = results.data[9][1];
            const casablanca_Info = document.getElementById("p1");
            casablanca_Info.textContent = results.data[9][2];
            const casablanca_Name = document.getElementById("s1");
            casablanca_Name.textContent = results.data[9][0];

            const TSATC_Img = document.getElementById("img2");
            TSATC_Img.src = results.data[10][1];
            const TSATC_Info = document.getElementById("p2");
            TSATC_Info.textContent = results.data[10][2];
            const TSATC_Name = document.getElementById("s2");
            TSATC_Name.textContent = results.data[10][0];

            const ah_Img = document.getElementById("img3");
            ah_Img.src = results.data[11][1];
            const ah_Info = document.getElementById("p3");
            ah_Info.textContent = results.data[11][2];
            const ah_Name = document.getElementById("s3");
            ah_Name.textContent = results.data[11][0];

        }});

        console.log(data);


    }

    movies();