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
      function getRandomColor(brightness){
    //6 levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
  }
    //init data
    var json = dataInput
    //end
    //init Spacetree
    //Create a new ST instance
    var ruru = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 500,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 150,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
          overridable: true,
          type: 'circle',
          color: getRandomColor(2),
          alpha: 1,
          dim: 70,
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

        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id
            label.innerHTML = node.name
            label.onclick = function(){
              if(normal.checked) {
                ruru.onClick(node.id)
              } else {
                ruru.setRoot(node.id, 'animate')
              }
            }
            //set label styles
            var style = label.style
            style.width = 90 + 'px'
            style.height = 50 + 'px'
            style.cursor = 'pointer'
            style.color = '#333'
            style.fontSize = '1em'
            style.textAlign = 'center'
            style.paddingTop = '3px'
        },

        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = getRandomColor(2)
                node.data.$dim = 120
            }
            else {
                delete node.data.$color
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    node.data.$dim = 70
                    //count children number
                    var count = 0
                    node.eachSubnode(function(n) { count++ })
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = ['#151', '#161', '#292', '#3a3', '#4d4', '#5f4'][count]
                }
            }
        },

        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
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
    //load json data
    ruru.loadJSON(json)
    //compute node positions and layout
    ruru.compute()
    //optional: make a translation of the tree
    ruru.geom.translate(new $jit.Complex(-200, 0), "current")
    //emulate a click on the root node.
    ruru.onClick(ruru.root)
    //end
    //Add event handlers to switch spacetree orientation.
    var top = $jit.id('r-top'),
        left = $jit.id('r-left'),
        bottom = $jit.id('r-bottom'),
        right = $jit.id('r-right'),
        normal = $jit.id('s-normal')


    function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true
            ruru.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false
                }
            })
        }
    }

    top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler
    //end

}
