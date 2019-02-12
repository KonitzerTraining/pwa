#Progressive Web Apps - 2019

## Progressive Web Apps (PWA) Grundlagen

- Zuverlässig
- Schnell (unter 2, 5 Sekunden Ladezeit)
- Benutzeransprache

### Abgrenzung Hybrid Mobile Apps und PWAs

Hybrid Apps: Cordova, Play Store, App Store
PWA: Webseite, PWA Kriterien

### Progressive Web Apps (PWA)-Technologie im Überblick
- Laout-Framework
- Service Worker
- App Manifest


### Checkliste für eine Progressive Web App

Mindestanforderungen

- https
- Responsives Layout
- URLs laden auch, wenn keine Internetverbindung besteht
- Add to Home Screen
- Ladezeit < 10s im 3G-Netz
- Cross Browser
- Jede Seite hat eine URL

Zusätzliche Anforderungen

Indexierbarkeit
- Indexed by Google
- Schema.org Metadata
- Social Metadata
- Benutzung der History API

User Experience
- Kein "Springen" der Seite
- Zurück-Aktion behält Scroll-Position
- Eingabefelder müssen leicht erreichbar sein und werden nicht von der Tastatur überdeckt
- Social Sharing, auch im Full-Screen-Mode
- Responsive, auch innerhalb einer Plattform
- Kein Add-To-Home-Screen, wenn bereits installiert. Kein Interstitial.
- A2HS wenn sinnvoll

Performance
- Ladezeit für die erste Seite < 5s
- SpeedIndex > 85

Caching
- Cache First Strategie
- Seite informiert Benutzer, wenn offline

Push Benachrichtigungen
- Transparente und Vertrauen erweckendes Nachfragen
- Nicht zu aggressiv nachfragen
- Abdunkeln der Seite
- Zeitlich sinnvolle, spezifische und relevante Benachrichtigungen
- Möglichkeit zum Opt-Out

Siehe:
https://developers.google.com/web/fundamentals/discovery/search-optimization/
https://developers.google.com/web/fundamentals/discovery/social-discovery/

https://support.google.com/webmasters/answer/6066468

Social Metadata
https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started


### Aufbau einer Testumgebung
- Chrome Canary
- Lighthouse
- https://search.google.com/test/mobile-friendly
- Browserstack
- Selenium


### Anspruch an das Layout


## Startseite und Web Manifest
### Manifest Eigenschaften
### Homescreen Prompt

## Service Worker
### Browser Support

kein IE 11

unzureichend:
https://www.npmjs.com/package/cache-polyfill

### Service Worker shell
### Caching
### Push Notifications
### Synchronisation im Hintergrund
### Service Worker Lifecycle

## Application Cache
### Fetch API
### Cashes Object

## Service Worker Anwendungsfälle
### Worker Events
### Pre-Caching
### Cache aktualisieren
### Ressourcen abrufen
### Die „Network Only“-Strategie
### Die "Network First / Offline"-Strategie
### Die "Offline First / Network"-Strategie
### Caching Szenarien
### Client-Kommunikation
### Patterns und Strategien
### PWA Tickets

## Performance Optimierung
Time to first byte
Payload verringern
RRPL Pattern
Rail Pattern
Lazy Loading

## Tools
PWA Builder
Auditing mit Google Lighthouse
Sonar
Workbox
JS Frameworks mit PWA-Unterstützung
Interaktivität
Interaktion zwischen PWA und Apps
Share API

## Desktop PWAS