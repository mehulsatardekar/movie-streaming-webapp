

      function getQueryParams (query) {
        return query.replace(/^\*/, '').split('&').reduce((json, item) => {
          if (item) {
            item = item.split('=').map((value) => decodeURIComponent(value))
            json[item[0]] = item[1]
          }
          return json
        }, {})
      }
      
      url=window.location.search;
      
      var me = getQueryParams(url.split("?")[1]);

  const storageKey = 'jwplayer.page-reloaded';

  //let shouldAutostart = true;
  //const wasReloaded = JSON.parse(localStorage.getItem(storageKey));
  //if (wasReloaded) {
  //shouldAutostart = false;
  //}
  
  jwplayer('player').setup({
  width:'100%',
  height:'100%',
  ratio: "100%",
  // Do not autostart if the page was reloaded.
  //autostart: shouldAutostart,
  sources: [
      
      
    {
        file: me.file1,
        label: "episode 1",
        "default": "true"
      },
    {
        file: me.file1,
        label: "episode 2"
      },{
        file: me.file2,
        label: "episode 3"
      }],

    
  });
  
  
  /*localStorage.setItem(storageKey, true);
  
  const refreshBtn = document.querySelector('.refresh');
  refreshBtn.addEventListener('click', () => window.location.reload());
  
  const clearStorageBtn = document.querySelector('.clear-storage');
  clearStorageBtn.addEventListener('click', () => {
  localStorage.removeItem(storageKey);
  refreshBtn.click();
  });
  */
      // console.log(JSON.stringify(response.articles));
      
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
      

       
       
    
       $("#result").append(` <div class="container-fluid">
       <h5 class="text-white">${me.seriesName}</h5>
       <p class="text-secondary">${me.Year} &nbsp ${me.type}&nbsp ${me.age}</p>   
       <p class="text-white"><span class="text-secondary">Cast: &nbsp</span>${me.Cast}</p>
     </div>`);

      





   
   


