
export class TemplateSearchPage{

    clearSearchBar(){
        cy.get('input[id=searchTerm]').clear()
    }

    searchTemplate(searchTerm){
        cy.get('input[id=searchTerm]').clear().type(searchTerm)
        cy.get('[data-v-60789f99][class="tw-font-sans tw-cursor-pointer tw-border-2 tw-font-bold tw-text-white tw-uppercase tw-border-solid tw-transition-colors tw-duration-300 sm:tw-rounded-tl-none sm:tw-rounded-bl-none tw-w-full tw-text-sm tw-py-3 tw-px-4 tw-rounded tw-bg-primary-500 tw-border-primary-500 hover:tw-border-primary-700 hover:tw-bg-primary-600"]')
        .click()
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

