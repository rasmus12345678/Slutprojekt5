$().ready(function(){
    var i = 0;
    

    var images = [
      './img/bild2.jpg',
      './img/bild3.jpg',
      './img/bild.jpg',
      './img/bild2.jpg',
      './img/bild3.jpg',
      './img/bild.jpg',
      './img/bild2.jpg',
      './img/bild3.jpg',
      './img/bild.jpg',
      './img/bild2.jpg',
      './img/bild3.jpg',
      './img/bild.jpg',
      './img/bild2.jpg',
      './img/bild3.jpg',
      './img/bild.jpg',


    ]
    
 
    var image = $('.background')
    

    image.css('background-image', 'url(./img/bild.jpg)')
    
 
    setInterval(function(){
      image.fadeOut(500, function(){
        image.css('background-image', 'url(' + images [i++] +')')
        image.fadeIn(500)
        $('.info'+(i)%3).css('display','flex')
        $('.info'+(i-1)%3).css('display','none')



      })
      if(1 == images.length)
        i = 0
    }, 8000)
  })