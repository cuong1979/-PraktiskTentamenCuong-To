const URL = 'https://restcountries.eu/rest/v2/all'

fetch(URL).then(function(response){
    console.log(response);
    return response.json();

}).then(function(data){
    console.log(data);

   
    for(let i = 0; i<3; i++){
        let randLand =  Math.floor(Math.random()* data.length);
        

        let name = data[randLand].nativeName;
        let timezone = data[randLand].timezones[0];
        let flagUrl = data[randLand].flag;
        
        let land = new Country ( name, timezone, flagUrl);
        console.log(land.tid);
        
     }
    
}).catch(
    function(error){
        if(error === 'Not found'){
            console.log('Det hittades inte');
        }
        
    }
)
// Constructor
function Country (_namn, _tid, _flag){
    this.namn = _namn;
    this.tid = _tid;
    this.flag = _flag
}

Country.prototype.omvandlasTid = function(){
    console.log('test');
}

omvandlasTid();




