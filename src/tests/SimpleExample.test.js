import { expect, test } from 'vitest'

const user = {
    name: 'Matheus',
    age: 25
}

test('Matheus is 25', () => {
    expect(user.name).toBe('Matheus')
    expect(user.age).toBe(25)
})