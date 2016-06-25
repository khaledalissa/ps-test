
function preload() {
    images = new Array();
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
        images[i].x = 450
        images[i].y = 800
        images[i].w = 450
        images[i].h = 800        


    }

    return images;
}

imagepack = preload(
    'http://vignette1.wikia.nocookie.net/hunterxhunter/images/b/b4/Gon-2011.png/revision/latest/scale-to-width-down/200?cb=20120115022050',
    'http://img01.deviantart.net/af38/i/2014/347/3/7/hisoka_8__hxh__by_acetaris-d89cojb.jpg',
    'http://vignette3.wikia.nocookie.net/onepiece/images/e/e5/Monkey_D._Luffy_Anime_Pre_Timeskip_Infobox.png/revision/latest/scale-to-width-down/250?cb=20151110155156'
    // "http://domain.tld/gallery/image-002.jpg",
    // "http://domain.tld/gallery/image-003.jpg"
)





var pswpElement = document.querySelectorAll('.pswp')[0];




// build items array
var items = [
    {
        src: 'http://assets.teenvogue.com/photos/56f5505238cae39f5d3ab0a4/master/pass/kendall-snapchat-2.PNG',
        w: 450,
        h: 800,
        title: 'what this'
    },
    {
        src: 'http://cdn.dizkover.com/upload/img/orig/51-143190814919-madison-beer-snapchat-whosmb.jpg',
        w: 450,
        h: 800,
        title: 'is this what i think it is?'
    }
];


var original_items = [
    {
        src: 'http://assets.teenvogue.com/photos/56f5505238cae39f5d3ab0a4/master/pass/kendall-snapchat-2.PNG',
        w: 450,
        h: 800,
        title: 'what this'
    },
    {
        src: 'http://cdn.dizkover.com/upload/img/orig/51-143190814919-madison-beer-snapchat-whosmb.jpg',
        w: 450,
        h: 800,
        title: 'is this what i think it is?'
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0, // start at first slide
    clickToCloseNonZoomable: false,
    maxSpreadZoom: 1,
    getDoubleTapZoom: function(isMouseClick, item){return item.initialZoomLevel;},
    addCaptionHTMLFn: function(item, captionEl, isFake) {captionEl.children[0].innerHTML = item.title; return true;},
    closeOnScroll: false,
    tapToClose: false,
    tapToToggleControls: true
    // captionEl: true,
    // barsSize: {top:44, bottom:'auto'}

};

// Initializes and opens PhotoSwipe
var pswp = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
pswp.init();



pswp.listen('doubleTap', function(pt) {
    var level = pswp.currItem.initialZoomLevel;
    console.log('double tapped');
    // if (pswp.getZoomLevel() !== level) {
    //     pswp.zoomTo(level, pt, 333);
    // } else {
    //     pswp.zoomTo(pswp.options.getDoubleTapZoom(false, pswp.currItem), pt, 333);
    // }
});

$element_changed = false;
// pswp.listen('afterChange', function() { 
    
//     if($element_changed == true && pswp.getCurrentIndex() != $index)
//     {
//         $element_changed = false;
//         pswp.items[$index].src = original_items[$index].src
//         pswp.invalidateCurrItems();
//         pswp.updateSize(true);   
//         console.log('after'); 
//          console.log($index);
        
//     }
//     // console.log('after');
// });

// pswp.listen('beforeChange', function() { 
//     console.log('before');
//     // pswp.items[pswp.getCurrentIndex()].src = original_items[pswp.getCurrentIndex()].src
//     // pswp.invalidateCurrItems();
//     // pswp.updateSize(true);    
// });

pswp.framework.bind( pswp.scrollWrap /* bind on any element of gallery */, 'pswpTap', function(e) {
    //console.log('tap', e, e.detail);
    $element_changed = true;
    $index = pswp.getCurrentIndex();
    console.log($index);

    pswp.items[pswp.getCurrentIndex()] = imagepack[Math.floor(Math.random()*items.length)];
    console.log('tapped');
    pswp.invalidateCurrItems();
    pswp.updateSize(true);



    // pswp.next();
    // e.detail.origEvent  // original event that finished tap (e.g. mouseup or touchend)
    // e.detail.target // e.target of original event
    // e.detail.releasePoint // object with x/y coordinates of tap
    // e.detail.pointerType // mouse, touch, or pen
});