const categories = [
    {
        "name": "Navigation & Dateisystem",
        "commands": [
            {
                "title": "pwd",
                "level": "ANFÄNGER",
                "description": "Zeigt den aktuellen Standort im Dateisystem an (print working directory).",
                "syntax": "pwd",
                "examples": [
                    {
                        "cmd": "pwd",
                        "desc": "Aktuellen Pfad anzeigen",
                        "output": "/home/bbw/Linux-Handbuch"
                    }
                ],
                "options": [
                    {
                        "flag": "-P",
                        "desc": "Zeigt den physischen Pfad ohne symbolische Links",
                        "color": "orange"
                    }
                ],
                "hint": "Der Befehl pwd ist besonders hilfreich, wenn man sich in einer tiefen Ordnerstruktur verirrt hat."
            },
            {
                "title": "cd",
                "level": "ANFÄNGER",
                "description": "Wechselt das aktuelle Verzeichnis (change directory).",
                "syntax": "cd [PFAD]",
                "examples": [
                    {
                        "cmd": "cd Linux-Handbuch/kapitel01",
                        "desc": "Wechselt in einen Unterordner",
                        "output": ""
                    },
                    {
                        "cmd": "cd ..",
                        "desc": "Wechselt eine Ebene nach oben",
                        "output": ""
                    },
                    {
                        "cmd": "cd ~",
                        "desc": "Wechselt ins Heimverzeichnis",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "..",
                        "desc": "Eine Ebene nach oben",
                        "color": "orange"
                    },
                    {
                        "flag": "~",
                        "desc": "Ins Heimverzeichnis",
                        "color": "blue"
                    },
                    {
                        "flag": "-",
                        "desc": "Zurück ins vorherige Verzeichnis",
                        "color": "green"
                    }
                ],
                "hint": "Ein einfaches cd ohne Argument führt immer direkt ins eigene Heimverzeichnis zurück."
            },
            {
                "title": "ls",
                "level": "ANFÄNGER",
                "description": "Listet den Inhalt eines Verzeichnisses auf. Zeigt Dateien und Unterordner mit optionalen Details wie Grösse, Rechte und Datum.",
                "syntax": "ls [OPTIONEN] [PFAD]",
                "examples": [
                    {
                        "cmd": "ls",
                        "desc": "Aktuelles Verzeichnis anzeigen",
                        "output": ""
                    },
                    {
                        "cmd": "ls -la",
                        "desc": "Alle Dateien inkl. versteckter als Liste",
                        "output": "drwxr-xr-x 2 bbw bbw 4,0K Jul  2 09:15 .\ndrwxr-xr-x 8 bbw bbw 4,0K Jul  1 18:30 ..\n-rw-r--r-- 1 bbw bbw  12K Jun 28 14:02 bericht.txt"
                    },
                    {
                        "cmd": "ls -lh Linux-Handbuch/",
                        "desc": "Lesbare Dateigrössen anzeigen",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-a",
                        "desc": "Versteckte Dateien zeigen",
                        "color": "orange"
                    },
                    {
                        "flag": "-l",
                        "desc": "Listenformat",
                        "color": "blue"
                    },
                    {
                        "flag": "-h",
                        "desc": "Lesbare Dateigrössen",
                        "color": "green"
                    },
                    {
                        "flag": "-R",
                        "desc": "Rekursiv anzeigen",
                        "color": "purple"
                    }
                ],
                "hint": "Die Kombination -lah wird sehr häufig verwendet, da sie alle wichtigen Infos auf einen Blick liefert."
            },
            {
                "title": "find",
                "level": "FORTGESCHRITTEN",
                "description": "Durchsucht ein Verzeichnis und dessen Unterordner nach Dateien oder Ordnern, die bestimmten Kriterien entsprechen.",
                "syntax": "find [PFAD] [KRITERIEN]",
                "examples": [
                    {
                        "cmd": "find Linux-Handbuch/ -name \"*.pdf\"",
                        "desc": "Sucht nach allen PDF-Dateien",
                        "output": "Linux-Handbuch/rechnungen/miete.pdf\nLinux-Handbuch/berichte/abschluss.pdf"
                    }
                ],
                "options": [
                    {
                        "flag": "-name",
                        "desc": "Sucht nach Dateinamen",
                        "color": "orange"
                    },
                    {
                        "flag": "-type f",
                        "desc": "Findet nur Dateien",
                        "color": "blue"
                    },
                    {
                        "flag": "-type d",
                        "desc": "Findet nur Ordner",
                        "color": "green"
                    },
                    {
                        "flag": "-mtime -7",
                        "desc": "Änderungen der letzten 7 Tage",
                        "color": "purple"
                    }
                ],
                "hint": "find durchsucht rekursiv, also automatisch alle Unterordner mit. Bei grossen Strukturen kann das etwas dauern."
            },
            {
                "title": "locate",
                "level": "FORTGESCHRITTEN",
                "description": "Findet Dateien anhand des Namens über eine vorab erstellte Systemdatenbank, statt live zu durchsuchen.",
                "syntax": "locate [SUCHBEGRIFF]",
                "examples": [
                    {
                        "cmd": "locate bashrc",
                        "desc": "Sucht nach Dateien mit 'bashrc' im Namen",
                        "output": "/home/bbw/.bashrc\n/etc/bash.bashrc"
                    }
                ],
                "options": [
                    {
                        "flag": "-i",
                        "desc": "Ignoriert Gross-/Kleinschreibung",
                        "color": "orange"
                    },
                    {
                        "flag": "-c",
                        "desc": "Zeigt nur die Anzahl der Treffer",
                        "color": "blue"
                    }
                ],
                "hint": "locate ist viel schneller als find, zeigt aber nur Dateien, die bei der letzten Datenbank-Aktualisierung existierten (sudo updatedb)."
            },
            {
                "title": "tree",
                "level": "ANFÄNGER",
                "description": "Zeigt die Ordnerstruktur als übersichtliche Baumansicht an.",
                "syntax": "tree [PFAD]",
                "examples": [
                    {
                        "cmd": "tree -L 2 Linux-Handbuch/",
                        "desc": "Zeigt Struktur bis Tiefe 2",
                        "output": "Linux-Handbuch/\n├── kapitel01/\n│   └── navigation.md\n└── kapitel02/\n    └── dateien.md"
                    }
                ],
                "options": [
                    {
                        "flag": "-L 2",
                        "desc": "Begrenzt die Tiefe der Anzeige",
                        "color": "orange"
                    },
                    {
                        "flag": "-d",
                        "desc": "Zeigt nur Ordner",
                        "color": "blue"
                    },
                    {
                        "flag": "-a",
                        "desc": "Zeigt auch versteckte Dateien",
                        "color": "green"
                    }
                ],
                "hint": "tree ist auf manchen Systemen nicht vorinstalliert. Mit sudo apt install tree lässt es sich nachinstallieren."
            },
            {
                "title": "du",
                "level": "ANFÄNGER",
                "description": "Zeigt den Speicherplatzverbrauch von Dateien und Ordnern an (disk usage).",
                "syntax": "du [OPTIONEN] [PFAD]",
                "examples": [
                    {
                        "cmd": "du -sh Linux-Handbuch/*",
                        "desc": "Grösse jedes Elements im Ordner",
                        "output": "24K     Linux-Handbuch/kapitel01\n128K    Linux-Handbuch/kapitel02"
                    }
                ],
                "options": [
                    {
                        "flag": "-s",
                        "desc": "Nur Gesamtsumme anzeigen",
                        "color": "orange"
                    },
                    {
                        "flag": "-h",
                        "desc": "Lesbares Format",
                        "color": "blue"
                    },
                    {
                        "flag": "-a",
                        "desc": "Auch einzelne Dateien anzeigen",
                        "color": "green"
                    }
                ],
                "hint": "Die Kombination -sh mit einem Stern (*) am Pfadende zeigt praktischerweise die Grösse jedes Elements einzeln, statt nur die Gesamtsumme."
            },
            {
                "title": "realpath",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt den vollständigen, absoluten Pfad einer Datei oder eines Ordners an.",
                "syntax": "realpath [DATEI/ORDNER]",
                "examples": [
                    {
                        "cmd": "realpath bericht.txt",
                        "desc": "Zeigt den absoluten Pfad",
                        "output": "/home/bbw/Linux-Handbuch/kapitel01/bericht.txt"
                    }
                ],
                "options": [
                    {
                        "flag": "--relative-to=[PFAD]",
                        "desc": "Zeigt Pfad relativ zu einem Ort",
                        "color": "orange"
                    }
                ],
                "hint": "realpath löst auch symbolische Links auf und zeigt den tatsächlichen Zielort, was pwd nicht tut."
            },
            {
                "type": "info",
                "title": "Der Dateibaum & man",
                "body": "<p>Alles hängt unter <code>/</code>. Verzeichnisse werden mit <code>/</code> getrennt: <code>/home/anna/notizen.txt</code>. Ein Pfad, der mit <code>/</code> beginnt, ist <strong>absolut</strong> (vom Wurzelverzeichnis aus). Sonst ist er <strong>relativ</strong> zum aktuellen Verzeichnis.</p><p>Zu fast jedem Befehl gibt es ein Handbuch: <code>man ls</code>. Beenden mit <code>q</code>, suchen mit <code>/begriff</code>. Das ist das wichtigste Werkzeug, niemand merkt sich alle Optionen auswendig.</p><p>Abkürzungen für Pfade: <code>.</code> = aktuelles Verzeichnis, <code>..</code> = eine Ebene höher, <code>~</code> = das eigene Home-Verzeichnis, <code>/</code> = Wurzel.</p>"
            },
            {
                "type": "info",
                "title": "Quoting",
                "body": "<p>Die Shell trennt Argumente an Leerzeichen. <code>touch Vorname Nachname</code> erstellt also zwei Dateien. Wenn man eine Datei mit Leerzeichen im Namen erstellen möchte, gibt es drei Wege:</p><p>1. Anführungszeichen: <code>touch \"Vorname Nachname\"</code><br>2. Apostrophe: <code>touch 'Vorname Nachname'</code><br>3. Maskieren (escapen) mit Backslash: <code>touch Vorname\\ Nachname</code></p><p>Der Backslash <code>\\</code> nimmt dem nächsten Zeichen seine Sonderbedeutung. Details stehen in <code>man bash</code> im Abschnitt QUOTING.</p>"
            }
        ]
    },
    {
        "name": "Dateien & Verzeichnisse",
        "commands": [
            {
                "title": "mkdir",
                "level": "ANFÄNGER",
                "description": "Erstellt einen neuen Ordner.",
                "syntax": "mkdir [OPTIONEN] [ORDNERNAME]",
                "examples": [
                    {
                        "cmd": "mkdir -p Linux-Handbuch/kapitel03/uebungen",
                        "desc": "Erstellt verschachtelte Ordner auf einmal",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-p",
                        "desc": "Erstellt bei Bedarf auch fehlende übergeordnete Ordner",
                        "color": "orange"
                    }
                ],
                "hint": "Ohne -p schlägt der Befehl fehl, wenn ein übergeordneter Ordner noch nicht existiert."
            },
            {
                "title": "touch",
                "level": "ANFÄNGER",
                "description": "Erstellt eine leere Datei oder aktualisiert das Änderungsdatum einer bestehenden Datei.",
                "syntax": "touch [DATEINAME]",
                "examples": [
                    {
                        "cmd": "touch notizen.txt",
                        "desc": "Erstellt eine leere Datei",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-t [ZEIT]",
                        "desc": "Setzt ein bestimmtes Datum statt der aktuellen Zeit",
                        "color": "orange"
                    }
                ],
                "hint": "touch wird oft genutzt, um schnell Platzhalter-Dateien anzulegen, z.B. beim Aufbau einer Ordnerstruktur."
            },
            {
                "title": "cp",
                "level": "ANFÄNGER",
                "description": "Kopiert Dateien oder Ordner.",
                "syntax": "cp [OPTIONEN] [QUELLE] [ZIEL]",
                "examples": [
                    {
                        "cmd": "cp -r Linux-Handbuch/ Linux-Handbuch-backup/",
                        "desc": "Kopiert einen ganzen Ordner",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-r",
                        "desc": "Ordner rekursiv kopieren",
                        "color": "orange"
                    },
                    {
                        "flag": "-v",
                        "desc": "Jede kopierte Datei anzeigen",
                        "color": "blue"
                    },
                    {
                        "flag": "-i",
                        "desc": "Vor Überschreiben nachfragen",
                        "color": "green"
                    }
                ],
                "hint": "Ordner lassen sich nur mit -r kopieren. Ohne diese Option gibt cp eine Fehlermeldung aus."
            },
            {
                "title": "mv",
                "level": "ANFÄNGER",
                "description": "Verschiebt Dateien oder Ordner, oder benennt sie um.",
                "syntax": "mv [QUELLE] [ZIEL]",
                "examples": [
                    {
                        "cmd": "mv bericht_alt.txt archiv/bericht_2025.txt",
                        "desc": "Verschiebt und benennt gleichzeitig um",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-i",
                        "desc": "Vor Überschreiben nachfragen",
                        "color": "orange"
                    },
                    {
                        "flag": "-v",
                        "desc": "Vorgang im Terminal anzeigen",
                        "color": "blue"
                    }
                ],
                "hint": "mv ins gleiche Verzeichnis mit neuem Namen ist der Standardweg, um eine Datei umzubenennen."
            },
            {
                "title": "rm",
                "level": "ANFÄNGER",
                "description": "Löscht Dateien oder Verzeichnisse unwiderruflich.",
                "syntax": "rm [OPTIONEN] [DATEI]",
                "examples": [
                    {
                        "cmd": "rm datei.txt",
                        "desc": "Löscht eine einzelne Datei",
                        "output": ""
                    },
                    {
                        "cmd": "rm -r alte-notizen/",
                        "desc": "Löscht ein Verzeichnis rekursiv",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-r",
                        "desc": "Rekursiv löschen",
                        "color": "orange"
                    },
                    {
                        "flag": "-f",
                        "desc": "Ohne Rückfrage löschen",
                        "color": "blue"
                    },
                    {
                        "flag": "-i",
                        "desc": "Vor jedem Löschvorgang nachfragen",
                        "color": "green"
                    }
                ],
                "hint": "Es gibt keinen Papierkorb in der Kommandozeile. rm -rf sollte besonders vorsichtig verwendet werden, da sich gelöschte Dateien nicht wiederherstellen lassen."
            },
            {
                "title": "ln",
                "level": "FORTGESCHRITTEN",
                "description": "Erstellt Verknüpfungen (Links) zwischen Dateien.",
                "syntax": "ln [OPTIONEN] [ZIEL] [LINKNAME]",
                "examples": [
                    {
                        "cmd": "ln -s /home/bbw/Linux-Handbuch/bericht.txt schnellzugriff.txt",
                        "desc": "Erstellt einen symbolischen Link",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-s",
                        "desc": "Erstellt einen symbolischen Link",
                        "color": "orange"
                    }
                ],
                "hint": "Symbolische Links (-s) sind wie Verknüpfungen unter Windows. Ohne -s wird ein harter Link erstellt, der sich anders verhält."
            },
            {
                "title": "rsync",
                "level": "FORTGESCHRITTEN",
                "description": "Kopiert oder synchronisiert grosse Datenmengen effizient, da nur Änderungen übertragen werden.",
                "syntax": "rsync [OPTIONEN] [QUELLE] [ZIEL]",
                "examples": [
                    {
                        "cmd": "rsync -av Linux-Handbuch/ backup/Linux-Handbuch/",
                        "desc": "Synchronisiert Ordnerinhalt",
                        "output": "sending incremental file list\nbericht.txt\nsent 3.412.099 bytes  received 42 bytes"
                    }
                ],
                "options": [
                    {
                        "flag": "-a",
                        "desc": "Archivmodus (Rechte, Zeitstempel, Unterordner erhalten)",
                        "color": "orange"
                    },
                    {
                        "flag": "-v",
                        "desc": "Fortschritt anzeigen",
                        "color": "blue"
                    },
                    {
                        "flag": "--delete",
                        "desc": "Entfernte Dateien auch im Ziel löschen",
                        "color": "green"
                    }
                ],
                "hint": "Anders als cp überträgt rsync bei erneutem Ausführen nur geänderte Dateien. Ideal für Backups."
            },
            {
                "title": "stat",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt detaillierte Informationen zu einer Datei an, z.B. Grösse, Rechte und Zeitstempel.",
                "syntax": "stat [DATEI]",
                "examples": [
                    {
                        "cmd": "stat bericht.txt",
                        "desc": "Zeigt Dateidetails an",
                        "output": "File: bericht.txt\nSize: 12288       Blocks: 24\nModify: 2025-06-28 14:02:11"
                    }
                ],
                "options": [],
                "hint": "stat zeigt deutlich mehr Details als ls -l, z.B. auch den letzten Zugriffszeitpunkt."
            },
            {
                "title": "file",
                "level": "ANFÄNGER",
                "description": "Zeigt den tatsächlichen Dateityp an, unabhängig von der Dateiendung.",
                "syntax": "file [DATEI]",
                "examples": [
                    {
                        "cmd": "file unbekannt.dat",
                        "desc": "Zeigt den echten Dateityp",
                        "output": "unbekannt.dat: PDF document, version 1.7"
                    }
                ],
                "options": [],
                "hint": "file ist praktisch, wenn eine Datei eine falsche oder fehlende Endung hat und man wissen möchte, was wirklich drinsteckt."
            },
            {
                "title": "rename",
                "level": "FORTGESCHRITTEN",
                "description": "Benennt mehrere Dateien gleichzeitig anhand eines Musters um.",
                "syntax": "rename [MUSTER] [DATEI(EN)]",
                "examples": [
                    {
                        "cmd": "rename 's/.jpeg/.jpg/' *.jpeg",
                        "desc": "Ändert alle .jpeg zu .jpg",
                        "output": ""
                    }
                ],
                "options": [],
                "hint": "rename ist nicht auf jedem System vorinstalliert und nutzt reguläre Ausdrücke. Für einzelne Dateien reicht meist mv."
            },
            {
                "type": "info",
                "title": "Versteckte Dateien & das Home-Verzeichnis",
                "body": "<p>Dateien, deren Name mit einem Punkt beginnt (z.B. <code>.bashrc</code>), sind \"versteckt\"<code>ls</code> zeigt sie nicht. Mit <code>ls -a</code> (all) werden sie sichtbar. Hier liegen meist Konfigurationsdateien.</p><p>Die <code>.bash_*</code>-Dateien steuern die Shell: <code>.bashrc</code> wird bei jeder interaktiven Shell ausgeführt (Aliase, Prompt), <code>.bash_history</code> speichert eingegebene Befehle, <code>.bash_profile</code> läuft beim Login.</p><p>Ins Home-Verzeichnis gelangt man auf mindestens drei Wegen, egal als welcher User: <code>cd</code> (ohne Argument), <code>cd ~</code> oder <code>cd $HOME</code>.</p>"
            }
        ]
    },
    {
        "name": "Dateiinhalt lesen",
        "commands": [
            {
                "title": "cat",
                "level": "ANFÄNGER",
                "description": "Gibt den gesamten Inhalt einer Datei im Terminal aus.",
                "syntax": "cat [DATEI]",
                "examples": [
                    {
                        "cmd": "cat notizen.txt",
                        "desc": "Zeigt den Dateiinhalt an",
                        "output": "Einkaufsliste:\n- Milch\n- Brot\n- Kaffee"
                    }
                ],
                "options": [
                    {
                        "flag": "-n",
                        "desc": "Zeilennummern anzeigen",
                        "color": "orange"
                    }
                ],
                "hint": "cat eignet sich gut für kurze Dateien. Bei langen Dateien eignet sich less besser."
            },
            {
                "title": "less",
                "level": "ANFÄNGER",
                "description": "Zeigt den Inhalt einer Datei seitenweise an, ohne alles auf einmal auszugeben.",
                "syntax": "less [DATEI]",
                "examples": [
                    {
                        "cmd": "less logfile.txt",
                        "desc": "Öffnet die Datei interaktiv",
                        "output": "Navigation mit Pfeiltasten, Beenden mit q"
                    }
                ],
                "options": [
                    {
                        "flag": "/[SUCHBEGRIFF]",
                        "desc": "Sucht innerhalb von less (im Programm eingeben)",
                        "color": "orange"
                    }
                ],
                "hint": "less lädt die Datei nicht komplett in den Speicher, weshalb es sich auch für sehr grosse Dateien eignet."
            },
            {
                "title": "more",
                "level": "ANFÄNGER",
                "description": "Ähnlich wie less, zeigt Inhalte seitenweise an, ist aber einfacher und älter.",
                "syntax": "more [DATEI]",
                "examples": [
                    {
                        "cmd": "more logfile.txt",
                        "desc": "Zeigt die erste Bildschirmseite",
                        "output": "Mit Leertaste weiterblättern"
                    }
                ],
                "options": [],
                "hint": "less kann fast alles, was more kann, zusätzlich aber auch rückwärts blättern. Meist wird less bevorzugt."
            },
            {
                "title": "head",
                "level": "ANFÄNGER",
                "description": "Zeigt die ersten Zeilen einer Datei an.",
                "syntax": "head [OPTIONEN] [DATEI]",
                "examples": [
                    {
                        "cmd": "head -n 5 logfile.txt",
                        "desc": "Zeigt die ersten 5 Zeilen",
                        "output": "09:12:03 Server gestartet\n09:12:05 Verbindung hergestellt\n09:13:41 Nutzer eingeloggt"
                    }
                ],
                "options": [
                    {
                        "flag": "-n [ZAHL]",
                        "desc": "Anzahl Zeilen festlegen (Standard: 10)",
                        "color": "orange"
                    }
                ],
                "hint": "head eignet sich gut, um schnell einen Überblick über eine Datei zu bekommen."
            },
            {
                "title": "tail",
                "level": "ANFÄNGER",
                "description": "Zeigt die letzten Zeilen einer Datei an.",
                "syntax": "tail [OPTIONEN] [DATEI]",
                "examples": [
                    {
                        "cmd": "tail -f logfile.txt",
                        "desc": "Verfolgt die Datei live",
                        "output": "Zeigt die letzten Zeilen, neue Einträge erscheinen laufend"
                    }
                ],
                "options": [
                    {
                        "flag": "-n [ZAHL]",
                        "desc": "Anzahl Zeilen festlegen",
                        "color": "orange"
                    },
                    {
                        "flag": "-f",
                        "desc": "Datei live verfolgen",
                        "color": "blue"
                    }
                ],
                "hint": "tail -f wird sehr häufig verwendet, um Logdateien in Echtzeit zu beobachten, z.B. bei laufenden Servern."
            },
            {
                "title": "grep",
                "level": "FORTGESCHRITTEN",
                "description": "Durchsucht Dateien nach Textmustern und zeigt passende Zeilen an.",
                "syntax": "grep [OPTIONEN] [MUSTER] [DATEI]",
                "examples": [
                    {
                        "cmd": "grep -n \"Fehler\" logfile.txt",
                        "desc": "Zeigt Zeilen mit 'Fehler' inkl. Zeilennummer",
                        "output": "42: 09:41:12 Fehler beim Verbindungsaufbau\n108: 10:03:55 Fehler: Timeout"
                    }
                ],
                "options": [
                    {
                        "flag": "-i",
                        "desc": "Gross-/Kleinschreibung ignorieren",
                        "color": "orange"
                    },
                    {
                        "flag": "-r",
                        "desc": "Ordner rekursiv durchsuchen",
                        "color": "blue"
                    },
                    {
                        "flag": "-n",
                        "desc": "Zeilennummer anzeigen",
                        "color": "green"
                    },
                    {
                        "flag": "-v",
                        "desc": "Nur nicht passende Zeilen zeigen",
                        "color": "purple"
                    }
                ],
                "hint": "grep gehört zu den am häufigsten genutzten Befehlen überhaupt und wird oft mit Pipes kombiniert."
            },
            {
                "title": "wc",
                "level": "ANFÄNGER",
                "description": "Zählt Zeilen, Wörter und Zeichen einer Datei (word count).",
                "syntax": "wc [OPTIONEN] [DATEI]",
                "examples": [
                    {
                        "cmd": "wc -l logfile.txt",
                        "desc": "Zählt die Zeilen",
                        "output": "342 logfile.txt"
                    }
                ],
                "options": [
                    {
                        "flag": "-l",
                        "desc": "Nur Zeilen zählen",
                        "color": "orange"
                    },
                    {
                        "flag": "-w",
                        "desc": "Nur Wörter zählen",
                        "color": "blue"
                    },
                    {
                        "flag": "-c",
                        "desc": "Nur Zeichen zählen",
                        "color": "green"
                    }
                ],
                "hint": "wc -l wird oft mit grep kombiniert, um die Anzahl der Treffer zu zählen."
            },
            {
                "title": "sort",
                "level": "ANFÄNGER",
                "description": "Sortiert die Zeilen einer Datei alphabetisch oder numerisch.",
                "syntax": "sort [OPTIONEN] [DATEI]",
                "examples": [
                    {
                        "cmd": "sort namen.txt",
                        "desc": "Sortiert alphabetisch",
                        "output": "Anna\nBernd\nClara"
                    }
                ],
                "options": [
                    {
                        "flag": "-n",
                        "desc": "Numerisch statt alphabetisch sortieren",
                        "color": "orange"
                    },
                    {
                        "flag": "-r",
                        "desc": "Sortierreihenfolge umkehren",
                        "color": "blue"
                    },
                    {
                        "flag": "-u",
                        "desc": "Doppelte Zeilen entfernen",
                        "color": "green"
                    }
                ],
                "hint": "Ohne -n sortiert sort Zahlen wie Text, wodurch z.B. 10 vor 2 stehen würde."
            },
            {
                "title": "uniq",
                "level": "FORTGESCHRITTEN",
                "description": "Entfernt aufeinanderfolgende doppelte Zeilen aus einer Datei.",
                "syntax": "uniq [OPTIONEN] [DATEI]",
                "examples": [
                    {
                        "cmd": "sort namen.txt | uniq -c",
                        "desc": "Zählt, wie oft jede Zeile vorkommt",
                        "output": "2 Anna\n1 Bernd\n3 Clara"
                    }
                ],
                "options": [
                    {
                        "flag": "-c",
                        "desc": "Zeigt zusätzlich die Häufigkeit",
                        "color": "orange"
                    }
                ],
                "hint": "uniq erkennt nur direkt aufeinanderfolgende Duplikate, deshalb sollte die Datei meist vorher mit sort sortiert werden."
            },
            {
                "title": "diff",
                "level": "FORTGESCHRITTEN",
                "description": "Vergleicht zwei Dateien und zeigt die Unterschiede an.",
                "syntax": "diff [DATEI1] [DATEI2]",
                "examples": [
                    {
                        "cmd": "diff -u bericht_alt.txt bericht_neu.txt",
                        "desc": "Zeigt Unterschiede im unified-Format",
                        "output": "-Der Umsatz stieg um 5%.\n+Der Umsatz stieg um 8%."
                    }
                ],
                "options": [
                    {
                        "flag": "-u",
                        "desc": "Unterschiede im unified-Format anzeigen",
                        "color": "orange"
                    }
                ],
                "hint": "Zeilen mit - stammen aus der ersten, Zeilen mit + aus der zweiten Datei."
            },
            {
                "title": "cut",
                "level": "FORTGESCHRITTEN",
                "description": "Schneidet bestimmte Spalten oder Zeichenbereiche aus jeder Zeile einer Datei heraus.",
                "syntax": "cut [OPTIONEN] [DATEI]",
                "examples": [
                    {
                        "cmd": "cut -d',' -f1 kontakte.csv",
                        "desc": "Gibt die erste Spalte aus",
                        "output": "Anna\nBernd\nClara"
                    }
                ],
                "options": [
                    {
                        "flag": "-d [ZEICHEN]",
                        "desc": "Trennzeichen festlegen",
                        "color": "orange"
                    },
                    {
                        "flag": "-f [ZAHL]",
                        "desc": "Spaltennummer wählen",
                        "color": "blue"
                    }
                ],
                "hint": "cut eignet sich gut für einfache, sauber strukturierte Dateien wie CSV. Bei komplexeren Fällen ist awk flexibler."
            },
            {
                "title": "awk",
                "level": "FORTGESCHRITTEN",
                "description": "Ein mächtiges Werkzeug zur Textverarbeitung, das Zeilen in Spalten aufteilt und gezielt verarbeitet.",
                "syntax": "awk '[PROGRAMM]' [DATEI]",
                "examples": [
                    {
                        "cmd": "awk -F',' '{print $2}' kontakte.csv",
                        "desc": "Gibt die zweite Spalte aus",
                        "output": "anna@mail.ch\nbernd@mail.ch\nclara@mail.ch"
                    }
                ],
                "options": [
                    {
                        "flag": "'{print $1}'",
                        "desc": "Erste Spalte jeder Zeile ausgeben",
                        "color": "orange"
                    },
                    {
                        "flag": "-F ','",
                        "desc": "Eigenes Trennzeichen festlegen",
                        "color": "blue"
                    }
                ],
                "hint": "awk kann sehr komplex werden. Für den Einstieg reicht es, einzelne Spalten mit print $spaltennummer auszugeben."
            },
            {
                "title": "sed",
                "level": "FORTGESCHRITTEN",
                "description": "Sucht und ersetzt Text in Dateien automatisch, ohne einen Editor zu öffnen (stream editor).",
                "syntax": "sed 's/[ALT]/[NEU]/g' [DATEI]",
                "examples": [
                    {
                        "cmd": "sed 's/Fehler/Warnung/g' logfile.txt",
                        "desc": "Ersetzt alle Vorkommen von 'Fehler'",
                        "output": "Zeigt logfile.txt mit ersetztem Text, ohne die Originaldatei zu ändern"
                    }
                ],
                "options": [
                    {
                        "flag": "-i",
                        "desc": "Ändert die Datei direkt statt nur die Ausgabe anzuzeigen",
                        "color": "orange"
                    }
                ],
                "hint": "Ohne -i verändert sed die Originaldatei nicht, sondern gibt das Ergebnis nur im Terminal aus."
            }
        ]
    },
    {
        "name": "Berechtigungen",
        "commands": [
            {
                "title": "chmod",
                "level": "FORTGESCHRITTEN",
                "description": "Ändert die Zugriffsrechte einer Datei oder eines Verzeichnisses.",
                "syntax": "chmod [RECHTE] [DATEI]",
                "examples": [
                    {
                        "cmd": "chmod 755 script.sh",
                        "desc": "Setzt Rechte auf 755",
                        "output": "ls -l zeigt danach: -rwxr-xr-x script.sh"
                    }
                ],
                "options": [
                    {
                        "flag": "u+x",
                        "desc": "Besitzer Ausführrechte geben",
                        "color": "orange"
                    },
                    {
                        "flag": "g-w",
                        "desc": "Gruppe Schreibrechte entziehen",
                        "color": "blue"
                    },
                    {
                        "flag": "755",
                        "desc": "Numerisch: rwx / r-x / r-x",
                        "color": "green"
                    }
                ],
                "hint": "Die Zahlenschreibweise ist eine Summe: Lesen = 4, Schreiben = 2, Ausführen = 1. 7 bedeutet also alle drei Rechte."
            },
            {
                "title": "chown",
                "level": "FORTGESCHRITTEN",
                "description": "Ändert den Besitzer einer Datei oder eines Ordners.",
                "syntax": "chown [BENUTZER] [DATEI]",
                "examples": [
                    {
                        "cmd": "sudo chown bbw:bbw bericht.txt",
                        "desc": "Setzt Besitzer und Gruppe",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-R",
                        "desc": "Rekursiv anwenden",
                        "color": "orange"
                    },
                    {
                        "flag": "[BENUTZER]:[GRUPPE]",
                        "desc": "Besitzer und Gruppe gleichzeitig ändern",
                        "color": "blue"
                    }
                ],
                "hint": "chown benötigt normalerweise sudo-Rechte, da Nutzer sonst nur eigene Dateien ändern dürfen."
            },
            {
                "title": "chgrp",
                "level": "FORTGESCHRITTEN",
                "description": "Ändert nur die Gruppenzugehörigkeit einer Datei, ohne den Besitzer zu ändern.",
                "syntax": "chgrp [GRUPPE] [DATEI]",
                "examples": [
                    {
                        "cmd": "chgrp team bericht.txt",
                        "desc": "Ändert die Gruppe",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-R",
                        "desc": "Rekursiv anwenden",
                        "color": "orange"
                    }
                ],
                "hint": "chgrp ist im Prinzip eine Kurzform von chown, wenn man nur die Gruppe ändern möchte."
            },
            {
                "title": "umask",
                "level": "FORTGESCHRITTEN",
                "description": "Legt fest, welche Standardrechte neu erstellte Dateien und Ordner automatisch erhalten.",
                "syntax": "umask [WERT]",
                "examples": [
                    {
                        "cmd": "umask 022",
                        "desc": "Setzt die Standardmaske",
                        "output": "Neue Dateien erhalten 644, neue Ordner 755"
                    }
                ],
                "options": [],
                "hint": "Der umask-Wert wird von den maximalen Rechten (666 für Dateien, 777 für Ordner) abgezogen."
            },
            {
                "title": "sudo",
                "level": "ANFÄNGER",
                "description": "Führt einen Befehl mit Administratorrechten aus (superuser do).",
                "syntax": "sudo [BEFEHL]",
                "examples": [
                    {
                        "cmd": "sudo apt update",
                        "desc": "Führt den Befehl mit erweiterten Rechten aus",
                        "output": "[sudo] Passwort für bbw: ****"
                    }
                ],
                "options": [
                    {
                        "flag": "-i",
                        "desc": "Vollständige Root-Shell starten",
                        "color": "orange"
                    }
                ],
                "hint": "sudo sollte nur verwendet werden, wenn es wirklich nötig ist. Ein falscher Befehl mit sudo kann grösseren Schaden anrichten."
            },
            {
                "title": "su",
                "level": "FORTGESCHRITTEN",
                "description": "Wechselt zu einem anderen Benutzerkonto (switch user), z.B. direkt zu root.",
                "syntax": "su [BENUTZERNAME]",
                "examples": [
                    {
                        "cmd": "su -",
                        "desc": "Wechselt vollständig ins root-Konto",
                        "output": "Erkennbar am # statt $ im Prompt"
                    }
                ],
                "options": [
                    {
                        "flag": "-",
                        "desc": "Lädt die Umgebung des Zielbenutzers vollständig",
                        "color": "orange"
                    }
                ],
                "hint": "Auf modernen Ubuntu-Systemen ist das root-Passwort meist nicht gesetzt, dort wird stattdessen sudo bevorzugt."
            },
            {
                "title": "whoami",
                "level": "ANFÄNGER",
                "description": "Zeigt den Namen des aktuell angemeldeten Benutzers an.",
                "syntax": "whoami",
                "examples": [
                    {
                        "cmd": "whoami",
                        "desc": "Zeigt den eigenen Benutzernamen",
                        "output": "bbw"
                    }
                ],
                "options": [],
                "hint": "whoami ist praktisch, um schnell zu prüfen, mit welchem Konto man gerade arbeitet, besonders nach su oder sudo -i."
            },
            {
                "title": "id",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt die Benutzer-ID, Gruppen-ID und alle Gruppenmitgliedschaften des aktuellen Benutzers an.",
                "syntax": "id [BENUTZERNAME]",
                "examples": [
                    {
                        "cmd": "id",
                        "desc": "Zeigt UID, GID und Gruppen",
                        "output": "uid=1000(bbw) gid=1000(bbw) gruppen=1000(bbw),27(sudo)"
                    }
                ],
                "options": [],
                "hint": "An der Gruppe sudo in der Ausgabe lässt sich erkennen, ob ein Benutzer Administratorrechte über sudo besitzt."
            },
            {
                "title": "groups",
                "level": "ANFÄNGER",
                "description": "Zeigt an, in welchen Gruppen der aktuelle oder ein anderer Benutzer Mitglied ist.",
                "syntax": "groups [BENUTZERNAME]",
                "examples": [
                    {
                        "cmd": "groups bbw",
                        "desc": "Zeigt alle Gruppen von bbw",
                        "output": "bbw : bbw sudo docker"
                    }
                ],
                "options": [],
                "hint": "groups zeigt eine übersichtlichere, kürzere Liste als id."
            },
            {
                "type": "info",
                "title": "Multiuser: root, /etc/passwd & /etc/shadow",
                "body": "<p>Linux ist ein Mehrbenutzersystem. <strong>root</strong> ist der allmächtige Administrator. Nur root darf in Systemverzeichnisse schreiben - so kann nicht jeder Benutzer wild Software installieren.</p><p><code>/etc/passwd</code> enthält alle Benutzer und Login-Infos (für alle lesbar). Die eigentlichen Passwörter liegen verschlüsselt in <code>/etc/shadow</code>, die nur root lesen darf. Darum wird <code>sudo cat /etc/shadow</code> benötigt.</p>"
            },
            {
                "type": "info",
                "title": "Wo Benutzer & Gruppen leben",
                "body": "<p><code>/etc/passwd</code> - eine Zeile pro Benutzer, Felder durch <code>:</code> getrennt: <code>anna:x:1000:1000:Anna Meier:/home/anna:/bin/bash</code> → Name : Passwortplatzhalter : UID : GID : Kommentar : Home : Login-Shell.</p><p><code>/etc/group</code> definiert Gruppen und deren Mitglieder.</p><p><strong>UID vs. GID & n:m-Beziehung:</strong> Jeder User hat genau eine primäre Gruppe (GID), kann aber Mitglied mehrerer weiterer Gruppen sein. Gruppen wiederum enthalten viele User, eine klassische n:m-Beziehung.</p><p><strong>/etc/skel</strong> eine Vorlage: Was hier liegt, bekommt jeder neue Benutzer automatisch ins Home-Verzeichnis kopiert.</p>"
            },
            {
                "type": "info",
                "title": "Rechte lesen: rwx und die Oktalzahlen",
                "body": "<p>In Linux ist alles ein \"File\". Jede Datei gehört einem Owner und einer Ownergroup. <code>ls -l</code> zeigt die Rechte ganz links, z.B. <code>-rw-r--r--</code>.</p><p>Das erste Zeichen ist der Typ (<code>-</code> Datei, <code>d</code> Verzeichnis). Dann drei Dreierblöcke: Rechte des Besitzers, Rechte der Gruppe, Rechte aller anderen.</p><p><code>r</code> = read (lesen), <code>w</code> = write (schreiben), <code>x</code> = execute (ausführen). Jedes ist ein Bit. Pro Block ergibt sich eine Oktalzahl: <code>r=4</code>, <code>w=2</code>, <code>x=1</code> → <code>rwx = 7</code>, <code>rw- = 6</code>, <code>r-- = 4</code>, <code>r-x = 5</code>.</p><p><strong>chmod absolut:</strong> <code>chmod 664 datei</code> setzt rw-rw-r-- (egal was vorher war). <strong>chmod relativ:</strong> <code>chmod ug+rw datei</code> gibt Owner (u) und Group (g) zusätzlich Lese- und Schreibrecht. <code>+</code> hinzufügen, <code>-</code> entfernen, <code>o</code> = others, <code>a</code> = alle.</p>"
            },
            {
                "type": "info",
                "title": "Rechte beim Kopieren, Umbenennen & der $PATH-Effekt",
                "body": "<p><strong>access / modify / change:</strong> access = zuletzt gelesen, modify = Inhalt zuletzt geändert, change = Metadaten (Rechte/Besitzer) zuletzt geändert.</p><p><strong>Kopieren (cp):</strong> Die Kopie gehört dem ausführenden Nutzer und bekommt frische Rechte - die Kopie ist eine neue Datei.</p><p><strong>Umbenennen (mv):</strong> Besitzer und Rechte bleiben unverändert, es ist dieselbe Datei, nur mit neuem Namen.</p><p><strong>Der $PATH-Trick:</strong> Kopiert man ein Skript nach <code>ls</code> und tippt <code>ls</code>, läuft trotzdem das echte <code>/usr/bin/ls</code> denn die Shell sucht in <code>$PATH</code> der Reihe nach. Die lokale Datei startet man nur explizit mit <code>./ls</code>.</p>"
            }
        ]
    },
    {
        "name": "Prozesse",
        "commands": [
            {
                "title": "ps",
                "level": "ANFÄNGER",
                "description": "Zeigt eine Momentaufnahme der aktuell laufenden Prozesse an.",
                "syntax": "ps [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "ps aux | grep firefox",
                        "desc": "Zeigt firefox-Prozesse",
                        "output": "bbw  4821  2.1  3.4  firefox"
                    }
                ],
                "options": [
                    {
                        "flag": "aux",
                        "desc": "Alle Prozesse aller Benutzer mit Details",
                        "color": "orange"
                    },
                    {
                        "flag": "-ef",
                        "desc": "Alternative Ansicht mit vollständigen Befehlszeilen",
                        "color": "blue"
                    }
                ],
                "hint": "ps zeigt nur eine Momentaufnahme. Für eine laufend aktualisierte Ansicht eignet sich top oder htop besser."
            },
            {
                "title": "top",
                "level": "ANFÄNGER",
                "description": "Zeigt laufende Prozesse live an, sortiert nach CPU-Auslastung, und aktualisiert sich laufend.",
                "syntax": "top",
                "examples": [
                    {
                        "cmd": "top",
                        "desc": "Öffnet die interaktive Prozessübersicht",
                        "output": "Beenden mit q"
                    }
                ],
                "options": [
                    {
                        "flag": "P",
                        "desc": "In top: nach CPU-Auslastung sortieren",
                        "color": "orange"
                    },
                    {
                        "flag": "M",
                        "desc": "In top: nach Arbeitsspeicher sortieren",
                        "color": "blue"
                    }
                ],
                "hint": "top ist auf jedem Linux-System vorinstalliert, wirkt aber etwas unübersichtlich. htop ist die moderne Alternative."
            },
            {
                "title": "htop",
                "level": "ANFÄNGER",
                "description": "Eine übersichtlichere, farbige Version von top mit Mausunterstützung.",
                "syntax": "htop",
                "examples": [
                    {
                        "cmd": "htop",
                        "desc": "Öffnet die farbige Prozessübersicht",
                        "output": "Beenden mit F10 oder q"
                    }
                ],
                "options": [],
                "hint": "htop muss meist zuerst installiert werden: sudo apt install htop."
            },
            {
                "title": "kill",
                "level": "FORTGESCHRITTEN",
                "description": "Beendet einen Prozess anhand seiner Prozess-ID (PID).",
                "syntax": "kill [PID]",
                "examples": [
                    {
                        "cmd": "kill -9 4821",
                        "desc": "Beendet den Prozess sofort",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-9",
                        "desc": "Sofortiges Beenden erzwingen (SIGKILL)",
                        "color": "orange"
                    },
                    {
                        "flag": "-15",
                        "desc": "Höfliches Beenden-Signal (Standard, SIGTERM)",
                        "color": "blue"
                    }
                ],
                "hint": "kill -9 sollte nur als letztes Mittel genutzt werden, da der Prozess keine Chance zum sauberen Beenden erhält."
            },
            {
                "title": "jobs",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt alle Hintergrundprozesse (Jobs) an, die in der aktuellen Terminal-Sitzung gestartet wurden.",
                "syntax": "jobs",
                "examples": [
                    {
                        "cmd": "jobs",
                        "desc": "Zeigt aktive Hintergrund-Jobs",
                        "output": "[1]+  Läuft    sleep 300 &"
                    }
                ],
                "options": [
                    {
                        "flag": "-l",
                        "desc": "Zusätzlich Prozess-ID anzeigen",
                        "color": "orange"
                    }
                ],
                "hint": "jobs zeigt nur Prozesse, die im aktuellen Terminal gestartet wurden, nicht alle Prozesse des Systems."
            },
            {
                "title": "bg",
                "level": "FORTGESCHRITTEN",
                "description": "Setzt einen angehaltenen Prozess in den Hintergrund fort (background).",
                "syntax": "bg [JOB-NUMMER]",
                "examples": [
                    {
                        "cmd": "bg %1",
                        "desc": "Setzt Job 1 im Hintergrund fort",
                        "output": "[1]+ sleep 300 &"
                    }
                ],
                "options": [],
                "hint": "bg wird meist nach Strg+Z verwendet, um einen angehaltenen Prozess im Hintergrund weiterlaufen zu lassen."
            },
            {
                "title": "fg",
                "level": "FORTGESCHRITTEN",
                "description": "Holt einen Hintergrundprozess zurück in den Vordergrund (foreground).",
                "syntax": "fg [JOB-NUMMER]",
                "examples": [
                    {
                        "cmd": "fg %1",
                        "desc": "Holt Job 1 in den Vordergrund",
                        "output": "Terminal ist bis Befehlsende blockiert"
                    }
                ],
                "options": [],
                "hint": "Ohne Job-Nummer holt fg automatisch den zuletzt in den Hintergrund geschickten Prozess zurück."
            },
            {
                "title": "nice",
                "level": "FORTGESCHRITTEN",
                "description": "Startet einen Prozess mit einer bestimmten Priorität, um die CPU-Nutzung zu steuern.",
                "syntax": "nice -n [WERT] [BEFEHL]",
                "examples": [
                    {
                        "cmd": "nice -n 10 tar -czf backup.tar.gz Linux-Handbuch/",
                        "desc": "Startet mit niedrigerer Priorität",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-n [WERT]",
                        "desc": "Priorität von -20 (hoch) bis 19 (niedrig)",
                        "color": "orange"
                    }
                ],
                "hint": "Ein höherer nice-Wert bedeutet weniger Priorität – man ist quasi 'netter' zu den anderen Prozessen."
            },
            {
                "title": "renice",
                "level": "FORTGESCHRITTEN",
                "description": "Ändert die Priorität eines bereits laufenden Prozesses nachträglich.",
                "syntax": "renice [WERT] -p [PID]",
                "examples": [
                    {
                        "cmd": "renice 15 -p 4821",
                        "desc": "Ändert die Priorität nachträglich",
                        "output": "4821: old priority 0, new priority 15"
                    }
                ],
                "options": [],
                "hint": "Im Gegensatz zu nice muss der Prozess bei renice bereits laufen."
            },
            {
                "title": "nohup",
                "level": "FORTGESCHRITTEN",
                "description": "Startet einen Prozess so, dass er auch nach dem Schliessen des Terminals weiterläuft.",
                "syntax": "nohup [BEFEHL] &",
                "examples": [
                    {
                        "cmd": "nohup python3 server.py &",
                        "desc": "Startet den Prozess dauerhaft",
                        "output": "nohup: Ausgabe wird an 'nohup.out' angehängt"
                    }
                ],
                "options": [],
                "hint": "nohup wird oft in Kombination mit & verwendet, damit der Prozess im Hintergrund läuft und das Schliessen des Terminals überlebt."
            },
            {
                "title": "pgrep",
                "level": "ANFÄNGER",
                "description": "Sucht nach Prozessen anhand ihres Namens und zeigt deren Prozess-ID an.",
                "syntax": "pgrep [NAME]",
                "examples": [
                    {
                        "cmd": "pgrep -l firefox",
                        "desc": "Findet die PID von firefox",
                        "output": "4821 firefox"
                    }
                ],
                "options": [
                    {
                        "flag": "-l",
                        "desc": "Prozessname zur PID anzeigen",
                        "color": "orange"
                    }
                ],
                "hint": "pgrep spart den Umweg über ps aux | grep."
            },
            {
                "title": "pkill",
                "level": "FORTGESCHRITTEN",
                "description": "Beendet Prozesse direkt anhand ihres Namens, ohne die PID vorher nachschlagen zu müssen.",
                "syntax": "pkill [NAME]",
                "examples": [
                    {
                        "cmd": "pkill firefox",
                        "desc": "Beendet alle firefox-Prozesse",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-9",
                        "desc": "Sofortiges Beenden erzwingen",
                        "color": "orange"
                    }
                ],
                "hint": "pkill ist praktisch, kann aber gefährlich sein, wenn mehrere Prozesse denselben Namen tragen."
            },
            {
                "title": "watch",
                "level": "ANFÄNGER",
                "description": "Führt einen Befehl wiederholt in festen Abständen aus und zeigt die Ausgabe live aktualisiert an.",
                "syntax": "watch [OPTIONEN] [BEFEHL]",
                "examples": [
                    {
                        "cmd": "watch -n 5 df -h",
                        "desc": "Aktualisiert df -h alle 5 Sekunden",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-n [SEKUNDEN]",
                        "desc": "Aktualisierungsintervall festlegen",
                        "color": "orange"
                    }
                ],
                "hint": "watch eignet sich gut, um Systemwerte laufend im Blick zu behalten, ohne den Befehl manuell zu wiederholen."
            }
        ]
    },
    {
        "name": "Hilfesystem",
        "commands": [
            {
                "title": "man",
                "level": "ANFÄNGER",
                "description": "Öffnet das Handbuch (manual) zu einem Befehl mit ausführlicher Beschreibung aller Optionen.",
                "syntax": "man [BEFEHL]",
                "examples": [
                    {
                        "cmd": "man ls",
                        "desc": "Öffnet die man-Seite von ls",
                        "output": "Beenden mit q"
                    }
                ],
                "options": [
                    {
                        "flag": "/[SUCHBEGRIFF]",
                        "desc": "Sucht innerhalb der man-Seite",
                        "color": "orange"
                    }
                ],
                "hint": "man ist die ausführlichste, aber auch technischste Hilfequelle. Für einen schnellen Überblick eignet sich --help oft besser."
            },
            {
                "title": "--help",
                "level": "ANFÄNGER",
                "description": "Zeigt eine kurze Übersicht der wichtigsten Optionen eines Befehls direkt im Terminal an.",
                "syntax": "[BEFEHL] --help",
                "examples": [
                    {
                        "cmd": "ls --help",
                        "desc": "Zeigt Kurzübersicht der Optionen",
                        "output": "Usage: ls [OPTION]... [FILE]..."
                    }
                ],
                "options": [],
                "hint": "--help ist meist schneller als man, da man direkt im Terminal bleibt."
            },
            {
                "title": "tldr",
                "level": "ANFÄNGER",
                "description": "Zeigt vereinfachte Beispiele zu einem Befehl an, statt einer vollständigen technischen Beschreibung.",
                "syntax": "tldr [BEFEHL]",
                "examples": [
                    {
                        "cmd": "tldr tar",
                        "desc": "Zeigt praxisnahe Beispiele zu tar",
                        "output": "tldr\nArchivierungswerkzeug\n\n- Archiv erstellen:\n  tar cf archiv.tar ordner/"
                    }
                ],
                "options": [],
                "hint": "tldr muss zuerst installiert werden (sudo apt install tldr). Für den schnellen Einstieg oft verständlicher als man."
            }
        ]
    },
    {
        "name": "Paketverwaltung",
        "commands": [
            {
                "title": "apt update",
                "level": "ANFÄNGER",
                "description": "Aktualisiert die lokale Liste verfügbarer Pakete und deren Versionen aus den konfigurierten Quellen.",
                "syntax": "sudo apt update",
                "examples": [
                    {
                        "cmd": "sudo apt update",
                        "desc": "Lädt die aktuelle Paketliste",
                        "output": "Holen: http://archive.ubuntu.com ...\n12 Pakete können aktualisiert werden."
                    }
                ],
                "options": [],
                "hint": "apt update installiert noch nichts, es aktualisiert nur die Liste. Für echte Updates braucht es apt upgrade."
            },
            {
                "title": "apt upgrade",
                "level": "ANFÄNGER",
                "description": "Installiert verfügbare Updates für bereits installierte Pakete.",
                "syntax": "sudo apt upgrade",
                "examples": [
                    {
                        "cmd": "sudo apt upgrade",
                        "desc": "Installiert alle verfügbaren Updates",
                        "output": "Die folgenden Pakete werden aktualisiert: ..."
                    }
                ],
                "options": [
                    {
                        "flag": "-y",
                        "desc": "Bestätigt Rückfragen automatisch",
                        "color": "orange"
                    }
                ],
                "hint": "Es empfiehlt sich, apt update immer vor apt upgrade auszuführen, damit die Paketliste aktuell ist."
            },
            {
                "title": "apt install",
                "level": "ANFÄNGER",
                "description": "Installiert ein neues Paket.",
                "syntax": "sudo apt install [PAKET]",
                "examples": [
                    {
                        "cmd": "sudo apt install htop",
                        "desc": "Installiert das Paket htop",
                        "output": "Die folgenden NEUEN Pakete werden installiert: htop"
                    }
                ],
                "options": [
                    {
                        "flag": "-y",
                        "desc": "Bestätigt Rückfragen automatisch",
                        "color": "orange"
                    }
                ],
                "hint": "Mehrere Pakete lassen sich mit Leerzeichen getrennt gleichzeitig installieren."
            },
            {
                "title": "apt remove",
                "level": "FORTGESCHRITTEN",
                "description": "Entfernt ein installiertes Paket, lässt aber Konfigurationsdateien bestehen.",
                "syntax": "sudo apt remove [PAKET]",
                "examples": [
                    {
                        "cmd": "sudo apt remove htop",
                        "desc": "Entfernt das Paket htop",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "--purge",
                        "desc": "Entfernt zusätzlich alle Konfigurationsdateien",
                        "color": "orange"
                    }
                ],
                "hint": "Mit --purge werden auch die Konfigurationsdateien entfernt, sonst bleiben diese für eine spätere Neuinstallation erhalten."
            },
            {
                "title": "apt search",
                "level": "ANFÄNGER",
                "description": "Durchsucht die Paketquellen nach einem Suchbegriff.",
                "syntax": "apt search [BEGRIFF]",
                "examples": [
                    {
                        "cmd": "apt search editor",
                        "desc": "Sucht Pakete mit 'editor' im Namen/Beschreibung",
                        "output": "nano - kleiner, freundlicher Texteditor"
                    }
                ],
                "options": [],
                "hint": "apt search ist praktisch, wenn der genaue Paketname nicht bekannt ist."
            },
            {
                "title": "apt show",
                "level": "ANFÄNGER",
                "description": "Zeigt Detailinformationen zu einem Paket an, z.B. Version und Grösse.",
                "syntax": "apt show [PAKET]",
                "examples": [
                    {
                        "cmd": "apt show htop",
                        "desc": "Zeigt Details zum Paket htop",
                        "output": "Package: htop\nVersion: 3.0.5\nInstalled-Size: 320 kB"
                    }
                ],
                "options": [],
                "hint": "apt show funktioniert auch für Pakete, die noch nicht installiert sind."
            },
            {
                "title": "apt list",
                "level": "ANFÄNGER",
                "description": "Listet Pakete auf, z.B. alle installierten.",
                "syntax": "apt list [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "apt list --installed",
                        "desc": "Zeigt alle installierten Pakete",
                        "output": "htop/stable 3.0.5 amd64 [installiert]"
                    }
                ],
                "options": [
                    {
                        "flag": "--installed",
                        "desc": "Nur installierte Pakete anzeigen",
                        "color": "orange"
                    }
                ],
                "hint": "Die Liste kann sehr lang sein, weshalb sie oft mit grep kombiniert wird, z.B. apt list --installed | grep python."
            },
            {
                "title": "dpkg",
                "level": "FORTGESCHRITTEN",
                "description": "Verwaltet einzelne .deb-Paketdateien direkt, ohne die Online-Quellen von apt zu nutzen.",
                "syntax": "dpkg [OPTIONEN] [PAKET]",
                "examples": [
                    {
                        "cmd": "sudo dpkg -i programm.deb",
                        "desc": "Installiert eine lokale .deb-Datei",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-i",
                        "desc": "Installiert ein .deb-Paket",
                        "color": "orange"
                    },
                    {
                        "flag": "-l",
                        "desc": "Listet installierte Pakete auf",
                        "color": "blue"
                    },
                    {
                        "flag": "-r",
                        "desc": "Entfernt ein Paket",
                        "color": "green"
                    }
                ],
                "hint": "dpkg löst Abhängigkeiten nicht automatisch auf. Bei Fehlern hilft danach oft sudo apt install -f."
            },
            {
                "title": "snap",
                "level": "FORTGESCHRITTEN",
                "description": "Installiert und verwaltet Snap-Pakete, ein von Ubuntu-eigenes, containerisiertes Paketformat.",
                "syntax": "snap [BEFEHL] [PAKET]",
                "examples": [
                    {
                        "cmd": "sudo snap install code --classic",
                        "desc": "Installiert Visual Studio Code als Snap",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "install",
                        "desc": "Installiert ein Snap-Paket",
                        "color": "orange"
                    },
                    {
                        "flag": "list",
                        "desc": "Listet installierte Snaps auf",
                        "color": "blue"
                    },
                    {
                        "flag": "remove",
                        "desc": "Entfernt ein Snap-Paket",
                        "color": "green"
                    }
                ],
                "hint": "Snap-Pakete sind grösser und laufen isoliert vom restlichen System, dafür funktionieren sie auf sehr vielen Linux-Distributionen gleich."
            }
        ]
    },
    {
        "name": "Netzwerk",
        "commands": [
            {
                "title": "ping",
                "level": "ANFÄNGER",
                "description": "Prüft, ob ein anderer Rechner im Netzwerk erreichbar ist, und misst die Antwortzeit.",
                "syntax": "ping [OPTIONEN] [ZIEL]",
                "examples": [
                    {
                        "cmd": "ping -c 4 google.com",
                        "desc": "Sendet 4 Testpakete an google.com",
                        "output": "64 bytes from google.com: icmp_seq=1 ttl=115 time=12.4 ms"
                    }
                ],
                "options": [
                    {
                        "flag": "-c [ANZAHL]",
                        "desc": "Begrenzt die Anzahl der gesendeten Pakete",
                        "color": "orange"
                    }
                ],
                "hint": "Ohne -c läuft ping endlos weiter, bis es mit Strg+C abgebrochen wird."
            },
            {
                "title": "curl",
                "level": "FORTGESCHRITTEN",
                "description": "Ruft Inhalte von einer URL ab, z.B. um eine Webseite oder API-Antwort direkt im Terminal zu sehen.",
                "syntax": "curl [OPTIONEN] [URL]",
                "examples": [
                    {
                        "cmd": "curl https://api.beispiel.ch/status",
                        "desc": "Zeigt die Serverantwort an",
                        "output": "{\"status\": \"ok\"}"
                    }
                ],
                "options": [
                    {
                        "flag": "-O",
                        "desc": "Speichert die Antwort als Datei",
                        "color": "orange"
                    },
                    {
                        "flag": "-I",
                        "desc": "Zeigt nur die HTTP-Header",
                        "color": "blue"
                    }
                ],
                "hint": "curl gibt die Antwort standardmässig direkt im Terminal aus, wget speichert sie standardmässig als Datei."
            },
            {
                "title": "wget",
                "level": "ANFÄNGER",
                "description": "Lädt eine Datei von einer URL herunter und speichert sie lokal.",
                "syntax": "wget [URL]",
                "examples": [
                    {
                        "cmd": "wget https://beispiel.ch/datei.zip",
                        "desc": "Lädt die Datei herunter",
                        "output": "Speichere unter: 'datei.zip'"
                    }
                ],
                "options": [
                    {
                        "flag": "-O [NAME]",
                        "desc": "Legt den Dateinamen für den Download fest",
                        "color": "orange"
                    }
                ],
                "hint": "wget eignet sich besonders gut für einfache Downloads, auch bei instabiler Verbindung, da es Abbrüche fortsetzen kann."
            },
            {
                "title": "ip",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt und verwaltet Netzwerkschnittstellen und -verbindungen.",
                "syntax": "ip [OBJEKT] [BEFEHL]",
                "examples": [
                    {
                        "cmd": "ip a",
                        "desc": "Zeigt alle Netzwerkschnittstellen",
                        "output": "eth0: inet 192.168.1.42/24"
                    }
                ],
                "options": [
                    {
                        "flag": "a",
                        "desc": "Adressen aller Schnittstellen anzeigen",
                        "color": "orange"
                    },
                    {
                        "flag": "route",
                        "desc": "Routing-Tabelle anzeigen",
                        "color": "blue"
                    }
                ],
                "hint": "ip ersetzt auf modernen Systemen das ältere ifconfig."
            },
            {
                "title": "ss",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt aktive Netzwerkverbindungen und offene Ports an (socket statistics).",
                "syntax": "ss [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "ss -tulpn",
                        "desc": "Zeigt alle offenen Ports mit zugehörigem Programm",
                        "output": "LISTEN 0 128 0.0.0.0:22 *:* users:((\"sshd\",pid=812))"
                    }
                ],
                "options": [
                    {
                        "flag": "-t",
                        "desc": "TCP-Verbindungen anzeigen",
                        "color": "orange"
                    },
                    {
                        "flag": "-u",
                        "desc": "UDP-Verbindungen anzeigen",
                        "color": "blue"
                    },
                    {
                        "flag": "-l",
                        "desc": "Nur lauschende Ports",
                        "color": "green"
                    },
                    {
                        "flag": "-p",
                        "desc": "Zugehöriges Programm anzeigen",
                        "color": "purple"
                    }
                ],
                "hint": "ss ersetzt das ältere netstat und ist deutlich schneller."
            },
            {
                "title": "ssh",
                "level": "ANFÄNGER",
                "description": "Verbindet sich sicher mit einem entfernten Rechner über eine verschlüsselte Verbindung (secure shell).",
                "syntax": "ssh [BENUTZER]@[HOST]",
                "examples": [
                    {
                        "cmd": "ssh bbw@server.beispiel.ch",
                        "desc": "Verbindet sich mit dem Server",
                        "output": "bbw@server.beispiel.ch's password: ****"
                    }
                ],
                "options": [
                    {
                        "flag": "-p [PORT]",
                        "desc": "Legt einen abweichenden Port fest",
                        "color": "orange"
                    }
                ],
                "hint": "Für die passwortlose Anmeldung empfiehlt sich die Einrichtung eines SSH-Schlüssels, da dies sicherer und bequemer ist."
            },
            {
                "title": "nmap",
                "level": "FORTGESCHRITTEN",
                "description": "Durchsucht ein Netzwerk nach erreichbaren Geräten und offenen Ports (Netzwerk-Scanner).",
                "syntax": "nmap [OPTIONEN] [ZIEL]",
                "examples": [
                    {
                        "cmd": "nmap 192.168.1.0/24",
                        "desc": "Scannt alle Geräte im lokalen Netzwerk",
                        "output": "Nmap scan report for 192.168.1.1\nPORT   STATE\n80/tcp open"
                    }
                ],
                "options": [
                    {
                        "flag": "-p [PORT]",
                        "desc": "Nur bestimmten Port scannen",
                        "color": "orange"
                    }
                ],
                "hint": "nmap sollte nur in Netzwerken eingesetzt werden, für die eine explizite Erlaubnis vorliegt - unerlaubtes Scannen kann rechtliche Folgen haben."
            },
            {
                "title": "traceroute",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt den Weg an, den ein Datenpaket über verschiedene Zwischenstationen bis zum Ziel nimmt.",
                "syntax": "traceroute [ZIEL]",
                "examples": [
                    {
                        "cmd": "traceroute google.com",
                        "desc": "Zeigt alle Zwischenstationen an",
                        "output": "1  router.local  1.2 ms\n2  isp-gateway  8.4 ms"
                    }
                ],
                "options": [],
                "hint": "traceroute hilft herauszufinden, an welcher Stelle im Netzwerk eine Verbindung langsam wird oder abbricht."
            },
            {
                "title": "dig",
                "level": "FORTGESCHRITTEN",
                "description": "Fragt DNS-Server ab und zeigt, zu welcher IP-Adresse ein Domainname aufgelöst wird.",
                "syntax": "dig [DOMAIN]",
                "examples": [
                    {
                        "cmd": "dig beispiel.ch",
                        "desc": "Zeigt die DNS-Auflösung",
                        "output": "beispiel.ch. 300 IN A 93.184.216.34"
                    }
                ],
                "options": [],
                "hint": "dig gibt deutlich mehr technische Details aus als der einfachere Befehl nslookup."
            },
            {
                "title": "hostname",
                "level": "ANFÄNGER",
                "description": "Zeigt den Namen des eigenen Rechners im Netzwerk an.",
                "syntax": "hostname",
                "examples": [
                    {
                        "cmd": "hostname",
                        "desc": "Zeigt den Rechnernamen",
                        "output": "bbw-laptop"
                    }
                ],
                "options": [
                    {
                        "flag": "-I",
                        "desc": "Zeigt die eigene IP-Adresse",
                        "color": "orange"
                    }
                ],
                "hint": "hostname -I ist ein schneller Weg, um die eigene lokale IP-Adresse herauszufinden."
            },
            {
                "title": "netstat",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt Netzwerkverbindungen, Routing-Tabellen und offene Ports an (älterer Vorgänger von ss).",
                "syntax": "netstat [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "netstat -tulpn",
                        "desc": "Zeigt alle offenen Ports",
                        "output": "tcp 0.0.0.0:22 LISTEN"
                    }
                ],
                "options": [
                    {
                        "flag": "-t",
                        "desc": "TCP-Verbindungen",
                        "color": "orange"
                    },
                    {
                        "flag": "-u",
                        "desc": "UDP-Verbindungen",
                        "color": "blue"
                    },
                    {
                        "flag": "-l",
                        "desc": "Nur lauschende Ports",
                        "color": "green"
                    }
                ],
                "hint": "netstat ist auf vielen modernen Systemen nicht mehr vorinstalliert; dort wird stattdessen ss verwendet."
            },
            {
                "title": "scp",
                "level": "FORTGESCHRITTEN",
                "description": "Kopiert Dateien sicher über eine SSH-Verbindung zwischen zwei Rechnern.",
                "syntax": "scp [QUELLE] [ZIEL]",
                "examples": [
                    {
                        "cmd": "scp bericht.txt bbw@server.beispiel.ch:/home/bbw/Linux-Handbuch/",
                        "desc": "Kopiert eine Datei auf den Server",
                        "output": "bericht.txt  100%  12KB  1.2MB/s"
                    }
                ],
                "options": [
                    {
                        "flag": "-r",
                        "desc": "Ordner rekursiv kopieren",
                        "color": "orange"
                    }
                ],
                "hint": "scp funktioniert wie cp, aber über das Netzwerk - der Zielpfad wird mit Doppelpunkt vom Hostnamen getrennt."
            },
            {
                "type": "info",
                "title": "Die wichtigen Netzwerk-Dateien",
                "body": "<p><code>/etc/hosts</code> manuelle Namen-zu-IP-Zuordnung. Hier trägt man andere Rechner ein, die ohne DNS bekannt sein sollen.</p><p><code>/etc/network/interfaces</code> definiert, wie Schnittstellen beim Start konfiguriert werden (statische IP oder DHCP). Wird von <code>ifup</code>/<code>ifdown</code> gelesen.</p><p><code>/etc/resolv.conf</code> - legt fest, welche DNS-Server Namen auflösen. DNS erspart das mühsame manuelle Pflegen von <code>/etc/hosts</code>.</p><p><code>/var/log/</code> - hier landen Logmeldungen (auch der Netzwerkdienste). Ansehen mit <code>cat</code>, <code>tail</code> oder <code>less</code>. Der zentrale Dienst dahinter heisst syslog.</p>"
            }
        ]
    },
    {
        "name": "Texteditoren",
        "commands": [
            {
                "title": "nano",
                "level": "ANFÄNGER",
                "description": "Ein einfacher, anfängerfreundlicher Texteditor direkt im Terminal.",
                "syntax": "nano [DATEI]",
                "examples": [
                    {
                        "cmd": "nano notizen.txt",
                        "desc": "Öffnet die Datei zum Bearbeiten",
                        "output": "Steuerung wird unten am Bildschirmrand angezeigt"
                    }
                ],
                "options": [
                    {
                        "flag": "Strg+O",
                        "desc": "Speichern (Write Out)",
                        "color": "orange"
                    },
                    {
                        "flag": "Strg+X",
                        "desc": "Beenden",
                        "color": "blue"
                    },
                    {
                        "flag": "Strg+K",
                        "desc": "Aktuelle Zeile ausschneiden",
                        "color": "green"
                    },
                    {
                        "flag": "Strg+W",
                        "desc": "Text suchen",
                        "color": "purple"
                    }
                ],
                "hint": "Bei nano sind die wichtigsten Tastenkombinationen immer direkt am unteren Bildschirmrand sichtbar - ideal für den Einstieg."
            },
            {
                "title": "vim - Modi",
                "level": "ANFÄNGER",
                "description": "vim ist ein mächtiger, aber anfangs ungewohnter Texteditor mit verschiedenen Modi statt direkter Tasteneingabe.",
                "syntax": "vim [DATEI]",
                "examples": [
                    {
                        "cmd": "vim notizen.txt",
                        "desc": "Öffnet die Datei im Normal-Modus",
                        "output": "Startet im Normal-Modus, i wechselt in den Einfüge-Modus"
                    }
                ],
                "options": [
                    {
                        "flag": "i",
                        "desc": "Wechselt in den Einfüge-Modus zum Schreiben",
                        "color": "orange"
                    },
                    {
                        "flag": "Esc",
                        "desc": "Zurück in den Normal-Modus",
                        "color": "blue"
                    },
                    {
                        "flag": ":w",
                        "desc": "Speichert die Datei",
                        "color": "green"
                    },
                    {
                        "flag": ":q",
                        "desc": "Beendet vim",
                        "color": "purple"
                    }
                ],
                "hint": "In vim kann man nicht einfach drauflos tippen wie in nano - zuerst muss mit i in den Einfüge-Modus gewechselt werden."
            },
            {
                "title": "vim - Beenden",
                "level": "ANFÄNGER",
                "description": "Die wichtigsten Befehle, um vim korrekt zu speichern und zu verlassen.",
                "syntax": "[BEFEHL] (im Normal-Modus eingeben)",
                "examples": [
                    {
                        "cmd": ":wq",
                        "desc": "Speichert und beendet vim",
                        "output": ""
                    },
                    {
                        "cmd": ":q!",
                        "desc": "Beendet ohne zu speichern",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": ":w",
                        "desc": "Nur speichern",
                        "color": "orange"
                    },
                    {
                        "flag": ":q",
                        "desc": "Nur beenden (nur ohne Änderungen möglich)",
                        "color": "blue"
                    },
                    {
                        "flag": ":wq",
                        "desc": "Speichern und beenden",
                        "color": "green"
                    },
                    {
                        "flag": ":q!",
                        "desc": "Beenden ohne zu speichern",
                        "color": "purple"
                    }
                ],
                "hint": "Für den Anfang reichen meist :wq zum Speichern und :q! als Notausgang - damit lassen sich die meisten Situationen meistern."
            }
        ]
    },
    {
        "name": "Shell & Umgebung",
        "commands": [
            {
                "title": "Variablen & export",
                "level": "FORTGESCHRITTEN",
                "description": "Speichert Werte in der Shell, die während der Sitzung wiederverwendet werden können.",
                "syntax": "export [NAME]=[WERT]",
                "examples": [
                    {
                        "cmd": "export PROJEKT=Linux-Handbuch",
                        "desc": "Setzt eine Umgebungsvariable",
                        "output": ""
                    },
                    {
                        "cmd": "echo $PROJEKT",
                        "desc": "Gibt den Wert der Variable aus",
                        "output": "Linux-Handbuch"
                    }
                ],
                "options": [],
                "hint": "Ohne export ist die Variable nur in der aktuellen Shell sichtbar, nicht in Programmen, die daraus gestartet werden."
            },
            {
                "title": "alias",
                "level": "ANFÄNGER",
                "description": "Erstellt eine eigene Kurzform für einen längeren Befehl.",
                "syntax": "alias [NAME]='[BEFEHL]'",
                "examples": [
                    {
                        "cmd": "alias ll='ls -lah'",
                        "desc": "Erstellt die Kurzform ll",
                        "output": ""
                    },
                    {
                        "cmd": "ll",
                        "desc": "Führt den hinterlegten Befehl aus",
                        "output": ""
                    }
                ],
                "options": [],
                "hint": "Aliase gelten nur für die aktuelle Sitzung. Damit sie dauerhaft bleiben, müssen sie in die .bashrc eingetragen werden."
            },
            {
                "title": ".bashrc",
                "level": "FORTGESCHRITTEN",
                "description": "Eine Konfigurationsdatei, die bei jedem Start eines neuen Terminals automatisch ausgeführt wird.",
                "syntax": "nano ~/.bashrc",
                "examples": [
                    {
                        "cmd": "nano ~/.bashrc",
                        "desc": "Öffnet die Konfigurationsdatei zum Bearbeiten",
                        "output": ""
                    },
                    {
                        "cmd": "source ~/.bashrc",
                        "desc": "Lädt die Änderungen sofort neu",
                        "output": ""
                    }
                ],
                "options": [],
                "hint": "Änderungen an der .bashrc wirken erst in neuen Terminal-Fenstern, ausser sie werden mit source manuell neu geladen."
            },
            {
                "title": "Pipes |",
                "level": "FORTGESCHRITTEN",
                "description": "Leitet die Ausgabe eines Befehls direkt als Eingabe an den nächsten Befehl weiter.",
                "syntax": "[BEFEHL1] | [BEFEHL2]",
                "examples": [
                    {
                        "cmd": "ls -la | grep .txt",
                        "desc": "Zeigt nur Dateien mit .txt aus der ls-Ausgabe",
                        "output": ".rw-r--r-- bericht.txt"
                    }
                ],
                "options": [],
                "hint": "Pipes sind eines der mächtigsten Konzepte der Kommandozeile, weil sich damit einfache Befehle beliebig kombinieren lassen."
            },
            {
                "title": "Umleitungen > >>",
                "level": "FORTGESCHRITTEN",
                "description": "Leitet die Ausgabe eines Befehls in eine Datei um, statt sie im Terminal anzuzeigen.",
                "syntax": "[BEFEHL] > [DATEI]",
                "examples": [
                    {
                        "cmd": "ls -la > inhalt.txt",
                        "desc": "Überschreibt inhalt.txt mit der Ausgabe",
                        "output": ""
                    },
                    {
                        "cmd": "echo \"neuer Eintrag\" >> notizen.txt",
                        "desc": "Hängt Text ans Ende der Datei an",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": ">",
                        "desc": "Überschreibt die Zieldatei",
                        "color": "orange"
                    },
                    {
                        "flag": ">>",
                        "desc": "Hängt an die Zieldatei an",
                        "color": "blue"
                    }
                ],
                "hint": "Oft werden > und >> verwechselt: > überschreibt den gesamten Dateiinhalt, >> ergänzt ihn nur."
            },
            {
                "title": "history",
                "level": "ANFÄNGER",
                "description": "Zeigt eine Liste der zuletzt eingegebenen Befehle an.",
                "syntax": "history",
                "examples": [
                    {
                        "cmd": "history",
                        "desc": "Zeigt die letzten Befehle mit Nummer",
                        "output": "  501  ls -la\n  502  cd Linux-Handbuch"
                    }
                ],
                "options": [],
                "hint": "Mit !501 lässt sich ein Befehl aus der History direkt anhand seiner Nummer erneut ausführen."
            },
            {
                "title": "!! & Strg+R",
                "level": "ANFÄNGER",
                "description": "Wiederholt den letzten Befehl oder durchsucht die Befehlshistorie interaktiv.",
                "syntax": "!! oder Strg+R",
                "examples": [
                    {
                        "cmd": "!!",
                        "desc": "Führt den letzten Befehl erneut aus",
                        "output": ""
                    },
                    {
                        "cmd": "sudo !!",
                        "desc": "Führt den letzten Befehl mit sudo erneut aus",
                        "output": ""
                    }
                ],
                "options": [],
                "hint": "Mit Strg+R startet eine Live-Suche in der History - einfach den gesuchten Befehlsteil eintippen."
            },
            {
                "title": "echo",
                "level": "ANFÄNGER",
                "description": "Gibt Text oder den Wert einer Variable im Terminal aus.",
                "syntax": "echo [TEXT]",
                "examples": [
                    {
                        "cmd": "echo \"Hallo Welt\"",
                        "desc": "Gibt den Text aus",
                        "output": "Hallo Welt"
                    }
                ],
                "options": [],
                "hint": "echo wird oft zusammen mit Umleitungen verwendet, um schnell Text in eine Datei zu schreiben."
            },
            {
                "title": "env",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt alle aktuell gesetzten Umgebungsvariablen an.",
                "syntax": "env",
                "examples": [
                    {
                        "cmd": "env",
                        "desc": "Listet alle Umgebungsvariablen auf",
                        "output": "HOME=/home/bbw\nPATH=/usr/local/bin:/usr/bin"
                    }
                ],
                "options": [],
                "hint": "In der PATH-Variable stehen alle Ordner, in denen die Shell nach ausführbaren Programmen sucht."
            },
            {
                "title": "which",
                "level": "ANFÄNGER",
                "description": "Zeigt den vollständigen Pfad zu einem installierten Programm an.",
                "syntax": "which [PROGRAMM]",
                "examples": [
                    {
                        "cmd": "which python3",
                        "desc": "Zeigt den Pfad zu python3",
                        "output": "/usr/bin/python3"
                    }
                ],
                "options": [],
                "hint": "which hilft herauszufinden, welche Version eines Programms tatsächlich ausgeführt wird."
            },
            {
                "title": "type",
                "level": "ANFÄNGER",
                "description": "Zeigt an, ob ein Befehl ein Programm, ein Alias oder eine Shell-Funktion ist.",
                "syntax": "type [BEFEHL]",
                "examples": [
                    {
                        "cmd": "type ll",
                        "desc": "Zeigt, dass ll ein Alias ist",
                        "output": "ll is aliased to 'ls -lah'"
                    }
                ],
                "options": [],
                "hint": "type ist etwas vielseitiger als which, weil es auch Aliase und eingebaute Shell-Befehle erkennt."
            },
            {
                "title": "xargs",
                "level": "FORTGESCHRITTEN",
                "description": "Übergibt Werte aus einer Pipe als Argumente an einen weiteren Befehl.",
                "syntax": "[BEFEHL1] | xargs [BEFEHL2]",
                "examples": [
                    {
                        "cmd": "find . -name \"*.tmp\" | xargs rm",
                        "desc": "Löscht alle gefundenen .tmp-Dateien",
                        "output": ""
                    }
                ],
                "options": [],
                "hint": "xargs wird benötigt, da viele Befehle wie rm keine Eingabe direkt über eine Pipe annehmen, sondern Argumente erwarten."
            },
            {
                "type": "info",
                "title": "Pipes & Umleitung — Befehle verketten",
                "body": "<p>Jeder Befehl hat drei Kanäle: <strong>STDIN</strong> (Eingabe), <strong>STDOUT</strong> (normale Ausgabe) und <strong>STDERR</strong> (Fehlermeldungen). Mit Operatoren lenkst du diese um:</p><p><code>|</code> (Pipe) - leitet die Ausgabe eines Befehls als Eingabe in den nächsten: <code>sort datei | more</code></p><p><code>&gt;</code> - schreibt die Ausgabe in eine Datei und überschreibt sie: <code>sort datei &gt; /tmp/output</code></p><p><code>&gt;&gt;</code> - hängt an, statt zu überschreiben (wichtig beim Logging): <code>echo fertig &gt;&gt; /tmp/output</code></p><p><code>&lt;</code> - liest die Eingabe aus einer Datei: <code>sort &lt; /tmp/output</code></p><p><code>2&gt;</code> und <code>2&gt;&gt;</code> - lenken nur die Fehlermeldungen (STDERR) um: <code>find /etc &gt; ok.txt 2&gt; fehler.txt</code></p>"
            },
            {
                "type": "info",
                "title": "Was macht script.sh?",
                "body": "<p>Beispielhafte Analyse eines kleinen Übungsskripts, Zeile für Zeile:</p><p><code>echo Mein Name ist $me</code> → gibt den Inhalt der Variable <code>me</code> aus.</p><p><code>echo Ich bin User der Gruppe `id -g`</code> → die Backticks führen <code>id -g</code> aus und setzen die GID ein (Kommando-Substitution).</p><p><code>echo Es ist jetzt `date`</code> → aktuelle Zeit.</p><p><code>until=`echo `date +%s`+5|bc`</code> → nimmt die aktuelle Zeit in Sekunden, rechnet mit <code>bc</code> +5 dazu.</p><p><code>while [ $until -gt `date +%s` ]; do sleep 1; done</code> → wartet in Einersekunden, bis 5 Sekunden vorbei sind.</p><p>Kurz: Das Skript gibt eine Begrüssung aus und wartet 5 Sekunden. Darum braucht es bei <code>time</code> ~5s real, aber fast keine CPU-Zeit - es schläft ja nur.</p>"
            }
        ]
    },
    {
        "name": "System & Hardware",
        "commands": [
            {
                "title": "df",
                "level": "ANFÄNGER",
                "description": "Zeigt den belegten und freien Speicherplatz aller eingehängten Laufwerke an (disk free).",
                "syntax": "df [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "df -h",
                        "desc": "Zeigt Speicherplatz in lesbarem Format",
                        "output": "/dev/sda1  100G  42G  53G  45%  /"
                    }
                ],
                "options": [
                    {
                        "flag": "-h",
                        "desc": "Lesbares Format (GB, MB)",
                        "color": "orange"
                    }
                ],
                "hint": "df -h wird häufig verwendet, um schnell zu prüfen, ob eine Festplatte bald voll wird."
            },
            {
                "title": "du (System)",
                "level": "ANFÄNGER",
                "description": "Zeigt den Speicherplatzverbrauch von Ordnern an, um grosse Verzeichnisse zu finden.",
                "syntax": "du [OPTIONEN] [PFAD]",
                "examples": [
                    {
                        "cmd": "du -sh /var/log",
                        "desc": "Zeigt die Grösse des log-Ordners",
                        "output": "1,2G  /var/log"
                    }
                ],
                "options": [
                    {
                        "flag": "-s",
                        "desc": "Nur Gesamtsumme",
                        "color": "orange"
                    },
                    {
                        "flag": "-h",
                        "desc": "Lesbares Format",
                        "color": "blue"
                    }
                ],
                "hint": "du zeigt, wo der Speicher innerhalb eines Ordners verbraucht wird, df zeigt die Gesamtbelegung eines Laufwerks."
            },
            {
                "title": "free",
                "level": "ANFÄNGER",
                "description": "Zeigt den aktuell verwendeten und freien Arbeitsspeicher (RAM) an.",
                "syntax": "free [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "free -h",
                        "desc": "Zeigt RAM-Nutzung lesbar",
                        "output": "Speicher: 15Gi  6,2Gi  4,1Gi  1,8Gi  4,7Gi"
                    }
                ],
                "options": [
                    {
                        "flag": "-h",
                        "desc": "Lesbares Format",
                        "color": "orange"
                    }
                ],
                "hint": "Der Wert 'verfügbar' ist meist aussagekräftiger als 'frei', da Linux nicht genutzten RAM aktiv für Caches verwendet."
            },
            {
                "title": "uname",
                "level": "ANFÄNGER",
                "description": "Zeigt Systeminformationen an, z.B. Kernel-Version und Architektur.",
                "syntax": "uname [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "uname -a",
                        "desc": "Zeigt alle Systeminformationen",
                        "output": "Linux bbw-laptop 6.8.0-generic x86_64 GNU/Linux"
                    }
                ],
                "options": [
                    {
                        "flag": "-a",
                        "desc": "Alle Informationen anzeigen",
                        "color": "orange"
                    },
                    {
                        "flag": "-r",
                        "desc": "Nur Kernel-Version anzeigen",
                        "color": "blue"
                    }
                ],
                "hint": "uname -a ist praktisch, um schnell zu prüfen, welche Kernel-Version oder Architektur ein System hat."
            },
            {
                "title": "lsblk",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt alle Blockgeräte an, also Festplatten und deren Partitionen, als Baumstruktur.",
                "syntax": "lsblk",
                "examples": [
                    {
                        "cmd": "lsblk",
                        "desc": "Zeigt alle Laufwerke und Partitionen",
                        "output": "sda      100G\n└─sda1   100G  /"
                    }
                ],
                "options": [],
                "hint": "lsblk zeigt übersichtlich, welche Partitionen existieren, ohne dass Dateisysteme gemountet werden müssen."
            },
            {
                "title": "lscpu",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt detaillierte Informationen zum Prozessor an.",
                "syntax": "lscpu",
                "examples": [
                    {
                        "cmd": "lscpu",
                        "desc": "Zeigt CPU-Details",
                        "output": "Architecture: x86_64\nCPU(s): 8\nModel name: Intel Core i5"
                    }
                ],
                "options": [],
                "hint": "lscpu ist praktisch, um schnell die Anzahl Kerne oder das genaue CPU-Modell herauszufinden."
            },
            {
                "title": "lsusb",
                "level": "FORTGESCHRITTEN",
                "description": "Listet alle angeschlossenen USB-Geräte auf.",
                "syntax": "lsusb",
                "examples": [
                    {
                        "cmd": "lsusb",
                        "desc": "Zeigt angeschlossene USB-Geräte",
                        "output": "Bus 001 Device 004: ID 046d:c52b Logitech USB Receiver"
                    }
                ],
                "options": [],
                "hint": "lsusb hilft, schnell zu prüfen, ob ein USB-Gerät vom System überhaupt erkannt wurde."
            },
            {
                "title": "lspci",
                "level": "FORTGESCHRITTEN",
                "description": "Listet alle über PCI angebundenen Hardwarekomponenten auf, z.B. Grafikkarte oder Netzwerkkarte.",
                "syntax": "lspci",
                "examples": [
                    {
                        "cmd": "lspci",
                        "desc": "Zeigt alle PCI-Geräte",
                        "output": "00:02.0 VGA compatible controller: Intel Iris Xe Graphics"
                    }
                ],
                "options": [],
                "hint": "lspci wird vor allem genutzt, um herauszufinden, welche Grafikkarte oder welcher Netzwerk-Chip verbaut ist."
            },
            {
                "title": "uptime",
                "level": "ANFÄNGER",
                "description": "Zeigt an, wie lange das System bereits läuft, sowie die aktuelle Systemlast.",
                "syntax": "uptime",
                "examples": [
                    {
                        "cmd": "uptime",
                        "desc": "Zeigt Laufzeit und Systemlast",
                        "output": "up 3 days, 4:12,  load average: 0.42, 0.38, 0.35"
                    }
                ],
                "options": [],
                "hint": "Die drei Zahlen bei load average zeigen die durchschnittliche Systemlast der letzten 1, 5 und 15 Minuten."
            },
            {
                "title": "dmesg",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt Kernel-Meldungen an, z.B. beim Systemstart oder beim Anschliessen von Hardware.",
                "syntax": "dmesg [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "dmesg | tail -20",
                        "desc": "Zeigt die letzten 20 Kernel-Meldungen",
                        "output": "[   12.481203] usb 1-2: new high-speed USB device"
                    }
                ],
                "options": [
                    {
                        "flag": "-T",
                        "desc": "Zeitstempel lesbar formatieren",
                        "color": "orange"
                    }
                ],
                "hint": "dmesg ist oft der erste Anlaufpunkt, um Hardware-Probleme wie ein nicht erkanntes USB-Gerät zu untersuchen."
            },
            {
                "title": "journalctl",
                "level": "FORTGESCHRITTEN",
                "description": "Zeigt die Logs des systemd-Journals an, also Meldungen von Diensten und dem System.",
                "syntax": "journalctl [OPTIONEN]",
                "examples": [
                    {
                        "cmd": "journalctl -u ssh -f",
                        "desc": "Verfolgt die Logs des SSH-Dienstes live",
                        "output": "Jul 02 14:02:11 bbw-laptop sshd[812]: Server listening"
                    }
                ],
                "options": [
                    {
                        "flag": "-u [DIENST]",
                        "desc": "Nur Logs eines bestimmten Dienstes anzeigen",
                        "color": "orange"
                    },
                    {
                        "flag": "-f",
                        "desc": "Logs live verfolgen",
                        "color": "blue"
                    }
                ],
                "hint": "journalctl ersetzt auf modernen Systemen das Durchsuchen einzelner Logdateien in /var/log."
            },
            {
                "title": "systemctl",
                "level": "FORTGESCHRITTEN",
                "description": "Startet, stoppt und verwaltet Systemdienste (Services).",
                "syntax": "systemctl [BEFEHL] [DIENST]",
                "examples": [
                    {
                        "cmd": "sudo systemctl status ssh",
                        "desc": "Zeigt den Status of SSH-Dienstes",
                        "output": "● ssh.service - OpenBSD Secure Shell server\n   Active: active (running)"
                    }
                ],
                "options": [
                    {
                        "flag": "status",
                        "desc": "Zeigt den aktuellen Status",
                        "color": "orange"
                    },
                    {
                        "flag": "start",
                        "desc": "Startet einen Dienst",
                        "color": "blue"
                    },
                    {
                        "flag": "stop",
                        "desc": "Stoppt einen Dienst",
                        "color": "green"
                    },
                    {
                        "flag": "restart",
                        "desc": "Startet einen Dienst neu",
                        "color": "purple"
                    }
                ],
                "hint": "systemctl status ist oft der erste Befehl, wenn ein Dienst nicht wie erwartet funktioniert."
            },
            {
                "type": "info",
                "title": "Swap, Dateisysteme & Logs",
                "body": "<p><strong>Swap-Disk:</strong> ausgelagerter Arbeitsspeicher auf der Festplatte. Reicht der RAM nicht, werden Teile dorthin \"ausgelagert\". Linux nutzt dafür eine eigene Swap-Partition oder eine Swap-Datei. Windows macht das mit seiner Auslagerungsdatei (pagefile.sys) - dasselbe Prinzip.</p><p><strong>Dateisystem ≠ Betriebssystem:</strong> Wie Daten auf der Platte abgelegt werden, bestimmt das Dateisystem (ext4, Btrfs, XFS, FAT32, NTFS …), nicht das OS. Linux versteht viele davon.</p><p><strong>Logs in /var/log/:</strong> <code>dmesg</code> (Kernel), <code>syslog</code>/<code>messages</code> (allgemeine Systemmeldungen). Durchsuchen mit <code>grep</code>, mitlesen mit <code>tail -f</code>.</p>"
            }
        ]
    },
    {
        "name": "Archivierung",
        "commands": [
            {
                "title": "tar",
                "level": "FORTGESCHRITTEN",
                "description": "Fasst mehrere Dateien und Ordner in einer Archivdatei zusammen (tape archive).",
                "syntax": "tar [OPTIONEN] [ARCHIV] [DATEIEN]",
                "examples": [
                    {
                        "cmd": "tar -czf backup.tar.gz Linux-Handbuch/",
                        "desc": "Erstellt ein komprimiertes Archiv",
                        "output": ""
                    },
                    {
                        "cmd": "tar -xzf backup.tar.gz",
                        "desc": "Entpackt das Archiv wieder",
                        "output": ""
                    }
                ],
                "options": [
                    {
                        "flag": "-c",
                        "desc": "Archiv erstellen",
                        "color": "orange"
                    },
                    {
                        "flag": "-x",
                        "desc": "Archiv entpacken",
                        "color": "blue"
                    },
                    {
                        "flag": "-z",
                        "desc": "Mit gzip komprimieren",
                        "color": "green"
                    },
                    {
                        "flag": "-f",
                        "desc": "Dateiname des Archivs angeben",
                        "color": "purple"
                    }
                ],
                "hint": "Die Buchstaben lassen sich merken: c = create, x = extract, z = zip, f = file."
            },
            {
                "title": "zip",
                "level": "ANFÄNGER",
                "description": "Erstellt ein komprimiertes ZIP-Archiv, kompatibel mit Windows und macOS.",
                "syntax": "zip [OPTIONEN] [ARCHIV] [DATEIEN]",
                "examples": [
                    {
                        "cmd": "zip -r backup.zip Linux-Handbuch/",
                        "desc": "Erstellt ein ZIP-Archiv aus einem Ordner",
                        "output": "adding: Linux-Handbuch/ (stored 0%)"
                    }
                ],
                "options": [
                    {
                        "flag": "-r",
                        "desc": "Ordner rekursiv einschliessen",
                        "color": "orange"
                    }
                ],
                "hint": "ZIP-Archive eignen sich besonders gut, wenn Dateien mit Personen geteilt werden, die Windows oder macOS verwenden."
            },
            {
                "title": "unzip",
                "level": "ANFÄNGER",
                "description": "Entpackt eine ZIP-Archivdatei.",
                "syntax": "unzip [ARCHIV]",
                "examples": [
                    {
                        "cmd": "unzip backup.zip",
                        "desc": "Entpackt das ZIP-Archiv",
                        "output": "Archive: backup.zip\n  inflating: Linux-Handbuch/bericht.txt"
                    }
                ],
                "options": [
                    {
                        "flag": "-l",
                        "desc": "Zeigt den Inhalt an, ohne zu entpacken",
                        "color": "orange"
                    }
                ],
                "hint": "Mit unzip -l lässt sich vorher prüfen, was im Archiv enthalten ist, bevor es tatsächlich entpackt wird."
            },
            {
                "title": "gzip",
                "level": "FORTGESCHRITTEN",
                "description": "Komprimiert eine einzelne Datei mit dem gzip-Verfahren.",
                "syntax": "gzip [DATEI]",
                "examples": [
                    {
                        "cmd": "gzip logfile.txt",
                        "desc": "Komprimiert die Datei",
                        "output": "Erstellt logfile.txt.gz, Original wird entfernt"
                    }
                ],
                "options": [
                    {
                        "flag": "-k",
                        "desc": "Original nach dem Komprimieren behalten",
                        "color": "orange"
                    },
                    {
                        "flag": "-d",
                        "desc": "Datei dekomprimieren",
                        "color": "blue"
                    }
                ],
                "hint": "gzip komprimiert immer nur eine einzelne Datei. Für ganze Ordner wird es meist mit tar kombiniert."
            },
            {
                "title": "bzip2",
                "level": "FORTGESCHRITTEN",
                "description": "Komprimiert Dateien stärker als gzip, benötigt dafür aber mehr Rechenzeit.",
                "syntax": "bzip2 [DATEI]",
                "examples": [
                    {
                        "cmd": "bzip2 backup.tar",
                        "desc": "Komprimiert die Datei stärker",
                        "output": "Erstellt backup.tar.bz2"
                    }
                ],
                "options": [
                    {
                        "flag": "-k",
                        "desc": "Original behalten",
                        "color": "orange"
                    },
                    {
                        "flag": "-d",
                        "desc": "Datei dekomprimieren",
                        "color": "blue"
                    }
                ],
                "hint": "bzip2 lohnt sich vor allem bei grossen Dateien, wo eine bessere Kompressionsrate den Zeitaufwand wert ist."
            },
            {
                "title": "xz",
                "level": "FORTGESCHRITTEN",
                "description": "Ein modernes Komprimierungsformat mit noch besserer Kompressionsrate als bzip2.",
                "syntax": "xz [DATEI]",
                "examples": [
                    {
                        "cmd": "xz backup.tar",
                        "desc": "Komprimiert die Datei mit xz",
                        "output": "Erstellt backup.tar.xz"
                    }
                ],
                "options": [
                    {
                        "flag": "-k",
                        "desc": "Original behalten",
                        "color": "orange"
                    },
                    {
                        "flag": "-d",
                        "desc": "Datei dekomprimieren",
                        "color": "blue"
                    }
                ],
                "hint": "xz braucht am meisten Rechenzeit der drei Verfahren, erzielt dafür aber meist die kleinsten Dateien."
            },
            {
                "title": "7z",
                "level": "FORTGESCHRITTEN",
                "description": "Verwaltet 7z-Archive, ein Format mit sehr hoher Kompressionsrate und optionaler Verschlüsselung.",
                "syntax": "7z [BEFEHL] [ARCHIV] [DATEIEN]",
                "examples": [
                    {
                        "cmd": "7z a backup.7z Linux-Handbuch/",
                        "desc": "Erstellt ein 7z-Archiv",
                        "output": "Everything is Ok"
                    }
                ],
                "options": [
                    {
                        "flag": "a",
                        "desc": "Dateien zu einem Archiv hinzufügen",
                        "color": "orange"
                    },
                    {
                        "flag": "x",
                        "desc": "Archiv entpacken",
                        "color": "blue"
                    },
                    {
                        "flag": "-p[PASSWORT]",
                        "desc": "Archiv mit Passwort verschlüsseln",
                        "color": "green"
                    }
                ],
                "hint": "7z muss meist zuerst nachinstalliert werden (sudo apt install p7zip-full) und bietet als einziges dieser Tools eingebaute Verschlüsselung."
            }
        ]
    }
];