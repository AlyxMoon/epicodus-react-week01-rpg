import * as gameState from '@/lib/state'

describe('state functionality', () => {
  describe('unit creation stuff', () => {
    it('createNewUnit() does that', () => {
      expect(gameState.createNewUnit('hi', 1, 1, 1)).toEqual({
        name: 'hi', health: 1, attack: 1, defense: 1,
      })

      expect(gameState.createNewUnit('player', 10, 2, 3)).toEqual({
        name: 'player', health: 10, attack: 2, defense: 3,
      })
    })

    it('createNewHero() correctly sets values', () => {
      expect(gameState.createNewHero()).toEqual({
        name: 'hero', health: 100, attack: 1, defense: 1,
      })
    })

    it('createNewRat() correctly sets values', () => {
      expect(gameState.createNewRat()).toEqual({
        name: 'rat', health: 10, attack: 1, defense: 1,
      })
    })

    it('createNewSlime() correctly sets values', () => {
      expect(gameState.createNewSlime()).toEqual({
        name: 'slime', health: 15, attack: 2, defense: 3,
      })
    })

    it('createNewSkeleton() correctly sets values', () => {
      expect(gameState.createNewSkeleton()).toEqual({
        name: 'skeleton', health: 25, attack: 5, defense: 5,
      })
    })
  })

  describe('updateUnitState()', () => {
    it('will update the state for a property for a unit', () => {
      const unit = gameState.createNewUnit('', 100, 1, 1)
      const updated = gameState.updateUnitState(unit, 'attack', 2)

      expect(updated).toEqual({
        name: '', health: 100, attack: 3, defense: 1,
      })
    })
  })
})
