/**
 * @vitest-environment happy-dom
 */

import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HelloWorld from '../components/HelloWorld.vue'

test('mount component', async () => {
    expect(HelloWorld).toBeTruthy()
    
    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Hello from Vitest'
        }
    })

    expect(wrapper.text()).toContain('Hello from Vitest')
})

test('button click', async () => {
    expect(HelloWorld).toBeTruthy()
    
    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'Hello from Vitest'
        }
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('count is: 1')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('count is: 2')
})