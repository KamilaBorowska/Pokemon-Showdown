exports.BattleScripts = {
	gen: 6,
	// Init function to set things up.
	// It makes all moves to have true accuracy.
	init: function() {
		for (var i in this.data.FormatsData) {
			this.modData('FormatsData', i).unreleasedHidden = false;
		}
	    this.modData('Pokedex', 'bulbasaur').abilities = {0:"Overgrow", H:"Dry Skin"};
	    this.modData('Pokedex', 'ivysaur').abilities = {0:"Overgrow", H:"Dry Skin"};
	    this.modData('Pokedex', 'venusaur').abilities = {0:"Overgrow", H:"Dry Skin"};
	    this.modData('Pokedex', 'venusaurmega').abilities = {0:"Aroma Veil"};
	    this.modData('Pokedex', 'charmander').abilities = {0:"Blaze", H:"Shed Skin"};
	    this.modData('Pokedex', 'charmeleon').abilities = {0:"Blaze", H:"Shed Skin"};
	    this.modData('Pokedex', 'charizard').abilities = {0:"Blaze", H:"Shed Skin"};
	    this.modData('Pokedex', 'charizardmegax').abilities = {0:"Multiscale"};
	    this.modData('Pokedex', 'charizardmegay').abilities = {0:"Flame Body"};
	    this.modData('Pokedex', 'squirtle').abilities = {0:"Torrent", H:"Rough Skin"};
	    this.modData('Pokedex', 'wartortle').abilities = {0:"Torrent", H:"Rough Skin"};
	    this.modData('Pokedex', 'blastoise').abilities = {0:"Torrent", H:"Rough Skin"};
	    this.modData('Pokedex', 'blastoisemega').abilities = {0:"Solid Rock"};
	    this.modData('Pokedex', 'eevee').abilities = {0:"Run Away", 1:"Adaptability", H:"Protean"};
	    this.modData('Pokedex', 'flareon').abilities = {0:"Flash Fire", H:"Fur Coat"};
	    this.modData('Pokedex', 'jolteon').abilities = {0:"Volt Absorb", H:"Iron Barbs"};
	    this.modData('Pokedex', 'vaporeon').abilities = {0:"Water Absorb", H:"Dry Skin"};
	    this.modData('Pokedex', 'espeon').abilities = {0:"Synchronize", H:"Tinted Lens"};
	    this.modData('Pokedex', 'umbreon').abilities = {0:"Synchronize", H:"Filter"};
	    this.modData('Pokedex', 'glaceon').abilities = {0:"Snow Cloak", H:"Refrigerate"};
	    this.modData('Pokedex', 'leafeon').abilities = {0:"Leaf Guard", H:"Natural Cure"};
	    this.modData('Pokedex', 'sylveon').abilities = {0:"Cute Charm", H:"Serene Grace"};
	    this.modData('Pokedex', 'pichu').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pichuspikyeared').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pikachu').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pikachucosplay').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pikachulibre').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pikachubelle').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pikachuphd').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pikachurockstar').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'pikachupopstar').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'raichu').abilities = {0:"Static", H:"Victory Star"};
	    this.modData('Pokedex', 'articuno').abilities = {0:"Pressure", H:"Snow Warning"};
	    this.modData('Pokedex', 'zapdos').abilities = {0:"Pressure", H:"Drizzle"};
	    this.modData('Pokedex', 'moltres').abilities = {0:"Pressure", H:"Drought"};
	    this.modData('Pokedex', 'cryogonal').abilities = {0:"Levitate", H:"Snow Warning"};
	    this.modData('Pokedex', 'zapdos').abilities = {0:"Pressure", H:"Drizzle"};
	    this.modData('Pokedex', 'horsea').abilities = {0:"Swift Swim", 1:"Sniper", H:"Drizzle"};
	    this.modData('Pokedex', 'seadra').abilities = {0:"Poison Point", 1:"Sniper", H:"Drizzle"};
	    this.modData('Pokedex', 'kingdra').abilities = {0:"Swift Swim", 1:"Sniper", H:"Drizzle"};
	    this.modData('Pokedex', 'torkoal').abilities = {0:"White Smoke", H:"Drought"};
	    this.modData('Pokedex', 'gliscor').abilities = {0:"Hyper Cutter", 1:"Sand Veil", H:"Sand Stream"};
	    this.modData('Pokedex', 'gligar').abilities = {0:"Hyper Cutter", 1:"Sand Veil", H:"Toxic Boost"};
	    this.modData('Pokedex', 'cranidos').abilities = {0:"Mold Breaker", H:"Sand Rush"};
	    this.modData('Pokedex', 'rampardos').abilities = {0:"Mold Breaker", H:"Sand Rush"};
	    this.modData('Pokedex', 'rhyperior').abilities = {0:"Lightning Rod", 1:"Solid Rock", H:"Sand Force"};
	    this.modData('Pokedex', 'rhyhorn').abilities = {0:"Lightning Rod", 1:"Rock Head", H:"Multiscale"};
	    this.modData('Pokedex', 'rhydon').abilities = {0:"Lightning Rod", 1:"Reckless", H:"Multiscale"};
	    this.modData('Pokedex', 'snover').abilities = {0:"Snow Warning", H:"Lightning Rod"};
	    this.modData('Pokedex', 'abomasnow').abilities = {0:"Snow Warning", H:"Lightning Rod"};
	    this.modData('Pokedex', 'abomasnowmega').abilities = {0:"Snow Cloak"};
	    this.modData('Pokedex', 'nidoranf').abilities = {0:"Poison Point", 1:"Rivalry" H:"Quick Feet"};
	    this.modData('Pokedex', 'nidorina').abilities = {0:"Poison Point", 1:"Rivalry" H:"Quick Feet"};
	    this.modData('Pokedex', 'nidoranm').abilities = {0:"Poison Point", 1:"Rivalry" H:"Quick Feet"};
	    this.modData('Pokedex', 'nidorino').abilities = {0:"Poison Point", 1:"Rivalry" H:"Quick Feet"};
	    this.modData('Pokedex', 'nidoqueen').abilities = {0:"Poison Point", 1:"Rivalry", H:"Parental Bond"};
	    this.modData('Pokedex', 'nidoking').abilities = {0:"Poison Point", 1:"Rivalry", H:"Parental Bond"};
	    this.modData('Pokedex', 'growlithe').abilities = {0:"Intimidate", 1:"Flash Fire", H:"Sheer Force"};
	    this.modData('Pokedex', 'arcanine').abilities = {0:"Intimidate", 1:"Flash Fire", H:"Sheer Force"};
	    this.modData('Pokedex', 'abra').abilities = {0:"Synchronize", 1:"Inner Focus", H:"Magician"};
	    this.modData('Pokedex', 'kadabra').abilities = {0:"Synchronize", 1:"Inner Focus", H:"Magician"};
	    this.modData('Pokedex', 'alakazam').abilities = {0:"Synchronize", 1:"Inner Focus", H:"Magician"};
	    this.modData('Pokedex', 'alakazammega').abilities = {0:"Pure Power"};
	    this.modData('Pokedex', 'grimer').abilities = {0:"Stench", 1:"Sticky Hold", H:"Gooey"};
	    this.modData('Pokedex', 'muk').abilities = {0:"Stench", 1:"Sticky Hold", H:"Gooey"};
	    this.modData('Pokedex', 'tangela').abilities = {0:"Chlorophyll", 1: "Leaf Guard", H:"Poison Heal"};
	    this.modData('Pokedex', 'tangrowth').abilities = {0:"Chlorophyll", 1: "Leaf Guard", H:"Poison Heal"};
	    this.modData('Pokedex', 'staryu').abilities = {0:"Illuminate", 1:"Natural Cure", H:"Suction Cups"};
	    this.modData('Pokedex', 'starmie').abilities = {0:"Illuminate", 1:"Natural Cure", H:"Suction Cups"};
	    this.modData('Pokedex', 'wooper').abilities = {0:"Damp", 1:"Water Absorb", H:"Sap Sipper"};
	    this.modData('Pokedex', 'quagsire').abilities = {0:"Damp", 1:"Water Absorb", H:"Sap Sipper"};
	    this.modData('Pokedex', 'murkrow').abilities = {0:"Insomnia", 1:"Super Luck", H:"Defiant"};
	    this.modData('Pokedex', 'honchkrow').abilities = {0:"Insomnia", 1:"Super Luck", H:"Defiant"};
	    this.modData('Pokedex', 'scyther').abilities = {0:"Swarm", 1:"Technician", H:"Speed Boost"};
	    this.modData('Pokedex', 'scizor').abilities = {0:"Swarm", 1:"Technician", H:"Hustle"};
	    this.modData('Pokedex', 'scizormega').abilities = {0:"Battle Armor"};
	    this.modData('Pokedex', 'happiny').abilities = {0:"Natural Cure", 1:"Serene Grace", H:"Shell Armor"};
	    this.modData('Pokedex', 'chansey').abilities = {0:"Natural Cure", 1:"Serene Grace", H:"Shell Armor"};
	    this.modData('Pokedex', 'blissey').abilities = {0:"Natural Cure", 1:"Serene Grace", H:"Shell Armor"};
	    this.modData('Pokedex', 'raikou').abilities = {0:"Pressure", H:"Competitive"};    
	    this.modData('Pokedex', 'entei').abilities = {0:"Pressure", H:"Defiant"};
	    this.modData('Pokedex', 'suicune').abilities = {0:"Pressure", H:"Swift Swim"};
	    this.modData('Pokedex', 'larvitar').abilities = {0:"Guts", H:"Gluttony"};
	    this.modData('Pokedex', 'pupitar').abilities = {0:"Shed Skin", H:"Unburden"};
	    this.modData('Pokedex', 'tyranitarmega').abilities = {0:"Mold Breaker"};
	    this.modData('Pokedex', 'tyranitar').abilities = {0:"Sand Stream", H:"Rough Skin"};
	    this.modData('Pokedex', 'taillow').abilities = {0:"Scrappy", H:"Aerilate"};
	    this.modData('Pokedex', 'swellow').abilities = {0:"Scrappy", H:"Aerilate"};
	    this.modData('Pokedex', 'slakoth').abilities = {0:"Truant", H:"Stall"};
	    this.modData('Pokedex', 'slaking').abilities = {0:"Truant", H:"Stall"};
	    this.modData('Pokedex', 'vigoroth').abilities = {0:"Vital Spirit", H:"Rattled"};
	    this.modData('Pokedex', 'feebas').abilities = {0:"Swift Swim", 1:"Oblvious", H:"Cute Charm"};
	    this.modData('Pokedex', 'milotic').abilities = {0:"Marvel Scale", 1:"Competitive", H:"Adaptability"};
	    this.modData('Pokedex', 'deoxys').abilities = {0:"Pressure", H:"Telepathy"};
	    this.modData('Pokedex', 'deoxysspeed').abilities = {0:"Pressure", H:"Telepathy"};
	    this.modData('Pokedex', 'deoxysdefense').abilities = {0:"Pressure", H:"Telepathy"};
	    this.modData('Pokedex', 'deoxysattack').abilities = {0:"Pressure", H:"Telepathy"};
	    this.modData('Pokedex', 'starly').abilities = {0:"Keen Eye", H:"Shield Dust"};
	    this.modData('Pokedex', 'staravia').abilities = {0:"Intimidate", H:"Moxie"};
	    this.modData('Pokedex', 'staraptor').abilities = {0:"Intimidate", H:"Moxie"};
	    this.modData('Pokedex', 'croagunk').abilities = {0:"Anticipation", 1:"Dry Skin", H:"Liquid Ooze"};
	    this.modData('Pokedex', 'toxicroak').abilities = {0:"Anticipation", 1:"Dry Skin", H:"Liquid Ooze"};
	    this.modData('Pokedex', 'regirock').abilities = {0:"Clear Body", H:"Solid Rock"};
	    this.modData('Pokedex', 'registeel').abilities = {0:"Clear Body", H:"Solid Rock"};
	    this.modData('Pokedex', 'regice').abilities = {0:"Clear Body", H:"Solid Rock"};
	    this.modData('Pokedex', 'regigigas').abilities = {0:"Slow Start", H:"Normalize"};
	    this.modData('Pokedex', 'darkrai').abilities = {0:"Bad Dreams", H:"Frisk"};
	    this.modData('Pokedex', 'cresselia').abilities = {0:"Levitate", H:"Natural Cure"};
	    this.modData('Pokedex', 'riolu').abilities = {0:"Steadfast", 1:"Inner Focus", H:"Scrappy"};
	    this.modData('Pokedex', 'lucario').abilities = {0:"Steadfast", 1:"Inner Focus", H:"Mega Launcher"};
	    this.modData('Pokedex', 'lucariomega').abilities = {0:"Guts"};
	    this.modData('Pokedex', 'latios').abilities = {0:"Levitate", H:"Synchronize"};
	    this.modData('Pokedex', 'latiosmega').abilities = {0:"Adaptability"};
	    this.modData('Pokedex', 'latias').abilities = {0:"Levitate", H:"Synchronize"};
	    this.modData('Pokedex', 'latiasmega').abilities = {0:"Marvel Scale"};    
	    this.modData('Pokedex', 'uxie').abilities = {0:"Levitate", H:"Analytic"};
	    this.modData('Pokedex', 'azelf').abilities = {0:"Levitate", H:"Synchronize"};
	    this.modData('Pokedex', 'mesprit').abilities = {0:"Levitate", H:"Pressure"};
	    this.modData('Pokedex', 'celebi').abilities = {0:"Natural Cure", H:"Pixilate"};
	    this.modData('Pokedex', 'mew').abilities = {0:"Synchronize", H:"Protean"};
	    this.modData('Pokedex', 'shellos').abilities = {0:"Sticky Hold", 1:"Storm Drain", H:"Immunity"};
	    this.modData('Pokedex', 'gastrodon').abilities = {0:"Sticky Hold", 1:"Storm Drain", H:"Immunity"};
	    this.modData('Pokedex', 'drifloon').abilities = {0:"Aftermath", 1:"Unburden", H:"No Guard"};
	    this.modData('Pokedex', 'drifblim').abilities = {0:"Aftermath", 1:"Unburden", H:"No Guard"};
	    this.modData('Pokedex', 'buneary').abilities = {0:"Run Away", 1:"Klutz", H:"Hustle"};
	    this.modData('Pokedex', 'lopunny').abilities = {0:"Cute Charm", 1:"Klutz", H:"Hustle"};
	    this.modData('Pokedex', 'lopunnymega').abilities = {0:"Reckless"};
	    this.modData('Pokedex', 'misdreavus').abilities = {0:"Levitate", H:"Soundproof"};
	    this.modData('Pokedex', 'mismagius').abilities = {0:"Levitate", H:"Soundproof"};
	    this.modData('Pokedex', 'spiritomb').abilities = {0:"Pressure", H:"Cursed Body"};
	    this.modData('Pokedex', 'munchlax').abilities = {0:"Pickup", 1:"Thick Fat", H:"Guts"};
	    this.modData('Pokedex', 'snorlax').abilities = {0:"Immunity", 1:"Thick Fat", H:"Guts"};
	    this.modData('Pokedex', 'togepi').abilities = {0:"Hustle", 1:"Serene Grace", H:"Pixilate"};
	    this.modData('Pokedex', 'togetic').abilities = {0:"Hustle", 1:"Serene Grace", H:"Pixilate"};
	    this.modData('Pokedex', 'togekiss').abilities = {0:"Hustle", 1:"Serene Grace", H:"Pixilate"};
	    this.modData('Pokedex', 'ralts').abilities = {0:"Synchronize", 1:"Trace", H:"Infiltrator"};
	    this.modData('Pokedex', 'kirlia').abilities = {0:"Synchronize", 1:"Trace", H:"Infiltrator"};
	    this.modData('Pokedex', 'gardevoir').abilities = {0:"Synchronize", 1:"Trace", H:"Infiltrator"};
	    this.modData('Pokedex', 'gardevoirmega').abilities = {0:"Magic Bounce"};
	    this.modData('Pokedex', 'gallade').abilities = {0:"Steadfast", H:"Analytic"};
	    this.modData('Pokedex', 'gallademega').abilities = {0:"Sheer Force"};
	    this.modData('Pokedex', 'duskull').abilities = {0:"Levitate", H:"Magician"};
	    this.modData('Pokedex', 'dusclops').abilities = {0:"Pressure", H:"Intimidate"};
	    this.modData('Pokedex', 'dusknoir').abilities = {0:"Pressure", H:"Intimidate"};
	    this.modData('Pokedex', 'rotom').abilities = {0:"Levitate", H:"Motor Drive"};
	    this.modData('Pokedex', 'rotomspin').abilities = {0:"Levitate", H:"Motor Drive"};
	    this.modData('Pokedex', 'rotomfrost').abilities = {0:"Levitate", H:"Motor Drive"};
	    this.modData('Pokedex', 'rotomheat').abilities = {0:"Levitate", H:"Motor Drive"};
	    this.modData('Pokedex', 'rotomwash').abilities = {0:"Levitate", H:"Motor Drive"};
	    this.modData('Pokedex', 'rotommow').abilities = {0:"Levitate", H:"Motor Drive"};
	    this.modData('Pokedex', 'machop').abilities = {0:"Guts", 1:"No Guard", H:"Vital Spirit"};
	    this.modData('Pokedex', 'machoke').abilities = {0:"Guts", 1:"No Guard", H:"Vital Spirit"};
	    this.modData('Pokedex', 'machamp').abilities = {0:"Guts", 1:"No Guard", H:"Vital Spirit"};
	    this.modData('Pokedex', 'bellsprout').abilities = {0:"Chlorophyll", H:"Arena Trap"};
	    this.modData('Pokedex', 'weepinbell').abilities = {0:"Chlorophyll", H:"Arena Trap"};
	    this.modData('Pokedex', 'victreebel').abilities = {0:"Chlorophyll", H:"Arena Trap"};
	    this.modData('Pokedex', 'doduo').abilities = {0:"Run Away", 1:"Early Bird", H:"Technician"};
	    this.modData('Pokedex', 'dodrio').abilities = {0:"Run Away", 1:"Early Bird", H:"Technician"};
	    this.modData('Pokedex', 'seel').abilities = {0:"Thick Fat", 1:"Hydration", H:"Oblivious"};    
	    this.modData('Pokedex', 'dewgong').abilities = {0:"Thick Fat", 1:"Hydration", H:"Fur Coat"};
	    this.modData('Pokedex', 'koffing').abilities = {0:"Levitate", H:"Stench"};
	    this.modData('Pokedex', 'weezing').abilities = {0:"Levitate", H:"Stench"};
	    this.modData('Pokedex', 'mimejr.').abilities = {0:"Soundproof", 1:"Filter", H:"Prankster"};
	    this.modData('Pokedex', 'mrmime').abilities = {0:"Soundproof", 1:"Filter", H:"Prankster"};
	    this.modData('Pokedex', 'tauros').abilities = {0:"Intimidate", 1:"Anger Point", H:"Defiant"};
	    this.modData('Pokedex', 'magikarp').abilities = {0:"Swift Swim", H:"Slow Start"};
	    this.modData('Pokedex', 'gyarados').abilities = {0:"Intimidate", H:"Water Veil"};
	    this.modData('Pokedex', 'gyaradosmega').abilities = {0:"Strong Jaw"};
	    this.modData('Pokedex', 'omanyte').abilities = {0:"Swift Swim", 1:"Shell Armor", H:"Sticky Hold"};
	    this.modData('Pokedex', 'omastar').abilities = {0:"Swift Swim", 1:"Shell Armor", H:"Sticky Hold"};
	    this.modData('Pokedex', 'kabuto').abilities = {0:"Swift Swim", 1:"Battle Armor", H:"Tough Claws"};
	    this.modData('Pokedex', 'kabutops').abilities = {0:"Swift Swim", 1:"Battle Armor", H:"Tough Claws"};
	    this.modData('Pokedex', 'snivy').abilities = {0:"Overgrow", H:"Unnerve"};
	    this.modData('Pokedex', 'servine').abilities = {0:"Overgrow", H:"Unnerve"};
	    this.modData('Pokedex', 'serperior').abilities = {0:"Overgrow", H:"Unnerve"};
	    this.modData('Pokedex', 'tepig').abilities = {0:"Blaze", H:"Magma Armor"};
	    this.modData('Pokedex', 'pignite').abilities = {0:"Blaze", H:"Magma Armor"};
	    this.modData('Pokedex', 'emboar').abilities = {0:"Blaze", H:"Bulletproof"};
	    this.modData('Pokedex', 'oshawott').abilities = {0:"Torrent", H:"Hydration"};
	    this.modData('Pokedex', 'dewott').abilities = {0:"Torrent", H:"Hydration"};
	    this.modData('Pokedex', 'samurott').abilities = {0:"Torrent", H:"Lightning Rod"};
	    this.modData('Pokedex', 'pansage').abilities = {0:"Gluttony", H:"Chlorophyll"};
	    this.modData('Pokedex', 'simisage').abilities = {0:"Gluttony", H:"Chlorophyll"};
	    this.modData('Pokedex', 'pansear').abilities = {0:"Gluttony", H:"Solar Power"};
	    this.modData('Pokedex', 'simisear').abilities = {0:"Gluttony", H:"Solar Power"};
	    this.modData('Pokedex', 'panpour').abilities = {0:"Gluttony", H:"Swift Swim"};
	    this.modData('Pokedex', 'simipour').abilities = {0:"Gluttony", H:"Swift Swim"};
	    this.modData('Pokedex', 'audino').abilities = {0:"Healer", 1:"Regenerator", H:"Unaware"};
	    this.modData('Pokedex', 'audinomega').abilities = {0:"Magic Guard"};
	    this.modData('Pokedex', 'throh').abilities = {0:"Guts", 1:"Inner Focus", H:"No Guard"};
	    this.modData('Pokedex', 'sawk').abilities = {0:"Sturdy", 1:"Inner Focus", H:"Scrappy"};
	    this.modData('Pokedex', 'ducklett').abilities = {0:"Keen Eye", 1:"Big Pecks", H:"Gale Wings"};
	    this.modData('Pokedex', 'swanna').abilities = {0:"Keen Eye", 1:"Big Pecks", H:"Gale Wings"};
	    this.modData('Pokedex', 'axew').abilities = {0:"Rivalry", 1:"Mold Breaker", H:"Intimidate"};
	    this.modData('Pokedex', 'fraxure').abilities = {0:"Rivalry", 1:"Mold Breaker", H:"Intimidate"};
	    this.modData('Pokedex', 'haxorus').abilities = {0:"Rivalry", 1:"Mold Breaker", H:"Intimidate"};
	    this.modData('Pokedex', 'rufflet').abilities = {0:"Keen Eye", 1:"Sheer Force", H:"Big Pecks"};
	    this.modData('Pokedex', 'braviary').abilities = {0:"Keen Eye", 1:"Sheer Force", H:"Guts"};
	    this.modData('Pokedex', 'vullaby').abilities = {0:"Big Pecks", 1:"Overcoat", H:"Shell Armor"};
	    this.modData('Pokedex', 'mandibuzz').abilities = {0:"Big Pecks", 1:"Overcoat", H:"Oblivious"};
	    this.modData('Pokedex', 'larvesta').abilities = {0:"Flame Body", H:"Heatproof"};
	    this.modData('Pokedex', 'volcarona').abilities = {0:"Flame Body", H:"Heatproof"};
	    this.modData('Pokedex', 'cobalion').abilities = {0:"Justified", H:"Weak Armor"};
	    this.modData('Pokedex', 'terrakion').abilities = {0:"Justified", H:"Quick Feet"};
	    this.modData('Pokedex', 'virizion').abilities = {0:"Justified", H:"Chlorophyll"};
	    this.modData('Pokedex', 'keldeo').abilities = {0:"Justified", H:"Torrent"};
	    this.modData('Pokedex', 'keldeoresolute').abilities = {0:"Justified", H:"Torrent"};
	    this.modData('Pokedex', 'meloetta').abilities = {0:"Serene Grace", H:"Download"};
		this.modData('Pokedex', 'meloettapirouette').abilities = {0:"Download"};
		this.modData('Pokedex', 'tornadus').abilities = {0:"Prankster", H:"Sheer Force"};
		this.modData('Pokedex', 'tornadustherian').abilities = {0:"Regenerator", H:"Unburden"};
		this.modData('Pokedex', 'thundurus').abilities = {0:"Prankster", H:"Sheer Force"};
		this.modData('Pokedex', 'thundurustherian').abilities = {0:"Volt Absorb", H:"Unburden"};
		this.modData('Pokedex', 'landorus').abilities = {0:"Sand Force", H:"Defiant"};
		this.modData('Pokedex', 'landorustherian').abilities = {0:"Intimidate", H:"Mold Breaker"};
		this.modData('Pokedex', 'chikorita').abilities = {0:"Overgrow", H:"Harvest"};
		this.modData('Pokedex', 'bayleef').abilities = {0:"Overgrow", H:"Harvest"};
		this.modData('Pokedex', 'meganium').abilities = {0:"Overgrow", H:"Harvest"};
		this.modData('Pokedex', 'cyndaquil').abilities = {0:"Blaze", H:"Poison Point"};
		this.modData('Pokedex', 'quilava').abilities = {0:"Blaze", H:"Poison Point"};
		this.modData('Pokedex', 'typhlosion').abilities = {0:"Blaze", H:"Poison Point"};
		this.modData('Pokedex', 'totodile').abilities = {0:"Torrent", H:"Intimidate"};
		this.modData('Pokedex', 'croconaw').abilities = {0:"Torrent", H:"Intimidate"};
		this.modData('Pokedex', 'feraligatr').abilities = {0:"Torrent", H:"Intimidate"};
		this.modData('Pokedex', 'treecko').abilities = {0:"Overgrow", H:"Solar Power"};
		this.modData('Pokedex', 'grovyle').abilities = {0:"Overgrow", H:"Solar Power"};
		this.modData('Pokedex', 'sceptile').abilities = {0:"Overgrow", H:"Solar Power"};
		this.modData('Pokedex', 'sceptilemega').abilities = {0:"Technician"};
		this.modData('Pokedex', 'torchic').abilities = {0:"Blaze", H:"Reckless"};
		this.modData('Pokedex', 'combusken').abilities = {0:"Blaze", H:"Reckless"};
		this.modData('Pokedex', 'blaziken').abilities = {0:"Blaze", H:"Reckless"};
		this.modData('Pokedex', 'blazikenmega').abilities = {0:"Early Bird"};
		this.modData('Pokedex', 'mudkip').abilities = {0:"Torrent", H:"Poison Heal"};
		this.modData('Pokedex', 'marshtomp').abilities = {0:"Torrent", H:"Poison Heal"};
		this.modData('Pokedex', 'swampert').abilities = {0:"Torrent", H:"Poison Heal"};
		this.modData('Pokedex', 'swampertmega').abilities = {0:"Water Absorb"};
		this.modData('Pokedex', 'turtwig').abilities = {0:"Overgrow", H:"Thick Fat"};
		this.modData('Pokedex', 'grotle').abilities = {0:"Overgrow", H:"Thick Fat"};
		this.modData('Pokedex', 'torterra').abilities = {0:"Overgrow", H:"Thick Fat"};
		this.modData('Pokedex', 'chimchar').abilities = {0:"Blaze", H:"Flash Fire"};
		this.modData('Pokedex', 'monferno').abilities = {0:"Blaze", H:"Flash Fire"};
		this.modData('Pokedex', 'infernape').abilities = {0:"Blaze", H:"Flash Fire"};
		this.modData('Pokedex', 'piplup').abilities = {0:"Torrent", H:"Swift Swim"};
		this.modData('Pokedex', 'prinplup').abilities = {0:"Torrent", H:"Swift Swim"};
		this.modData('Pokedex', 'empoleon').abilities = {0:"Torrent", H:"Swift Swim"};
		this.modData('Pokedex', 'pidgey').abilities = {0:"Keen Eye", 1:"Tangled Feet", H:"Tough Claws"};
		this.modData('Pokedex', 'pidgeotto').abilities = {0:"Keen Eye", 1:"Tangled Feet", H:"Tough Claws"};
		this.modData('Pokedex', 'pidgeot').abilities = {0:"Keen Eye", 1:"Tangled Feet", H:"Tough Claws"};
		this.modData('Pokedex', 'pidgeotmega').abilities = {0:"Gale Wings"};
		this.modData('Pokedex', 'rattata').abilities = {0:"Run Away", 1:"Guts", H:"Infiltrator"};
		this.modData('Pokedex', 'raticate').abilities = {0:"Run Away", 1:"Guts", H:"Infiltrator"};
		this.modData('Pokedex', 'cleffa').abilities = {0:"Cute Charm", 1:"Magic Guard", H:"Sweet Veil"};
		this.modData('Pokedex', 'clefairy').abilities = {0:"Cute Charm", 1:"Magic Guard", H:"Prankster"};
		this.modData('Pokedex', 'clefable').abilities = {0:"Cute Charm", 1:"Magic Guard", H:"Prankster"};
		this.modData('Pokedex', 'igglybuff').abilities = {0:"Cute Charm", 1:"Competitive", H:"Sweet Veil"};
		this.modData('Pokedex', 'jigglypuff').abilities = {0:"Cute Charm", 1:"Competitive", H:"Thick Fat"};
		this.modData('Pokedex', 'wigglytuff').abilities = {0:"Cute Charm", 1:"Competitive", H:"Thick Fat"};
		this.modData('Pokedex', 'tentacool').abilities = {0:"Clear Body", 1:"Liquid Ooze", H:"Regenerator"};
		this.modData('Pokedex', 'tentacruel').abilities = {0:"Clear Body", 1:"Liquid Ooze", H:"Regenerator"};
		this.modData('Pokedex', 'geodude').abilities = {0:"Rock Head", 1:"Sturdy", H:"Levitate"};
		this.modData('Pokedex', 'graveler').abilities = {0:"Rock Head", 1:"Sturdy", H:"Rough Skin"};
		this.modData('Pokedex', 'golem').abilities = {0:"Rock Head", 1:"Sturdy", H:"Solid Rock"};
		this.modData('Pokedex', 'slowpoke').abilities = {0:"Oblivious", 1:"Own Tempo", H:"Unaware"};
		this.modData('Pokedex', 'slowbro').abilities = {0:"Oblivious", 1:"Own Tempo", H:"Unaware"};
		this.modData('Pokedex', 'slowking').abilities = {0:"Oblivious", 1:"Own Tempo", H:"Unaware"};
		this.modData('Pokedex', 'slowbromega').abilities = {0:"Simple"};
		this.modData('Pokedex', 'gastly').abilities = {0:"Levitate", H:"White Smoke"};
		this.modData('Pokedex', 'haunter').abilities = {0:"Levitate", H:"Insomnia"};
		this.modData('Pokedex', 'gengar').abilities = {0:"Levitate", H:"Insomnia"};
		this.modData('Pokedex', 'gengarmega').abilities = {0:"Cursed Body"};
		this.modData('Pokedex', 'voltorb').abilities = {0:"Soundproof", 1:"Static", H:"Illusion"};
		this.modData('Pokedex', 'electrode').abilities = {0:"Soundproof", 1:"Static", H:"Illusion"};
		this.modData('Pokedex', 'pineco').abilities = {0:"Sturdy", H:"Levitate"};
		this.modData('Pokedex', 'forretress').abilities = {0:"Sturdy", H:"Heatproof"};
		this.modData('Pokedex', 'shuckle').abilities = {0:"Sturdy", 1:"Gluttony", H:"Mold Breaker"};
		this.modData('Pokedex', 'houndour').abilities = {0:"Early Bird", 1:"Flash Fire", H:"Dark Aura"};
		this.modData('Pokedex', 'houndoom').abilities = {0:"Early Bird", 1:"Flash Fire", H:"Dark Aura"};
		this.modData('Pokedex', 'houndoommega').abilities = {0:"Dark Aura"};
		this.modData('Pokedex', 'lotad').abilities = {0:"Swift Swim", 1:"Rain Dish", H:"Leaf Guard"};
		this.modData('Pokedex', 'lombre').abilities = {0:"Swift Swim", 1:"Rain Dish", H:"Leaf Guard"};
		this.modData('Pokedex', 'ludicolo').abilities = {0:"Swift Swim", 1:"Rain Dish", H:"Huge Power"};
		this.modData('Pokedex', 'shroomish').abilities = {0:"Effect Spore", 1:"Poison Heal", H:"Toxic Boost"};
		this.modData('Pokedex', 'breloom').abilities = {0:"Effect Spore", 1:"Poison Heal", H:"Water Absorb"};
		this.modData('Pokedex', 'sableye').abilities = {0:"Keen Eye", 1:"Stall", H:"Pickpocket"};
		this.modData('Pokedex', 'sableyemega').abilities = {0:"Analytic"};
		this.modData('Pokedex', 'zangoose').abilities = {0:"Immunity", H:"Tough Claws"};
		this.modData('Pokedex', 'seviper').abilities = {0:"Shed Skin", H:"Strong Jaw"};
		this.modData('Pokedex', 'lunatone').abilities = {0:"Levitate", H:"Ice Body"};
		this.modData('Pokedex', 'solrock').abilities = {0:"Levitate", H:"Flame Body"};
		this.modData('Pokedex', 'barboach').abilities = {0:"Oblivious", 1:"Anticipation", H:"Simple"};
		this.modData('Pokedex', 'whiscash').abilities = {0:"Oblivious", 1:"Anticipation", H:"Simple"};
		this.modData('Pokedex', 'beldum').abilities = {0:"Clear Body", H:"Magnet Pull"};
		this.modData('Pokedex', 'metang').abilities = {0:"Clear Body", H:"Magnet Pull"};
		this.modData('Pokedex', 'metagross').abilities = {0:"Clear Body", H:"Magnet Pull"};
		this.modData('Pokedex', 'metagrossmega').abilities = {0:"Heavy Metal"};
		this.modData('Pokedex', 'jirachi').abilities = {0:"Serene Grace", H:"Victory Star"};
		this.modData('Pokedex', 'gible').abilities = {0:"Sand Veil", H:"Swift Swim"};
		this.modData('Pokedex', 'gabite').abilities = {0:"Sand Veil", H:"Swift Swim"};
		this.modData('Pokedex', 'garchomp').abilities = {0:"Sand Veil", H:"Swift Swim"};
		this.modData('Pokedex', 'garchompmega').abilities = {0:"Hyper Cutter"};
		this.modData('Pokedex', 'swinub').abilities = {0:"Oblivious", 1:"Snow Cloak", H:"Sand Force"};
		this.modData('Pokedex', 'piloswine').abilities = {0:"Oblivious", 1:"Snow Cloak", H:"Sand Force"};
		this.modData('Pokedex', 'mamoswine').abilities = {0:"Oblivious", 1:"Snow Cloak", H:"Skill Link"};
		this.modData('Pokedex', 'palkia').abilities = {0:"Pressure", H:"Forewarn"};
		this.modData('Pokedex', 'dialga').abilities = {0:"Pressure", H:"Light Metal"};
		this.modData('Pokedex', 'heatran').abilities = {0:"Flash Fire", H:"Weak Armor"};
		this.modData('Pokedex', 'giratina').abilities = {0:"Pressure", H:"Mummy"};
		this.modData('Pokedex', 'giratinaorigin').abilities = {0:"Pressure", H:"Insomnia"};
	}
};