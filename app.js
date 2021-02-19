let showAyah;
const showSurah = (surah) =>{
    let surahs = document.getElementById("surahs");
    surah.forEach(elements => {
        const surahBox = `
            <div onclick="showAyah('${elements.englishName}')" class="surahNameBox">
                <h1 class="surah_name"> ${elements.englishName}</h1>
                <div id="${elements.englishName}" class="container surah_box"></div>
            </div>    
        ` 
        let surahBoxText = document.createElement("div");

        surahBoxText.innerHTML = surahBox;
        surahs.appendChild(surahBoxText);    
    });
    
  // 
    // surah.forEach(element => {
    //             // console.log(surahBox)
                // let div = document.getElementById(`${element.englishName}`);
                // // console.log(ul);
                //  let liText = document.createElement("li");
                // const ayahs = element.ayahs;
                // ayahs.forEach(element => {
                //     let liText = document.createElement("div");
                //     const li = `
                //         ${element.text}
                //     `
                //     liText.innerHTML = li;
                //     div.appendChild(liText);                    
                // });
    // })
    
}

fetch("http://api.alquran.cloud/v1/quran/ar.alafasy ")
    .then(res => res.json())
    .then(data => {
        console.log(data.data.surahs);
        const surah = data.data.surahs;
        showSurah(data.data.surahs);
        showAyah = ( surahName ) => {
                console.log(surahName);
                const mainDiv = document.getElementById("surahs");
                const array = surah.find(sura => sura.englishName === surahName);
                let div = document.getElementById(`${array.englishName}`);
                // console.log(ul);
                // let liText = document.createElement("div");
                const ayahs = array.ayahs;
                mainDiv.style.display = "block";
                ayahs.forEach(element => {
                    let liText = document.createElement("div");
                    const li = `
                        <h2>${element.text}</h2>
                        <audio controls>
                        <source src="${element.audio}" type="audio/ogg">
                        </audio>
                    `
                    liText.innerHTML = li;
                    mainDiv.innerText = "";
                    div.appendChild(liText);                    
                });
                mainDiv.appendChild(div);
                console.log(array);
            
            }
    
        
        
    })
    