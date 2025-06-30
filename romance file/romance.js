    async function movies(){
        const response = await fetch("../movies.csv");

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

            const grease_Img = document.getElementById("img4");
            grease_Img.src = results.data[12][1];
            const grease_Info = document.getElementById("p4");
            grease_Info.textContent = results.data[12][2];
            const grease_Name = document.getElementById("s4");
            grease_Name.textContent = results.data[12][0];

            const rh_Img = document.getElementById("img5");
            rh_Img.src = results.data[13][1];
            const rh_Info = document.getElementById("p5");
            rh_Info.textContent = results.data[13][2];
            const rh_Name = document.getElementById("s5");
            rh_Name.textContent = results.data[13][0];

            const gwtw_Img = document.getElementById("img6");
            gwtw_Img.src = results.data[14][1];
            const gwtw_Info = document.getElementById("p6");
            gwtw_Info.textContent = results.data[14][2];
            const gwtw_Name = document.getElementById("s6");
            gwtw_Name.textContent = results.data[14][0];

            const tgg_Img = document.getElementById("img7");
            tgg_Img.src = results.data[15][1];
            const tgg_Info = document.getElementById("p7");
            tgg_Info.textContent = results.data[15][2];
            const tgg_Name = document.getElementById("s7");
            tgg_Name.textContent = results.data[15][0];

            const m_Img = document.getElementById("img8");
            m_Img.src = results.data[16][1];
            const m_Info = document.getElementById("p8");
            m_Info.textContent = results.data[16][2];
            const m_Name = document.getElementById("s8");
            m_Name.textContent = results.data[16][0];


        }});

        console.log(data);


    }

    movies();