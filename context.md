# Contexto do Projeto FormularioFeedback

## Usuários do Sistema

### Supervisor Geral
- **Felipe** — acessa a página **View** para visualizar todos os feedbacks recebidos.

### Supervisores de Campo
Cada um possui sua própria equipe:
- Milton
- Weverton
- Arthur Gomes
- Igo

## Fluxo de Uso

- Os feedbacks são enviados majoritariamente pelo **celular** dos supervisores de campo.
- O sistema deve priorizar **facilidade de uso mobile**.
- O supervisor geral (Felipe) visualiza todos os feedbacks na página **View**.

## Tipos de Feedback

- Técnico
- Comportamental
- Segurança
- Procedimento

## Campos do Formulário

| Campo | Descrição |
|---|---|
| Equipe | Equipe do supervisor |
| Técnico avaliado | Nome do técnico que está recebendo o feedback |
| Data | Data do feedback |
| Tipo de feedback | Técnico / Comportamental / Segurança / Procedimento |
| Natureza | A natureza da ocorrência |
| Gravidade | Nível de gravidade |
| Ação requerida | Ação necessária após o feedback |
| Descrição | Descrição detalhada da situação |

## Stack / Tecnologia

- **Backend / Banco de dados:** Supabase
- **Hospedagem / Deploy:** Netlify
