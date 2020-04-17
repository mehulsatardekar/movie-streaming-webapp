

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
  height:'10%',
  stretching:"uniform",
  badConnection:"seems you have connection problem",
  // Do not autostart if the page was reloaded.
  //autostart: shouldAutostart,
  
  sources: [{
        file: me.file1,
        label: "HD"
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
  
    
       $("#result").append(` <div class="container-fluid">
       <h5 class="text-white">${me.movieName}</h5>
       <p class="text-secondary">${me.Year} &nbsp ${me.type}&nbsp ${me.age}</p>   
       <p class="text-white"><span class="text-secondary">Cast: &nbsp</span>${me.Cast}</p>
     </div>`);

      
      

