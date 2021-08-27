import mainModule from '@/store/index'

describe('Main Module Tests', () => {
  it('should fetch Starships', async () => {

    const emptyStarships = []

    await mainModule.dispatch('fetchStarships')

    const actual = mainModule.getters.getStarships

    expect(actual)
      .not
      .toEqual(emptyStarships)

  })
  
  it('should search among Starships', async () => {

    const emptyStarships = []

    await mainModule.dispatch('fetchDetail', '3')

    const actual = mainModule.getters.getStarships

    expect(actual)
      .not
      .toEqual(emptyStarships)

  })
  
  it('should fetch the detail of a specific Starship', async () => {

    const emptyStarshipDetail = {}

    await mainModule.dispatch('searchStarships', 'star')

    const actual = mainModule.getters.getDetail

    expect(actual)
      .not
      .toEqual(emptyStarshipDetail)

  })

  it('should fetch the next page with Load more action', async () => {

    // must fetch first page first
    await mainModule.dispatch('fetchStarships')
    
    const firstPageLength = mainModule.getters.getStarships.length

    await mainModule.dispatch('loadMore')

    const actual = mainModule.getters.getStarships.length

    expect(actual)
      .not
      .toEqual(firstPageLength)

  })

})
