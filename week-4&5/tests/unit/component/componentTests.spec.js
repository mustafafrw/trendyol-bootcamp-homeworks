import { shallowMount } from '@vue/test-utils'

import StarShipDetail from '@/components/Starship/StarShipDetail'
import StarShip from '@/components/Starship/StarShip'
import Search from '@/components/Search/Search'
import Breadcrumb from '@/components/Shared/Breadcrumb'

describe('Component Tests', () => {
    it('should print starship.name to StarShipDetail component', () => {
    
        //Arrange
        let starship = {
            name: 'Test Starship'
        }

        // Act
        const wrapper = shallowMount(StarShipDetail,{
            propsData: {
                starship
            }
        })

        // Assert
        expect(wrapper.text())
            .toContain(starship.name)
    })

    it('should print starship.name to Starship component', () => {
    
        //Arrange
        let starship = {
            name: 'Test Starship'
        }

        // Act
        const wrapper = shallowMount(StarShip, {
            propsData: {
                starship
            }
        })

        // Assert
        expect(wrapper.text())
            .toContain(starship.name)
    })

    it('should send inputs value to "query" data while searching', async () => {
        //Arrange
        let query = "test"

        // Act
        const wrapper = shallowMount(Search)
        const searchInput = wrapper.find("input")

        await searchInput.setValue("test")

        // Assert
        expect(wrapper.vm.query)
            .toEqual(query)
    })

    it('should load the breadcrumb data', async () => {
        //Arrange
        let breadCrumbItems= [
            {
                text: "test",
                href: "test"
            }
        ]

        // Act
        const wrapper = shallowMount(Breadcrumb, {
            propsData: {
                breadCrumbItems
            }
        })

        // Assert
        expect(wrapper.vm.items)
            .toContain(breadCrumbItems[0])
    })
})