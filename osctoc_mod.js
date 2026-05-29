G.AddData({
name:'osctoc_mod',
author:'Os',
desc:'A mod',
engineVersion:1,
manifest:'https://osctoc571.github.io/osctoc_mod.js',
requires:['Default dataset*'],
sheets:{'iconSheet':'https://osctoc571.github.io/Iconsheet_osctoc.png'},
func:function()
{
	G.funcs['new game blurb']=function()
		{
			var str=
			'<b>Your tribe :</b><div class="thingBox">'+
			'</div>'+
			'<div class="par fancyText bitBiggerText">Your tribe finds a place to settle in the wilderness.<br>Resources are scarce, and everyone starts foraging.</div>'+
			'<div class="par fancyText bitBiggerText">You emerge as the tribe\'s leader. They call you :</div>';
			return str;
		}

	delete G.getDict('grass').res.gather['food'];
});
