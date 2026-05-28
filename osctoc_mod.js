G.AddData({
name:'Example mod',
author:'Os',
desc:'A simple example mod that adds hot peppers and hot sauce.',
engineVersion:1,
manifest:'https://osctoc571.github.io/osctoc_mod.js',
requires:['Default dataset*'],
func:function()
{

	new G.Res({
		name:'test_food',
		desc:'Test_food',
		icon:0,
		turnToByContext:{'eat':{'health':0.01,'happiness':0.03},'decay':{'spoiled food':0.5}},
		partOf:'food',
		category:'food',
	});

	G.getDict('grass').res['gather']['test_food']=10;
}
});
