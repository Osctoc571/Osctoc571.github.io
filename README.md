G.AddData({
name:'osctoc_mod',
author:'Orteil',
desc:'',
engineVersion:1,
manifest:'',
requires:['Default dataset*'],
sheets:{'spicySheet':'img/spicyModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{

	new G.Res({
		name:'test_food',
		desc:'Test_food',
		icon:0,
		turnToByContext:{'eat':{'health':0.01,'happiness':0.03},'decay':{'spoiled food':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});

	G.getDict('grass').res['gather']['test_food']=10;

}
});
