async function movies(){
    const response = await fetch("../../movies.csv");

    const data = await response.text
    
    console.log(data);
}

movies();