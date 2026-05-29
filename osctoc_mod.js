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
	delete G.getDict('grass').res.gather['food'];
}
});
