let inCombat = false;

exports.NetworkMod = class {
	constructor(mod) {
		mod.hook("S_USER_STATUS", 3, ({ gameId, status }) => {
			if (gameId !== mod.game.me.gameId) return;

			if (!inCombat && status === 1) {
				inCombat = true;
				// mod.log("Entering combat, using nostrum thing");
				mod.send("C_USE_PREMIUM_SLOT", 1, {
					set: 433,
					slot: 8,
					type: 1,
					id: 280061,
				});
			} else if (inCombat && status === 0) {
				inCombat = false;
			}
		});

		// mod.hook("C_USE_PREMIUM_SLOT", 1, console.log);
	}
}
