
$.ajax({

  async: true,
crossDomain: true,
  method: "GET",
  contentType: "application/json; charset=utf-8",
  url: "/jsons/web-series.json/hindiwebser.json",
 
  dataType: "json",
  success: function (response) {
     console.log(response);
   
    for (i in response) {

     $("#results1").append(`<div class="col-sm-12 col-lg-3 col-md-3 pb-3">
       <video src="${response[i].trailer}" class="rounded img-thumbnail vt video" id="vt" poster="${response[i].poster}">
       
       </video>
       <div class="pt-2">
         <span class="text-white">${response[i].seriesName}</span></br>
         <span class="text-muted ">${response[i].Year}</span><span class="text-muted pl-3 ">${response[i].age}</span><span class="text-muted pl-3 d-md-none">${response[i].type}</span><a href="/htmls/tvshowreview.html?${$.param(response[i])}" class="text-white pl-5 ">Play |> </a>
       </div>
       
       </div>`);

     
    }
    


    
    $(document).ready(function(){

     


      var videos = document.querySelectorAll(".vt");
  
      videos.forEach(video=> {
                 
          video.addEventListener("mouseover", function(){
             this.play()
             
          })
          
          video.addEventListener("mouseout", function(){
       
             this.pause();
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


