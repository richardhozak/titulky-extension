
function removeIfUnwanted(node) {
    if (node.localName && node.localName === "script") {
        if (node.src.indexOf("assets.adobedtm.com") != -1) {
            node.remove()
            return true
        }
        else if (node.src.indexOf("cpex.demdex.net") != -1) {
            node.remove()
            return true
        }
        else if (node.src.indexOf("gacz.hit.gemius.pl") != -1) {
            node.remove()
            return true
        }
    }

    return false
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        //console.log("mutation", mutation)

        //mutation.addedNodes.forEach(function(node) { console.log("node", node) })

        /*TODO check if all unwanted scripts are removed*/

        if (removeIfUnwanted(mutation.nextSibling)) {
            console.log("next sibling removed", mutation.nextSibling)
        }

        mutation.addedNodes.forEach(function(node){
            if (removeIfUnwanted(node)) {
                console.log("removed added node", node)
            }
        })

        
        /*mutation.addedNodes.forEach(function(node){
            console.log("node added", node)
            if (node.localName && node.localName === "script") {
                console.log("found script")
                if (node.src.indexOf("assets.adobedtm.com/") != -1) {
                    node.remove()
                }
                else if (node.src.indexOf("cpex.demdex.net") != -1) {
                    node.remove()
                }
                else if (node.src.indexOf("gacz.hit.gemius.pl") != -1) {
                    node.remove()
                }
            }
        })*/
        
    })
})

var config = {
    attributes: false,
    childList: true,
    characterData: true,
    subtree:true
}

observer.observe(document.head, config)
