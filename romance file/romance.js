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

        }});

        console.log(data);


    }

    movies();