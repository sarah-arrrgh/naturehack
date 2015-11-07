var labelType, useGradients, nativeTextSupport, animate

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function')
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML'
  nativeTextSupport = labelType == 'Native'
  useGradients = nativeCanvasSupport
  animate = !(iStuff || !nativeCanvasSupport)
})()

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem)
      this.elem = document.getElementById('log')
    this.elem.innerHTML = text
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px'
  }
}


function init(){

    var json = dataInput
    var ruru = new $jit.ST({
        injectInto: 'infovis',
        duration: 500,
        transition: $jit.Trans.Quart.easeInOut,
        levelDistance: 150,
        Navigation: {
          enable:true,
          panning:true
        },

        Node: {
          overridable: true,
          type: 'circle',
          color: '#edac3a',
          alpha: 1,
          dim: 110,
          autoHeight: false,
          autoWidth: false,
          lineWidth: 2,
          align: "center",
        },

        Edge: {
            type: 'bezier',
            dim: 125,
            lineWidth: 3,
            overridable: true
        },

        onBeforeCompute: function(node){
            Log.write("loading " + node.name)
        },

        onAfterCompute: function(){
            Log.write("done")
        },

        onCreateLabel: function(label, node){
            label.id = node.id
            label.innerHTML = node.name
            label.onclick = function(){
              console.log(this)
              if(normal.checked) {
                ruru.onClick(node.id)
              } else {
                ruru.setRoot(node.id, 'animate')
              }
            }

            var style = label.style
            style.width = 90 + 'px'
            style.height = 50 + 'px'
            style.cursor = 'pointer'
            style.color = '#333'
            style.fontSize = '1em'
            style.textAlign = 'center'
            style.paddingTop = '3px'
        },

        onBeforePlotNode: function(node){
            if (node.selected) {

            }
            else {
                delete node.data.$color
                node.data.$dim = 110
                if(!node.anySubnode("exist")) {
                    var count = 0
                    node.eachSubnode(function(n) { count++ })
                    node.data.$color = ['#efb653', '#f4cb84', '#edac3a', '#edac3a', '#edac3a', '#edac3a'][count]
                    if(count > 5){
                        node.data.$color = '#efb653'
                    }
                }
            }
        },

        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed"
                adj.data.$lineWidth = 10
            }
            else {
                delete adj.data.$color
                delete adj.data.$lineWidth
            }
        }
    })
    ruru.loadJSON(json)
    ruru.compute()
    ruru.geom.translate(new $jit.Complex(-400, -200), "current")
    ruru.onClick(ruru.root)

    var top = $jit.id('r-top'),
        normal = $jit.id('s-normal')

}
