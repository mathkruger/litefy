# Litefy

<img src="src/assets/logo.png" alt="drawing" width="200"/>

![GitHub language count](https://img.shields.io/github/languages/count/mathkruger/litefy)
[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)
[![Open Source Helpers](https://www.codetriage.com/mathkruger/litefy/badges/users.svg)](https://www.codetriage.com/mathkruger/litefy)

విషయ సూచిక
1 ప్రాజెక్ట్ వివరణ
2 ప్రాజెక్ట్ సాధనాలు
3 అనువర్తనం పరిచయం
4 ఒక డెవలప్మెంట్ సర్వర్ ప్రారంభించడం
5 బిల్డ్ సృష్టించడం
6 సహకరణ సూచనలు
7 ప్రారంభిక ప్రాజెక్ట్ సెటప్
8 అనువర్తనంలో మార్పులు చేయడం
9 కోడ్ స్కాఫోల్డింగ్ సృష్టించడం
10 మీ మార్పులు సమర్పించడం
11 ప్రస్తుత సమస్యలు
12 మద్దతు
13 లైసెన్సు




## Project Description <a name="description"></a>
లైట్‌ఫై ఒక తొలి ప్రకారం స్పాటిఫై క్లైంట్ అని చెప్పబడే మెమరీ మరియు ప్రాసెసింగ్ కొద్దిగా పరిమితం ఉన్న స్మార్ట్‌ఫోన్ మరియు కంప్యూటర్ వాడుకరులకు సాధారణంగా తయారు చేయబడింది.        

(సూచన: కొన్ని ఆపరేటింగ్ సిస్టమ్‌లు, ఉదాహరణకు కైఒఎస్, ఇప్పటికే మద్దతు లేదు).

అనువర్తనం ప్రస్తుత డిప్లాయమెంట్‌ను చూడడానికి, ఈ లింక్‌ను సందర్శించండి. [https://mathkruger.github.io/litefy](https://mathkruger.github.io/litefy).

## Project Technologies <a name="technologies"></a>
ప్రాజెక్ట్ క్రింద ఈ తంత్రాలతో డిజైన్ చేయబడుతుంది:
[Angular 10](https://angular.io)     
[Node.js](https://nodejs.org/en/)     
[Spotify API](https://developer.spotify.com/documentation/web-api/reference-beta/)     
[Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk/quick-start/)     

## Running the Application <a name="application"></a>

కాన్ట్రిబ్యూషన్ 1 పూర్తి చేసిన తర్వాత, కొన్ని కమాండ్‌లు వాడండి అని ఉంటే, అనుకోవడం వలన అనుకూలమైన అనుభవం కలిగి ఉంటుంది
1. Install [Node.js](https://nodejs.org/en/)
2. లైట్‌ఫై డైరెక్టరీలో, కమాండ్‌ను రన్ చేయండి. `npm install` సరియైన నోడ్ మాడ్యూల్స్ ఇన్‌స్టాల్ చేయడానికి, కొన్ని కమాండ్‌లను వాడవచ్చు.
### Starting a Development Server <a name="application1"></a>

1. కమాండ్ ని రన్ చేయండి `ng serve`
2. Navigate to `http://localhost:4200/` 

మీరు మూల ఫైల్స్ లో ఏదో ఒకటిని మార్చినప్పుడు, అనువర్తనం స్వయంగానే రీలోడ్ అవుతుంది.

### Creating a Build <a name="application2"></a>

1.కమాండ్ ని రన్ చేయండి `ng build`     

నిర్మించిన కళాఖండాలను ఇందులో భద్రపరుస్తారు. `dist/` directory.     
ప్రొడక్షన్ బిల్డ్ కొరకు, కమాండ్ ని ఉపయోగించండి `ng build --prod` instead.

## Contribution Instructions <a name="contribution"></a>

### Initial Project Setup <a name="contribution1"></a>

1. a సృష్టించు [fork](https://github.com/mathkruger/litefy/fork) మీ GitHub ఖాతాకు ప్రధాన రెపో       
2. మీ పరికరంలో ఎక్కడైనా కొత్త సంచికను సృష్టించండి
3. కమాండ్ టెర్మినల్ ను ప్రారంభించండి మరియు మీ డైరెక్టరీని కొత్తగా సృష్టించిన ఫోల్డర్ కు మార్చండి
4. కమాండ్ ని రన్ చేయండి  `https://github.com/yourGitHubName/litefy.git`       
    &emsp;(NOTE: Replace yourGitHubName with your GitHub username (e.g. mathkruger))
5. మీకు నచ్చిన IDEతో ([visual studio] వంటివి) కొత్తగా సృష్టించిన లైటెఫ్లీ ఫోల్డర్ ని తెరవండి.(https://code.visualstudio.com/))     
6. IDE యొక్క టెర్మినల్ నుంచి, కమాండ్ ని రన్ చేయండి `git checkout -b your-new-branch-name` మీ కొత్త బ్రాంచ్ సృష్టించడానికి మరియు మారడానికి

### Making Changes to the Application <a name="contribution2"></a>

For a beginner's guide to Angular, visit Angular's [tutorial](https://angular.io/tutorial/tour-of-heroes) page or its [getting started](https://angular.io/start) page.      
To find out more about other Angular command line instructions, visit [this link](https://angular.io/cli).         
To find out more about the Spotify API and Web Playback SDK, see their respecitve pages under the [project technologies](#technologies) tab.     

#### Generating Code Scaffolding <a name="contribution2.1"></a>

1. కొత్త కాంపోనెంట్ జనరేట్ చేయడం కొరకు సరైన ప్రాజెక్ట్ డైరెక్టరీలో కమాండ్ రన్ చేయండి. `ng generate component component-name` 
`ng generate directive|pipe|service|class|guard|interface|enum|module` can be used to generate various other file schematics.      
More information on the `ng generate` command can be found [here](https://angular.io/cli/generate).

### Submitting Your Changes <a name="contribution3"></a>

1 మీ IDE కమాండ్ టెర్మినల్ లో git add . అనుకోండి. మీ మార్పులను వేసుకొని చేసే ఎల్లప్పుడూ ఇది ఉపయోగపడుతుంది.
2 మీరు మార్చిన మార్పులను కమిట్ చేయడానికి git commit -m "" అనుకోండి. డబల్ కోట్లులో ఉన్న వ్యాఖ్యానం లో మీరు ఏ మార్పులు చేసారో అందుబాటులో వ్యాఖ్యానం రాయండి (ఉదాహరణకు: git commit -m "ఫిక్స్: app-routing.module.ts లో రూటింగ్ బగ్ ని తీసుకోవడం ద్వారా సరిచూడాను")
3 git push కమాండ్ వేయండి మీ మార్పులను మీ రిమోట్ బ్రాంచ్ లో GitHub కి పుష్ చేయండి
మీ forked రెపోజిటరీ యొక్క GitHub పేజీలో, Pull Requests ట్యాబ్‌ను క్లిక్ చేసి, పోల్ రెస్ట్ బటన్‌ను నొక్కండి.
మీ మార్గం తో మార్పు చేసుకొనే బ్రాంచ్‌ను mathkruger యొక్క మెయిన్ బ్రాంచ్‌తో సరిపడండి.
మీరు చేసిన మార్గం గురించి సంక్షిప్త సందేశాన్ని పుల్ రిక్వెస్ట్‌కు జత చేసుకోండి (ఉదాహరణకు, స్టెప్ 2) మరియు వివరాలను వివరణ బాక్స్‌లో చేర్చండి.
మీ పుల్ రిక్వెస్ట్‌ను సమీపంగా  

## Current Issues <a name="issues"></a>

[Click here](https://github.com/mathkruger/litefy/issues) లిటెఫీ యొక్క సమస్యలను పరిష్కరించడానికి.

## Support <a name="support"></a>

ప్రాజెక్టు సృష్టికర్తకు మద్దతు ఇవ్వాలనుకుంటే.., <a href="https://www.buymeacoffee.com/mathkruger">buy him a coffee!</a>

## License <a name="license"></a>

Litefy is [MIT licensed](./LICENSE).
