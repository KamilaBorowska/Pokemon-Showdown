'use strict';

exports.BattleScripts = {
	init: function () {
		this.modData('Pokedex', 'archeops').abilities['1'] = 'Vital Spirit';
		this.modData('Pokedex', 'porygonz').types = ['Normal', 'Ghost'];
		this.modData('Pokedex', 'weezing').types = ['Poison', 'Steel'];
		this.modData('Pokedex', 'moltres').abilities['1'] = 'Magic Guard';
		this.modData('Pokedex', 'abomasnowmega').abilities['0'] = 'Technician';
		this.modData('Pokedex', 'cradily').abilities['1'] = 'Sand Stream';
		this.modData('Pokedex', 'froslass').abilities['1'] = 'Prankster';
		this.modData('Learnsets', 'absol').learnset.partingshot = ['6T'];
		this.modData('Pokedex', 'goodra').abilities['1'] = 'Protean';
		this.modData('Pokedex', 'entei').abilities['1'] = 'Defiant';
		this.modData('Pokedex', 'milotic').abilities['H'] = 'Multiscale';
		this.modData('Pokedex', 'empoleon').abilities['1'] = 'Lightning Rod';
		this.modData('Learnsets', 'reuniclus').learnset.voltswitch = ['6T'];
		this.modData('Pokedex', 'steelixmega').abilities['0'] = 'Arena Trap';
		this.modData('Pokedex', 'audinomega').abilities['0'] = 'Simple';
		this.modData('Learnsets', 'ampharos').learnset.wish = ['6T'];
		this.modData('Pokedex', 'absolmega').types = ['Dark', 'Fairy'];
		this.modData('Learnsets', 'pangoro').learnset.suckerpunch = ['6T'];
		this.modData('Pokedex', 'rotomfan').types = ['Electric', 'Steel'];
		this.modData('Learnsets', 'rotomfan').learnset.flashcannon = this.data.Learnsets.rotomfan.learnset.airslash;
		this.modData('Learnsets', 'rotomfan').learnset.airslash = null;
		this.modData('Learnsets', 'mantine').learnset.roost = ['6T'];
		this.modData('Learnsets', 'pidgeot').learnset.focusblast = ['6T'];
		this.modData('Pokedex', 'granbull').abilities['1'] = 'Fur Coat';
		this.modData('Pokedex', 'aggronmega').types = ['Steel', 'Dragon'];
		this.modData('Learnsets', 'floatzel').learnset.bellydrum = ['6T'];
		this.modData('Pokedex', 'forretress').abilities['1'] = 'Water Absorb';
		this.modData('Learnsets', 'bronzong').learnset.recover = ['6T'];
		this.modData('Learnsets', 'sandslash').learnset.thousandarrows = ['6T'];
		this.modData('Movedex', 'thousandarrows').isUnreleased = false;
		this.modData('Learnsets', 'braviary').learnset.extremespeed = ['6T'];
		this.modData('Pokedex', 'cacturne').abilities['1'] = 'Sand Rush';
		this.modData('Pokedex', 'beedrillmega').types = ['Bug', 'Ground'];
		this.modData('Pokedex', 'swanna').abilities['1'] = 'Gale Wings';
		this.modData('Pokedex', 'kyurem').abilities['1'] = 'Sheer Force';
		this.modData('Pokedex', 'donphan').types = ['Ground', 'Fairy'];
		this.modData('Pokedex', 'virizion').abilities['1'] = 'Trace';
		this.modData('Pokedex', 'gastrodon').abilities['H'] = 'Poison Heal';
		this.modData('Learnsets', 'krookodile').learnset.dragondance = ['6T'];
		this.modData('Pokedex', 'latiosmega').types = ['Dragon', 'Ghost'];
		this.modData('Pokedex', 'latiosmega').abilities['0'] = 'Analytic';
		this.modData('Pokedex', 'banettemega').types = ['Ghost', 'Fighting'];
		this.modData('Learnsets', 'banette').learnset.drainpunch = ['6T'];
		this.modData('Pokedex', 'torterra').abilities['1'] = 'Drought';
		this.modData('Pokedex', 'muk').types = ['Poison', 'Dark'];
		this.modData('Pokedex', 'muk').abilities['0'] = 'Regenerator';
		this.modData('Pokedex', 'cameruptmega').abilities['0'] = 'Desolate Land';
		this.modData('Pokedex', 'zoroark').types = ['Dark', 'Fighting'];
		this.modData('Learnsets', 'zoroark').learnset.vacuumwave = ['6T'];
		this.modData('Learnsets', 'jolteon').learnset.spikes = ['6T'];
		this.modData('Pokedex', 'cobalion').abilities['1'] = 'Magnet Pull';
		this.modData('Learnsets', 'sceptile').learnset.seedflare = ['6T'];
		this.modData('Pokedex', 'gogoat').abilities['1'] = 'Thick Fat';
	}
};
