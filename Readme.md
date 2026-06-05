# Desafio Técnico QA – Lacrei Saúde

## Sobre o Projeto
Este repositório contém a documentação e os artefatos produzidos durante a execução do Desafio Técnico de Quality Assurance da Lacrei Saúde.

O objetivo foi validar os principais fluxos da plataforma, identificando problemas de qualidade, registrando evidências, documentando bugs e propondo melhorias para a experiência da pessoa usuária.

---

## Ambiente de Testes
- **URL:** https://paciente-staging.lacreisaude.com.br
- **Dispositivo:** Mobile Android versão 14
- **Navegador:** Google Chrome

---

## Ferramentas Utilizadas

| Categoria | Ferramenta |
|---|---|
| Testes Funcionais | Gherkin |
| Automação | Cypress + Cucumber |
| Acessibilidade | Lighthouse + DevTools |
| Performance | Lighthouse + K6 |
| Responsividade | Chrome DevTools |
| CI/CD | GitHub Actions |
| Gestão de Bugs | GitHub Issues + Notion |

---

## Estrutura do Projeto
## Estrutura do Projeto

```text
cypress/
├── e2e/
│   ├── features/
│   │   └── cadastro.feature
│   └── step_definitions/
│       └── cadastro.js
├── support/
│   └── e2e.js

.github/
└── workflows/
    └── cypress.yml

cypress.config.js
package.json
README.md
```

---

## Como Configurar o Ambiente

### Pré-requisitos
- Node.js v22+
- npm

### Instalação
```bash
npm install
```

---

## Como Executar os Testes

### Executar no terminal (headless)
```bash
npx cypress run --spec "cypress/e2e/features/cadastro.feature"
```

### Executar com interface visual
```bash
npx cypress open
```

---

## Fluxos Testados

### Cadastro da Pessoa Usuária
- Cadastro com dados válidos
- Cadastro com e-mail inválido
- Cadastro com senha inválida
- Cadastro com senhas diferentes
- Cadastro com campos obrigatórios vazios
- Cadastro sem aceite dos checkboxes
- Verificação de e-mail após cadastro

### Busca de Profissional de Saúde
- Busca com termo válido
- Busca sem filtro
- Busca com termo inválido
- Acesso ao perfil do profissional

### Agendamento de Consulta
- Envio de código de verificação
- Confirmação com código válido
- Confirmação com código inválido
- Validação de número de celular
- Limite de tentativas de envio de código

### Recuperação de Senha
- Redefinição com e-mail válido
- Campo obrigatório vazio
- E-mail não cadastrado
- Alteração de senha com sucesso
- Senhas incompatíveis
- Reutilização da senha anterior

---

## Resumo da Execução

| Métrica | Quantidade |
|---|---|
| Casos de Teste Criados | 23 |
| Casos de Teste Executados | 23 |
| Passou | 21 |
| Falhou | 2 |
| Bloqueado | 0 |
| Bugs Registrados | 3 |

---

## Bugs Encontrados

| ID | Descrição | Prioridade |
|---|---|---|
| BUG-01 | Ausência de confirmação visual após agendamento | Alta |
| BUG-02 | Sistema não valida número de celular inválido | Média |
| BUG-RESP-001 | Widget VLibras sobrepõe botão em mobile | Média |

---

## Resultados dos Testes Complementares

### Performance (Lighthouse)
| Métrica | Resultado | Status |
|---|---|---|
| Performance | 43/100 | 🟠 Requer melhorias |
| Acessibilidade | 96/100 | ✅ Excelente |
| Best Practices | 77/100 | 🟠 Requer melhorias |
| First Contentful Paint | 1.1s | ✅ Bom |
| Largest Contentful Paint | 9.3s | 🔴 Crítico |
| Total Blocking Time | 1.580ms | 🔴 Crítico |

### Teste de Carga (K6)
| Métrica | Resultado | Status |
|---|---|---|
| Usuários simultâneos | 30 VUs | - |
| Total de requisições | 900 | - |
| Requisições com sucesso | 240 | 🔴 Crítico |
| Taxa de falha | 73% | 🔴 Crítico |
| P95 Response Time | 28ms | ✅ Bom |

### Acessibilidade
| Critério | Status |
|---|---|
| Nota Lighthouse | ✅ 96/100 |
| Navegação por teclado | ✅ Aprovado |
| Contraste visual | ✅ Aprovado |

### Responsividade
| Página | Mobile | Desktop |
|---|---|---|
| Login | ✅ | ✅ |
| Cadastro | ✅ | ✅ |
| Busca | ✅ | ✅ |
| Resultados | ⚠️ | ✅ |

---

## Checklist de Segurança
- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de e-mail
- ✅ Validação de senha com requisitos mínimos
- ✅ Validação de confirmação de senha
- ✅ Controle de tentativas de envio de código SMS
- ✅ Validação de redefinição de senha
- ✅ Bloqueio de cadastro sem aceite dos termos

---

## Processo de Rollback
Como os testes são executados em ambiente de homologação (staging), não há impacto direto em ambiente produtivo. Em caso de falha na automação, o rollback pode ser realizado por meio da reversão do commit responsável pelas alterações e nova execução da pipeline.

---

## Documentação Completa
- 📋 **Notion:** [https://danih-programacao.notion.site/Lacrei-Sa-de-Desafio-QA-37308852179d80baab76e37c83554815]
- 👩‍💻 **QA Responsável:** Daniely Cristina Hernandez
- 📅 **Data:** Junho/2026