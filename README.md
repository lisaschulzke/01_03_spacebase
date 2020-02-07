# Space Invaders Game

Dieses Projekt entstand im Rahmen der Programmiersprachen-Vorlesung im ersten Semester.
Es soll ein Nachbau des ursprünglichen Space Invader-Spiels sein und somit für den Nutzer interaktiv sein.
Neben dem Erstellen der Spielelogik beinhaltet das Projekt außerdem auch die Darstellung der Invaders, der Hindernisse und des Space ships.
Als Inspiration diente hierfür ein Youtube-Video der Space Invaders mit dem Ziel, dies individuell anzupassen und eigene Präferenzen einzubauen.
Zu Beginn wurde das Template des Dozenten genutzt, das bereits das Spielfeld, die Hindernisse und das Spaceships generiert hat.

![](../ gamecanvas.png)

## Usage / Benutzung

Das Spiel lässt sich nach einem Download von GitHub bereits im Browser spielen. Für ein optimaleres Spieleerlebnis empfehle ich den Chrome Browser zu benutzen.
Bereits beim Laden der Seite durch aufrufen der HTML-file öffnet sich ein neues Spiel, man kann also direkt loslegen und das Spiel spielen.

#### Steuerung Spaceship: 
Pfeiltaste links: nach links bewegen

Pfeiltaste rechts: nach rechts bewegen

Leertaste: Bullets abfeuern

#### Steuerung Spiel:
esc: neues Spiel Starten

Pfeiltaste hoch: höheres Level wählen

Pfeiltaste unten: niedrigeres Level wählen

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

`renderBullets()`: Diese Funktion rendert die Bullets, die das Spaceship auf den Invader abfeuert.

`renderInvaders(invader, pos)`: Diese Fubktion rendert die Invader und sorgt dafür, dass sie sich auf dem Spiele-Canvas von links nach rechts bewegen, am Rand eine Spalte nach unten gehen und sich dann von rechts nach links bewegen.

`removeInvadersAnimation()`: Da ich die Invaders nicht einfach nur verschwinden lassen wollte, fügte ich eine Funktion hinzu, die beim Treffen der Invader durch die Bullets eine Animation ausführt. Dies passiert mithilfe eine For-Schleife und einer Bedingung (dass die Invader bereits nicht zuvor getroffen worden sind und diese aber getroffen wurden), die erfüllt sein muss.

`render()`: Diese Funktion sorgt dafür, dass die oben generierten Render-Funktionen ausgeführt werden. Somit werden diese an dieser Stelle aufgerufen und ausgeführt.
_(Achtung: Hier werden nur Funktionen beschrieben, die eine zentrale Rolle einnehmen.)_


### Beschreibung des Spielablaufs
//Nach der Beschreibung der elementaren Bestandteile wird aus der Vogelperspektive nochmals beschrieben, welche Gesamtzustände euer System durchlaufen kann. In diesem Fall würde der User zunächst 0 bis n Personen erzeugen, und diese mit haveParty() zum Bier trinken bringen.  Dabei wird innerhalb von haveParty nacheinander für jede Person drinkBeer() aufgerufen, unter Benutzung von neuen Bier-Objekten. Nach Ende der Party muss das Programm neu gestartet werden um die Zustände zurückzusetzen.

Eine zentrale Funktion in der Datei ist die `render()`-Funktion, sie erstellt bzw. rendert die gesamten Funktionen und lässt alles sichtbar werden. Diese Funktion ruft hauptsächlich die bereits vorangegangenen Render-Funktionen auf, welche meist eine generate-Funktion beinhalten. Auf diese Weise werden die einzelnen Komponenten, wie beispielsweise auch die Invader oder das UI (score und level) sichtbar gemacht. Durch die Interaktion mit dem Spiel wird die Musik ausgelöst und spielt dann so lange ab, bis das Fenster geschlossen wird oder das Spiel neu gestartet wird, dann läuft die Musik wieder von Anfang an ab.
Während des Spielens bewegt der Nutzer das Spaceship durch drücken der rechten bzw. linken Pfeiltaste. Dies passiert durch die Komponenten keyCode, addEventListener `('keydown', (event) =>{}` und der SpaceshipPos. So wird auf der x-Achse einmal der Wert verringert durch drücken der Taste (links) und einmal erhöht (rechts). Durch drücken der Leertaste werden die Bullets abgefeuert. Dies passiert auch durch ein keydown-Event mit dem keyCode.
Indem der Nutzer die Pfeiltaste oben drückt, spielt er ein Level höher, durch drücken der Pfeiltaste nach unten, ein Level niedriger. Dies passiert ebenfalls durch den KeyCode und dem keydown-Event. Dies ist zum einen mit der Funktion `setupInvaderBulletTime()` verbunden, sowie mit dem keydown-Event selbst, das hoch- bzw. runterzählt.

