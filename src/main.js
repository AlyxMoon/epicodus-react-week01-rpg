import * as gameState from '@/lib/state'
import '@/styles/main.css'

let player = gameState.createNewHero()
let enemy

const selectors = {
  playerCreate: '.player-create',
  playerName: '.player-name',
  playerHealth: '.player-health',
  playerAttack: '.player-attack',
  playerDefense: '.player-defense',

  enemyCreate: '.enemy-create',
  enemyName: '.enemy-name',
  enemyHealth: '.enemy-health',
  enemyAttack: '.enemy-attack',
  enemyDefense: '.enemy-defense',
}

const updateDisplay = () => {
  if (player) {
    document.querySelector(selectors.playerName)
      .innerText = player.name

    document.querySelector(selectors.playerHealth)
      .innerText = player.health

    document.querySelector(selectors.playerAttack)
      .innerText = player.attack

    document.querySelector(selectors.playerDefense)
      .innerText = player.defense
  }

  if (enemy) {
    document.querySelector(selectors.enemyName)
      .innerText = enemy.name

    document.querySelector(selectors.enemyHealth)
      .innerText = enemy.health

    document.querySelector(selectors.enemyAttack)
      .innerText = enemy.attack

    document.querySelector(selectors.enemyDefense)
      .innerText = enemy.defense
  }
}

const enemyCreateClickEvent = (event) => {
  const currentElement = event.target

  enemy = gameState[currentElement.dataset.func]()

  updateDisplay()
}

const addEventListeners = () => {
  document.querySelector(selectors.playerCreate)
    .addEventListener('click', () => {
      player = gameState.createNewHero()
      updateDisplay()
    })

  document
    .querySelectorAll(selectors.enemyCreate)
    .forEach(element => {
      element.addEventListener('click', enemyCreateClickEvent)
    })
}

const main = () => {
  updateDisplay()
  addEventListeners()
}

main()
