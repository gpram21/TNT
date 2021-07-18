class SearchPage
{
    getEditBox()
    {
        return cy.get('#query')
    }

    getButton()
    {
        return cy.get('.btn')

    }
    getCharacterResult()
    {
        return cy.get('app-character > .card > .card-body')

    }
    getPlanetsResult()
    {
        return cy.get('app-planet > .card > .card-body')  

    }


}
export default SearchPage;