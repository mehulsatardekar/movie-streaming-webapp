
$.ajax({

    async: true,
	crossDomain: true,
    method: "GET",
    contentType: "application/json; charset=utf-8",
    url: "/jsons/test.json",
    /*headers: {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "88e8626ed3msha214459b297f3adp19ea59jsnc0458ee19fea"
	},*/
    dataType: "json",
    success: function (response) {
       console.log(response);
       //console.log(response[0]);
       //$('#results').append('<a class="waves-effect waves-light btn"></a>');
       /*for (i in response.countries_stat) {
       // console.log(response.countries_stat[i].country_name);
       // console.log(response.countries_stat[i].cases);
        $("#results").append(`<div class="col s12 m6">
        <div class="card-panel teal">
          <span class="card-title">${response.countries_stat[i].country_name}</span>
          <div class="card-content">
            <p class="g ">Cases:${response.countries_stat[i].cases} | Deaths:${response.countries_stat[i].deaths} | Recovered:${response.countries_stat[i].total_recovered}</p>
            <p class="g ">New-Deaths:${response.countries_stat[i].new_deaths} | New-Cases:${response.countries_stat[i].new_cases} | Critical-Cases:${response.countries_stat[i].serious_critical}</p>
            <p class="g ">Active-Cases: ${response.countries_stat[i].active_cases} </p>
            <p class="g ">Total-Cases-per-1 million_population: ${response.countries_stat[i].total_cases_per_1m_population} </p>
  
          </div>
        </div>
      </div>`);*/
      for (i in response) {

        
//var shallowEncoded = $.param( i, true );
//var shallowDecoded = decodeURIComponent( shallowEncoded );
//console.log(shallowEncoded)
        // console.log(response.countries_stat[i].country_name);
        // console.log(response.countries_stat[i].cases);
       //console.log(response[i].videos)
         
     // var me = $.param( response[i].Year);
       //var param= jQuery.param(response[i])
      // console.log(param);

    //   var queryString = Object.keys(myArray).map(key => key + '=' + myArray[key]).join('&');

   
       $("#results").append(`<div class="col-sm-12 col-lg-3 col-md-3 pb-3">
         <video src="${response[i].trailer}" class="rounded img-thumbnail vt video" id="vt" poster="${response[i].poster}">
         
         </video>
         <div class="pt-2">
           <span class="text-white">${response[i].movieName}</span></br>
           <span class="text-muted ">${response[i].Year}</span><span class="text-muted pl-3 ">${response[i].age}</span><span class="text-muted pl-3 d-md-none">${response[i].type}</span><a href="/htmls/moviereview.html?${$.param(response[i])}" class="text-white pl-5 ">Play |> </a>
         </div>
         
         </div>`);

        // console.log(${response[i].trailer);

        //for (j in response.countries_stat[i].country_name[i]) {
        //  console.log( response.countries_stat[i].country_name);
        //}
      }
      


      
      $(document).ready(function(){

       


        var videos = document.querySelectorAll(".vt");
    
        videos.forEach(video=> {
                   
            video.addEventListener("mouseover", function(){
               this.play()
               
               //alert()
            })
            
            video.addEventListener("mouseout", function(){
         
               this.pause();
               //this.poster="/htmls/images/slide2.jpg"
               this.load();
            })
            
         
            })
         
         
            videos.forEach(function(vid, idx) {
             vid.addEventListener('ended', resetVideo, false);
           });
         
           function resetVideo(e) {
             this.load();
           }
    
    });

    },
    error: function (result) {
        alert("Error");
    }
});


