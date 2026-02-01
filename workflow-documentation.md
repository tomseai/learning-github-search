# AI Workflow Dokumentácia

**Meno:** Tomas 

**Dátum začiatku:** 1.2.20026

**Dátum dokončenia:** 1.2.20026

**Zadanie:** Frontend

---

## 1. Použité AI Nástroje

Vyplň približný čas strávený s každým nástrojom:

- [ ] **Cursor IDE:** _____ hodín
- [x] **Claude Code:** 5 hodín  
- [ ] **GitHub Copilot:** _____ hodín
- [ ] **ChatGPT:** _____ hodín
- [ ] **Claude.ai:** _____ hodín
- [ ] **Iné:** 

**Celkový čas vývoja (priližne):** 5 hodín

---

## 2. Zbierka Promptov

> 💡 **Tip:** Kopíruj presný text promptu! Priebežne dopĺňaj po každej feature.


### Prompt #1: Create web with Figma design

**Nástroj:** Cluade Code  
**Kontext:** Setup projektu, MCP

**Prompt:**
```
 I want to create web with this design: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-705&m=dev
  Style guid is here https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-313&m=dev                                             
  Typography is here https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-131&m=dev
```

**Výsledok:**  ⭐⭐⭐ OK, potreboval viac úprav    

**Úpravy:**
```
Nefungoval dark mode - Fix: dark mode is not working
Pre male zariadania bolo treba opravit styly: for small devices use design https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-1036&m=dev
Este zmena zobrazenia cisiel pri malych zariadeniach bola napravo od textu: for small device counts should stay under text + vlozenie screenshotu designu 
co najprv neurobil dobre, tak som mu upresnil, ze to ma byt ako na obrazku.

Pridanie error karty, ze nemoze najst usera: Add error information https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-1522&m=dev 
```

**Poznámky:**
```
Predvytvoril som angular projet. Initializoval Claude Code. Comitol do Gitu. A zvysok si Claude poradil s problemami sam.
```

---

### Prompt #2: Next Feature: GitHub OAuth Login

**Nástroj:** Claude Code - VS Code extension
**Kontext:** OAuth implementácia

**Prompt:**
```
Next Feature: GitHub OAuth Login

**Features:**
- Login button ("Sign in with GitHub")
- OAuth flow
- Session management (login / logout)
- Display logged-in user:
  - Avatar a meno v navbar
  - Logout button
- Protected dashboard route
  - Show public repos list (top 10):
    - Repo name (link na GitHub)
    - Description
    - Stars count
    - Primary language
    - Last updated
```

**Výsledok:**  ⭐⭐⭐⭐ Dobré, potreboval malé úpravy    

**Úpravy:**
```
Len aby pridal /server/node_modules do .gitignore.
A nech updatne readme.md a claude.md
```

**Poznámky:**
```
Pouzity Plan mode vo VS Code extension.
Claude sa opytal aky pouzit sposob pre auth. Musel som to v inom chate prebrat s Claude Opus a rozhodol som sa pre minimalny express BE.
```

---

## 3. Problémy a Riešenia 

> 💡 **Tip:** Problémy sú cenné! Ukazujú ako riešiš problémy s AI.

### Problém #1: _________________________________

**Čo sa stalo:**
```
[Detailný popis problému - čo nefungovalo? Aká bola chyba?]
```

**Prečo to vzniklo:**
```
[Tvoja analýza - prečo AI toto vygeneroval? Čo bolo v prompte zlé?]
```

**Ako som to vyriešil:**
```
[Krok za krokom - čo si urobil? Upravil prompt? Prepísal kód? Použil iný nástroj?]
```

**Čo som sa naučil:**
```
[Konkrétny learning pre budúcnosť - čo budeš robiť inak?]
```

**Screenshot / Kód:** [ ] Priložený

---

### Problém #2: _________________________________

**Čo sa stalo:**
```
```

**Prečo:**
```
```

**Riešenie:**
```
```

**Learning:**
```
```

## 4. Kľúčové Poznatky

### 4.1 Čo fungovalo výborne

**1.** 
```
Claude Code pre Figma MCP - dobre sinacital design a style
```

**2.** 
```
Claude Code pre OAuth implementacia
```

**3.** 
```
```

---

### 4.2 Čo bolo náročné

**1.** 
```
Rozhodnut sa ake Auth riesenie pouzit.
```

---

### 4.3 Best Practices ktoré som objavil

**1.** 
```
```

---

### 4.4 Moje Top 3 Tipy Pre Ostatných

**Tip #1:**
```
```

---

## 6. Reflexia a Závery

### 6.1 Efektivita AI nástrojov

**Ktorý nástroj bol najužitočnejší?** Claude Code

**Prečo?**
```
celkom dobre funguje, az na par obmedzeni ako uprava promtu. Na to je lepsie pouzit Extension v IDE, ktory ponuka par vylepseni navyse.
```

**Ktorý nástroj bol najmenej užitočný?** _________________________________

**Prečo?**
```
```

---

### 6.2 Najväčšie prekvapenie
```
Pre niektore veci je AI uz velmi chytra
```

---

### 6.3 Najväčšia frustrácia
```
Niekedy ta chybovost, ktora sa ale rychlo zlepsuje novsimi modelmi. A niekedy proste ide zlym smerom, lebo nevie spravne riesenie, napr. v UI issues, kde by asi potreboval viac udajov, aby to vedel sam vyriesit.
```

---

### 6.4 Najväčší "AHA!" moment
```
[Kedy ti došlo niečo dôležité o AI alebo o developmente?]
```

---

### 6.5 Čo by som urobil inak
```
[Keby si začínal znova, čo by si zmenil?]
```

### 6.6 Hlavný odkaz pre ostatných
```
[Keby si mal povedať jednu vec kolegom o AI development, čo by to bylo?]
```
