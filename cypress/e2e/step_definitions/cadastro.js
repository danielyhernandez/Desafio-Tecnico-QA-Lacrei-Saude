import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let emailDinamico

Given('que o usuário está na página de cadastro', () => {
  emailDinamico = `qa.lacrei.${Date.now()}@gmail.com`
  cy.visit('/saude/paciente/cadastrar/')
})

When('preenche o campo {string} com {string}', (campo, valor) => {
  const campos = {
    'Nome civil ou social': '#firstName',
    'Sobrenome': '#lastName',
    'E-mail': '#email',
    'Confirme seu e-mail': '#email2',
    'Senha': '#password1',
    'Confirme sua senha': '#password2'
  }
  const valorFinal = valor === 'qa.lacrei.auto@gmail.com' ? emailDinamico : valor
  cy.get(campos[campo]).type(valorFinal)
})

When('marca os checkboxes de aceite', () => {
  cy.get('#acceptedPrivacyDocument').check({ force: true })
  cy.get('#is18YearsOldOrMore').check({ force: true })
})

When('clica no botão {string}', (botao) => {
  cy.contains('button', botao).click({ force: true })
})

Then('é redirecionado para a página de verificação de e-mail', () => {
  cy.url().should('include', '/verificar-email')
})