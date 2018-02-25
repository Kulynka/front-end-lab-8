function showResult(fighter) {
	console.log('Fighter', fighter.getName());
	console.log('- Combat stats:', fighter.getCombatHistory());
	console.log('- Properties:', fighter.getStats());
}

function fighter(Object) {
	let history = {
		wins: 0,
		loses: 0
	}

	function getName() {
		return Object.name
	}

	function block() {
		return Math.random() < 0.5;
	}

	function getStats() {
		return Object;
	}

	function getCombatHistory() {
		return history;
	}

	function fight(enemyFighter) {
		if (block()) {
			return false;
		} else {
			enemyFighter.getStats().hp -= Object.attack;
			if (enemyFighter.getStats().hp <= 0) {
				enemyFighter.getCombatHistory().loses++;
				history.wins++;
			}
			return true;
		}
	}
	return {
		getName,
		getStats,
		getCombatHistory,
		fight
	}
}


var fighter1 = fighter({
	name: 'John',
	attack: 100,
	hp: 100
});
var fighter2 = fighter({
	name: 'Kayn',
	attack: 50,
	hp: 300
});
var fighter3 = fighter({
	name: 'Bill',
	attack: 40,
	hp: 100
});

fighter1.fight(fighter2);
fighter1.fight(fighter3);


showResult(fighter1);


showResult(fighter2);


showResult(fighter3);
