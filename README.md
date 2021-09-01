# Epicodus React Week 01 | RPG

## Planning Notes
player stats:
- attack
- defense
- health

- need to change state

Overall functionality:
- updateState()

- updateAttack(character) // calls updateState and does that thing
- updateDefense(character) // calls updateState and does that thing
- updateHealth(character) // calls updateState and does that thing


have different heroes
have different items
- health potion
- attack potion
- defense potion

function game () {
   const player = createNewHero()
   // { health: 100, attack: 1, defense: 1 }

   const enemy = createNewEnemy()
   // { health: 10, attack: 1, defense: 1 }

   const [updatedPlayer, updatedEnemy] = makeThemFight(player, enemy)

   if (isDead(updatedPlayer)) {
      // do stuff
   }

   if (isDead(enemy)) {
      // do stuff
   }

   useHealthPotion(player)
   useAttackPotion(player)
   useDefensePotion(player)
}
