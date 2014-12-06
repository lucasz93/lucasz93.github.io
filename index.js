//-----------------------------------------------------------------------------
// lucasz.me
// Copyright Lucas Zadrozny.
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// Sets the MOTD to a random phrase.
//-----------------------------------------------------------------------------
function home_generate_motd()
{
	var dom = document.getElementById( "motd" );
	if( dom == null )
	{
		console.log( "Failed to set MOTD\n" );
		return;
	}
	
	var messages = new Array(
		[ "i write code" ]
	);
	
	var i = Math.random() * ( messages.length - 1 );
	i = Math.round( i );
	dom.innerHTML = messages[i];
}