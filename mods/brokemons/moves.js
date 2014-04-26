function weakToType(weakness) {
	return function(source, target, pokemon) {
		var type = source.type || source;
		var totalTypeMod = 0;
		var types = target.getTypes && target.getTypes() || target.types;
		for (var i=0; i<types.length; i++) {
			if (!this.data.TypeChart[types[i]]) continue;
			if (types[i] === weakness) {
				totalTypeMod++;
				continue;
			}
			var typeMod = this.data.TypeChart[types[i]].damageTaken[type];
			if (typeMod === 1) { // super-effective
				totalTypeMod++;
			}
			if (typeMod === 2) { // resist
				totalTypeMod--;
			}
		}
		return totalTypeMod;
	}
}

exports.BattleMovedex = {
	// Acid - 70 BP, 100 Acc, hits Steel-types super effectively (16 PP)
	acid: {
		inherit: true,
		basePower: 70,
		pp: 10,
		affectedByImmunities: false,
		getEffectiveness: weakToType('Steel')
	},
	// Acid Spray - 40 BP, 100 Acc, 100% chance to lower target's SpD by 2 stages, hits Steel-types super effectively (16 PP)
	acidspray: {
		inherit: true,
		affectedByImmunities: false,
		getEffectiveness: weakToType('Steel')
	},
	// Aerial Ace - 75 BP, -- Acc, never misses
	aerialace: {
		inherit: true,
		basePower: 75
	},
	// Air Slash - 85 BP, 90 Acc, 20% chance to flinch target
	airslash: {
		inherit: true,
		basePower: 85,
		accuracy: 90,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch'
		}
	},
	// Air Cutter - 70 BP, 100 Acc, high critical hit ratio
	aircutter: {
		inherit: true,
		basePower: 70,
		accuracy: 100
	},
	// Aqua Tail - 45 BP, 100 Acc, hits twice
	aquatail: {
		inherit: true,
		basePower: 45,
		accuracy: 100,
		multihit: 2
	},
	// Aqua Ring - Restores 1/16 of the pokemon on the user's side max HP each turn, lasts for 10 turns, lasts even if user switches out
	// Thanks go to sirDonovan, for helping me with making this work.
	aquaring: {
		inherit: true,
		volatileStatus: false,
		sideCondition: 'aquaring',
		effect: {
			duration: 10,
			onStart: function(side) {
				this.add('-sidestart', side, 'move: Aqua Ring');
			},
			onResidualOrder: 5,
			onResidualSubOrder: 2,
			onResidual: function(side) {
				var target = side.active[this.effectData.sourcePosition];
				this.effectData.hp = target.maxhp/16;
				if (!target.fainted) {
					this.heal(this.effectData.hp, target, target);
				}
			},
			onEnd: function(side) {
				this.add('-sideend', side, 'move: Aqua Ring');
			}
		},
		target: "allySide"
	},
	// Arm Thrust - 25 BP, 100 Acc, hits 2-5 times
	armthrust: {
		inherit: true,
		basePower: 25
	},
	// Aromatic Mist - Heals 50% of user's HP and raises user's SpD by 1 stage (16 PP)
	aromaticmist: {
		inherit: true,
		heal: [1,2]
	},
	// Assurance - 40 BP, 100 Acc, +1 priority (48 BP)
	assurance: {
		inherit: true,
		basePower: 40,
		basePowerCallback: function(pokemon, target) {
			if (pokemon.volatiles.assurance && pokemon.volatiles.assurance.hurt) {
				this.debug('Boosted for being damaged this turn');
				return 80;
			}
			return 40;
		},
		priority: 1,
		pp: 30
	},
	// Aura Sphere - 90 BP, -- Acc, never misses
	aurasphere: {
		inherit: true,
		basePower: 90
	},
	// Barrage - 25 BP, 100 Acc, Steel type, hits 2-5 times
	barrage: {
		inherit: true,
		basePower: 25,
		accuracy: 100,
		type: "Steel"
	},
	// Beat Up - 25 BP, 100 Acc, hits 2-5 times
	beatup: {
		num: 251,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		desc: "Deals damage to one adjacent target and hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "beatup",
		name: "Beat Up",
		pp: 20,
		priority: 0,
		multihit: [2,5],
		secondary: false,
		target: "normal",
		type: "Dark"
	},
	// Blast Burn - 90 BP, 100 Acc, 50% chance to burn the foe.
	blastburn: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		desc: "Deals damage to one adjacent target with a 50% chance to burn it.",
		shortDesc: "50% chance to burn the target.",
		self: {},
		secondary: {
			chance: 50,
			status: 'brn'
		}
	},
	// Blizzard - 120 BP, 75 Acc, 10% chance to freeze target
	blizzard: {
		inherit: true,
		basePower: 120,
		accuracy: 75
	},
	// Bone Club - 70 BP, 100 Acc, hits Flying-types super effectively (16 PP)
	boneclub: {
		inherit: true,
		accuracy: 100,
		basePower: 70,
		pp: 10,
		affectedByImmunities: false,
		getEffectiveness: weakToType('Flying')
	},
	// Bone Rush - 25 BP, 100 Acc, hits Flying-types neutrally, hits 2-5 times
	bonerush: {
		inherit: true,
		accuracy: 100,
		affectedByImmunities: false
	},
	// Bonemerang - 50 BP, 90 Acc, hits Flying-types neutrally, hits twice
	bonemerang: {
		inherit: true,
		affectedByImmunities: false
	},
	// Boomburst - 140 BP, 90 Acc, lowers user's SpA by 2 stages
	boomburst: {
		inherit: true,
		accuracy: 90,
		self: {
			boosts: {
				spa: -2
			}
		}
	},
	// Bubblebeam - 70 BP, 30% chance to lower Speed by 1 stage. (24 PP)
	bubblebeam: {
		inherit: true,
		basePower: 70,
		pp: 15,
		secondary: {
			chance: 30,
			boosts: {
				spe: -1
			}
		}
	},
	// Bug Bite - 40 BP, 100 Acc, +1 priority
	bugbite: {
		inherit: true,
		basePower: 40,
		priority: 1
	},
	// Chatter - 70 BP, 100 Acc, Confuses both the user and the opponent. (8 PP)
	chatter: {
		inherit: true,
		accuracy: 100,
		basePower: 70,
		onModifyMove: function () {},
		pp: 5,
		secondary: {
			chance: 100,
			onHit: function(target, source) {
				target.addVolatile('confusion');
				source.addVolatile('confusion');
			}
		}
	},
	// Charge Beam - 60 BP, 95 Acc, 100% chance to raise user's Sp. Attack
	chargebeam: {
		inherit: true,
		accuracy: 95,
		basePower: 60,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1
				}
			}
		}
	},
	// Chip Away - 90 BP, 100 Acc, Rock type, ignores target's stat changes
	chipaway: {
		inherit: true,
		basePower: 90,
		type: 'Rock'
	},
	// Clear Smog - 75 BP, 100 Acc, removes target's stat changes
	clearsmog: {
		inherit: true,
		basePower: 75,
		accuracy: 100
	},
	// Comet Punch - 20 BP, 100 Acc, Fighting type, hits 2-5 times, +1 priority
	cometpunch: {
		inherit: true,
		priority: 1,
		basePower: 20,
		accuracy: 100,
		type: 'Fighting'
	},
	// Confusion - 40 BP, 100 Acc, +1 priority, 20% chance to confuse target
	confusion: {
		inherit: true,
		priority: 1,
		basePower: 40,
		secondary: {
			chance: 20,
			volatileStatus: 'confusion'
		}
	},
	// Constrict - 55 BP, 100 Acc, 100% chance to lower the target's Speed
	constrict: {
		inherit: true,
		basePower: 55,
		secondary: {
			chance: 100,
			boosts: {
				spe: -1
			}
		}
	},
	// Cosmic Power - Heals 25% of user's health, and raises the user's Defense and Special Defense by one stage each (16 PP)
	cosmicpower: {
		inherit: true,
		heal: [1,4],
		pp: 10
	},
	// Crabhammer - 120 BP, 85 Acc, high critical hit ratio (8 PP)
	crabhammer: {
		inherit: true,
		basePower: 120,
		accuracy: 85,
		pp: 5
	},
	// Cross Chop - 90 BP, 100 Acc, 10% chance to flinch the target (16 PP)
	crosschop: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		critRatio: 0,
		secondary: {
			chance: 10,
			volatileStatus: 'flinch'
		},
		pp: 10
	},
	// Cross Poison  - 45 BP, 100 Acc, hits twice, 20% chance to badly poison the target (32 PP)
	crosspoison: {
		inherit: true,
		basePower: 45,
		accuracy: 100,
		desc: "Deals damage to one adjacent target and hits twice in one turn. Has a 20% chance to Badly Poison target.",
		shortDesc: "Hits twice in one turn. 20% chance to Badly Poison.",
		multihit: 2,
		critRatio: 0,
		secondary: {
			chance: 20,
			volatileStatus: 'tox'
		},
		pp: 20
	},
	// Crush Claw - 85 BP, 100 Acc, 50% chance to lower target's Defense (8 PP)
	crushclaw: {
		inherit: true,
		basePower: 85,
		accuracy: 100,
		desc: "Deals damage to one adjacent target. Has a 50% chance to lower target's Defense.",
		shortDesc: "50% chance to lower target's Defense.",
		type: "Flying",
		pp: 5
	},
	// Dazzling Gleam - 100 BP, 100 Acc, no additional effect (24 PP)
	dazzlinggleam: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
		pp: 15
	},
	// Dark Void - Puts the target to sleep. User loses 1/16th of their HP.
	darkvoid: {
		inherit: true,
		onHit: function(target, source) {
			this.directDamage(source.maxhp/16, source, source);
		}
	},
	// Defog - -- BP, 100 Acc, removes all entry hazards on feild (32 pp)
	defog: {
		inherit: true,
		accuracy: 100,
		pp: 20,
		onHit: function(target, source) {
			if (!target.volatiles['substitute']) this.boost({evasion:-0});
			var sideConditions = {reflect:1, lightscreen:1, safeguard:1, mist:1, spikes:1, toxicspikes:1, stealthrock:1, stickyweb:1};
			for (var i in sideConditions) {
				if (target.side.removeSideCondition(i)) {
					this.add('-sideend', target.side, this.getEffect(i).name, '[from] move: Defog', '[of] '+target);
				}
			}
			for (var i in sideConditions) {
				if (i === 'reflect' || i === 'lightscreen') continue;
				if (source.side.removeSideCondition(i)) {
					this.add('-sideend', source.side, this.getEffect(i).name, '[from] move: Defog', '[of] '+source);
				}
			}
		}
	},
	//Disarming Voice - 40 BP, 100 Acc, +1 priority (48 PP)
	disarmingvoice: {
		inherit: true,
		accuracy: 100,
		desc: "Deal Damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		pp: 30,
		priority: 1
	},
	//Dizzy Punch - 80 BP, 100 Acc, 60% chance to confuse target (8 PP)
	dizzypunch: {
		inherit: true,
		basePower: 80,
		desc: "Deals damage to target with a 60% chance to confuse it. Makes contact. Damage is boosted to 1.2x by the ability Iron Fist.",
		shortDesc: "60% chance to confuse the target.",
		pp: 5
		secondary: {
			chance: 60,
			volatileStatus: 'confusion'
		}
	},
	//Double Hit - 45 BP, 100 Acc, hits twice (16 PP)
	doublehit: {
		inherit: true,
		accuracy: 100,
		basePower: 45
	},
	//Double Kick - 45 BP, 100 Acc, hits twice (16 PP)
	doublekick: {
		inherit: true,
		basePower: 45
	},
	//Double Slap - 45 BP, 100 Acc, Fairy type, hits twice, 10% chance to flinch target (16 PP)
	doubleslap: {
		inherit: true,
		accuracy: 100,
		basepower: 45,
		desc: "Deals damage to one adjacent target and hits twice. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. Makes contact. 10% chance to flinch the target.",
		shortDesc: "Hits twice in one turn. 10% chance to flinch the target.",
		multihit: 2,
		secondary: {
			chance: 10,
			volatileStatus: 'flinch'
		},
		type: "Fairy"
	},
	//Double Edge - 110 BP, 100 Acc, Deal 1/4th damage done as recoil to the user (16 PP)
	doubleedge: {
		inherit: true,
		basePower: 110,
		desc: "Deals damage to one adjacent target. If the target lost HP, the user takes recoil damage equal to 25% that HP, rounded half up, but not less than 1HP. Makes contact.",
		shortDesc: "Has 25% recoil.",
		pp: 10,
		recoil: [25,100]
	},
	//Dragon Breath - 80 BP, 100 Acc, 30% chance to paralyze target (24 PP)
	dragonbreath: {
		inherit: true,
		basePower: 80,
		pp: 15
	},
	//Draco Meteor - 140 BP, 90 Acc, lowers user's Sp. Attack harshly
	dracometoer: {
		inherit: true,
		basePower: 140
	},
	//Dragon Pulse - 95 BP, 100 Acc
	dragonpulse: {
		inherit: true,
		basePower 95
	},
	//Dragon Rush - 40 BP, 100 Acc, +1 priority (32 PP)
	dragonrush: {
		inherit: true,
		accuracy: 100,
		basePower: 40,
		desc: "Deal Damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		pp: 20,
		priority: 1,
		secondary: false
	},
	//Draining Kiss - 60 BP, 100 Acc, heals 75% of damage inflicted on target (16 PP)
	drainingkiss: {
		inherit: true,
		basePower: 60
	},
	//Drill Peck - 80 BP, 100 Acc, 30% chance to lower foe's Defense
	drillpeck: {
		desc: "Deals damage to one adjacent or non-adjacent target with a 30% chance to lower its Defense by 1 stage. Makes contact.",
		shortDesc: "30% chance to lower target's Defense by 1.",
		secondary: {
			chance: 30,
			boosts: {
				def: -1
			}
		}
	},
	//Drill Run - 40 BP, 100 Acc, +1 priority (32 PP)
	drillrun: {
		accuracy: 100,
		basePower: 40,
		desc: "Deal Damage to one adjacent target. Priority +1.",
		shortDesc: "Usually goes first.",
		pp: 20,
		priority: 1,
		critRatio: 0,
	},
	//Dual Chop - 45 BP, 100 Acc, hits twice
	dualchop: {
		accuracy: 100,
		basePower: 45,
	},
	//Egg Bomb  - 100 BP, 100 Acc, Grass type, 10% chance to flinch target (16 PP)
	eggbomb: {
		accuracy: 100,
		desc: "Deals damage to one adjacent target. 10% chance to flinch the target.",
		shortDesc: "10% chance to flinch the target.",
		secondary: {
			chance: 10,
			volatileStatus: 'flinch'
		},
		type: "Grass"
	},
