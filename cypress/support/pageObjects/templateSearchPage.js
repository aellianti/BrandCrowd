
export class TemplateSearchPage{

    clearSearchBar(){
        cy.get('input[id=searchTerm]').clear()
    }

    searchTemplate(searchTerm){
        cy.get('input[id=searchTerm]').clear().type(searchTerm)
        cy.get('button').contains('search').click()
    }

    selectACategory(category){ 
        cy.get('[type="checkbox"]').then( checkBox => {
            cy.wrap(checkBox).get('[value="'+ category +'"]')
                .check({force:true})
                .should('be.checked')
        })

    }


    
}

export const onSearchPage = new TemplateSearchPage()

