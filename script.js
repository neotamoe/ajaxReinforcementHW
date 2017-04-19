console.log('javascript works');
$(document).ready(onReady);

function onReady () {
  console.log('jQuery works');
  movieGetter();
}

function movieGetter (){
  $.ajax({
    url: 'http://www.omdbapi.com/?t=bring+it+on',
    success: function(bring){
      console.log(bring.Title);
      $('#theater1').append('<h3>' + bring.Title + '</h3>');
      $('#theater1').append('<img src="'+ bring.Poster +'" alt="bringItOnPoster">');
      $('#theater1').append('<p>Starring:'+ bring.Actors +'</p>');
    }
  });
  $.ajax({
    url: 'http://www.omdbapi.com/?t=crazy%2Fbeautiful',
    success: function (crazy){
      console.log(crazy.Title);
      $('#theater2').append('<h3>' + crazy.Title + '</h3>');
      $('#theater2').append('<img src="'+ crazy.Poster +'" alt="crazyBeautifulPoster">');
      $('#theater2').append('<p>Starring:'+ crazy.Actors +'</p>');
    }
  });
  $.ajax({
    url:'http://www.omdbapi.com/?t=drop+dead+gorgeous',
    success: function(drop){
      console.log(drop.Title);
      $('#theater3').append('<h3>' + drop.Title + '</h3>');
      $('#theater3').append('<img src="' + drop.Poster + '" alt="dropDeadGorgeousPoster">');
      $('#theater3').append('<p>Starring:'+ drop.Actors +'</p>');
    }
  });
  $.ajax({
    url:'http://www.omdbapi.com/?t=spider-man',
    success: function(spider){
      console.log(spider.Title);
      $('#theater4').append('<h3>' + spider.Title + '</h3>');
      $('#theater4').append('<img src="' + spider.Poster + '" alt="SpiderManPoster">');
      $('#theater4').append('<p>Starring:'+ spider.Actors +'</p>');
    }
  });
  $.ajax({
    url:'http://www.omdbapi.com/?t=dick',
    success: function(dick){
      console.log(dick.Title);
      $('#theater5').append('<h3>' + dick.Title + '</h3>');
      $('#theater5').append('<img src="' + dick.Poster + '" alt="dickPoster">');
      $('#theater5').append('<p>Starring:'+ dick.Actors +'</p>');
    }
  });
  $.ajax({
    url:'http://www.omdbapi.com/?t=wimbledon',
    success: function(tennis){
      console.log(tennis.Title);
      $('#theater6').append('<h3>' + tennis.Title + '</h3>');
      $('#theater6').append('<img src="' + tennis.Poster + '" alt="wimbledonPoster">');
      $('#theater6').append('<p>Starring:'+ tennis.Actors +'</p>');
    }
  });
}
