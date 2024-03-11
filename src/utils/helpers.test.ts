import { expect, test } from 'vitest'
import { formatTime } from './helpers.ts'

test('time formatting correctly', () => {
  expect(formatTime(60)).toBe('1:00')
})
