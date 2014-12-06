/*
===============================================================================

	main.js
		JS file shared throughout the web site.

===============================================================================
*/

/*
-------------------------------------------------------------------------------
	Code.
-------------------------------------------------------------------------------
*/

/*
-----------------------------------------------------------
home_generate_motd
	Sets the MOTD to a random phrase.
-----------------------------------------------------------
*/
function home_generate_motd()
{
	var dom = document.getElementById( "motd" );
	if( dom == null )
	{
		console.log( "Failed to set MOTD\n" );
		return;
	}
	
	var messages = new Array(
		[ "A native programmer who got his hands on HTML" ],
		[ "Proudly borrowing oxygen since 1993" ]
	);
	
	var i = Math.random() * ( messages.length - 1 );
	i = Math.round( i );
	console.log( i );
	dom.innerHTML = messages[i];
}