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
    //init data
    var json = {
        id: "0",
        name: "0",
        data: {},
        children: [{
            id: "01",
            name: "01",
            data: {},
            children: [{
                id: "011",
                name: "011",
                data: {},
                children: [{
                    id: "0111",
                    name: "0111",
                    data: {},
                    children: [{
                        id: "01111",
                        name: "01111",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "0112",
                    name: "0112",
                    data: {},
                    children: [{
                        id: "01121",
                        name: "01121",
                        data: {},
                        children: []
                    }, {
                        id: "01122",
                        name: "01122",
                        data: {},
                        children: []
                    }, {
                        id: "01123",
                        name: "01123",
                        data: {},
                        children: []
                    }, {
                        id: "01124",
                        name: "01124",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "0113",
                    name: "0113",
                    data: {},
                    children: [{
                        id: "01131",
                        name: "01131",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "012",
                name: "012",
                data: {},
                children: [{
                    id: "0121",
                    name: "0121",
                    data: {},
                    children: [{
                        id: "01211",
                        name: "01211",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "02",
            name: "02",
            data: {},
            children: [{
                id: "021",
                name: "021",
                data: {},
                children: [{
                    id: "0211",
                    name: "0211",
                    data: {},
                    children: [{
                        id: "02111",
                        name: "02111",
                        data: {},
                        children: []
                    }, {
                        id: "02112",
                        name: "02112",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "0212",
                    name: "0212",
                    data: {},
                    children: [{
                        id: "02121",
                        name: "02121",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "022",
                name: "022",
                data: {},
                children: [{
                    id: "0221",
                    name: "0221",
                    data: {},
                    children: []
                }, {
                    id: "0222",
                    name: "0222",
                    data: {},
                    children: [{
                        id: "02221",
                        name: "02221",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "023",
                name: "023",
                data: {},
                children: [{
                    id: "0231",
                    name: "0231",
                    data: {},
                    children: [{
                        id: "02311",
                        name: "02311",
                        data: {},
                        children: []
                    }, {
                        id: "02312",
                        name: "02312",
                        data: {},
                        children: []
                    }]
                }]
            }]
        }, {
            id: "03",
            name: "03",
            data: {},
            children: [{
                id: "031",
                name: "031",
                data: {},
                children: [{
                    id: "0311",
                    name: "0311",
                    data: {},
                    children: [{
                        id: "03111",
                        name: "03111",
                        data: {},
                        children: []
                    }, {
                        id: "03112",
                        name: "03112",
                        data: {},
                        children: []
                    }, {
                        id: "03113",
                        name: "03113",
                        data: {},
                        children: []
                    }]
                }, {
                    id: "0312",
                    name: "0312",
                    data: {},
                    children: []
                }, {
                    id: "0313",
                    name: "0313",
                    data: {},
                    children: []
                }, {
                    id: "0314",
                    name: "0314",
                    data: {},
                    children: [{
                        id: "03141",
                        name: "03141",
                        data: {},
                        children: []
                    }, {
                        id: "03143",
                        name: "03142",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "032",
                name: "032",
                data: {},
                children: []
            }, {
                id: "033",
                name: "033",
                data: {},
                children: []
            }, {
                id: "034",
                name: "034",
                data: {},
                children: []
            }, {
                id: "035",
                name: "035",
                data: {},
                children: []
            }]
        }, {
            id: "04",
            name: "04",
            data: {},
            children: [{
                id: "041",
                name: "041",
                data: {},
                children: [{
                    id: "0411",
                    name: "0411",
                    data: {},
                    children: [{
                        id: "04111",
                        name: "04111",
                        data: {},
                        children: []
                    }, {
                        id: "04112",
                        name: "04112",
                        data: {},
                        children: []
                    }, {
                        id: "04113",
                        name: "04113",
                        data: {},
                        children: []
                    }, {
                        id: "04114",
                        name: "04114",
                        data: {},
                        children: []
                    }, {
                        id: "04115",
                        name: "04115",
                        data: {},
                        children: []
                    }]
                }]
            }, {
                id: "042",
                name: "042",
                data: {},
                children: [{
                    id: "0421",
                    name: "0421",
                    data: {},
                    children: []
                }]
            }]
        }]
    }
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
        levelDistance: 50,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 30,
            width: 60,
            type: 'rectangle',
            color: '#aaa',
            overridable: true
        },

        Edge: {
            type: 'bezier',
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
            style.width = 60 + 'px'
            style.height = 17 + 'px'
            style.cursor = 'pointer'
            style.color = '#333'
            style.fontSize = '0.8em'
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
                node.data.$color = "#ff7"
            }
            else {
                delete node.data.$color
                //if the node belongs to the last plotted level
                if(!node.anySubnode("exist")) {
                    //count children number
                    var count = 0
                    node.eachSubnode(function(n) { count++ })
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count]
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
                adj.data.$lineWidth = 3
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
