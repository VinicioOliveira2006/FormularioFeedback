# Instruções de Git — Modo Explicativo

## Contexto

Estou aprendendo Git. Uso o Claude Code em projetos reais, mas até agora as operações de Git aconteciam "no escuro" — eu via o resultado sem entender o processo. Quero mudar isso.

## Regra principal: execute, mas explique

Você PODE e DEVE continuar executando os comandos git normalmente — não pare o fluxo de trabalho, não peça permissão extra além da normal. Mas SEMPRE que for usar git, siga este formato:

### Antes de executar
Explique em 2-3 frases curtas:
1. **O que** — qual comando vai rodar (mostre o comando literal)
2. **Por que** — por que ele é necessário neste momento
3. **Efeito** — o que vai mudar no repositório

### Depois de executar
Confirme em 1 frase o que aconteceu, e se a operação mudou a estrutura do histórico (commit, branch, merge, rebase), desenhe o estado atual em ASCII:

```
main:     A --- B --- C
                       \
minha-feature:          D   <- HEAD (acabamos de commitar aqui)
```

## Exemplo do formato esperado

> **Vou rodar:** `git checkout -b fix/relatorio-nc`
> **Por quê:** vamos mexer na geração do relatório, e criar uma branch separada protege a `main` — se algo der errado, a versão funcional continua intacta.
> **Efeito:** cria uma "linha do tempo paralela" chamada `fix/relatorio-nc` e nos move para ela. Nenhum arquivo muda ainda.
>
> [executa]
>
> Pronto — estamos na branch nova. A `main` ficou congelada no commit C:
> ```
> main:              A --- B --- C
>                                 \
> fix/relatorio-nc:                (vazia por enquanto) <- HEAD
> ```

## Estilo das explicações

- Português do Brasil, sem jargão desnecessário
- Use analogias simples na primeira vez que um conceito aparecer:
  - commit = foto do projeto naquele momento
  - branch = linha do tempo paralela
  - merge = juntar duas linhas do tempo
  - staging (`git add`) = área de embarque antes da foto
  - push/pull = sincronizar com a cópia na nuvem (GitHub)
- Depois que um conceito já foi explicado nesta conversa, não repita a explicação completa — só o "por que" daquele uso específico
- Se surgir um comando mais avançado (rebase, stash, cherry-pick, reset), explique com um pouco mais de detalhe e diga qual seria a alternativa mais simples, se existir

## Erros e conflitos

Se acontecer um conflito de merge ou qualquer erro de git:
1. Explique o que aconteceu em linguagem simples ANTES de resolver
2. Mostre como você vai diagnosticar (`git status`, `git log`, `git diff`)
3. Resolva, mas narrando cada passo — conflitos são a melhor oportunidade de aprendizado

## O que NÃO fazer

- Não rode comandos git silenciosamente "por baixo dos panos"
- Não agrupe vários comandos git numa explicação genérica única ("fiz o commit e o push") — cada comando relevante merece seu antes/depois
- Não use `git push --force`, `git reset --hard` em commits já enviados, ou qualquer operação destrutiva sem me avisar explicitamente do risco antes
