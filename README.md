# Space Invaders Game

Dieses Projekt entstand im Rahmen der Programmiersprachen-Vorlesung im ersten Semester.
Es soll ein Nachbau des ursprünglichen Space Invader-Spiels sein und somit für den Nutzer interaktiv sein.
Neben dem Erstellen der Spielelogik beinhaltet das Projekt außerdem auch die Darstellung der Invaders, der Hindernisse und des Space ships.
Als Inspiration diente hierfür ein Youtube-Video der Space Invaders mit dem Ziel, dies individuell anzupassen und eigene Präferenzen einzubauen.
Zu Beginn wurde das Template des Dozenten genutzt, das bereits das Spielfeld, die Hindernisse und das Spaceships generiert hat.

-SCREENSHOT-

## Usage / Benutzung

Das Spiel lässt sich nach einem Download von GitHub bereits im Browser spielen. Für ein optimaleres Spieleerlebnis empfehle ich den Chrome Browser zu benutzen.
Bereits beim Laden der Seite durch aufrufen der HTML-file öffnet sich ein neues Spiel, man kann also direkt loslegen und das Spiel spielen.
Die Steuerung des Space Ships erfolgt durch die Pfeiltasten "rechts" und "links", mit der Leertaste feuert das Space ship Kugeln ab.

## Structure / Aufbau

Im nachfolgenden Absatz wird auf die wichtigen Funktionen des Projekts eingegangen. 

### Zentrale Klasse(n)

* **Invader:** Diese Klasse beinhaltet die Eigenschaften des Invaders wie beispielsweise
  * `this.width`: Diese Eigenschaft gibt die Breite des Invaders an, die in der Index-Datei definiert wurde.
  * `this.height`: Diese Eigenschaft gibt die Höhe des Invaders an, die in der Index-Datei definiert wurde.
  * `this.x`: Diese Eigenschaft gibt die x-Position des Invaders auf dem Canvas an, die durch eine Funktion generiert wird, ebenfalls in der Index-Datei. Durch diese und die nachfolgende Eigenschaft in der `generateInvaders()` Funktion werden die Space Invaders generiert.
  * `this.y`: Diese Eigenschaft gibt die y-Position des Invaders auf dem Canvas an, die ebenfalls durch eine Funktion generiert wird (Index-Datei).
  * `this.appearance`: Diese Eigenschaft bestimmt wie der Invader aussieht
  * `this.id`: Diese Eigenschaft stellt die jeweilige ID des Invaders dar. 
  Bei allen Eigenschaften handelt es sich um Properties

### Zentrale Funktionen

`generateInvaders()`: Eine Funktion die ein Array von Personen entgegennimmt, und diese dann im angegebenen Intervall Bier trinken lässt. Nach jedem Durchlauf durch das Biertrinken (durch Aufruf von drinkBeer mit einem neu erzeugten Bier-Objekt) wird überprüft, ob die Anzahl der betrunkenen Personen größer 0 ist. Wenn dies eintritt, wird das Intervall bei jedem Durchlauf auf die doppelte Länge verlängert. Die Funktion endet in ihrer Ausführung dann wenn alle Personen isDrunk = true zurückgeben, oder wenn das Interval größer als 1 Stunde wird. Wird die Funktion mit nur einer Person im Array aufgerufen, wird eine Warnmeldung ausgegeben, um versehentliches Trinken alleine zu vermeiden. 

`renderUI()`: Diese Funktion rendert die User Interface des Spiels. Diese Fubktion wurde hauptsächlich dafür angelegt, um den aktuellen Punktestand anzuzeigen, sowie auch den Window-alert, dass das Spiel gewonnen wurde.

`renderBullets()`:

`renderInvaders(invader, pos)`:

`removeInvadersAnimation()`: Da ich die Invaders nicht einfach nur verschwinden lassen wollte, fügte ich eine Funktion hinzu, die beim Treffen der Invader durch die Bullets eine Animation ausführt. Dies passiert mithilfe eine For-Schleife und einer Bedingung (dass die Invader bereits nicht zuvor getroffen worden sind und diese aber getroffen wurden), die erfüllt sein muss.

`render()`: Diese Funktion sorgt dafür, dass die oben generierten Render-Funktionen ausgeführt werden. Somit werden diese an dieser Stelle aufgerufen und ausgeführt.
_(Achtung: Hier werden nur Funktionen beschrieben, die eine zentrale Rolle einnehmen.)_

Nach der Beschreibung der elementaren Bestandteile wird aus der Vogelperspektive nochmals beschrieben, welche Gesamtzustände euer System durchlaufen kann. In diesem Fall würde der User zunächst 0 bis n Personen erzeugen, und diese mit haveParty() zum Bier trinken bringen.  Dabei wird innerhalb von haveParty nacheinander für jede Person drinkBeer() aufgerufen, unter Benutzung von neuen Bier-Objekten. Nach Ende der Party muss das Programm neu gestartet werden um die Zustände zurückzusetzen.

_(Achtung, dieser Teil liest sich jetzt sehr ähnlich zur Funktionsbeschreibung von haveParty - das liegt daran dass es im Beispiel nur eine zentrale Funktion gibt. Ihr habt aber mehrere die zusammenspielen!)._

## ToDos

Was noch fehlt, und was die nächsten Schritte wären um es ggf. umzusetzen:
* Erweiterung der Party um Musik
* Berücksichtung individueller Verträglichkeiten von Bier in der Person-Klasse
* Obstacles move in higher level