Oben links in der Ecke ist zudem ein Zähler, der den Score des Nutzers zählt. Der Nutzer bekommt pro abgeschossenem Invader einen Punkt. Somit hängt der Zähler auch mit der Funktion zusammen, die für das Abschießen der Invader verantwortlich ist (`renderBullets()`). Gleichzeitig können die Invader auch das Spaceship abschießen. Dies passiert zufällig durch die Funktion `setupInvaderBulletTime()`, die je nach Level eine höhere Intervallspanne oder eben eine kleinere Intervallspanne berechnet. Dies hängt dann wiederum auch mit der Auswahl des Levels zusammen.

Nachdem alle Invader abgetroffen wurden, erscheint eine Nachricht auf dem Canvas mit "You won the game.". Dies wird durch die Funktion setCharsAt realisiert und gibt dem Nutzer somit die Info, dass er das Spiel gewonnen hat. Jetzt steht dem Nutzer auch die Möglichkeit bereit, ein neues Spiel zu beginnen durch Drücken der esc-Taste. Dies wird durch die pause-Variable mit der Zuweisung true / false gesteuert. Nachdem alle Invader abgetroffen wurden, erscheint eine Nachricht auf dem Canvas mit "You won the game.". Dies wird durch die Funktion `setCharsAt` realisiert und gibt dem Nutzer somit die Info, dass er das Spiel gewonnen hat. Jetzt steht dem Nutzer auch die Möglichkeit bereit, ein neues Spiel zu beginnen durch Drücken der esc-Taste. Dies wird durch die pause-Variable mit der Zuweisung true / false gesteuert. 


Konträr dazu gibt es auch den Fall, dass der Nutzer das Spiel verliert und das Spaceship abgetroffen wurde. Dies passiert bislang allerdings nur, wenn ein Invaderbullet den (von links) ersten Hashtag des Ships trifft. Hierbei überprüft die Funktion `renderBulletsInvaders()` , ob die Invaderbullets das Spaceship treffen.
Nachdem das Spaceship getroffen wurde, erscheint eine Nachricht auf dem Canvas mit "You lost the game.". Dies wird durch die Funktion `setCharsAt` realisiert, genau wie bei dem Gewinner-Fall ben auch und gibt dem Nutzer somit die Info, dass er das Spiel verloren hat. Jetzt steht dem Nutzer auch die Möglichkeit bereit, ein neues Spiel zu beginnen durch Drücken der esc-Taste. Dies wird, ebenfalls wie beim Fall des Gewinns, durch die pause-Variable mit der Zuweisung true / false gesteuert. 


## ToDos

Um das Erlebnis des Spiels zu verbessern, müssten folgende Dinge noch verbessert werden:
* Obstacles move in higher level, sodass nicht nur die Bullets von den Invadern mehr oder höher frequentiert sind, sondern auch das Hindernis sich bewegt. Somit wäre ein noch deutlicherer Unterschied zwischen den Leveln bemerkbar.
* Länge der Invaderreihe dynamisch machen, da so dann auch der ganz rechte Invader bis zum ganz linken Rand gehen würde.
* Range zum Abschießen des Spaceships definieren (aktuell lässt ess ich nur am ersten hashtag abschießen).
* Bereits abgeschossene invader sollten nicht mehr schießen können

