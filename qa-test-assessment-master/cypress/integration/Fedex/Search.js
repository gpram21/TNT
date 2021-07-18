/// <reference types="Cypress" />



  describe('Tutorialspoint Test', function () {
    
    beforeEach(function () {
        //cy.visit(Cypress.env('url'));
        cy.visit('http://localhost:4200/')
        cy.fixture('TestData').then(function (data) {
            this.data = data
        })
    })



 // test case
     it('Verify character search with a valid value', function (){
        cy.SearchType(this.data[0].SeacrhTypeVal,this.data[0].character)      
        cy.VerifyResult(this.data[0].Value1,this.data[0].Value2,this.data[0].Value3,this.data[0].Value4,this.data[0].SeacrhTypeVal)
}) 


 
it('Verify character search with invalid value', function (){
    cy.SearchType(this.data[1].SeacrhTypeVal,this.data[1].character)      
    cy.VerifyEmptyResult(this.data[1].Value1)

})


it('Verify planet search with invalid value', function (){
   
    cy.SearchType(this.data[2].SeacrhTypeVal,this.data[2].character)      
    cy.VerifyEmptyResult(this.data[2].Value1)    
})

it('Verify planet search with a valid value', function (){

cy.SearchType(this.data[3].SeacrhTypeVal,this.data[3].character)      
cy.VerifyResult(this.data[3].Value1,this.data[3].Value2,this.data[3].Value3)

}) 





 
it('Verify character resulting in multiple value', function (){
    let values_set1 = []
    let values_set2 = []
    


    cy.get('#people').select
    cy.get('#query').type('Darth')       
    cy.get('.btn').click()

    cy.get(':nth-child(1) > app-character > .card > .card-body')
    .find('div.row')
    .each(($el, $index) => {
       cy.wrap($el)
        .invoke('text')
        .then(text => {
            cy.log(text.trim())
            values_set1.push(text.trim())
            })
         })
        .then(() => expect(values_set1).to.deep
        //.eq(["Birth year:","Gender:","Eye color:","Skin color:"]))          
        .eq(["Gender: male","Birth year: 41.9BBY","Eye color: yellow","Skin color: white"]))  
        
    cy.get(':nth-child(2) > app-character > .card > .card-body')                
    .find('div.row')
    .each(($el, $index) => {
       cy.wrap($el)
        .invoke('text')
        .then(text => {    
            cy.log(text.trim())
            values_set2.push(text.trim())
            })
         })
        .then(() => expect(values_set2).to.deep
        //.eq(["male","54BBY","yellow","red"]))          
        .eq(["Gender: male","Birth year: 54BBY","Eye color: yellow","Skin color: red"]))     
}) 



});


