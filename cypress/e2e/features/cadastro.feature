Feature: Cadastro de pessoa usuária

  Scenario: Cadastro com dados válidos
    Given que o usuário está na página de cadastro
    When preenche o campo "Nome civil ou social" com "Ana Silva"
    And preenche o campo "Sobrenome" com "Teste"
    And preenche o campo "E-mail" com "qa.lacrei.auto@gmail.com"
    And preenche o campo "Confirme seu e-mail" com "qa.lacrei.auto@gmail.com"
    And preenche o campo "Senha" com "Teste123@"
    And preenche o campo "Confirme sua senha" com "Teste123@"
    And marca os checkboxes de aceite
    And clica no botão "Cadastrar"
    Then é redirecionado para a página de verificação de e-mail