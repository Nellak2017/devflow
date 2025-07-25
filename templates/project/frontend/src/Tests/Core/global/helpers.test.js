/* Make your property based tests here */
import { 
    /* TODO: import your functions here to Unit Test */
    clamp,
} from '../../../Core/utils/helpers.js'
import { fc } from '@fast-check/jest'

describe('clamp', () => {
    // --- Example based tests
    [
        /* enumerate them */
    ].forEach(([input, output, expected]) => {
        it(`clamp(${input}).\nExpected: ${expected}\nGot: ${output}\n`, () => {
            expect(clamp(...input)).toBe(expected) // Alter this to make it work
        })
    })
	// --- Property based tests
	it('Should clamp the value within the specified range', () => {
		fc.assert(fc.property(fc.integer(), fc.integer(), fc.integer(),
			(value, min, max) => {
				const [minValue, maxValue] = min > max ? [max, min] : [min, max]
				const result = clamp(value, min, max)
				const isClampedWithinRange = result >= minValue && result <= maxValue
				expect(isClampedWithinRange).toBe(true)
			}
		))
	})
})