(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ENDING_IMAGE_BB.jpg", id:"ENDING_IMAGE_BB"},
		{src:"images/PHONE_bottom_BB.png", id:"PHONE_bottom_BB"},
		{src:"images/PHONE_TOPS_BB.png", id:"PHONE_TOPS_BB"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.ENDING_IMAGE_BB = function() {
	this.initialize(img.ENDING_IMAGE_BB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,230);


(lib.PHONE_bottom_BB = function() {
	this.initialize(img.PHONE_bottom_BB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,110);


(lib.PHONE_TOPS_BB = function() {
	this.initialize(img.PHONE_TOPS_BB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,232);


(lib.TEXT_4_BB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA5QgIgKAAgOQAAghAYggQAWghAYAAQAIAAAFAFQAGAFAAAHQAAAPgSAQQgSARgcAMIAAABIgBABQgDALAAAMQAAAUANAAQAQAAARgjIAIAEQgVAogaAAQgMAAgIgJgAgKgRIgGAUIACgBQASgJALgKQAQgPAAgPQAAgKgJAAQgRAAgPAog");
	this.shape.setTransform(167.2,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBBIARg/QAKgjAAgLQAAgIgFAAQgJAAgKAeIgJAAQANgoASAAQAQAAAAAXQAAAIgDAUQAFgUAJgOQAMgTALAAQAGAAAEAEQAEAEAAAHQAAAFgEAEQgCAEgEAAQgDAAgEgHQgCgDgEAAQgLAAgSA8IgQAzg");
	this.shape_1.setTransform(158.7,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKA9QgFgGgBgIIAAgFQgUAYgSAAQgNAAgGgJQgIgJAAgOQAAgQAJgTQAJgUAOgRQAYgbAXAAQAHAAADACQACACAEAFIACgFIAVAAIghBpIgBAGQABAHAEAAQANAAAOgbIAHADQgTAhgVAAQgIAAgEgFgAgRgXQgWAiAAAbQAAASALAAQAJAAALgLQAIgLAJgTQAUgxAAgNQAAgMgLAAQgQAAgTAkg");
	this.shape_2.setTransform(146.1,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAzIgGgNQgbAegVAAQgOAAgIgIQgJgKAAgNQAAgRANgUQACgEAXgfIAGgJIgKACIgIgCQgIgFgDABQgFAAgCALIgHgCQADgNAFgIQAGgHAFAAQAGAAAKAMQAEAFADAAQAEAAACgIQACgHADAAIAFABQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgJAPQgdAxAAAfQAAAJADAHQAFAFAGAAQAQAAAZgcIgBgPQgBgaAOgZQAMgaAPAAQANABAAAPQAAALgKATQgJASgQARQABARAHAKQAFALAKAAQAQAAAQgYQAQgYAAgXQAAgLgHgTQgCgFAAgEQAAgEADgEQAEgDADAAQAOAAAAAbQAAAjgVAiQgVAmgcAAQgRAAgJgRgAANgnQgIASAAAVIAAAFIABgCQAYgfAAgSQAAgIgFAAQgGABgGAOg");
	this.shape_3.setTransform(129.6,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBQQgHgFAAgHQABgFAEgOIAahSIgUAAIACgIIAVAAIALgrIAXAAIgPAsIAVAAIgCAHIgUAAIgbBZIgCAJQAAAIAGAAQAMAAAOghIAIAEQgTApgXAAQgJAAgFgFg");
	this.shape_4.setTransform(115.4,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhZCPQgHgFAAgHQAAgGAEgEQAEgFAFAAQAEABADACQADADAAACQAAADgCAEIgCAFQAAAGAGAAQAHAAAHgLQAGgMAHgcIApiQIggAAIACgIIAgAAIABgIQAHgaAGgMQAHgNAKgKQAQgSAWAAQALAAAJAFQAJAHAAAHQAAAEgEADQgDADgFAAQgJAAgDgKQgCgHgCgBQgBgCgFgBQgLAAgIALQgHAKgJAdIgIAdIAdAAIgCAIIgdAAIgjCEQgUBGgkAAQgKAAgGgGg");
	this.shape_5.setTransform(106.5,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnA2QgJgMAAgVQAAggAUgbQAVgbAXAAQAOAAAKALQAJAMAAASQAAAigUAcQgVAcgXAAQgPAAgJgMgAgOgWQgPAkAAAXQAAAVAOAAQAPAAARgnQAFgOAEgQQAEgRAAgLQAAgSgOAAQgQAAgOAjg");
	this.shape_6.setTransform(96,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5BSIgLARIgKAAIANhAIAHAAIAAAIQAAAXANAPQANAPAUAAQAPAAALgLQAKgKAAgQQAAgMgGgKQgGgLgPgRQgRgRgHgLQgHgNAAgOQAAgYARgRQARgQAVgBQAcAAANAWIAJgQIAIAAIgKA6IgIAAQAAgUgEgKQgKgagaAAQgQAAgHAKQgJAKAAARQAAAMAIANQAEAJAdAbQAUAWAAAXQAAAYgSARQgSAQgYABQgdgBgSgWg");
	this.shape_7.setTransform(83.3,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA5QgJgKABgOQAAghAXggQAWghAYAAQAHAAAGAFQAFAFABAHQAAAPgSAQQgSARgcAMIgBABIAAABQgDAMgBALQABAUANAAQAQAAAQgjIAJAEQgVAogaAAQgMAAgHgJgAAFgvQgHALgHATQgEAJgDALIACgBQARgIAMgLQAQgPAAgPQAAgKgJAAQgIAAgJAKg");
	this.shape_8.setTransform(62.8,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpBBIARg/QAKgjAAgLQAAgIgEAAQgKAAgKAeIgJAAQANgoATAAQAPAAAAAXQAAAIgEAUQAGgUAJgOQANgTALAAQAFAAAEAEQAEAEAAAHQAAAFgDAEQgDAEgEAAIgDgBIgEgGQgCgDgEAAQgMAAgRA8IgQAzg");
	this.shape_9.setTransform(54.3,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAMA9QgFgFAAgJQAAgFADgNIgLASQgSATgQAAQgIAAgGgFQgGgGAAgIQAAgFADgKIAYhJIABgHQAAgGgEAAQgJAAgKAZIgIgCQAHgQAKgJQAJgJALAAQAQAAAAAPQAAAHgFAPIgVA/QgCAHAAAFQAAAJAHAAQAMAAAOgWQANgWALghIANgoIAWAAIggBkIgCALQAAAGAFAAQAJAAANgbIAHADQgRAigTAAQgHAAgEgFg");
	this.shape_10.setTransform(41.8,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkA4QgJgKAAgRQAAgeAYggQAWggAaAAQAHAAAGAFQAGAFAAAGQAAAFgDAEQgDADgFAAQgDAAgDgCQgDgDABgDIAAgEIABgEQAAgFgGAAQgGAAgHAHQgGAHgIASQgSAmgBAbQAAASANAAQAKAAAIgJQAJgKAGgRIAHAEQgIATgMALQgLALgMAAQgOAAgIgKg");
	this.shape_11.setTransform(30,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkA5QgIgKAAgOQAAghAYggQAWghAYAAQAIAAAFAFQAGAFAAAHQAAAPgSAQQgSARgcAMIAAABIgBABQgDAOAAAJQAAAUANAAQAQAAARgjIAIAEQgVAogaAAQgMAAgIgJgAgJgRIgHAUIACgBQASgJALgKQAQgPAAgPQAAgKgJAAQgRAAgOAog");
	this.shape_12.setTransform(19.9,14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5BSIgLARIgKAAIANhAIAIAAIgBAIQAAAXANAPQANAPAUAAQAPAAALgLQAKgKAAgQQABgMgHgKQgFgLgQgRQgRgQgHgMQgGgNgBgOQABgYAQgRQAQgQAWgBQAcAAANAWIAJgQIAIAAIgKA6IgIAAQAAgTgEgLQgKgagaAAQgPAAgHAKQgKAKAAARQAAANAIAMQAFAJAcAbQAUAWAAAXQAAAYgSARQgSAQgYABQgdgBgSgWg");
	this.shape_13.setTransform(8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.7,29.9);


(lib.TEXT_3_BB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SCENE_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJQgFgEAAgFQABgEAEgEQAEgEAEAAQAFAAAEAEQAFAEAAAEQAAAFgFAEQgEADgFABQgEgBgEgDg");
	this.shape.setTransform(166.7,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAJQgFgEAAgFQABgEAEgEQAEgEAEAAQAFAAAEAEQAFAEAAAEQAAAFgFAEQgEADgFABQgEgBgEgDg");
	this.shape_1.setTransform(160.9,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAJQgFgEAAgFQABgEAEgEQAEgEAEAAQAFAAAEAEQAFAEAAAEQAAAFgFAEQgEADgFABQgEgBgEgDg");
	this.shape_2.setTransform(155,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAJQgFgEAAgFQABgEAEgEQAEgEAEAAQAFAAAEAEQAFAEAAAEQAAAFgFAEQgEADgFABQgEgBgEgDg");
	this.shape_3.setTransform(149.2,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAJQgFgEAAgFQABgEAEgEQAEgEAEAAQAFAAAEAEQAFAEAAAEQAAAFgFAEQgEADgFABQgEgBgEgDg");
	this.shape_4.setTransform(143.3,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAyQgHgIgBgNQABgPAGgOQAFgPAKgNQAJgNAJgIQAMgIAKAAQAHAAAFAEQAEAFABAGQAAANgQAPQgPAOgaALIAAABIAAAAIAAABIgDAKIAAAJQAAAKADAEQADAEAFAAQAJAAAFgHQAIgIAIgPIAHADQgKASgLAIQgIAKgMgBQgMAAgGgIgAAEgpQgFAJgHASIgCAFIgCAFIgCAHIACgBIAOgHIALgKQAHgGADgHQAEgIABgFQgBgEgCgDQgCgCgDAAQgHAAgJAJg");
	this.shape_5.setTransform(130.5,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaBSQgEgEgBgFIABgGIACgHIAWhAIACgHIAAgEIAAgDQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgEAAgEAGQgEAFgFAKIgHgBQAIgQAIgHQAIgHAHAAQAHAAAEADQAEADABAFIgBAGIgCAHIgVBEIgBAEIgBADQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAEABACgGQAFgEAGgNIAGAEQgHANgJAIQgHAHgJAAQgHAAgFgDgAAJg/QgEgDAAgGQAAgFAEgEQAEgDAGAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAFgFAAQgGAAgEgFg");
	this.shape_6.setTransform(123.1,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggBYQgLgGgHgKIgKAPIgJAAIAMg5IAHAAIgBAFIAAACQAAAWALANQALAMATAAQANAAAJgJQAJgIABgPQAAgHgCgGQgDgGgFgHIgPgSIgPgRQgGgIgDgIQgCgIgBgIQAAgOAIgMQAGgKAMgIQAJgGANAAQANAAAJAEQAKAFAFAJIAHgOIAIAAIgJA0IgHAAIgBgQIgDgLQgEgLgIgGQgIgFgMgBQgNABgHAIQgHAJgBAPIACALQACAFADAFIAEAHIAHAJIASARQAJAKAFAJQAEALAAAKQAAAOgHALQgIAMgMAGQgMAHgOAAQgNAAgKgEg");
	this.shape_7.setTransform(112.9,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAGA3QgEgEAAgFIACgJIADgNIAQgtIAEgMIABgIQAAgEgCgCQgCgBgDAAQgGAAgGAFQgHAGgFALIgIAOIgIAUIgOAvIgUAAIAXhJIAFgOIABgHIgBgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgEAAgGAHQgEAFgGAMIgGgCQAIgRAHgIQAJgJAIABQAGAAADADQAEADAAAFIAAAHIgCAGIgCALQANgUAHgHQAKgJAKABQAIAAAGAEQAGAGAAAIIgBAIIgEALIgSA0IgBAHIgBADIABAEQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAFgBAGgFQAFgGAGgLIAGADQgHAPgKAHQgKAJgKgBQgHAAgFgDg");
	this.shape_8.setTransform(92.8,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAyQgHgIAAgNQAAgPAGgOQAFgPAKgNQAJgNAJgIQAMgIAKAAQAHAAAFAEQAEAFABAGQAAANgQAPQgQAOgZALIAAABIAAAAIAAABIgDAKIAAAJQAAAKADAEQADAEAFAAQAIAAAGgHQAIgIAIgPIAGADQgIASgMAIQgJAKgLgBQgMAAgGgIgAAFgpQgGAJgHASIgCAFIgCAFIgCAHIACgBIAOgHIAMgKQAGgGADgHQAEgIAAgFQAAgEgCgDQgCgCgDAAQgIAAgHAJg");
	this.shape_9.setTransform(82.2,14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFBYQgFgGAAgKIAAgGIABgKIAAgMQAAgJgBgDQgDgEgFAAIgFAAIgGAEIgSA6IgUAAIAzihIAAgDIABgDQAAgDgDgCQgDgBgHAAIgFAAIADgGIAQAAIAKgBIALgDIABABIgkB5IAHgIIAEgFIAGgHQANgQANgJQAMgIAJAAQAGABACACQAEACAAADQAAAEgDADQgDACgFAAIgDgBIgEAAIgEgBIgDAAQgHAAgKAIQgKAHgKARQAHABAEADQAFAEADAHQADAIAAAOIAAALIABAFIACAEIACABIADABQAFABAFgGQAEgFADgLIAHACQgFAPgIAIQgJAIgKAAQgIAAgFgGg");
	this.shape_10.setTransform(71.7,11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAxQgIgIAAgPQAAgPAGgNQAGgPAKgMQAJgNAKgHQALgIALAAQAIAAAFAEQAEAEABAGQAAAEgDADQgDAEgEAAQgDAAgCgDQgDgCAAgCIABgFIABgCIAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgGgBgGAHQgGAHgGAQQgIAQgEANQgEAQAAAMQAAAIACAEQADADAGAAQAIAAAHgIQAIgIAGgPIAGADQgIASgKAJQgJAJgLAAQgNAAgHgJg");
	this.shape_11.setTransform(61.9,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAyQgHgIgBgNQABgPAGgOQAFgPAKgNQAJgNAJgIQAMgIAKAAQAHAAAFAEQAEAFABAGQAAANgQAPQgPAOgaALIAAABIAAAAIAAABIgDAKIgBAJQABAKADAEQADAEAFAAQAJAAAFgHQAIgIAIgPIAHADQgKASgLAIQgIAKgMgBQgMAAgGgIgAAEgpQgFAJgHASIgCAFIgCAFIgCAHIACgBIAOgHIAMgKQAGgGADgHQAEgIABgFQgBgEgCgDQgCgCgDAAQgHAAgJAJg");
	this.shape_12.setTransform(53.1,14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAABaQgDgDgBgGIAAgDIgBgGQgKANgIAEQgIAFgIAAQgKAAgHgIQgHgIAAgNQAAgPAGgPQAHgQAKgNQALgLANgJQAMgHAKgBQAEAAADACQAEABADADIARg3IABgDIABgEQAAgDgCgBQgDgBgHAAIgGAAIACgGIAQAAIAMgBIALgDIACABIg0CiIgCAGIAAAEQAAAAAAABQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAABAAAAQAGAAAGgHQAHgGAGgLIAGACQgIAPgJAHQgKAIgJAAQgFAAgEgEgAgNgDQgLAKgJAVQgGAMgDALQgCAKAAAKQAAAHACAEQAEAEAFAAQAGAAAGgFQAGgDAFgKIAGgMIAFgOIAIgaIAFgQIACgEIAAgDQAAgEgDgCQgCgCgEAAQgIAAgMAMg");
	this.shape_13.setTransform(43.5,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbBHQgFgEAAgHIABgHIACgKIAYhIIgSAAIACgHIASAAIAKgmIAUAAIgNAmIATAAIgCAHIgSAAIgYBPIgBAEIAAAEIABAFQAAABABAAQAAAAABABQAAAAABAAQABAAABAAQAGAAADgHQAHgIAGgPIAHAEQgIASgLAJQgHAJgLAAQgJAAgEgEg");
	this.shape_14.setTransform(33,13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAGA3QgDgEgBgFIACgJIADgNIARgtIADgMIABgIQAAgEgCgCQgCgBgDAAQgGAAgHAFQgGAGgFALIgHAOIgJAUIgPAvIgTAAIAYhJIAEgOIABgHIgBgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgEAAgFAHQgFAFgGAMIgGgCQAHgRAJgIQAHgJAJABQAGAAAEADQADADAAAFIAAAHIgBAGIgDALQANgUAHgHQAKgJAKABQAIAAAGAEQAGAGAAAIIgBAIIgDALIgTA0IgBAHIAAADIABAEQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAFgBAFgFQAGgGAGgLIAGADQgIAPgJAHQgKAJgLgBQgGAAgFgDg");
	this.shape_15.setTransform(22.7,14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhUBXIACgGIAKAAIAJgBQADgCACgFIAFgNIAlh2IACgHIABgFQAAgGgDgCQgDgDgIABIgIAAIACgGIB2AAIAAApIgGAAQgCgTgJgJQgIgJgRACIgeAAIgUBIIAQAAQAKAAAHgCQAGgCAFgGQAEgGAFgLIAHAAIgWBBIgHAAIACgJIABgHQAAgJgFgEQgEgCgJAAIgTAAIgSA4IgCAIIgBAHQAAAHAHADQAIADAQgBIAVgBQAJgCAHgEQAHgDAGgGIAKgLIAIgPIAHAAIgPAvg");
	this.shape_16.setTransform(8,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-5.2,174.8,35.4);


(lib.TEXT_2_BB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SCENE_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMCRQgHgGgBgJQABgJAHgGQAHgHAKAAQAJAAAGAHQAIAGgBAJQABAJgIAGQgGAHgJAAQgLAAgGgHgAg3A3QAFgXADgMQAEgLAEgGQAFgDAKgDIAbgNQAKgFAEgDIAJgJQAKgMAFgPQAFgPABgTQAAgWgKgLQgKgLgSAAQgHAAgEACQgFABgEAEIgEAEIgDAFIgCAKQgDALgHAHQgGAGgJAAQgFAAgEgDQgDgDAAgFQAAgHAEgIQAEgHAHgIQAKgKAPgGQAQgGAQAAQAgAAATAPQASAPABAaQAAALgFAMQgEALgGAKQgJANgNAKQgOAKgWALQgNAGgJAFQgIAHgFALQgFAMgFAVg");
	this.shape.setTransform(164.2,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguB2QgIgHAAgLIABgLIAFgRIAnh5IgeAAIAEgMIAdAAIASg/IAhAAIgVBAIAfAAIgDALIgeAAIgpCEIgCAHIAAAGQAAAHACACQACADAFAAQAKAAAIgMQAKgNALgYIAMAFQgPAfgQAPQgOAPgTAAQgNgBgIgGg");
	this.shape_1.setTransform(147.7,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALBbQgGgGgBgJQAAgGACgIIAHgWIAbhMIAFgUQACgIAAgFQAAgGgDgDQgDgEgGAAQgJAAgLAKQgLAJgKATQgHAKgFAOQgGANgIAVIgYBOIghAAIAnh7IAHgYIACgMQAAgFgCgCQgCgDgCAAQgHAAgJAKQgJALgIARIgLgCQANgcAOgOQANgNAOAAQAKAAAGAFQAFAGAAAJIAAAKIgCAKIgGASQAWggAPgNQAQgOAQABQAPAAAJAIQAJAJABAMIgCAPIgGATIgeBYIgDAJIgBAGQAAAFADACQACACADAAQAIAAAJgJQAKgJAJgTIALAFQgNAYgQANQgQANgRABQgLgBgIgGg");
	this.shape_2.setTransform(130.6,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BTQgLgNgBgWQAAgZAKgXQAJgaAQgWQAQgWAQgNQATgNASAAQALAAAIAHQAIAHAAALQAAAWgaAYQgZAXgrAUIgBABIAAAAIgBACIgDARIgCAQQAAAPAFAHQAFAIAKAAQANAAALgMQANgNAMgaIAMAGQgPAdgSAPQgQAPgVAAQgSgBgLgOgAAIhFQgLAPgMAdIgDAJIgDAJIgDAMIACgBIAYgOQALgHAJgJQALgLAGgLQAHgMAAgKQAAgHgEgDQgDgFgGAAQgMABgNAPg");
	this.shape_3.setTransform(113.1,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhCCTQgSgHgKgMQgLgLAAgPQAAgPALgLQALgKAQAAIAIAAIAEADIAAAAIgBABQgMAIgFAHQgGAIABAKQAAATARAKQARALAdABQAYgBAQgMQARgLAAgTQABgJgGgIQgGgHgMgFIgTgHIgjgLQgVgFgJgJQgJgHAAgMQABgKAHgJQAIgIANgGIAGgCIAHgBIAMgDIgIgFIgCgCQgJgGgGgLQgEgKAAgNQAAgWALgTQAKgTASgNQAQgLATAAQAKgBAHADQAHADAJAJQAKgKAHgEQAGgDAIAAQAHAAAGAEQAEAEAAAFQAAAFgDAEQgEADgFAAIgGgBIgDgDIgFgFQgCgBgDAAQgDAAgDABQgCACgDAFQAGALACAHQACAHAAAIQAAAOgFAOQgEANgIAMQgIALgKAHQgKAGgMAEQgNAEgRACQgVACgHAFQgIACABALQAAAFABAEQADADAFACIAEADIAOACIAdAHQAeAHAOAMQAOALAAASQAAAUgMAPQgMAPgUAKQgWAIgXABQgYgBgTgGgAAHiFQgHAIgIAVQgHAQgEAOQgDAPAAALQAAAPAFAHQAGAIAKgBQAKABAKgLQAJgJAHgVQAEgJACgKIAFgVIABgQQAAgOgFgGQgFgGgLAAIgBgBQgKAAgIAJg");
	this.shape_4.setTransform(97.2,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrCIQgJgGAAgJIABgJIAEgMIAkhtIADgKIABgGIgBgGQgBAAAAgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQgHAAgGAIQgHAJgIASIgMgCQANgbAOgNQAMgMAPABQAKAAAIAFQAHAFAAAJIgBAIIgEAMIgkBzIgBAHIgBAGQAAAEACACQACADADAAQAIAAAEgIQAIgIAKgVIAKAGQgMAXgPAMQgMANgPABQgMgBgHgGgAAPhpQgHgGAAgJQAAgIAHgHQAHgGAJAAQAJAAAHAGQAGAHABAIQAAAJgIAGQgGAHgJAAQgJAAgHgHg");
	this.shape_5.setTransform(84.5,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyCVQgIgHAAgMIABgOIAFgTIBDjYIABgFIABgEQAAgGgEgDQgEgCgJAAIgLAAIAEgJIAZgBIAUgDIASgDIADABIhOD8IgFASQgCAGABAFQAAAFACAEQADADAEAAQAKAAAIgMQAKgKALgWIALAFQgQAfgPAMQgNAOgSAAQgNgBgJgHg");
	this.shape_6.setTransform(73.2,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyCVQgIgHAAgMIABgOIAFgTIBDjYIABgFIABgEQAAgGgEgDQgEgCgJAAIgLAAIAEgJIAZgBIAUgDIASgDIADABIhOD8IgFASQgCAGABAFQAAAFACAEQADADAEAAQAKAAAIgMQAKgKALgWIALAFQgQAfgPAMQgNAOgSAAQgNgBgJgHg");
	this.shape_7.setTransform(62,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1BTQgLgNgBgWQAAgZAKgXQAJgaAQgWQAQgWAQgNQATgNASAAQALAAAIAHQAIAHAAALQAAAWgaAYQgZAXgrAUIgBABIAAAAIgBACIgDARIgCAQQAAAPAFAHQAFAIAKAAQANAAALgMQANgNAMgaIAMAGQgPAdgSAPQgQAPgVAAQgSgBgLgOgAAIhFQgLAPgMAdIgDAJIgDAJIgDAMIACgBIAYgOQALgHAJgJQALgLAGgLQAHgMAAgKQAAgHgEgDQgDgFgGAAQgMABgNAPg");
	this.shape_8.setTransform(48.2,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AguB2QgIgHAAgLIABgLIAFgRIAnh5IgeAAIAEgMIAdAAIASg/IAhAAIgVBAIAfAAIgDALIgeAAIgpCEIgCAHIAAAGQAAAHACACQACADAFAAQAKAAAIgMQAKgNALgYIAMAFQgPAfgQAPQgOAPgTAAQgNgBgIgGg");
	this.shape_9.setTransform(35.1,20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAMBbQgIgGAAgJQAAgGACgIIAHgWIAahMIAGgUQACgIAAgFQAAgGgDgDQgDgEgGAAQgKAAgLAKQgLAJgJATQgHAKgGAOQgFANgHAVIgZBOIghAAIAnh7IAIgYIACgMQAAgFgCgCQgCgDgEAAQgGAAgJAKQgIALgJARIgLgCQANgcANgOQANgNAOAAQALAAAFAFQAGAGAAAJIAAAKIgCAKIgFASQAVggAPgNQAQgOARABQAOAAAJAIQAJAJAAAMIgBAPIgGATIgeBYIgCAJIgBAGQAAAFABACQACACAFAAQAHAAAKgJQAIgJAKgTIALAFQgNAYgPANQgRANgRABQgLgBgHgGg");
	this.shape_10.setTransform(18.1,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhiCRIACgKIAMAAQAMAAAHgCQAGgCADgIQAEgHAEgQIA8jFIAEgMIABgJQAAgJgGgEQgGgEgLAAIgLAAIADgJIByAAIgDAJIgFAAQgMAAgHACQgHADgEAIQgFAIgEAPIg8DFIgEALIgBAJQAAAKAGAEQAGAEALgBIAKAAIgCAKg");
	this.shape_11.setTransform(1.2,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-8.5,182,55.9);


(lib.TEXT_1b_BB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SCENE_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA5QgHgJgBgPQAAgRAHgQQAGgRALgPQALgPAKgJQANgJAMAAQAIAAAFAFQAGAFAAAHQgBAPgRARQgRAQgdAMIAAABIgBABIgCALIgBAMQAAAKADAFQAEAFAGAAQAJAAAHgJQAJgIAIgSIAIAFQgKATgMAKQgLAKgOAAQgMAAgIgJgAAFguQgHAKgIAUIgCAGIgCAFIgCAJIACgBQALgEAEgFQAHgFAHgGQAHgHAFgIQAEgIAAgHQAAgFgCgCQgDgDgDAAQgJAAgJALg");
	this.shape.setTransform(168.1,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIA+QgFgEgBgHIACgJIAFgPIASgzIADgNIACgJQAAgFgDgCQgCgCgDAAQgHAAgHAGQgIAHgGAMQgFAIgDAJIgJAXIgQA0IgXAAIAbhSIAFgRIABgIQAAgDgBgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgFAAgFAHQgGAHgGAMIgHgCQAJgSAJgKQAJgJAJAAQAHAAADAEQAEADABAHIAAAGIgCAHIgEANQAPgWAKgJQALgJAKAAQALAAAFAGQAHAFABAJIgCAKQgBAGgDAHIgUA7IgCAGIAAAFQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAHAAAGgGQAFgHAHgNIAIAEQgJAQgLAJQgLAJgMAAQgIAAgEgEg");
	this.shape_1.setTransform(156.1,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnA2QgJgMAAgVQAAgRAGgOQAFgQAJgMQAKgNALgHQAKgHANAAQAPAAAIALQAJALABATQAAASgGAPQgFAQgKANQgJANgMAIQgJAHgNAAQgPAAgJgMgAAAgxQgGAJgIASQgHASgEAOQgEAQAAALQAAALAEAFQADAFAHAAQAJABAGgKQAIgKAJgUIAGgTIAFgVIACgSQAAgJgEgEQgDgFgHAAQgJAAgHAIg");
	this.shape_2.setTransform(142.9,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKBmQgGgFAAgHIACgJIAEgPIAUhAIABgEIABgFQAAgEgCgCQgCgCgDAAQgFABgIADQgGAEgGAHQgGAGgGALQgGALgEAPIgTA7IgWAAIA6i2IABgEIAAgEIgBgDQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCAAIgGAAIgJAAIADgGIASgBIAMgBIAMgDIADABIgfBoQAJgMAKgGQALgHALAAQAIAAAGAGQAGAEAAAIIAAAHIgDAKIgWBFIgCAIIgBAEIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAGgBAGgGQAHgHAHgNIAHADQgJAQgLAJQgKAHgLABQgIgBgFgEg");
	this.shape_3.setTransform(130,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhOB6IABgGIAGAAQAHAAADgBQAEgCACgDIAEgKIAzijQgHAHgHAMQgHAMgJARIgJAAIALgVIALgRIAUgiIACgCIADgFIAJgbIAWAAIgEALIgEALIgGASIgCAHIgDAIQAJgJAGgEQAIgDAHAAQANAAAIAKQAIALAAASQAAARgGAQQgGAPgKAOQgJAOgNAIQgLAIgNABQgGAAgFgEQgEgCgEgJIgUBAIgBAGIgBAEQAAAEADACQACABAJAAIAGAAIgCAGgAAehDQgHAGgFANIgKAcIgIAaQgBANAAAGQAAAGABAFQAEAEAGABQAIgBAIgGQAHgGAGgLQAGgMAFgLQAEgMACgMQADgNAAgLQAAgKgEgFQgEgFgGAAQgIAAgHAHg");
	this.shape_4.setTransform(114.8,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfBQQgFgFgBgHIACgIIADgLIAahSIgUAAIADgIIATAAIAMgrIAWAAIgNAsIAVAAIgDAHIgUAAIgbBZIgCAFIAAAFQAAAEABACQACACAEAAQAGAAAFgJQAHgJAIgQIAIAEQgLAUgLALQgIAKgNAAQgJAAgGgFg");
	this.shape_5.setTransform(106.8,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgpBBIARg/QAGgRACgMQACgLAAgGIgBgGQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAQgEABgFAHQgFAIgFAOIgJAAQAHgTAIgLQAHgKAKAAQAHAAAEAGQAEAGAAALIAAAGIgBAIIgDAOIAFgPIAEgJIAGgKQAGgKAGgEQAGgFAGAAQAFAAAEAEQADAEAAAHQAAAFgCAEQgDAEgEAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgFgGIgCgCIgDgBQgFAAgIAQQgJAQgHAcIgQAzg");
	this.shape_6.setTransform(97.8,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKA9QgFgFgBgIIAAgBIABgCIAAgDQgKANgKAGQgJAFgKAAQgMAAgHgJQgIgIAAgPQAAgLAEgNQAEgKAHgNQAIgNAJgMQAMgNAMgHQALgHAMAAQAGAAADACQAEACADAGIABgGIAWAAIghBpIgBAGQAAADACACQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAGAAAHgHQAIgHAHgNIAGADQgKAQgKAJQgKAIgKAAQgHAAgFgFgAABgyQgHAIgLATQgKARgGAPQgGAQAAANQAAAJADAFQADAFAFAAQAKgBAKgLQAIgLAIgTQAKgVAGgRQAFgRAAgHQAAgFgDgDQgDgEgFAAQgIAAgJAJg");
	this.shape_7.setTransform(85.1,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AApA9QgFgFAAgHIAAgEIABgFIADgIIAVhCIACgHIAAgFQAAgFgCgCQgCgCgEAAQgNAAgNARQgMARgKAdIgPA2IgWAAIAehhIAAgFIAAgGQAAgEAAgDQgDgCgEAAQgMAAgMARQgMARgKAdIgRA2IgWAAIAahTIAFgQIACgIQAAgEgCgBQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgEAAgGAHQgFAGgHANIgIgCQAJgTAJgJQAJgJAKAAQAIAAAEAEQAEAFAAAHIgBAEIAAAFIgDALQAMgUAKgIQAKgIALAAQAIAAAGAGQAGAFAAALIAAADIgBAIQAMgSALgHQAKgIALAAQAKAAAHAFQAHAGAAAIIgBAHIgCAJIgXBGIgBAFIAAAEIABAGQAAAAABABQAAAAAAAAQABAAABABQAAAAABAAQAFAAAHgIQAGgHAGgOIAIAFQgJARgKAIQgKAIgLAAQgIAAgGgFg");
	this.shape_8.setTransform(68.1,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkBjQgMgGgJgLIgLAQIgKAAIANhAIAIAAIgBAGIAAACQAAAZANAOQANAPAUAAQAQAAAKgKQAKgKAAgRQABgHgDgIQgDgGgGgJQgGgJgKgLIgSgTQgGgKgDgJQgDgIAAgJQAAgQAHgNQAIgNANgHQAKgIAQAAQAOgBAKAGQALAFAGAKIAJgQIAIAAIgKA7IgIAAIgBgRIgDgOQgFgMgJgGQgKgHgMABQgQAAgHAKQgJAJAAARQAAAHACAGQACAFAEAGIAEAIIAJAKIAUAUQAJAKAGALQAFAMAAALQAAAQgIAOQgJANgNAGQgOAJgQgBQgPAAgLgFg");
	this.shape_9.setTransform(50.7,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIA+QgFgEgBgHIACgJIAEgPIATgzIADgNIACgJQAAgFgDgCQgCgCgDAAQgHAAgHAGQgIAHgGAMQgFAIgDAJIgJAXIgQA0IgXAAIAahSIAGgRIABgIQAAgDgBgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgFAAgFAHQgGAHgGAMIgHgCQAIgSAJgKQAKgJAJAAQAHAAADAEQAFADAAAHIAAAGIgCAHIgEANQAPgWAJgJQAMgJAKAAQALAAAFAGQAHAFAAAJIgBAKQgBAGgDAHIgUA7IgCAGIAAAFQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAGAAAHgGQAFgHAHgNIAIAEQgJAQgLAJQgLAJgMAAQgIAAgEgEg");
	this.shape_10.setTransform(27.9,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdBcQgGgEAAgGIABgGIADgIIAZhJIABgHIABgFIgBgEIgEgBQgEAAgEAGQgEAGgGALIgJgBQAKgSAIgIQAKgJAJAAQAHABAFADQAEAEAAAFIAAAGIgDAJIgXBNIgCAFIAAADQAAAEABABQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAFAAADgFQAEgGAHgOIAIAEQgIAQgKAIQgIAJgLAAQgIAAgFgFgAAKhHQgEgEgBgGQABgGAEgEQAFgEAHgBQAFABAFAEQAFAEAAAGQAAAGgFAEQgFAEgGABQgHgBgEgEg");
	this.shape_11.setTransform(17.5,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhfBiIACgGIALAAQAHAAADgCQAEgCACgEQADgGACgKIAriFIACgJIABgGQAAgGgEgDQgDgCgIAAIgKAAIACgHICGAAIAAAuIgHAAQgCgUgKgLQgKgJgSABIgiAAIgYBSIATAAQALABAIgDQAHgDAFgGQAGgIAFgMIAIAAIgZBKIgIAAIACgKIABgIQAAgKgFgEQgFgEgKABIgVAAIgVA/IgDAKIgBAHQAAAIAJADQAIADATAAQAOAAAKgBQAKgDAIgDQAIgEAHgHQAGgFAFgIQAFgGAEgKIAIAAIgRA0g");
	this.shape_12.setTransform(3.4,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-43.7,182.7,76.9);


(lib.TEXT_1_BB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SCENE_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfBQQgFgFAAgHIABgIIADgLIAahSIgUAAIACgIIAUAAIAMgrIAWAAIgNAsIAUAAIgCAHIgUAAIgbBZIgCAFIAAAFQAAAEABACQACACADAAQAHAAAGgJQAGgJAHgQIAIAEQgKAUgKALQgJAKgOAAQgIAAgGgFg");
	this.shape.setTransform(119.3,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKBmQgFgFAAgGIABgKIAEgPIAUhAIABgEIABgFQABgEgCgCQgCgCgEAAQgGABgGADQgHAEgGAHQgGAGgGALQgFALgFAPIgSA7IgXAAIA6i2IACgEIAAgDIgBgEQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgBAAIgGAAIgIAAIACgHIASAAIAMgBIAMgDIACABIgfBoQAKgMALgHQAKgGAKAAQAJAAAHAFQAFAGABAIIgCAGIgDAKIgVBEIgDAIIAAAGIABAEQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAFAAAHgHQAGgGAJgOIAGADQgKAQgKAJQgKAHgLABQgIAAgFgFg");
	this.shape_1.setTransform(107.5,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA4QgJgKAAgQQAAgRAHgPQAHgRAKgOQALgOALgJQANgJANAAQAIAAAFAFQAGAEAAAHQAAAFgDAEQgDADgFAAQgDAAgDgCQgDgCABgEIAAgEIABgCIAAgCIgBgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgGAAgHAHQgHAIgGARQgJATgFAQQgFARAAAOQAAAIADAFQADAEAHAAQAKAAAHgJQAIgKAHgQIAHADQgIAUgMAKQgKALgNAAQgOAAgIgKg");
	this.shape_2.setTransform(96.7,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKA9QgFgFgBgIIAAgBIABgCIAAgDQgKANgKAGQgJAFgKAAQgMAAgHgJQgIgIAAgPQAAgLAEgNQAEgKAHgNQAIgNAJgMQAMgNAMgHQALgHAMAAQAGAAADACQAEACADAGIABgGIAWAAIghBpIgBAGQAAADACACQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAGAAAHgHQAIgHAHgNIAGADQgKAQgKAJQgKAIgKAAQgHAAgFgFgAABgyQgHAIgLATQgKARgGAPQgGAQAAANQAAAJADAFQADAFAFAAQAKgBAKgLQAIgLAIgTQAKgVAGgRQAFgRAAgHQAAgFgDgDQgDgEgFAAQgIAAgJAJg");
	this.shape_3.setTransform(84.4,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALBiIACgGIAHAAQAJAAAFgCQAFgCACgGQADgFACgNIAjiKIhvCsIgIAAIgJiYIguB6IgDAIIgBAHQAAAFAEACQAEACALAAIADAAIgBAGIg9AAIACgGIAHAAQAJAAAEgEQAEgDAEgNIA5iSIABgDIAAgDQAAgEgCgDQgBgCgDgBIgDAAIgEgBIgKAAIgGAAIABgHIA2AAIAJCcIBjicIA1AAIgCAHIgCAAIgOABQgFACgDAEQgDAFgCAJIgkCNIgBAIQAAAHAFACQAEAEAHAAIAJAAIgCAGg");
	this.shape_4.setTransform(65.5,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeA/QgHgEgFgGQgEgGAAgHQAAgEADgCQACgDAEAAQAFAAADAEQADAEAAAIQABAHACADQADACAHAAQAKAAAEgFQAGgGAAgIIAAgFIgCgGIgFgMIgIgTIgGgOIgEgJIgBgIQABgJAFgHQAFgHAIgFQAHgEALAAQANAAAIAFQAIAFAAAHQAAAEgDADQgDADgEAAQgEAAgCgCQgCgCAAgGQgBgFgDgDQgEgCgFAAQgHAAgFAEQgEAEAAAIQAAAFACAHQADAHAGAKQAJAOADALQAEAKAAAGQAAALgGAIQgFAJgKAFQgIAFgLAAQgJAAgIgDg");
	this.shape_5.setTransform(40.2,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKA9QgFgFgBgIIAAgBIABgCIAAgDQgKANgKAGQgJAFgKAAQgMAAgHgJQgIgIAAgPQAAgLAEgNQAEgKAHgNQAIgNAJgMQAMgNAMgHQALgHAMAAQAGAAADACQAEACADAGIABgGIAWAAIghBpIgBAGQAAADACACQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAGAAAHgHQAIgHAHgNIAGADQgKAQgKAJQgKAIgKAAQgHAAgFgFgAABgyQgHAIgLATQgKARgGAPQgGAQAAANQAAAJADAFQADAFAFAAQAKgBAKgLQAIgLAIgTQAKgVAGgRQAFgRAAgHQAAgFgDgDQgDgEgFAAQgIAAgJAJg");
	this.shape_6.setTransform(28.2,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUBnIAIibIhgCbIgKAAIAIiuIAAgGIgBgMQgBgEgFgBIgPgBIgDAAIAAgHIBPAAIAAAHIgEAAQgJgBgFACQgFABgCAEQgCAEAAAIIgHB/IBciYIAOAAIgICYIBPh7QAEgFAAgDQACgDAAgDIgBgEIgCgCIgDgCIgFAAIgLAAIgDAAIAAgHIBDAAIAAAHIgFAAQgIAAgFABQgEACgFAGIgKAPIhsCug");
	this.shape_7.setTransform(13.7,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-8.7,130.9,39.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3aTiMAAAgnDMAu1AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.PHONE_TOPS_BB_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PHONE_TOPS_BB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,339,232);


(lib.PHONE_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PHONE_bottom_BB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,110);


(lib.LOGO_BlackBerry_BLACK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUANIAGgZIATAAQAQAAAAALQAAAOgVAAg");
	this.shape.setTransform(6.9,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUANIAGgZIASAAQARAAAAAMQAAANgVAAg");
	this.shape_1.setTransform(12.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUANIAGgZIASAAQARAAAAAMQAAANgVAAg");
	this.shape_2.setTransform(13.5,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUANIAGgZIATAAQAQAAAAAMQAAANgVAAg");
	this.shape_3.setTransform(7.7,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUANIAGgZIASAAQARAAAAAMQAAANgVAAg");
	this.shape_4.setTransform(2.1,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUANIAGgZIATAAQAQAAAAAMQAAANgVAAg");
	this.shape_5.setTransform(8.4,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUANIAGgZIASAAQARAAAAAMQAAANgVAAg");
	this.shape_6.setTransform(2.9,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAfQgLgKAAgTQAAgQANgOQANgNAQAAQAUAAALALQAKALAAAQQAAAEgCAGIg8AAQAAAFADAGQAGAGAKAAQAKABAFgJIAXAAQgJAagdAAQgTAAgKgLgAgLgQQgFAEgBAFIAlAAQABgGgFgFQgEgEgKAAQgHgBgGAHg");
	this.shape_7.setTransform(70.8,10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAjQgIgIAAgJQAAgVAogGQALgCAEgBQAGgCAAgDQAAgHgNAAQgMAAgEAJIgXAAQALgaAdgBQASAAAIAJQAIAIgDANIgHAeQgCALACALIgVAAIgBgHQgIAJgOABQgNgBgIgHgAgBAFQgRADAAAHQAAAJALAAQAHAAAHgFQAHgEABgIIACgFg");
	this.shape_8.setTransform(35.3,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSA6IATglIgLhNIgEAUQgUgFgEAUIgLAuIgUAAIAKguQAIgkAmAAIAWAAIAIA3IAfg3IAWAAIhFBzg");
	this.shape_9.setTransform(87.1,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAqIAKguQAHgkAggBIAKABIgEAUIgGgCQgRABgDATIgJAsg");
	this.shape_10.setTransform(78.3,10.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOA2QgQAAgIgKQgIgJADgPIAQhIIAlAAQATAAAJAJQAHAGAAAJQAAAOgKAIQgGAFgGABQAPAEAAAQQAAAOgMAKQgMAKgQAAgAgZAhIAWAAQATAAAAgOQAAgMgQABIgTAAgAgPgLIAUAAQAIABAFgEQAFgEAAgEQAAgLgOABIgTAAg");
	this.shape_11.setTransform(61.7,9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOA2QgQAAgIgKQgIgJADgPIAQhIIAlAAQATAAAJAJQAHAGAAAJQAAAOgKAIQgGAFgGABQAPAEAAAQQAAAOgLAKQgMAKgRAAgAgYAhIAVAAQAIAAAGgDQAFgEAAgHQAAgMgQABIgTAAgAgOgLIATAAQAIABAFgEQAFgEAAgEQAAgLgOABIgTAAg");
	this.shape_12.setTransform(22.4,9.5);

	this.text = new cjs.Text(" ", "10px 'Myriad Pro'", "#292929");
	this.text.lineHeight = 15;
	this.text.parent = this;
	this.text.setTransform(50.5,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAHA1IgPgkIgNALIgFAZIgVAAIAXhqIAVAAIgMA4IAiggIAdAAIgqAiIAYAwg");
	this.shape_13.setTransform(53.3,9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAyQgIgGAAgMIABgJIARhNIATAAIgSBTQAAAIAKAAIAFAAIgEARIgIABQgHAAgHgFg");
	this.shape_14.setTransform(29,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAfQgKgLAAgRQAAgRANgOQANgNARAAQAXAAALANQAIAKgCAJIgWAAQgEgNgOAAQgIAAgHAJQgHAHAAAJQAAAHAFAGQAFAGAJAAQAKABAGgLIAXAAQgCAJgHAJQgMAMgTAAQgSAAgLgLg");
	this.shape_15.setTransform(44.3,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.text},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.2,18.1);


(lib.ENDING_IMAGE_BB_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ENDING_IMAGE_BB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,230);


(lib.DTEK60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMBRIAAihIBFAAQAlAAAYAWQAYAXAAAjQAAAlgYAWQgYAWglAAgAglAsIAeAAQAUAAAMgMQAMgLAAgVQAAgTgMgMQgMgLgUAAIgeAAg");
	this.shape.setTransform(39.8,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhCBRIAAihIB/AAIAAATIhrAAIAAAwIBAAAIAAAQIhAAAIAAA8IBxAAIAAASg");
	this.shape_1.setTransform(77.3,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94D60A").s().p("AgJBRIAAiOIhFAAIAAgTICdAAIAAATIhGAAIAACOg");
	this.shape_2.setTransform(58.2,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAyBSIhAhaIgnAfIAAA7IgVAAIAAijIAVAAIAABRIBbhRIAbAAIhBA7IBLBog");
	this.shape_3.setTransform(97.5,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUA5QgMgWAAgjQAAgiAMgWQAQgcAgAAQAgAAAQAcQAMAWAAAiQAAAjgMAWQgQAcggAAQggAAgQgcgAAbgyQgKAUAAAeQAAAfAKAUQANAaAcAAQAcAAANgaQAJgUAAgfQAAgegJgUQgNgagcAAQgcAAgNAagAh/AIQAAhcA9AAQAUAAAOALQAOAMACAVIgJAAQgDgQgLgKQgLgKgQAAQg0AAAABUIABAAQAFgOAOgJQANgKARAAQAYAAAQAQQAPAOAAAZQAAAXgPAQQgQAQgYAAQg7AAAAhNgAhmgDQgNAMAAAVQAAAUAOAOQANANAUAAQATAAAOgOQANgNAAgUQAAgUgNgMQgOgPgTAAQgVAAgNAOg");
	this.shape_4.setTransform(123.4,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeATIAIglIAdAAQAYAAAAARQAAAVgfgBg");
	this.shape_5.setTransform(10.2,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAUIAIgnIAdAAQAYABAAARQAAAVgfAAg");
	this.shape_6.setTransform(18.8,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAUIAIgnIAdAAQAYABAAARQAAAVgfAAg");
	this.shape_7.setTransform(20,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeATIAIglIAdAAQAYAAAAARQAAAVgfgBg");
	this.shape_8.setTransform(11.4,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfATIAJglIAcAAQAZAAAAARQAAAVgfgBg");
	this.shape_9.setTransform(3.2,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAUIAIgnIAdAAQAYAAAAASQAAAVgfAAg");
	this.shape_10.setTransform(12.5,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAYAAAAASQAAAHgGAGQgJAIgQAAg");
	this.shape_11.setTransform(4.3,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.3,17.2);


(lib.DTEK50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAZAAAAASQAAAVggAAg");
	this.shape.setTransform(10.4,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAZAAAAASQAAAVggAAg");
	this.shape_1.setTransform(19.1,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAZAAAAASQAAAHgHAGQgJAIgQAAg");
	this.shape_2.setTransform(20.3,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAZAAAAASQAAAVggAAg");
	this.shape_3.setTransform(11.6,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAZAAAAASQAAAVggAAg");
	this.shape_4.setTransform(3.2,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAZAAAAASQAAAVggAAg");
	this.shape_5.setTransform(12.7,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAUIAJgnIAdAAQAZAAAAASQAAAHgHAGQgJAIgQAAg");
	this.shape_6.setTransform(4.4,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVA6QgMgWAAgkQAAgjAMgVQAQgdAhAAQAhAAAPAdQAMAVAAAjQAAAjgMAXQgPAcghAAQghAAgQgcgAAcgzQgKAVAAAeQAAAfAKAVQANAaAdAAQAcAAANgaQAKgVAAgfQAAgegKgVQgNgagcAAQgdAAgNAagAhxBIQgRgPABgZIAJAAQAAAVAOAMQAOANAVAAQAVAAANgPQANgOAAgVQAAgVgNgMQgOgOgUAAQgbAAgQAVIgKAAIAShUIBUAAIAAAIIhNAAIgOBCIAAABQAPgUAbAAQAYAAAQAQQAQAOAAAZQAAAZgPARQgQAQgZAAQgZAAgRgOg");
	this.shape_7.setTransform(124.7,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAzBSIhBhaIgoAfIAAA7IgVAAIAAijIAVAAIAABRIBdhRIAbAAIhCA7IBMBog");
	this.shape_8.setTransform(98.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#94D60A").s().p("AgJBSIAAiQIhGAAIAAgTICeAAIAAATIhFAAIAACQg");
	this.shape_9.setTransform(58.8,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhOBSIAAijIBHAAQAmAAAXAXQAYAXAAAjQABAlgYAXQgYAWgmAAgAglAsIAeAAQAVAAAMgMQAMgLAAgVQAAgTgNgMQgMgMgUAAIgeAAg");
	this.shape_10.setTransform(40.3,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhDBSIAAijICAAAIAAATIhrAAIAAAwIBAAAIAAARIhAAAIAAA8IByAAIAAATg");
	this.shape_11.setTransform(78.2,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.8,17.3);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARAnIAAgvQAAgJgFgEQgDgEgIAAQgDAAgEADQgFACgCAFQgDAFABAFIAAAsIgRAAIAAhLIAQAAIAAALIAAAAQAEgGAGgEQAGgDAGAAQANAAAHAGQAIAHAAANIAAAzg");
	this.shape.setTransform(107.8,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgFgJQgEgJAAgMQAAgKAFgJQAEgJAJgGQAIgFAKAAQAJAAAHADQAHAEAFAGQAFAHACAIQACAIgBAHIg3AAQAAAGACAFQADAFAEAEQAFADAFAAQAHAAAFgDQAFgEACgGIAQAAQgCAJgFAFQgFAGgHADQgIADgIAAQgKAAgJgFgAATgFQAAgGgDgEQgCgFgEgDQgFgDgFAAQgEAAgFADQgEADgDAEQgDAFAAAGIAmAAIAAAAg");
	this.shape_1.setTransform(99.4,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJA1IAAg/IgNAAIAAgMIANAAIAAgHQAAgKADgFQADgFADgBQAFgCAGAAIAHAAIAEABIAAANIgDAAIgFAAQgDAAgCABQgCACgBAFIAAAIIAPAAIAAAMIgPAAIAAA/g");
	this.shape_2.setTransform(92.9,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAgQgIgIABgPIAAgvIARAAIAAAtQAAAKADAFQAFAEAGAAQAFAAAFgDQAEgDABgEQACgFABgGIAAgrIAQAAIAABLIgQAAIAAgLIAAAAQgEAGgGAEQgGADgFAAQgPAAgGgHg");
	this.shape_3.setTransform(86.1,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAmQgEgCgBgFQgDADgFACIgHADIgKABQgHAAgFgCQgHgDgDgFQgEgFAAgHQAAgKAFgFQAEgDAHgCIANgDIAKgBQAFgBAEgCQADgCAAgEQAAgFgDgCIgGgDIgFgBQgHAAgFADQgEADgBAGIgSAAQACgKAEgFQAFgGAJgCQAHgDAIABQAGAAAHACQAHACAFAFQAFAFAAAIIAAAmIABAFIADABIACAAIACAAIAAALIgFACIgFAAQgGAAgDgCgAADADIgJABQgGABgEADQgEACAAAHQAAAEACACQADACAEABIAHABIAGgBQAFgCADgDQACgDABgGIAAgMQgEACgGABg");
	this.shape_4.setTransform(77.8,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA1IghgzIgPAPIAAAkIgTAAIAAhpIATAAIAAAxIAugxIAXAAIgrAqIAuA/g");
	this.shape_5.setTransform(68.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALAyQgJAAgCgCQgFgCgBgEQgCgFAAgGIAAgsIgNAAIAAgNIANAAIAAgXIAPAAIAAAXIAPAAIAAANIgPAAIAAAnIAAAGQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQABABAEAAIAEAAIADgBIAAAOIgFAAIgGAAg");
	this.shape_6.setTransform(56.4,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAmIAAgMIAogyIglAAIAAgNIA9AAIAAAMIgrAyIAsAAIAAANg");
	this.shape_7.setTransform(50.3,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAyQgJAAgCgCQgFgCgBgEQgCgFAAgGIAAgsIgNAAIAAgNIANAAIAAgXIAPAAIAAAXIAPAAIAAANIgPAAIAAAnIAAAGQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQABABAEAAIAEAAIADgBIAAAOIgFAAIgGAAg");
	this.shape_8.setTransform(43.9,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAjQgIgFgFgJQgEgJAAgMQAAgKAFgJQAEgJAJgGQAIgFAKAAQAJAAAHADQAHAEAFAGQAFAHACAIQACAIgBAHIg3AAQAAAGACAFQADAFAEAEQAFADAFAAQAHAAAFgDQAFgEACgGIAQAAQgCAJgFAFQgFAGgHADQgIADgIAAQgKAAgJgFgAATgFQAAgGgDgEQgCgFgEgDQgFgDgFAAQgEAAgFADQgEADgDAEQgDAFAAAGIAmAAIAAAAg");
	this.shape_9.setTransform(37.4,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAyQgGgFgEgHQgDgIAAgKIAAgGIATAAIAAAGQgBAJAEAFQADAFAHAAQAGAAACgCQAEgDABgEQABgFAAgHIAAhHIATAAIAABGIgBAOQgCAGgDAGQgDAFgIADQgGADgKAAQgLAAgIgEg");
	this.shape_10.setTransform(28.7,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#99CB49").p("A1iCXMArFAAAIAAktMgrFAAAg");
	this.shape_11.setTransform(69,15.1,0.5,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("A1iCXIAAktMArFAAAIAAEtg");
	this.shape_12.setTransform(69,15.1,0.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,140,32.3);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.AND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4B7B8").s().p("AggAnIAAhNIAgAAQAKAAAIAGQAIAFAEAJQADAJAAAJQAAAKgDAJQgEAJgIAFQgIAGgKAAgAgTAcIAOAAQAJgBAGgDQAFgEACgGQADgHAAgHQAAgGgDgHQgCgGgFgEQgGgDgJgBIgOAAg");
	this.shape.setTransform(23.8,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4B7B8").s().p("AARAnIgig4IAAA4IgNAAIAAhNIAOAAIAiA4IAAAAIAAg4IANAAIAABNg");
	this.shape_1.setTransform(13.6,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4B7B8").s().p("AgQAkQgHgDgEgHQgEgGAAgLIAAgwIAOAAIAAAsIAAAIQABAEACADQABAEAEACQAEACAFAAQAGAAAEgCQAEgCABgEQACgDABgEIAAgIIAAgsIAOAAIAAAwQAAALgEAGQgEAHgIADQgHAEgJAAQgIAAgIgEg");
	this.shape_2.setTransform(3.7,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-4.4,34.1,16.9);


// stage content:
(lib._7781_STRATEGIC_300x250_DE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.CTA_OVERLAY.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			//window.open("http://www.timhortons.com/ca/en/menu/iced-coffee.php", "_blank");
			window.open(window.clickTag, "_blank");
		}
	}
	this.frame_362 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(362).call(this.frame_362).wait(1));

	// CTA_OVERLAY
	this.CTA_OVERLAY = new lib.Symbol1();
	this.CTA_OVERLAY.parent = this;
	this.CTA_OVERLAY.alpha = 0;
	this.CTA_OVERLAY.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.CTA_OVERLAY.cache(-2,-2,304,254);
	new cjs.ButtonHelper(this.CTA_OVERLAY, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.CTA_OVERLAY).wait(363));

	// FRAME
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(363));

	// CTA
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(254.1,227.2,0.43,0.43,0,0,0,138.2,15.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(348).to({_off:false},0).to({regX:138.1,regY:15.1,scaleX:0.89,scaleY:0.89,x:285.9,alpha:1},9).to({regX:138,scaleX:0.83,scaleY:0.83,x:281.6},5,cjs.Ease.get(-0.5)).wait(1));

	// 60
	this.instance_1 = new lib.DTEK60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(237.3,24.1,0.8,0.8,0,0,0,68.2,8.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(331).to({_off:false},0).to({x:228.3,alpha:1},10).wait(22));

	// AND
	this.instance_2 = new lib.AND();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,24.1,1,1,0,0,0,13.3,3.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(331).to({_off:false},0).to({alpha:1},10).wait(22));

	// 50
	this.instance_3 = new lib.DTEK50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.8,24.1,0.8,0.8,0,0,0,68.8,8.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(331).to({_off:false},0).to({x:73.8,alpha:1},10).wait(22));

	// DTEK60
	this.instance_4 = new lib.DTEK60();
	this.instance_4.parent = this;
	this.instance_4.setTransform(118.5,52,1.224,1.224,0,0,0,68.1,8.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(261).to({_off:false},0).to({x:130.5,alpha:1},13).wait(21).to({alpha:0},10).to({_off:true},1).wait(57));

	// DTEK50
	this.instance_5 = new lib.DTEK50();
	this.instance_5.parent = this;
	this.instance_5.setTransform(113,52.1,1.224,1.224,0,0,0,68.9,8.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(200).to({_off:false},0).to({x:122.2,alpha:1},12).wait(21).to({x:129.6},5).to({regX:68.8,x:-88},10,cjs.Ease.get(-0.5)).to({_off:true},1).wait(114));

	// INTRODUCING
	this.instance_6 = new lib.TEXT_3_BB();
	this.instance_6.parent = this;
	this.instance_6.setTransform(75.9,23.9,0.84,0.84,0,0,0,71.3,14.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(183).to({_off:false},0).to({x:83.5,alpha:1},19).wait(93).to({alpha:0},15).to({_off:true},1).wait(52));

	// TEXT_4
	this.instance_7 = new lib.TEXT_4_BB();
	this.instance_7.parent = this;
	this.instance_7.setTransform(205.2,112,0.85,0.85,0,0,0,85.8,15);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(134).to({_off:false},0).to({x:216.2,alpha:1},12).wait(25).to({alpha:0},15,cjs.Ease.get(-0.5)).to({_off:true},1).wait(176));

	// PHONE TOPS_BB
	this.instance_8 = new lib.PHONE_TOPS_BB_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(283.8,340,1,1,0,0,0,169.5,116);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(182).to({_off:false},0).to({y:142},14).to({y:152},5,cjs.Ease.get(-0.5)).wait(32).to({x:70.8,y:196},27,cjs.Ease.get(0.8)).wait(39).to({regY:116.1,scaleX:1.07,scaleY:1.07,y:134.9},11,cjs.Ease.get(-0.5)).to({x:70.9,y:226.8},13,cjs.Ease.get(-0.5)).to({x:70.8,y:380.3,alpha:0},16,cjs.Ease.get(-0.5)).to({_off:true},1).wait(23));

	// LOGO_BLACK
	this.instance_9 = new lib.LOGO_BlackBerry_BLACK();
	this.instance_9.parent = this;
	this.instance_9.setTransform(55.1,110.8,1.34,1.34,0,0,0,47.1,9.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(122).to({_off:false},0).to({x:76.1,alpha:1},15).wait(34).to({alpha:0},15,cjs.Ease.get(-0.5)).to({_off:true},1).wait(150).to({_off:false,regX:47.2,scaleX:0.96,scaleY:0.96,x:80.3,y:229},0).to({scaleX:1.41,scaleY:1.41,alpha:1},8).to({regX:47.1,scaleX:1.34,scaleY:1.34,x:80.2,y:229.1},5,cjs.Ease.get(-0.5)).wait(13));

	// ENDNIG_IMAGE_BB
	this.instance_10 = new lib.ENDING_IMAGE_BB_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,115,1,1,0,0,0,115,115);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(310).to({_off:false},0).wait(53));

	// TEXT_2
	this.instance_11 = new lib.TEXT_2_BB();
	this.instance_11.parent = this;
	this.instance_11.setTransform(144.3,125.1,1,1,0,0,0,64.8,16.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({_off:false},0).to({x:106.3,y:124.1,alpha:1},31,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11,y:124},6).to({scaleX:1,scaleY:1,y:124.1},11).wait(22).to({alpha:0},19).wait(241));

	// TEXT_1b
	this.instance_12 = new lib.TEXT_1b_BB();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160.5,89.1,1,1,0,0,0,93,14.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).to({x:136.5,alpha:1},17).wait(63).to({alpha:0},16).to({_off:true},1).wait(250));

	// TEXT_1
	this.instance_13 = new lib.TEXT_1_BB();
	this.instance_13.parent = this;
	this.instance_13.setTransform(123.1,75.1,1,1,0,0,0,93,28.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:135.1,alpha:1},26).wait(70).to({alpha:0},16).to({_off:true},1).wait(250));

	// PHONE_bottom
	this.instance_14 = new lib.PHONE_bottom();
	this.instance_14.parent = this;
	this.instance_14.setTransform(184,216,1,1,0,0,0,250,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:203.8},96,cjs.Ease.get(-0.5)).to({x:82.2,y:201.1},99).to({x:40,y:200,alpha:0},63).wait(105));

	// BG
	this.instance_15 = new lib.BG();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(363));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84,123,500,273);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;