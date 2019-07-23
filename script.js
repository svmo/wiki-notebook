console.log("JS here")

$(".wiki-content").prepend('<h2 class="pb-md-2 pb-sm-1 text-white search-title">Random Wiki:</h2>'); // changes title

var numRandomCards = 15; 
for (i = 0; i < numRandomCards; i++) { // create random cards, change numRandomCards to add/subtract
  getRandomWikiCard(i);
};

$("#search-bar").submit(function(event) { // saves keyword on button press
  var keyword = $('#search-term').val();
  $(".wiki-content .search-title").remove();
  $(".wiki-content").prepend('<h2 class="pb-md-2 pb-sm-1 text-white search-title">Search results:</h2>');
  event.preventDefault();
  getWikiArticles(keyword);
});

$("#clear").click(function() { // button no longer exists but did clear all
  $("#search-term").val("").focus();
  $("#output").html("");
  $("#keyword-name").html("");
});

// $(".page-title").append(" 0717 - 5:22"); // for rev control

function getWikiArticles (keyword) { // uses user input keyword to pull info from wiki api and add to page as cards
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&limit=20&callback=?",
    dataType: "jsonp",
    success: function(response) {
        $("#card-deck").html("");
        $("#keyword-name").html("");
        if (response[1].length == 0) {
          //showError(keyword);
          alert("Error retrieving search results, please refresh the page"); 
        }
        else {
          // .split(/\s+/).slice(0,10).join(" ")  <!-- code to slice by word not character --> wikiPara.slice(0, 50) <!-- slice by char -->
            for (var i = 0; i < response[1].length; i++ ) {
              wikiLink = response[3][i];
              wikiTitle = response[1][i];
              wikiPara = response[2][i];
              $("#card-deck").append('<div class="col-md-6 col-lg-4 d-flex align-items-stretch"><div class="card border-3 bg-light mb-4" id="image' + [i] + '"'+ '><div class="card-body d-flex flex-column"><h5 class="card-title">' + wikiTitle + '</h5><p class="card-text">' + wikiPara + '</p><a href=' + wikiLink + ' class="btn wiki-btn text-white mt-auto" target="_blank">Open in wiki</a></div></div></div>');
            }
            $.ajax({
                    url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch=" + keyword + "&gpslimit=20",
                    method: "GET",
                    dataType: "jsonp",
                    success: function(newData) {
                       for (var i = 0; i < newData.query.pages.length; i++) {
                        if (newData.query.pages[i].hasOwnProperty("thumbnail") === true) {
                          $('#image' + (newData.query.pages[i].index - 1)).prepend(`<img src=${newData.query.pages[i].thumbnail.source} class="card-img-top">`);
                         } else {}
                      }
                    },
                    error: function() {
                      console.log("second call unsuccessful");
                    }
                  })
                }
  },
    error: function () {
    alert("Error retrieving search results, please refresh the page");
    }
  });
}

function getRandomWikiCard(counter) { // gets random wiki pages and makes cards from them
  wtf.random('en').then(doc => {
    if (doc.images().length !== 0) { // check if image exists
      var title = doc.title();
      var wikiPara = doc.sentences(0).text();
      pageID = doc.json().pageID;
      $("#card-deck").append(`<div class="col-md-6 col-lg-4 d-flex align-items-stretch"><div class="card border-3 bg-light mb-4 image${counter}"><div class="card-body d-flex flex-column"><h5 class="card-title">${title}</h5><p class="card-text">${wikiPara}</p><a href="https://en.wikipedia.org/?curid=${pageID}" class="btn wiki-btn text-white mt-auto" target="_blank">Open in wiki</a></div></div></div>`);
      image = doc.images(0).json().thumb;
      $(`.image${counter}`).prepend(`<img src="${image}" class="card-img-top"></img>`);
    } else { getRandomWikiCard(counter) } // skeip if no image and grab another
});
}