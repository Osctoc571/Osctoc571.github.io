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
		G.textWithTooltip('<div class="icon freestanding" style="'+G.getIconUsedBy(G.getRes('adult'))+'"></div><div class="freelabel">x5</div>','5 Adults')+
		G.textWithTooltip('<div class="icon freestanding" style="'+G.getIconUsedBy(G.getRes('elder'))+'"></div><div class="freelabel">x1</div>','1 Elder')+
		G.textWithTooltip('<div class="icon freestanding" style="'+G.getIconUsedBy(G.getRes('child'))+'"></div><div class="freelabel">x2</div>','2 Children')+
		G.textWithTooltip('<div class="icon freestanding" style="'+G.getIconUsedBy(G.getRes('herb'))+'"></div><div class="freelabel">x250</div>','250 Herbs')+
		G.textWithTooltip('<div class="icon freestanding" style="'+G.getIconUsedBy(G.getRes('water'))+'"></div><div class="freelabel">x250</div>','250 Water')+
		'</div>'+
		'<div class=">adfgfgdsfgsdfsdfcszcxszdfcafdqwdqaWSDXASDXASSDQWDQDXASDAWQDXASDXA.</div>'+
		'<div class="par fancyText bitBiggerText">You emerge as the tribe\'s leader. They call you :</div>';
		return str;
	}

	G.resCategories={
		'main':{
			name:'Essentials',
			base:[],
			side:['population','worker','happiness','health','land','coin'],
		},
		'demog':{
			name:'Demographics',
			base:['baby','child','adult','elder','worker','sick','wounded'],
			side:['population','housing','corpse','burial spot'],
		},
		'food':{
			name:'Food & Water',
			base:[],
			side:['food','spoiled food','water','muddy water','food storage'],
		},
		'build':{
			name:'Crafting & Construction',
			base:[],
			side:['archaic building materials','basic building materials','advanced building materials','precious building materials','material storage'],
		},
		'gear':{
			name:'Gear',
			base:[],
			side:[],
		},
		'misc':{
			name:'Miscellaneous',
			base:[],
		},
	};

	new G.Res({
		name:'test_food',
		desc:'Test_food',
		icon:[0,0,'iconSheet'],
		turnToByContext:{'eat':{'health':0.01,'happiness':0.03},'decay':{'spoiled food':0.5}},
		partOf:'food',
		category:'food',
	});

	G.getDict('grass').res['gather']['test_food']=10;
}
});
