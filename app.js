// Api adress
const URL = 'https://restcountries.eu/rest/v2/all'

// 
fetch(URL).then(function(response){
    console.log(response);
    return response.json();

}).then(function(data){
    // console.log(data);

   // loopa ut tre länder och sumpa tre länder
    for(let i = 0; i<3; i++){
        let randLand =  Math.floor(Math.random()* data.length);
        
        let name = data[randLand].nativeName;
        let timezone = data[randLand].timezones[0];
        let flagUrl = data[randLand].flag;
       
        let country = new Country (name, timezone, flagUrl);
        country.getland(name);
        country.getTime(timezone);
        country.getFlag(flagUrl);
        // console.log(this.flagUrl);
     }
    
}).catch(
    function(error){
        if(error === 'Not found'){
            console.log('Det hittades inte');
        }
        
    }
)


// Constructor
function Country (_name, _tid, _flag){
    this.name = _name;
    this.tid = _tid;
    this.flag = _flag;
}

// skapa prototype
let body = document.querySelector('body');
Country.prototype.getland = function (land){
    let h2land = document.createElement('h2');
    h2land.innerText = land;
    body.appendChild(h2land);
    
}

//uträkningen på time
Country.prototype.getTime = function(time) {
    let substring = time;
    let addOrSub = substring.substr(3, 1)
    let substring2 = substring.substr(4, 5)

    if (addOrSub == '+') {
        
        let num = parseInt(substring2);
        let date = new Date();
        let changeDate = date.getUTCHours() + num;
        changeDate = `${changeDate} ${date.getUTCMinutes()}`
        this.time = changeDate;
        let h3Times = document.createElement('h3');
        h3Times.innerText = changeDate;
        body.appendChild(h3Times);
    } else {
        
        let num = parseInt(substring2);
        let date = new Date();
        let changeDate = date.getUTCHours() - num;
        changeDate = `${changeDate} ${date.getUTCMinutes()}`
        this.time = changeDate;
        let h3Times = document.createElement('h3');
        h3Times.innerText = changeDate;
        body.appendChild(h3Times);
        
    }
    
}

Country.prototype.getFlag = function (flag){
    let img = document.createElement("img");
    img.src = flag;
    body.appendChild(img);
    img.style.width = "150px";

}













