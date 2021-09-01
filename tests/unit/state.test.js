import * as gameState from '@/lib/state'

describe('state functionality', () => {
  describe('createNewHero()', () => {
    it('creates a new hero, duh!', () => {
      const unit = gameState.createNewHero()

      expect(unit).toEqual({ health: 100, attack: 1, defense: 1 })
    })
  })

  describe('createNewEnemy()', () => {
    it('creates a new enemy, duh!', () => {
      const unit = gameState.createNewEnemy()

      expect(unit).toEqual({ health: 10, attack: 1, defense: 1 })
    })
  })
})
