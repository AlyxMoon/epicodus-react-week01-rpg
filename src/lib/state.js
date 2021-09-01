export const createNewUnit = (name, health, attack, defense) => ({
  name: name,
  health: health,
  attack: attack,
  defense: defense,
})

export const createNewHero = () => createNewUnit('hero', 100, 1, 1)
export const createNewRat = () => createNewUnit('rat', 10, 1, 1)
export const createNewSlime = () => createNewUnit('slime', 15, 2, 3)
export const createNewSkeleton = () => createNewUnit('skeleton', 25, 5, 5)

export const updateUnitState = (unit, property, newValue) => ({
  ...unit,
  [property]: unit[property] + newValue,
})
