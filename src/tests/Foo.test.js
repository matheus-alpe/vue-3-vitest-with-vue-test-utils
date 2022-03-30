/**
 * @vitest-environment happy-dom
 */

import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Foo from '../components/Foo.vue'

describe('Foot tests!', () => {
    it('should render', () => {
        const wrapper = mount(Foo)

        //has h1
        expect(wrapper.find('h1').exists()).toBeTruthy()

        //has input
        expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()

        //has button
        expect(wrapper.find('button').exists()).toBeTruthy()
    })

    it('should change message', async () => {
        const wrapper = mount(Foo)

        await wrapper.find('input[type="text"]').setValue('LearnVue')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('h1').text()).toEqual('LearnVue')
    })
})