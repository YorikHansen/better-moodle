# Better-Moodle

[![Hier drücken, um zu installieren / Click here to install](https://img.shields.io/badge/Jetzt%20installieren%20%2F%20Install%20now-004B5A?style=for-the-badge)][installation]

[![Aktuelle Version / Current Version](https://img.shields.io/github/v/release/YorikHansen/better-moodle?label=Aktuellste%20Version%20/%20Current%20Version&color=004B5A&style=for-the-badge)][latest release]&nbsp;[![File size in bytes](https://img.shields.io/github/size/YorikHansen/better-moodle/redesign.user.js?branch=main&style=for-the-badge&label=Gr%C3%B6%C3%9Fe%20%2F%20Size&color=004b5a)](https://github.com/YorikHansen/better-moodle/blob/main/redesign.user.js)&nbsp;[![GitHub Downloads latest release](https://img.shields.io/github/downloads/YorikHansen/better-moodle/latest/better-moodle.user.js?style=for-the-badge&label=Downloads%20latest%20version&color=004b5a)](https://github.com/YorikHansen/better-moodle/releases/latest)

-   [Installation](#installation)
-   [Disclaimer](#disclaimer)
-   [Update](#update)
    -   [Changelog](#changelog)
-   [Hochschulen](#hochschulen)
-   [Features \[UzL\]](#features)
-   [FAQ \[UzL\]][faq]
-   [Alte Bilder und Impressionen \[UzL\]][impressions]
-   [Verlauf der GitHub Stars](#verlauf-der-github-stars)

[//]: # 'TODO: More english translations'

|                                                                                                                                                                                                                                                                                                                   |                                              |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------:|
| Better-Moodle ist ein Userscript, um das Design vom [Informatik Moodle der Uni Kiel][kiel-moodle] zu verbessern und zusätzliche, coole Features hinzuzufügen. Es basiert auf [Better-Moodle der UzL][better-moodle-uzl] von [Jan](https://github.com/jxn-30).<br>Wenn du dir spezielle Kiel-spezifische Features wünscht, kannst du gerne ein Issue oder einen Pull-Request öffnen. Richte dich ansonsten direkt an [Better-Moodle der UzL][better-moodle-uzl].<br><br> 🇬🇧 Better-Moodle is an userscript to improve the design of the [Kiel Universities computer science Moodle][kiel-moodle] and add additional, cool features. It's based on [Better-Moodle of the UzL][better-moodle-uzl] by [Jan](https://github.com/jxn-30).<br>If you have any Kiel specific feature requests, feel free to open an issue or a pull request. Otherwise, please refer to the original [Better-Moodle of the UzL][better-moodle-uzl] for general feature requests. | ![The Better-Moodle logo](./img/moothel.png) |
| Better-Moodle Maskottchen Moothel / Better-Moodle Mascot Moothel: [moothel.pet](https://moothel.pet)                                                                                                                                                                                                              |              Better-Moodle Logo              |

_Bilder in dieser Beschreibung enthalten teilweise verschwommene Elemente, um den Datenschutz zu wahren._

> **🇬🇧 English Version**
>
> Better-Moodle will use English translations whenever the page indicates to be in english.
>
> Within this README, English texts can be found - if available - in the extendable areas marked with `🇬🇧`. They can be opened and closed by clicking on the respective area.

## Installation

1. Userscript-Manager als Browser-Erweiterung installieren (z. B. [Violentmonkey](https://violentmonkey.github.io/))
2. Klicke [hier][installation], um Better-Moodle zu installieren
    1. In Chromium basierten Browsern (Google Chrome, Edge, Opera, etc.) muss der Entwicklermodus aktiviert werden. Siehe hierzu [Tampermonkey FAQ Q209](https://www.tampermonkey.net/faq.php?locale=de#Q209)
    2. Alternativ kann auch einfach das freie INternet unterstützt werden, indem Firefox genutzt wird.
3. Moodle einmal neu laden und ein besseres Moodle genießen 🎉
4. Bei Bedarf über das Zahnräder-Icon oben rechts im Moodle, neben deinem Profilbild, Better-Moodle individualisieren

<details>
<summary>🇬🇧 Installation</summary>

1. install an Userscript-Manager as a browser extension (e.g. [Violentmonkey](https://violentmonkey.github.io/))
2. click [here][installation] to install Better-Moodle
    1. In Chromium based browsers (Google Chrome, Edge, Opera, etc.), developer mode needs to be enabled. See [Tampermonkey FAQ Q209](https://www.tampermonkey.net/faq.php#Q209) to see how to do so.
    2. Alternatively support the free internet and just use Firefox
3. reload Moodle once and enjoy a better Moodle 🎉
4. if required, customize Better-Moodle via the gears icon at the top right of Moodle, next to your profile picture
 </details>

## Disclaimer

Better-Moodle wurde privat von einem Mitglied der FS MaIn (UzL) entwickelt und ist kein offizielles Projekt der Uni. Es dient ausschließlich dazu, die individuelle Moodle-Nutzung zu verbessern, und sammelt keinerlei Daten. Die Nutzung geschieht natürlich dennoch auf eigene Verantwortung! ;)

Bei der Verwendung von Userscript-Managern wie Tampermonkey wird ein externes Tool genutzt, für das wir nicht zuständig oder verantwortlich sind. Es wird zur Vorsicht bei der Installation weiterer Userscripts geraten.

<details>
<summary>🇬🇧 Disclaimer</summary>

Better-Moodle was developed privately by a member of FS MaIn (UzL) and is not an official project of the university. Its sole purpose is to improve the individual use of Moodle and does not collect any data. Of course, you still use it at your own risk ;)

When using userscript managers such as Tampermonkey, an external tool is used for which we are not responsible. Caution is advised when installing additional userscripts.

</details>

## Update

Die meisten Userscript-Manager suchen regelmäßig nach Aktualisierungen. Eine manuelle Aktualisierung von Better-Moodle ist auch jederzeit über den [Installationslink][installation] möglich.

Wenn in den Einstellungen aktiviert, wird Better-Moodle auch einen kleinen roten Punkt neben dem Einstellungen-Icon in der Navigationsleiste anzeigen, wenn ein Update verfügbar ist. In den Einstellungen kann, wenn ein Update verfügbar ist, die Aktualisierung durchgeführt werden.

### Changelog

Better-Moodle erhält regelmäßig Updates. Ein vollständiges Changelog ist in der Datei [CHANGELOG.md](./CHANGELOG.md) zu finden. Das Changelog ist auch über das Einstellungen-Menü über den Button in der linken unteren Ecke der Fußleiste erreichbar.

<details>
<summary>🇬🇧 Update</summary>

Most userscript managers regularly check for updates. A manual update of Better-Moodle is also possible at any time via the [installation link][installation].

If enabled in the settings, Better-Moodle will also display a small red dot next to the settings icon in the navigation bar when an update is available. In the settings, the update can be performed if an update is available.

### Changelog

Better-Moodle receives regular updates. A complete changelog can be found in the file [CHANGELOG.md](./CHANGELOG.md). The changelog is also accessible via the settings menu via the button in the lower left corner of the footer.

</details>

## Hochschulen

Es gibt ganz viele, ganz tolle Menschen, die gerne programmieren und so breitet sich das Better-Moodle mit der Zeit auch auf anderen Hochschulen aus. Von diesen Hochschulen ist bekannt, dass Better-Moodle von ehrenamtlichen Studis entwickelt und getestet wird:

- Original: [Universität zu Lübeck (UzL)](https://github.com/jxn-30/better-moodle) by [@jxn-30](https://github.com/jxn-30)
- **[Uni Kiel (CAU)](https://github.com/YorikHansen/better-moodle)** by [@YorikHansen](https://github.com/YorikHansen)

<details>
<summary>🇬🇧 Universities</summary>

There are many, very great people who like to program and so Better-Moodle spreads to other universities over time. From these universities it is known that Better-Moodle is developed and tested by volunteer students:

-   Original: [University of Lübeck (UzL)](https://github.com/jxn-30/better-moodle) by [@jxn-30](https://github.com/jxn-30)
-   **[Kiel University (CAU)](https://github.com/YorikHansen/better-moodle)** by [@YorikHansen](https://github.com/YorikHansen)

</details>


## Features

### Speiseplan der Mensa

Better-Moodle bettet den Speiseplan der Mensa direkt in Moodle ein. In der Menüleiste wird ein zufälliges Lebensmittel angezeigt, das den Speiseplan öffnet. Deine Lieblingsmensa kannst du in den Einstellungen auswählen. Das Feature ist kann in den Einstellungen deaktiviert werden.

### weitere Features
*siehe [Better-Moodle der UzL][features]*

<details>
<summary>🇬🇧 Features</summary>

### Canteen menu

Better-Moodle embeds the canteen menu directly into Moodle. A random food is displayed in the menu bar, which opens the canteen menu. You can select your favorite canteen in the settings. The feature can be deactivated in the settings.

### additional features
*see [Better-Moodle of the UzL][features]*

</details>

## FAQ

siehe [Better-Moodle der UzL][faq]

<details>
<summary>🇬🇧 FAQ</summary>

see [Better-Moodle of the UzL][faq]

</details>

## Alte Bilder und Impressionen

siehe [Better-Moodle der UzL][impressions]

<details>
<summary>🇬🇧 Old pictures and impressions</summary>

see [Better-Moodle of the UzL][impressions]

</details>

## Verlauf der GitHub Stars

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=YorikHansen%2Fbetter-moodle&type=Date&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=YorikHansen%2Fbetter-moodle&type=Date" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=YorikHansen%2Fbetter-moodle&type=Date" />
</picture>

[better-moodle-uzl]: https://github.com/jxn-30/better-moodle 
[faq]: https://github.com/jxn-30/better-moodle#faq
[features]: https://github.com/jxn-30/better-moodle#features
[impressions]: https://github.com/jxn-30/better-moodle#alte-bilder-und-impressionen
[installation]: https://github.com/YorikHansen/better-moodle/releases/latest/download/better-moodle.user.js
[kiel-moodle]: https://elearn.informatik.uni-kiel.de/
[latest release]: https://github.com/YorikHansen/better-moodle/releases/latest
[use-without-userscript-manager]: https://github.com/jxn-30/better-moodle#better-moodle-ohne-userscript-manager-nutzen