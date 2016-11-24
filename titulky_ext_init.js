;(function(){

    var unwanted_sources = [
        "assets.adobedtm.com", 
        "demdex.net", // cpex.demdex.net, fast.cpex.demdex.net
        "gemius.pl",  // gacz.hut.gemius.pl, ls.hit.gemius.pl
        "adform.net",
        "ib.adnxs.com", 
        "pixel.yabidos.com", 
        "amazonaws.com",
        "bbnaut.ibillboard.com", 
        "bbelements.com" // go.eu.bbelements.com
    ]

    var unwanted_ids = [
        "gemius",
        "bmone2t",
        "adform-adbox",
        "bannery300x300",
        "bannery160x600P",
        "bbswfcontainer",
        "cboxOverlay",
        "colorbox",
        "adfrom",
        "bmone2n"
    ]

    var removeIfUnwanted = function (node) {
        return false
        if (node.id) {
            for (var i = 0; i < unwanted_ids.length; i++) {
                if (node.id.indexOf(unwanted_ids[i]) !== -1) {
                    node.remove()
                    return true
                }
            }
        }
        
        if (node.localName === "object" && node.data) {
            node.src = node.data
        }

        if (node.localName === "script" || node.localName === "iframe" || node.localName === "object") {
            for (var i = 0; i < unwanted_sources.length; i++) {
                var unwanted_source = unwanted_sources[i]
                if (node.src.indexOf(unwanted_source) !== -1) {
                    node.remove()
                    return true
                }
            }
        }

        return false
    }

    /*var logMutation = function (mutation, removed) {
        return
        console.log("mutation")
        console.log("    type:        ", mutation.type)
        console.log("    target:      ", mutation.target)
        console.log("    added_nodes: ")
        if (removed === true) {
            console.warn("********REMOVED********")
        }
    }*/

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            /*if (removeIfUnwanted(mutation.target)) {
                console.warn("target removed", mutation.target)
                console.log("              ", mutation.target.localName + "#" + mutation.target.id)
            }*/

            mutation.addedNodes.forEach(function(node){
                

                if (removeIfUnwanted(node)) {
                    console.warn("node removed", node)
                    console.log("            ", node.localName + "#" + node.id)
                }
            })
        })
    })

    var config = {
        attributes: false,
        childList: true,
        characterData: true,
        subtree: true
    }

    observer.observe(document, config)
})()