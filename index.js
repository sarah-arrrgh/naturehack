var h = $(window).height()
var w = $(window).width()

console.log("window width: " + w)
console.log("window height: " + h)

$(document).ready(function(){
  animateRandomMovement("#aves")

// zindex = what thing is at the front
  var zindex = 0
  $(".circle").click(function(){
    zindex++
    if($(this).width() === 500){
      animateShrink(this)
      animateRandomMovement(this)
    }
    else {
      $('#sax').append('<embed id="embed_player" src="http://haptictheory.com/tones/epic-sax-guy.mp3" autostart="true" hidden="true"></embed>')
      animateToCentre(this)
      animateGrow(this)
    }
    $(this).css("z-index", zindex)
  })
})

function animateRandomMovement(id){
  var newq = makeNewPosition()
  var oldq = $(id).offset()
  var speed = calcSpeed([oldq.top, oldq.left], newq)
  $(id).animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateRandomMovement(id)
  })
}

function makeNewPosition(){
  var nh = Math.floor(Math.random() * h)
  var nw = Math.floor(Math.random() * w)
  return [nh,nw]
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1])
  var y = Math.abs(prev[0] - next[0])


  var greatest = x > y ? x : y
  var speedModifier = 0.1
  var speed = Math.ceil(greatest/speedModifier)

  return speed
}

function animateToCentre(e){
  var div = e.currentTarget
  var centreX = (w / 2) - ($(".circle").width() / 2)
  var centreY = (h / 2) - ($(".circle").height() / 2)
  $(e).stop().animate({ top: centreY, left: centreX}, 1000)
}


function animateGrow(item){
  $(item).animate({
    width: "500px",
    height: "500px"
  },3000)
  $(item).find('p').hide()
  $(item).find('.img').show()
}

function animateShrink(item){
  $(item).animate({
    width: "250px",
    height: "250px"
  },3000)
}
