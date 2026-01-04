







export const TODO_MD = `======================================================================
AI FÖRSLAG TILL PROJEKTSTRUKTUR (FAS-INDELNING)
======================================================================
För att lyckas med ombyggnationen bör vi bocka av dessa faser. 
Markera med [+] den fas du vill att vi börjar med i nästa prompt.
Markera med [A] den fas som är aktivt pågående.
Markera med [x] den fas som inte längre är pågående.

När du gjort något, skriv inom parentes efter fasen mer exakt vad som är eller varit pågående inom punkten för att uppmuntra kontinuerlig förbättring.

FAS 0: INFRASTRUKTUR (NUVARANDE FOKUS)
[x] 1. Implementera ladda/spara plan för persistent "plan"-diff (Klar: Implementerat IndexedDB & manuell Fil-import/export)
[x] 2. Dela upp specifikationen i flera filer (Modularitet). (Klar: Har brutit ut till specs/*.ts som separata moduler)
[x] 2b. Utöka SpecEditor med Filhantering (Ny, Radera, Byt namn) samt Auto-save vid stängning. (Klar: Implementerat i SpecEditor)
[x] 2c. AI Studio agenten kan inte radera filer är väl känt, men den kan radera innehållet. Vet du om den kan döpa om till något som tabortmig eller så. (Klar: Implementerat "Soft Delete" i SpecEditor som instruerar AI att tömma/döpa om filer).
[A] 2d. Lös Netlify Deployment. (Pågående: Init-script för netlify.toml skapat, felsöker package.json path på Netlify).

FAS 1: GRUNDLÄGGANDE STRUKTUR & API
[x] 3. Skapa "Help"-sidan (?) med API-statusdiagram och förklaring av inställningar. (Klar: HelpModal implementerad och nås via header)
[x] 4. Implementera "JSON-motor" för realtidsöversättning av UI-text. (Klar: Implementerat UITranslationService och dynamisk text i komponenter)
[x] 4a. Rätta UI-översättningen så att modulernas innehåll också översätts, exempelvis "Your Language" och namnen på alla språken man väljer i listan. (Klar: Uppdaterat LanguageSelector och Selectors med dynamiska labels)
[x] 4b. Även när man väljer ingångar och utgångar behöver en sådan översättning göras. (Klar: Labels skickas in i props)
[x] 4c. Ta även bort väljaren av mjukvaru eller hårdvaru mikrofonförsärkning på sista valet som vi redan valt innan vi kom till det steget. (Klar: Tagit bort Group Toggle from ActiveSessionStep)
  
FAS 2: GUIDEN (WIZARD) - OMSTRUKTURERING
[x] 5. Dela upp "ModeSelectionStep" till separata sidor. (Klar: Har delat upp i Group, Mode, och Audio-steg)
[x] 6. Implementera Auto-advance och Power-knapp i Header. (Klar: Power-knapp för Quick Start/Stop och Auto-advance i guiden)
[x] 6b. Inför "Quick Start"-knappar i alla steg av guiden för snabbstart. (Klar: "Start"-knappar med blixtikon tillagda i alla wizard-steg).

FAS 5: KONTEXT & RAG (PRIORITET 1)
[x] 12. Skapa RAG-filhantering i SpecEditor. (Klar: SpecEditor har nu en dedikerad "Context