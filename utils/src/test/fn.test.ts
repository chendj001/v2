import { expect, test } from 'vitest'
import {getHero} from '../fn'

test('函数-getHero',()=>{
    expect(getHero()).toBe('1.0.0')
})