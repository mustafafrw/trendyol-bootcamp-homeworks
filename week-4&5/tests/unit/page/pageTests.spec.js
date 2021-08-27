import {
    createLocalVue,
    shallowMount,
} from '@vue/test-utils';

import Starships from '@/views/Starships/index'
import Starship from '@/views/Starship/index'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('Page Tests', () => {

    let actions
    let store
    let router

    beforeEach(() => {
        actions = {
          fetchStarships: jest.fn(),
          fetchDetail: jest.fn(),
        }
        store = new Vuex.Store({
          actions
        }),
        router = new VueRouter({
            params: {
                id: "1"
            }
        })
    })

    it('Starships page should dispatch fetchStarships when mounted', async () => {

        // Act
        await shallowMount(Starships, {
            store, localVue
        })

        // Assert
        expect(actions.fetchStarships)
            .toHaveBeenCalled()
    })

    it('Starship page should dispatch fetchDetail when mounted', async () => {
        // Act
        await shallowMount(Starship, {
            store, localVue, router
        })

        // Assert
        expect(actions.fetchDetail)
            .toHaveBeenCalled()
    })
})