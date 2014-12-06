//-----------------------------------------------------------------------------
// lucasz.me
// Copyright Lucas Zadrozny.
//-----------------------------------------------------------------------------

// An array containing all images to cycle through.
// Attributes:
//	last			The index of the last image that was changed.
//
// Array element attributes:
//	element			A reference to the image element.
//	paths			An array containing all paths for this element.
// 	current			Index of the image currently displayed.
var Cycler = [];

//-----------------------------------------------------------------------------
// Installs timers to change the given images.
//-----------------------------------------------------------------------------
function install_change_handler( delay )
{
	Cycler.last = -1;
	setInterval( change_random_image, delay );
	return true;
}

//-----------------------------------------------------------------------------
// Adds a new element and associated image paths to the cycler.
//-----------------------------------------------------------------------------
function register_change_image( element, paths )
{
	var cycle = new Object();
	cycle.element = document.getElementById( element );
	cycle.paths = paths;
	cycle.current = 0;
	
	Cycler.push( cycle );
}

//-----------------------------------------------------------------------------
// Changes one of the preview images on the page.
//-----------------------------------------------------------------------------
function change_random_image()
{
	var ele, img;
	
	do
	{
		ele = Math.floor( Math.random() * Cycler.length );
	// If `Cycler.length` == 1, then this is an infinite loop.
	} while( ele == Cycler.last && Cycler.length > 1 );
	
	do
	{
		img = Math.floor( Math.random() * Cycler[ele].paths.length );
	// If `Cycler[ele].paths.length` == 1, then this is an infinite loop.
	} while( img == Cycler[ele].current && Cycler[ele].paths.length > 1 );
	
	// Update the image.
	Cycler[ele].element.src = Cycler[ele].paths[img];
	
	// Commit the current image indices.
	Cycler.last = ele;
	Cycler[ele].current = img;
}