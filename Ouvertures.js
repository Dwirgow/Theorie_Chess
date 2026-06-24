window.OPENINGS_DATA = {
  white: [
    {
      id: 'ruy-lopez',
      name: 'Partie Espagnole',
      moves: '1. e4 e5 2. Cf3 Cc6 3. Fb5',
      type: 'Positionnelle, Manœuvres, Semi-ouverte',
      description: 'L\'ouverture la plus classique et profonde. Elle met la pression sur e5 en attaquant le cavalier défenseur, menant à des luttes stratégiques complexes.',
      pros: ['Pression durable sur le centre adverse', 'Excellent pour jouer sur la compréhension positionnelle', 'Garde beaucoup de flexibilité (centre fermé ou ouvert)'],
      cons: ['Nécessite une énorme connaissance théorique', 'Des manœuvres parfois très longues avant l\'action', 'Les Noirs ont de nombreuses défenses solides'],
      variations: [
        {
          id: "rl-v1",
          name: 'Variante de Berlin',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Ke8 10. h3 h5',
          theory: 'Conduit à la célèbre "Fin de partie de Berlin". Les Noirs sacrifient le roque pour une structure solide et la paire de fous.',
          pros: ['Les Blancs ont une structure de pions gagnante à long terme', 'Sécurité absolue pour le Roi blanc'],
          cons: ['Les Noirs sont un roc, très dur à percer', 'Finale de pions passive sans Dames'],
          strategy: 'Créer un pion passé à l\'aile roi (majorité 4 contre 3). Éviter d\'échanger des pièces mineures inutilement, utiliser les cavaliers pour harceler le roi noir au centre.',
          keyMoves: ['Cc3', 'h3', 'Te1'],
          subVariations: [
            {
              id: "rl-v1-sv1",
              name: 'Erreur 4... d6?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 exd4 6. Nxd4 Bd7 7. Nc3 Be7 8. Re1 O-O 9. Bxc6 bxc6 10. Qf3 Re8',
              explanation: "Jouer 4...d6 est une erreur d'ordre de coups typique à 1800. Cela transpose dans une variante Steinitz inférieure. En jouant immédiatement 5.d4, les Blancs prennent un avantage d'espace énorme et forcent les Noirs à un jeu passif."
            },
            {
              id: "rl-v1-sv2",
              name: 'Erreur 5... exd4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 exd4 6. Re1 d5 7. Nxd4 Bd7 8. f3 Bc5 9. c3 O-O 10. Bxc6 bxc6',
              explanation: "Capturer en d4 est trop gourmand et expose le roi noir. La punition est directe : 6.Te1 cloue le cavalier e4. Les Blancs vont récupérer le matériel avec intérêt et ouvrir les lignes sur le Roi noir encore au centre."
            }
          ]
        },
        {
          id: "rl-v2",
          name: 'Variante Fermée (Tchigorine)',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5',
          theory: 'La ligne principale historique. Les Blancs préparent d4 tout en préservant le fou espagnol. Les Noirs cherchent du contre-jeu à l\'aile dame.',
          pros: ['Conserve toute la tension', 'Le fou espagnol en c2 est une arme redoutable'],
          cons: ['Le centre se ferme souvent, demandant beaucoup de patience'],
          strategy: 'Pousser d4. Manœuvrer le Cavalier b1 vers g3 (via d2-f1). Préparer une attaque à l\'aile roi tout en contenant l\'expansion noire à l\'aile dame.',
          keyMoves: ['d4', 'Cbd2-f1-g3', 'a4'],
          subVariations: [
            {
              id: "rl-v2-sv1",
              name: 'Erreur 5... b5 prématuré',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 6. Bb3 d6 7. c3 Bg4 8. h3 Bh5 9. d3 Be7 10. Nbd2 O-O',
              explanation: "Chasser le fou par b5 avant de roquer permet souvent aux Blancs d'accélérer leur jeu. Ici, le clouage Fg4 est mauvais. On repousse le Fou par h3, et s'il recule en h5, on peut souvent jouer g4 ou poursuivre tranquillement le développement avec un Fou noir hors-jeu."
            },
            {
              id: "rl-v2-sv2",
              name: 'Erreur de centre 8... Bg4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 Bg4 9. h3 Bh5 10. d4 O-O',
              explanation: "Dans la Ruy Lopez fermée, le clouage Bg4 avant que les Blancs n'aient joué d3 ou d4 est souvent puni. Les Blancs jouent h3 puis immédiatement d4!, cassant le centre avant que les Noirs n'aient pu sécuriser la tension."
            }
          ]
        },
        {
          id: "rl-v3",
          name: 'Variante d\'Échange',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O f6 6. d4 exd4 7. Nxd4 c5 8. Nb3 Qxd1 9. Rxd1 Bd6 10. Nc3 Be6',
          theory: 'Les Blancs cèdent la paire de fous pour doubler les pions noirs. Le but est simple et positionnel : gagner la finale grâce à la majorité de pions à l\'aile roi (4 contre 3).',
          pros: ['Avantage structurel net et durable', 'Plan de jeu très clair (viser la finale sans complication)'],
          cons: ['Les Noirs obtiennent la paire de fous', 'Pas de possibilité d\'attaque directe sur le roi'],
          strategy: 'Échanger les pièces autant que possible. La finale de pions purs (sans les pièces mineures/majeures) est mathématiquement gagnante pour les Blancs. Maintenir un jeu calme.',
          keyMoves: ['Bxc6', 'd4', 'Rxd1'],
          subVariations: [
            {
              id: "rl-v3-sv1",
              name: 'Erreur 5... Fg4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 6. h3 h5 7. d3 Qf6 8. Nbd2 Ne7 9. Re1 O-O-O',
              explanation: "Un clouage prématuré très courant à bas niveau. Les Blancs ignorent simplement le danger apparent, jouent h3 et d3, et consolident sans aucun problème tout en profitant du retard de développement noir."
            },
            {
              id: "rl-v3-sv2",
              name: 'La gaffe 5. Nxe5?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. Nxe5 Qd4 6. Nf3 Qxe4+ 7. Qe2 Qxe2+ 8. Kxe2 Bg4',
              explanation: "Erreur classique des Blancs trop gourmands ! Prendre le pion e5 instantanément permet la fourchette Qd4. Les Noirs regagnent le pion, forcent l'échange des Dames et privent le Roi blanc de roque."
            },
            {
              id: "rl-v3-sv3",
              name: 'Erreur 5... Fd6?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bd6 6. d4 exd4 7. Nxd4 Ne7 8. Nc3 O-O',
              explanation: "Développer le fou en d6 bloque la propre défense naturelle de e5 (via f6). Cela permet aux Blancs de dominer complètement le centre et d'accentuer leur avantage structurel."
            }
          ]
        },
        {
          id: "rl-v4",
          name: 'Attaque Marshall',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5',
          theory: 'Un gambit redoutable des Noirs. En sacrifiant un pion au centre (d5), ils obtiennent une attaque violente, libèrent leurs pièces et visent le roi blanc délaissé.',
          pros: ['Pion de plus pour les Blancs', 'Structure blanche solide à long terme'],
          cons: ['Initiative noire effrayante', 'Exige une connaissance théorique chirurgicale pour ne pas perdre en 20 coups'],
          strategy: 'Blancs : S\'accrocher au pion en défendant avec précision, ou le rendre stratégiquement pour étouffer l\'initiative. Noirs : Pilonner l\'aile roi avec Dd8-h4, Fd6 et Te8.',
          keyMoves: ['c3', 'exd5', 'Nxe5'],
          subVariations: [
            {
              id: "rl-v4-sv1",
              name: 'L\'Anti-Marshall 8. d3?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. d3 d6 9. c3 Bg4 10. Nbd2 Na5',
              explanation: "Craignant le Marshall, de nombreux joueurs blancs jouent d3 trop passivement. Bien que solide, cela abandonne la pression centrale habituelle de l'Espagnole, permettant aux Noirs un développement ultra-confortable."
            },
            {
              id: "rl-v4-sv2",
              name: 'Erreur Noire 11... Cf6?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. d4 Bd6 13. Re1',
              explanation: "Dans le Marshall, les Noirs doivent jouer 11...c6 pour sécuriser le cavalier central avant de lancer l'attaque. Reculer le cavalier sans raison donne aux Blancs le temps précieux de s'organiser (d4) et de garder le pion sans souffrir."
            },
            {
              id: "rl-v4-sv3",
              name: 'Panique Blanche 12. Fxd5?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 c6 12. Bxd5 cxd5 13. d4 Bd6',
              explanation: "Rendre le fou espagnol contre le cavalier d5 est une erreur structurelle. Cela détruit le potentiel de défense des Blancs sur les cases claires et justifie pleinement le sacrifice du pion pour les Noirs."
            }
          ]
        }
      ]
    },
    {
      id: 'italienne',
      name: 'Partie Italienne',
      moves: '1. e4 e5 2. Cf3 Cc6 3. Fc4',
      type: 'Ouverte à Semi-ouverte, Tactique ou Stratégique',
      description: 'Vise immédiatement la case faible f7. Très populaire à tous les niveaux pour sa clarté stratégique.',
      pros: ['Développement très naturel et logique', 'Flexibilité totale (jeu lent avec d3 ou agressif avec d4)'],
      cons: ['Met moins de pression immédiate sur e5', 'Les Noirs égalisent plus facilement si les Blancs jouent trop passivement'],
      variations: [
        {
          id: "it-v1",
          name: 'Giuoco Piano',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. O-O d6 6. c3 a6 7. a4 Ba7 8. Re1 O-O 9. h3 h6 10. Nbd2 Re8',
          theory: 'Une lutte de manœuvres lentes (Pianissimo). On prépare la poussée d4 ou f4 à long terme sans précipitation, en gardant le centre fermé.',
          pros: ['Position extrêmement solide, pas de risque d\'attaque rapide', 'Jeu basé sur des plans plutôt que sur de la mémorisation pure'],
          cons: ['Peut devenir ennuyeux/nul si aucun camp ne prend de risque'],
          strategy: 'Contrôler le centre sans le figer. Recycler le Cavalier b1 en g3 (Cbd2-f1-g3). Préparer la poussée d4 ou b4 au moment le plus opportun.',
          keyMoves: ['Cbd2-f1-g3', 'd4', 'Fe3'],
          subVariations: [
            {
              id: "it-v1-sv1",
              name: 'Le piège 4... d6 5. d3 Bg4?',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O d6 5. c3 Bg4 6. d4 exd4 7. Qb3 Qd7 8. Bxf7+ Qxf7 9. Qxb7 Kd7 10. Qxa8 Bxf3',
              explanation: "Clouer le Cavalier f3 avant d'avoir roqué est une erreur fréquente. La punition se fait par la rupture d4 suivie de Qb3! qui forme une batterie foudroyante contre f7 et b7."
            }
          ]
        },
        {
          id: "it-v2",
          name: 'Attaque Fegatello (Foie Frit)',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nb4 9. Qe4 c6 10. a3 Na6',
          theory: 'Une ligne explosive ! Les Blancs sacrifient un cavalier de plein gré en f7 pour extraire le roi noir en plein centre (e6). Le reste n\'est que pression et clouage.',
          pros: ['Attaque dévastatrice immédiate', 'Très difficile à défendre sans connaître parfaitement la théorie (surtout en blitz)'],
          cons: ['Le matériel est déséquilibré, si l\'attaque s\'étouffe, les Noirs gagnent'],
          strategy: 'Harceler le roi noir au centre. Ne jamais relâcher le clouage sur d5. Utiliser la Dame et le Cavalier pour imposer des menaces fatales. Les Noirs cherchent à blinder avec c6.',
          keyMoves: ['Ng5', 'Nxf7', 'Qf3+'],
          subVariations: [
            {
              id: "it-v2-sv1",
              name: 'Suicide Royal 7... Re8??',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke8 8. Bxd5 Bd7 9. Qf7#',
              explanation: "L'erreur fatale. Le Roi noir recule au lieu d'avancer en e6 pour protéger le cavalier cloué. Les Blancs matent presque instantanément."
            },
            {
              id: "it-v2-sv2",
              name: 'Erreur fatale 7... Rg8??',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Kg8 8. Bxd5+ Be6 9. Bxe6#',
              explanation: "Même concept que précédemment : fuir la pression en g8 abandonne le cavalier d5. C'est la punition classique d'une défense passive."
            },
            {
              id: "it-v2-sv3",
              name: 'Défense passive 8... Ce7?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Nce7 9. d4 c6 10. Bg5',
              explanation: "Placer le cavalier en e7 pour protéger d5 est très passif. Cela permet aux Blancs de balancer d4, ouvrant toutes les lignes pour écraser le Roi noir figé au centre."
            }
          ]
        },
        {
          id: "it-v3",
          name: 'Gambit Evans',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Nge7 8. cxd4 d5 9. exd5 Nxd5 10. Qb3 Nce7',
          theory: 'L\'un des gambits romantiques les plus réputés. Les Blancs offrent le pion b4 pour dévier le fou c5, puis propulsent c3 et d4 pour forger un centre titanesque en un temps record.',
          pros: ['Centre blanc surpuissant', 'Avance de développement fulgurante', 'Les fous blancs rayonnent'],
          cons: ['Les Noirs peuvent s\'accrocher au pion de plus et consolider', 'Demande un style très dynamique'],
          strategy: 'Ouvrir les lignes avant que les Noirs ne roquent. L\'activité prime sur le matériel. Si l\'attaque est bloquée, l\'avantage matériel noir parlera en finale.',
          keyMoves: ['b4', 'c3', 'd4'],
          subVariations: [
            {
              id: "it-v3-sv1",
              name: 'Prise alternative 4... Cxb4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Nxb4 5. c3 Nc6 6. d4 exd4 7. O-O Nge7 8. cxd4 Bb6',
              explanation: "Prendre du cavalier décentralise la pièce noire et facilite la poussée c3-d4 des Blancs sans perdre de tempo contre le Fou. Le développement blanc s'en trouve accéléré."
            },
            {
              id: "it-v3-sv2",
              name: 'Mauvais repli 5... Fc5?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. cxd4 Bb4+ 8. Bd2 Bxd2+ 9. Nbxd2 d6',
              explanation: "Reculer le Fou en c5 (plutôt qu'en a5 ou e7) donne aux Blancs un tempo supplémentaire gratuit quand ils poussent d4. Les Noirs se font écraser au centre."
            },
            {
              id: "it-v3-sv3",
              name: 'L\'avarice 7... dxc3?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O dxc3 8. Qb3 Qe7 9. Nxc3 Nf6',
              explanation: "Accepter tous les pions du Gambit Evans est suicidaire. Les Noirs accumulent un retard de développement dramatique et s'exposent à Db3 qui vise f7 avec une attaque irrésistible."
            }
          ]
        }
      ]
    },
    {
      id: 'ecossaise',
      name: 'Partie Écossaise',
      moves: '1. e4 e5 2. Cf3 Cc6 3. d4 exd4 4. Cxd4',
      type: 'Ouverte, Dynamique, Tactique',
      description: 'Ouvre le centre immédiatement en forçant l\'échange des pions e5/d4. Idéal pour dicter le rythme et éviter les longues manœuvres.',
      pros: ['Prend l\'initiative et l\'espace central tout de suite', 'Sort les joueurs de e5 de leur zone de confort', 'Lignes très directes et tranchantes'],
      cons: ['L\'échange précoce au centre relâche un peu la tension', 'Les Noirs peuvent égaliser confortablement s\'ils connaissent la théorie exacte'],
      variations: [
        {
          id: "ec-v1",
          name: 'Variante Mieses (4... Cf6)',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. e5 Qe7 7. Qe2 Nd5 8. c4 Ba6 9. b3 g6 10. f4 Bg7',
          theory: 'La réponse la plus pointue des Noirs. Les Blancs répondent par e5, menant à un combat féroce où les Noirs clouent le pion c4 avec leur Fou a6.',
          pros: ['Espace énorme au centre et à l\'aile roi', 'Jeu très complexe favorisant le joueur le mieux préparé'],
          cons: ['Le pion e5 peut devenir une cible', 'Structure parfois un peu étirée'],
          strategy: 'Consolider le centre (c4, b3, f4) puis attaquer sur l\'aile roi où les Blancs ont un avantage spatial et structurel.',
          keyMoves: ['c4', 'b3', 'f4'],
          subVariations: [
            {
              id: "ec-v1-sv1",
              name: 'Erreur 8... Cb6?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. e5 Qe7 7. Qe2 Nd5 8. c4 Nb6 9. Nc3 d6 10. exd6 cxd6',
              explanation: "Reculer le cavalier en b6 au lieu de clouer avec Fa6 est trop passif. Les Blancs développent simplement avec Nc3 et maintiennent un fort ascendant d'espace sans subir la pression insupportable du clouage."
            }
          ]
        },
        {
          id: "ec-v2",
          name: 'Variante Classique (4... Fc5)',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bc4 O-O 8. O-O Bb6 9. Na3 d6 10. Nac2 Qg6',
          theory: 'La réponse la plus naturelle. Les Noirs développent leur fou et ciblent immédiatement le cavalier d4 central. La position reste équilibrée avec de multiples plans de manœuvres.',
          pros: ['Ouvre le centre immédiatement', 'Lutte positionnelle riche où l\'espace avantage légèrement les Blancs'],
          cons: ['Les Noirs se développent très facilement', 'La tension centrale est rapidement dissoute'],
          strategy: 'Blancs : Stabiliser le cavalier avec c3, développer les pièces en harmonie, contrôler l\'espace. Noirs : Pression continue sur d4, finir le développement via Cge7, préparer les ruptures d5 ou f5.',
          keyMoves: ['Bc5', 'Be3', 'c3'],
          subVariations: [
            {
              id: "ec-v2-sv1",
              name: 'L\'échange fautif 5... Cxd4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Nxd4 6. Bxd4 Bxd4 7. Qxd4 Qf6 8. e5 Qb6 9. Na3',
              explanation: "Échanger en d4 si tôt centralise la Dame blanche ou son Fou dominant d4. Les Blancs gagnent un net avantage d'espace et dicteront le jeu sans problème."
            },
            {
              id: "ec-v2-sv2",
              name: 'Ordre imprécis 5... Cf6?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Nf6 6. Nxc6 bxc6 7. Bxc5 d6 8. Bd4 O-O',
              explanation: "Jouer Nf6 au lieu de Qf6 permet l'échange destructeur Nxc6, qui force bxc6 puis perd immédiatement le Fou c5 ou détruit massivement la structure."
            },
            {
              id: "ec-v2-sv3",
              name: 'Agression précoce 6... Dh4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Qh4 7. Nd2 Nf6 8. g3 Qg4 9. Be2',
              explanation: "Tenter de punir les Blancs en sortant la Dame une deuxième fois est une perte de temps. Les Blancs se développent sainement et la Dame devra reculer honteusement."
            }
          ]
        },
        {
          id: "ec-v3",
          name: 'Gambit Écossais (4. Fc4)',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. e5 d5 6. Bb5 Ne4 7. Nxd4 Bd7 8. Bxc6 bxc6 9. O-O Bc5 10. f3 Ng5',
          theory: 'Au lieu de reprendre banalement le pion d4, les Blancs jouent Bc4 (Gambit) pour accélérer le développement, préparer le roque et générer des menaces rapides sur f7.',
          pros: ['Jeu très ouvert, plein de pièges tactiques', 'Prend de court les joueurs trop routiniers'],
          cons: ['Les Noirs égalisent sans drame s\'ils réagissent précisément (notamment avec d5)'],
          strategy: 'Si les Noirs jouent 4...Nf6 (comme une défense des Deux Cavaliers), pousser agressivement e5 pour casser leur centre. Jouer actif et cibler les défauts de coordination adverses.',
          keyMoves: ['Bc4', 'Nf6', 'e5'],
          subVariations: [
            {
              id: "ec-v3-sv1",
              name: 'Échec inutile 4... Fb4+?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bb4+ 5. c3 dxc3 6. bxc3 Ba5 7. O-O Nf6 8. e5 Ne4',
              explanation: "Donner cet échec sans raison aide les Blancs. Ils développent leur pion c avec tempo, ouvrent les lignes pour la Dame (Qb3), et le Fou devra fuir passivement."
            },
            {
              id: "ec-v3-sv2",
              name: 'Le piège 5... Ce4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. e5 Ne4 6. O-O d5 7. Bb5 Bd7 8. Nxd4 Nxd4',
              explanation: "Placer le Cavalier en e4 si tôt au lieu de jouer le thématique d5 (pour fermer la diagonale du Fou) laisse ce cavalier flottant et instable."
            },
            {
              id: "ec-v3-sv3",
              name: 'Suicide en g4 5... Cg4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Nf6 5. O-O Nxe4 6. Re1 d5 7. Bxd5 Qxd5 8. Nc3 Qa5 9. Nxe4',
              explanation: "Mettre le Cavalier en g4 dans cette structure (souvent après e5) invite à des tactiques dévastatrices impliquant Bxf7+ ou des attaques avec h3."
            }
          ]
        },
        {
          id: "ec-v4",
          name: 'Variante Steinitz (4... Dh4?!)',
          pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3 Bb4 6. Be2 Qxe4 7. Nb5 Bxc3+ 8. Nxc3 Qg6 9. O-O d6 10. Nd5 Kd8',
          theory: 'Une ligne provocatrice et rare. Les Noirs sortent la Dame instantanément pour croquer le pion e4. En échange, les Blancs déploient une monstrueuse avance de développement.',
          pros: ['Avance de développement massive des Blancs', 'Le Roi noir perd souvent le droit de roquer'],
          cons: ['Le pion e4 est effectivement perdu', 'Demande du calcul précis (un simple faux pas est fatal)'],
          strategy: 'Sacrifier le pion sciemment ! Développer Nc3 puis Be2, ignorer la Dame noire. Bondir avec le Cavalier (ex: Nb5/Nd5) pour terroriser la case c7 et obliger le Roi noir à bouger.',
          keyMoves: ['Qh4', 'Nc3', 'Be2'],
          subVariations: [
            {
              id: "ec-v4-sv1",
              name: 'Trop gourmand 5... Dxe4+?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3 Qxe4+ 6. Be3 Bb4 7. a3 Bxc3+ 8. bxc3 Nge7 9. Bd3 Qxg2',
              explanation: "Saisir le pion e4 instantanément, sans développer le Fou b4 d'abord, permet aux Blancs de gagner de multiples tempos de développement très précieux en attaquant la Dame."
            },
            {
              id: "ec-v4-sv2",
              name: 'Échange fautif 6... Cxd4?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3 Bb4 6. Be2 Nxd4 7. Qxd4 Bxc3+ 8. bxc3 Qf6 9. O-O d6',
              explanation: "Un échange complaisant. Cela résout le problème des Blancs en centralizing leur Dame, forçant virtuellement la Dame noire à reculer sans aucun bénéfice."
            },
            {
              id: "ec-v4-sv3",
              name: 'Refus de l\'échange 7... Kd8?!',
              pgnEn: '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 5. Nc3 Bb4 6. Be2 Qxe4 7. Nb5 Kd8 8. O-O Bxc3 9. Nxc3 Qd4',
              explanation: "Devant la fourchette potentielle en c7 (par Nb5), bouger le Roi tout de suite sans prendre le Cavalier c3 permet aux Blancs de conserver une pression absolue."
            }
          ]
        }
      ]
    },
    {
      id: 'queens-gambit',
      name: 'Gambit Dame',
      moves: '1. d4 d5 2. c4',
      type: 'Fermée à Semi-fermée, Positionnelle',
      description: 'L\'ouverture de flanc (d4) par excellence. Les Blancs offrent un pion latéral (c4) pour dévier le pion d5 et obtenir une domination centrale absolue.',
      pros: ['Le meilleur moyen de jouer pour le gain sur d4', 'Excellente sécurité structurelle', 'Luttes stratégiques très riches'],
      cons: ['Peut nécessiter une défense patiente si les Noirs verrouillent la position', 'La variante Slave est très dure à percer'],
      variations: [
        {
          id: "qg-v1",
          name: 'Défense Orthodoxe',
          pgnEn: '1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6 8. Rc1 Bb7 9. Bd3 Nbd7 10. O-O c5',
          theory: 'Le Refusé classique. Les Noirs maintiennent la tension avec e6, protégeant d5 mais emmurant leur Fou de cases claires (c8).',
          pros: ['Avantage d\'espace au centre', 'Plan stratégique clair (Attaque de Minorité sur l\'aile dame)'],
          cons: ['La structure noire est en béton armé', 'Très dur de créer des attaques directes sur le Roi'],
          strategy: 'Blancs : Créer la "Minority Attack" (Attaque de Minorité) avec b4-b5 pour affaiblir la structure noire à l\'aile dame. Noirs : Se libérer avec ...c5 ou ...e5 et activer le Fou c8.',
          keyMoves: ['Tc1', 'b4', 'b5'],
          subVariations: []
        },
        {
          id: "qg-v2",
          name: 'Défense Slave',
          pgnEn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Nh4 Bg4 10. f3 Bh5',
          theory: 'L\'une des défenses les plus solides. Les Noirs soutiennent d5 avec c6, résolvant le problème majeur de l\'Orthodoxe : le Fou de cases claires (c8) peut sortir librement avant de jouer e6.',
          pros: ['Contrôle central très fort', 'Garde une pression asymétrique durable sur la position'],
          cons: ['Le Fou c8 noir n\'est pas enfermé', 'La forteresse noire est extrêmement résiliente'],
          strategy: 'Blancs : Empêcher la poussée b5 des Noirs via a4, puis récupérer c4 sereinement. Noirs : Centraliser, utiliser le Fou c8, et trouver la bonne rupture (c5 ou e5).',
          keyMoves: ['c6', 'dxc4', 'a4'],
          subVariations: [
            {
              id: "qg-v2-sv1",
              name: 'Le mauvais fou 4... Ff5?!',
              pgnEn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 Bf5 5. cxd5 cxd5 6. Qb3 Bc8 7. e4 e6 8. Bg5 Be7',
              explanation: "Sortir le Fou c8 avant d'avoir sécurisé le centre par dxc4 ou un pion d5 bien ancré est sanctionné par cxd5 suivi de l'immédiat Db3 ! qui vise le point sensible b7 (défense impossible)."
            },
            {
              id: "qg-v2-sv2",
              name: 'S\'accrocher 5... b5?!',
              pgnEn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 b5 6. axb5 cxb5 7. Nxb5 Qb6 8. Nc3 e6',
              explanation: "Dans cette ligne précise où les Blancs ont joué a4, tenter de protéger le pion par b5 échoue stratégiquement (axb5 cxb5) et laisse l'aile dame totalement déchiquetée."
            },
            {
              id: "qg-v2-sv3",
              name: 'Excentricité 6... Ca6?!',
              pgnEn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Na6 6. e4 Bg4 7. Bxc4 Bxf3 8. gxf3 Nb4',
              explanation: "Développer le cavalier au bord pour espérer un saut en b4 est artificiel. Les Blancs consolident le centre massif par e4, puis peuvent briser la structure avec un coup de fou en a6."
            }
          ]
        },
        {
          id: "qg-v3",
          name: 'Gambit Dame Accepté',
          pgnEn: '1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 c5 6. O-O a6 7. Qe2 b5 8. Bb3 Bb7 9. Rd1 Nbd7 10. Nc3 Qb8',
          theory: 'Les Noirs refusent la contrainte structurelle et prennent en c4. Ils abandonnent le contrôle temporaire du centre pour un développement hyper rapide et sans "mauvais fou".',
          pros: ['Domination totale du centre (d4/e4)', 'Le gambit n\'est qu\'apparent, le pion est récupéré facilement'],
          cons: ['Concession du centre par les Noirs en échange d\'un développement hyper rapide', 'Les Noirs attaqueront violemment le centre blanc (c5)'],
          strategy: 'Blancs : Établir la sécurité centrale (d4), roquer, puis lancer une attaque en profitant de l\'avantage d\'espace. Noirs : Contre-attaquer d4 immédiatement avec c5, puis harceler le centre.',
          keyMoves: ['dxc4', 'c5', 'a6'],
          subVariations: [
            {
              id: "qg-v3-sv1",
              name: 'La gaffe absolue 3... b5?!',
              pgnEn: '1. d4 d5 2. c4 dxc4 3. Nf3 b5 4. a4 c6 5. axb5 cxb5 6. e3 Bb7 7. b3 a6 8. bxc4 bxc4',
              explanation: "Tenter de conserver à tout prix le pion gambité est la pire erreur du GDA. Les Blancs punissent cela brutalement avec a4 puis Qf3 sur la grande diagonale noire, gagnant souvent une Tour."
            },
            {
              id: "qg-v3-sv2",
              name: 'Clouage inefficace 4... Fg4?!',
              pgnEn: '1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 Bg4 5. Bxc4 e6 6. h3 Bh5 7. Nc3 c6 8. g4 Bg6',
              explanation: "Clouer le Cavalier d'emblée laisse la case b7 vulnérable. De plus, les Blancs peuvent jouer Qb3 ou chasser agressivement le Fou, gagnant le centre sans la moindre difficulté."
            },
            {
              id: "qg-v3-sv3",
              name: 'Encore la gourmandise 5... b5?!',
              pgnEn: '1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 e6 5. Bxc4 b5 6. Bb3 c5 7. a4 b4 8. axb5 c4',
              explanation: "Même erreur que précédemment mais à un stade ultérieur. Les Noirs perdent trop de temps à l'aile dame alors qu'ils n'ont pas roqué, exposant leur roi au centre."
            }
          ]
        }
      ]
    },
    {
      id: 'english',
      name: 'Ouverture Anglaise',
      moves: '1. c4',
      type: 'Flanc, Hypermoderne, Positionnelle',
      description: 'Contrôle le centre depuis le flanc (d4 ou d5) sans s\'engager immédiatement avec les pions centraux. Mène souvent à des batailles de manœuvres très complexes et flexibles.',
      pros: ['Extrêmement flexible, transpose dans de nombreuses structures', 'Évite de nombreuses défenses théoriques noires (Nimzo, Grünfeld direct)', 'Forte pression durable sur l\'aile dame et les cases claires'],
      cons: ['Peut manquer d\'attaque directe sur le roi adverse', 'Demande une compréhension positionnelle profonde', 'Les Noirs ont beaucoup de choix défensifs viables'],
      variations: [
        {
          id: "en-v1",
          name: 'Sicilienne Inversée (4 Cavaliers)',
          pgnEn: '1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 d5 5. cxd5 Nxd5 6. Bg2 Nb6 7. O-O Be7 8. a3 O-O 9. d3 Be6 10. b4 f6',
          theory: 'Les Blancs jouent une Défense Sicilienne avec un tempo de plus. L\'échange cxd5 donne une majorité centrale (d3/e2 contre f6) et ouvre la colonne c pour la Tour.',
          pros: ['Pression très naturelle sur la grande diagonale avec Fg2', 'Plans d\'attaque à l\'aile dame très lisibles (b4, a4)'],
          cons: ['Les Noirs obtiennent beaucoup d\'espace au centre avec e5', 'Le Cavalier blanc en c3 peut parfois être harcelé'],
          strategy: 'Contrôler d5. Développer l\'attaque de minorité à l\'aile dame (a3, b4) tout en gardant une position extrêmement solide autour du Roi grâce au fianchetto.',
          keyMoves: ['g3', 'Bg2', 'b4'],
          subVariations: [
            {
              id: "en-v1-sv1",
              name: 'Sortie du Fou hâtive 4... Fc5?!',
              pgnEn: '1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bc5 5. Nxe5 Nxe5 6. d4 Bxd4 7. Qxd4 d6 8. Bg2 O-O',
              explanation: "Sortir le Fou en c5 permet la tactique classique Nxe5! Si les Noirs reprennent Nxe5, les Blancs jouent d4 avec une fourchette, récupérant la pièce avec le duo de Fous et un super centre."
            },
            {
              id: "en-v1-sv2",
              name: 'Reprise gourmande 5... Dxd5?!',
              pgnEn: '1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 d5 5. cxd5 Nxd5 6. Bg2 Nxc3 7. bxc3 e4 8. Ng1 Bf5 9. Qa4 Qe7 10. f3',
              explanation: "Les Noirs tentent d'échanger les cavaliers puis de pousser e4 pour disloquer les Blancs. Mais après Ng1!, les Blancs contre-attaquent ce pion e4 trop avancé (avec Qa4 et f3) et le centre noir s'effondre."
            },
            {
              id: "en-v1-sv3",
              name: 'Jeu passif 2... d6?!',
              pgnEn: '1. c4 e5 2. Nc3 d6 3. Nf3 Nc6 4. d4 exd4 5. Nxd4 Nf6 6. g3 Be7 7. Bg2 Bd7 8. O-O O-O',
              explanation: "Jouer d6 trop tôt sans avoir développé les pièces laisse l'initiative totale. Les Blancs frappent immédiatement avec d4 et obtiennent un avantage spatial et actif très confortable."
            }
          ]
        },
        {
          id: "en-v2",
          name: 'Variante Symétrique',
          pgnEn: '1. c4 c5 2. Nf3 Nf6 3. Nc3 Nc6 4. g3 g6 5. Bg2 Bg7 6. O-O O-O 7. d4 cxd4 8. Nxd4 Nxd4 9. Qxd4 d6 10. Qd3 a6',
          theory: 'La réponse la plus respectueuse de c4. Les Noirs maintiennent la symétrie. Les Blancs sont souvent les premiers à briser cette symétrie en jouant d4.',
          pros: ['Partie très calme et stratégique', 'Idéal pour surpasser l\'adversaire en compréhension pure'],
          cons: ['Peut devenir annulant si les Blancs ne prennent aucun risque', 'Très peu de tactique immédiate'],
          strategy: 'Briser la symétrie au moment opportun (souvent avec d4). Exploiter l\'avantage minime du premier coup pour installer une pression persistante sur la colonne d ou la diagonale h1-a8.',
          keyMoves: ['g3', 'd4', 'Qd3'],
          subVariations: [
            {
              id: "en-v2-sv1",
              name: 'Rupture Hollandaise 2... f5?!',
              pgnEn: '1. c4 c5 2. Nf3 f5 3. d4 cxd4 4. Nxd4 d6 5. g3 Nf6 6. Bg2 e5 7. Nc2 Nc6 8. O-O Be7',
              explanation: "Mélanger une Symétrique avec une Hollandaise affaiblit terriblement le centre noir. Les Blancs répondent simplement par d4, ouvrent la position et le fou g2 dominera l'échiquier."
            },
            {
              id: "en-v2-sv2",
              name: 'Poussée prématurée 4... d5?!',
              pgnEn: '1. c4 c5 2. Nf3 Nf6 3. Nc3 Nc6 4. g3 d5 5. cxd5 Nxd5 6. Bg2 Nc7 7. O-O e5 8. d3 Be7 9. Nd2 O-O',
              explanation: "Jouer d5 avant d'avoir sécurisé le roi (via g6, Bg7) expose le cavalier d5. Les Blancs obtiennent un jeu très facile en tapant sur les faiblesses créées (notamment avec Bg2)."
            },
            {
              id: "en-v2-sv3",
              name: 'Lenteur excessive 7... d6?!',
              pgnEn: '1. c4 c5 2. Nf3 Nf6 3. Nc3 Nc6 4. g3 g6 5. Bg2 Bg7 6. O-O O-O 7. d4 d6 8. d5 Na5 9. Nd2 a6 10. Qc2',
              explanation: "Refuser de prendre en d4 permet aux Blancs de fermer le centre avec d5 (ou de maintenir une forte pression). Le cavalier c6 est chassé en bordure (Na5) où il est inefficace."
            }
          ]
        },
        {
          id: "en-v3",
          name: 'Système avec e3 et d4 (Anti-Sicilienne inversée)',
          pgnEn: '1. c4 e5 2. Nc3 Nf6 3. e3 d5 4. cxd5 Nxd5 5. Nf3 Nc6 6. Bb5 Nxc3 7. bxc3 Bd6 8. d4 exd4 9. cxd4 O-O 10. O-O',
          theory: 'Un système tranchant ! Les Blancs jouent e3 pour contrôler d4, puis frappent avec d4. C\'est une structure de type Française ou Sicilienne inversée, visant à construire un centre de pions parfait (c3-d4).',
          pros: ['Centre de pions très fort et mobile (c3-d4)', 'Développement naturel et rapide des pièces', 'Évite les longues manœuvres des autres lignes de l\'Anglaise'],
          cons: ['Les Noirs peuvent simplifier rapidement avec des échanges en c3 et d4', 'Demande de la précision tactique si les Noirs attaquent le centre'],
          strategy: 'Accepter la structure de pions (bxc3) pour renforcer le centre. Pousser d4 rapidement. Utiliser la semi-colonne b pour la Tour et exploiter la domination centrale pour attaquer.',
          keyMoves: ['e3', 'Bb5', 'd4'],
          subVariations: [
            {
              id: "en-v3-sv1",
              name: 'Sortie prématurée 4... Dxd5?!',
              pgnEn: '1. c4 e5 2. Nc3 Nf6 3. e3 d5 4. cxd5 Qxd5 5. Nf3 Bb4 6. Qa4+ Nc6 7. Nxe5 Qxe5 8. Bb5',
              explanation: "Reprendre de la Dame au lieu du Cavalier l'expose directement aux attaques (Nf3, Bc4, etc.). Les Blancs gagnent de nombreux temps précieux de développement."
            },
            {
              id: "en-v3-sv2",
              name: 'Ignorer le clouage 6... a6?!',
              pgnEn: '1. c4 e5 2. Nc3 Nf6 3. e3 d5 4. cxd5 Nxd5 5. Nf3 Nc6 6. Bb5 a6 7. Bxc6+ bxc6 8. Nxe5 Qg5 9. Nf3',
              explanation: "Jouer a6 permet aux Blancs de détruire la structure de pions noire avec Bxc6+ tout en gagnant le pion central e5. Les Blancs consolident ensuite facilement."
            },
            {
              id: "en-v3-sv3",
              name: 'L\'attaque hâtive 7... e4?!',
              pgnEn: '1. c4 e5 2. Nc3 Nf6 3. e3 d5 4. cxd5 Nxd5 5. Nf3 Nc6 6. Bb5 Nxc3 7. bxc3 e4 8. Nd4 Bd7 9. Nxc6 bxc6 10. Bc4',
              explanation: "Pousser e4 semble agressif, mais le pion devient rapidement une faiblesse ciblée. Le Cavalier blanc bondit en d4, forçant des concessions structurelles ou regagnant le pion à terme."
            }
          ]
        },
        {
          id: "en-v4",
          name: 'Système Botvinnik',
          pgnEn: '1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e4 e5 6. Nge2 Nge7 7. d3 d6 8. O-O O-O 9. a3 a6 10. Rb1 Rb8',
          theory: 'La structure la plus solide de l\'Anglaise. Les Blancs créent un "étau" avec les pions c4-e4. Le cavalier de l\'aile roi se développe en e2 pour laisser le pion f libre d\'avancer.',
          pros: ['Contrôle central absolu (surtout la case d5)', 'Flexibilité totale (attaque aile dame ou aile roi)', 'Étouffe les joueurs tactiques'],
          cons: ['Le trou en d4 peut être exploité par les Noirs', 'Le fou g2 est parfois bloqué par ses propres pions (e4)'],
          strategy: 'Verrouiller le centre. Préparer une expansion lente mais inéluctable à l\'aile dame (a3, b4) ou préparer la rupture f4 à l\'aile roi. Contrôler farouchement d5.',
          keyMoves: ['e4', 'Nge2', 'Rb1'],
          subVariations: [
            {
              id: "en-v4-sv1",
              name: 'La rupture gâchée 5... f5?!',
              pgnEn: '1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e4 f5 6. exf5 gxf5 7. d3 d6 8. Qh5+ Kf8 9. Nge2',
              explanation: "Tenter d'ouvrir l'aile roi immédiatement affaiblit irrémédiablement le roi noir. Les Blancs détruisent la structure avec exf5 et exploitent la diagonale ouverte (Qh5+)."
            },
            {
              id: "en-v4-sv2",
              name: 'L\'invasion hâtive 6... Nd4?!',
              pgnEn: '1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e4 e5 6. Nge2 Nd4 7. Nxd4 cxd4 8. Nb5 d6 9. c5',
              explanation: "Sauter en d4 avant d'avoir sécurisé le développement permet aux Blancs d'échanger et de profiter du fait que la structure noire se fige maladroitement, ouvrant des attaques comme c5 ou Qa4."
            },
            {
              id: "en-v4-sv3",
              name: 'Ordre passif 6... d6?!',
              pgnEn: '1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. e4 e5 6. Nge2 d6 7. d3 Nge7 8. h4 h5 9. Bg5',
              explanation: "Jouer d6 avant Nge7 permet aux Blancs de placer un clouage très gênant (Bg5) avant que le cavalier noir ne puisse contester le centre sereinement. Les Blancs dictent le tempo."
            }
          ]
        }
      ],
      exercises: [
        {
          id: 'eng-ex-1',
          title: 'Structure en Sicilienne Inversée',
          fen: 'r1bq1rk1/ppp1bppp/2np1n2/4p3/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 w - - 5 7', 
          side: 'white',
          steps: [
            {
              question: "Q1. En regardant le centre de l'échiquier, quelle est la cible principale de vos pièces et de vos pions en jouant l'Anglaise ?",
              options: [
                { text: "Occuper la case e4 avec un Cavalier.", isCorrect: false, feedback: "La case e4 est contestée par le pion e5 noir." },
                { text: "Contrôler la case d5 à tout prix.", isCorrect: true, feedback: "Exact ! Le pion c4, le fou g2 et le cavalier c3 convergent tous vers d5." },
                { text: "Lancer une marée de pions à l'aile Roi.", isCorrect: false, feedback: "Le centre n'est pas fermé, une attaque à l'aile roi serait suicidaire." },
                { text: "Échanger immédiatement les Dames.", isCorrect: false, feedback: "Ce n'est ni possible ni souhaitable à ce stade." }
              ]
            },
            {
              question: "Q2. Observez la chaîne de pions adverse. Les Noirs ont un pion en e5 et d6. Vers où pointe leur avantage d'espace ?",
              options: [
                { text: "L'aile Dame.", isCorrect: false, feedback: "Regardez la diagonale d6-e5, elle pointe vers la droite." },
                { text: "L'aile Roi.", isCorrect: true, feedback: "Oui. Les Noirs ont un avantage d'espace à l'aile roi, c'est donc de ce côté qu'ils chercheront à jouer." },
                { text: "Le centre exact.", isCorrect: false, feedback: "Le centre est partagé de manière asymétrique." },
                { text: "Ils n'ont aucun espace.", isCorrect: false, feedback: "Leur pion e5 leur octroie un bel espace." }
              ]
            },
            {
              question: "Q3. Puisque les Noirs jouent à l'aile Roi, de votre côté, quel est le levier typique pour créer des faiblesses chez l'adversaire ?",
              options: [
                { text: "Pousser f4 pour ouvrir l'aile Roi.", isCorrect: false, feedback: "C'est jouer sur le terrain fort de l'adversaire." },
                { text: "Pousser e4 pour bloquer le centre.", isCorrect: false, feedback: "Cela enfermerait votre propre Fou en g2." },
                { text: "Préparer l'avancée b4 puis b5.", isCorrect: true, feedback: "Parfait ! C'est l'attaque de minorité classique. b4-b5 va disloquer les pions noirs à l'aile Dame." },
                { text: "Pousser h4 et h5.", isCorrect: false, feedback: "Votre roi roqué a besoin de son bouclier de pions." }
              ]
            },
            {
              question: "Q4. Pour préparer efficacement cette poussée b4, quelle manœuvre de pion est presque toujours nécessaire au préalable ?",
              options: [
                { text: "Jouer a3.", isCorrect: true, feedback: "Exactement. a3 soutient b4 et empêche le Cavalier noir de s'installer en b4." },
                { text: "Jouer c5.", isCorrect: false, feedback: "C'est impossible car la case est contrôlée par le pion d6 noir." },
                { text: "Jouer d4.", isCorrect: false, feedback: "d4 est une rupture centrale, pas une préparation pour l'aile dame." },
                { text: "Jouer f3.", isCorrect: false, feedback: "Aucun rapport avec l'aile dame." }
              ]
            },
            {
              question: "Q5. Si les Noirs tentent de vous bloquer en jouant eux-mêmes ...a5, comment devez-vous positionner vos pièces lourdes pour soutenir b4 ?",
              options: [
                { text: "Mettre la Dame en a4.", isCorrect: false, feedback: "Trop exposée et déconnectée de la défense du centre." },
                { text: "Placer la Tour en b1 (Tb1).", isCorrect: true, feedback: "Oui ! La Tour en b1 appuie la poussée b4 de manière inarrêtable." },
                { text: "Ramener la Tour en c1.", isCorrect: false, feedback: "La colonne c est bloquée pour le moment." },
                { text: "Jouer Ta2.", isCorrect: false, feedback: "Passif et maladroit." }
              ]
            }
          ]
        }
      ]
    },
{
    id: 'grand-prix-attack',
    name: 'Attaque Grand Prix',
    moves: '1. e4 c5 2. Cc3 suivis de f4',
    type: 'Agressive, Anti-Sicilienne, Attaque sur le Roi',
    description: 'Une arme féroce contre la Défense Sicilienne. Les Blancs évitent la théorie principale, ferment le centre et préparent une violente attaque sur le roi adverse via f4 et Fc4.',
    pros: ['Évite la théorie infinie de la Sicilienne ouverte', 'L\'attaque sur le roi est intuitive et thématique', 'Surprend souvent les joueurs noirs impréparés'],
    cons: ['Si l\'attaque échoue, la position blanche est stratégiquement inférieure', 'Fou de cases claires parfois vulnérable'],
    variations: [
      {
        id: "gp-v1",
        name: 'Variante avec Fc4',
        pgnEn: '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 e6 6. d3 Nge7 7. O-O O-O 8. Qe1 d5 9. Bb3 b5 10. a3 c4',
        theory: 'La ligne la plus agressive. Le Fou vise directement f7. Les Noirs parent l\'attaque en fermant la diagonale avec e6, préparant une violente poussée d5 au centre.',
        pros: ['Pression immédiate sur la diagonale a2-g8', 'Préparation rapide de Df1-e1-h4 pour le mat'],
        cons: ['Le Fou peut devenir une cible de l\'expansion noire à l\'aile dame'],
        strategy: 'Jouer O-O, d3, puis transférer la Dame sur l\'aile roi (De1-h4). Pousser f5 au bon moment pour ouvrir la colonne f.',
        keyMoves: ['Bc4', 'f5', 'Qe1'],
        subVariations: [
          {
            id: "gp-v1-sv1",
            name: 'Erreur 5... d6?!',
            pgnEn: '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 d6 6. O-O Nf6 7. e5 dxe5 8. fxe5 Ng4 9. Bxf7+ Kxf7 10. Ng5+ Ke8',
            explanation: "Jouer d6 permet une puissante poussée e5 des Blancs. Si les Noirs tentent de contourner, ils s'exposent au terrible sacrifice thématique Fxf7+ suivi d'une attaque dévastatrice sur le Roi déroqué."
          },
          {
            id: "gp-v1-sv2",
            name: 'Gaffe thématique 5... Nf6?!',
            pgnEn: '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 Nf6 6. e5 Ng8 7. Ne4 b6 8. d4 cxd4 9. Nxd4 Nxd4 10. Qxd4 Bb7',
            explanation: "Un placement naturel mais fautif. Le cavalier en f6 est immédiatement chassé par e5. Les Noirs perdent des temps précieux, reculent, et les Blancs écrasent complètement le centre dès le 10ème coup."
          },
          {
            id: "gp-v1-sv3",
            name: 'Provocation 6... a6?!',
            pgnEn: '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 e6 6. d3 a6 7. a4 Nge7 8. O-O d5 9. Ba2 O-O 10. Qe1 Rb8',
            explanation: "Perdre un temps avec a6 au lieu de développer l'aile roi permet aux Blancs de sécuriser leur Fou avec a4-Ba2 et d'installer confortablement leur Dame en e1 pour préparer l'assaut."
          }
        ]
      },
      {
        id: "gp-v2",
        name: 'Variante Positionnelle avec Fb5',
        pgnEn: '1. e4 c5 2. Nc3 Nc6 3. Bb5 Nd4 4. Nf3 Nxb5 5. Nxb5 a6 6. Nc3 d6 7. d4 cxd4 8. Qxd4 e5 9. Qd3 h6 10. O-O Nf6',
        theory: 'Une approche plus contrôlée que Fc4. Les Blancs menacent d\'abîmer la structure noire en c6. Si les Noirs jouent Cd4, les Blancs simplifient et préparent un jeu central avec d4.',
        pros: ['Structure de pions très stable', 'Attaque plus lente mais moins risquée', 'Idéal pour les joueurs positionnels'],
        cons: ['Cède la paire de Fous', 'Moins de potentiel de mat express'],
        strategy: 'Échanger en c6 ou recycler le cavalier b5, jouer d3 ou d4, et jouer sur les faiblesses de la structure noire tout en préparant f4.',
        keyMoves: ['Bb5', 'Bxc6', 'Nd4'],
        subVariations: [
          {
            id: "gp-v2-sv1",
            name: 'Erreur 3... a6?!',
            pgnEn: '1. e4 c5 2. Nc3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. f4 g6 6. d3 Bg7 7. Nf3 Bg4 8. O-O Nf6 9. Qe1 Bxf3 10. Rxf3 Nd7',
            explanation: "Forcer l'échange immédiatement arrange les Blancs. Ils doublent les pions c noirs et obtiennent un jeu parfait pour pousser f4 et lancer une attaque lente mais inexorable à l'aile roi."
          },
          {
            id: "gp-v2-sv2",
            name: 'Le piège du Fou 3... g6?!',
            pgnEn: '1. e4 c5 2. Nc3 Nc6 3. Bb5 g6 4. Bxc6 bxc6 5. d3 Bg7 6. f4 d6 7. Nf3 Nf6 8. O-O O-O 9. Qe1 Rb8 10. b3 Ne8',
            explanation: "Ignorer le Fou b5 avec g6 permet également l'échange en c6. Bien que la prise avec le pion b consolide le centre, les Blancs jouent sereinement leur plan d'attaque (Qe1-h4) sans aucune contrainte matérielle au centre."
          },
          {
            id: "gp-v2-sv3",
            name: 'Imprécision 4... e6?!',
            pgnEn: '1. e4 c5 2. Nc3 Nc6 3. Bb5 Nd4 4. Nf3 e6 5. Nxd4 cxd4 6. Ne2 Qb6 7. Ba4 Nf6 8. d3 Qb4+ 9. c3 dxc3 10. bxc3 Qa5',
            explanation: "Jouer e6 au lieu d'échanger en b5 permet aux Blancs de liquider le fort cavalier d4. Les Noirs se retrouvent avec un pion d4 isolé et vulnérable, et la Dame noire est mal placée après les échanges."
          }
        ]
      }
    ],
	exercises: [
      {
        id: 'gp-ex-1',
        title: 'L\'assaut sur le Roi Noir',
        fen: 'r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3',
        side: 'white',
        steps: [
          {
            question: "Q1. Quel est l'objectif principal de la poussée 3. f4 dans l'Attaque Grand Prix ?",
            options: [
              { text: "Contrôler le centre passivement.", isCorrect: false, feedback: "Non, c'est une ouverture très agressive." },
              { text: "Lancer une attaque directe sur l'aile roi et contrôler la case e5.", isCorrect: true, feedback: "Exactement. Le pion f4 prépare l'ouverture de la colonne f et soutient une attaque violente contre le roque noir." },
              { text: "Préparer le petit roque plus vite.", isCorrect: false, feedback: "Le roque est une conséquence, pas l'objectif premier de f4." },
              { text: "Sacrifier le pion f4 rapidement.", isCorrect: false, feedback: "Le pion f4 n'est généralement pas sacrifié, il est le fer de lance de l'attaque." }
            ]
          },
          {
            question: "Q2. Sur quelle case le Fou de cases claires (f1) se développe-t-il le plus agressivement dans cette variante ?",
            options: [
              { text: "En d3 pour défendre e4.", isCorrect: false, feedback: "Trop passif et bloque la colonne d." },
              { text: "En e2 pour un développement solide.", isCorrect: false, feedback: "Jouable, mais pas la ligne la plus agressive." },
              { text: "En c4, pour viser directement la case f7.", isCorrect: true, feedback: "Parfait. Le Fou en c4 exerce une pression immense sur la diagonale a2-g8 et vise le point faible f7." },
              { text: "Il reste en f1 et on joue g3.", isCorrect: false, feedback: "C'est une autre variante (Grand Prix fermé), moins incisive que la variante avec Fc4." }
            ]
          },
          {
            question: "Q3. Quel est le trajet thématique de votre Dame pour rejoindre l'attaque à l'aile roi ?",
            options: [
              { text: "Dd1 - d2 - h6.", isCorrect: false, feedback: "Le Fou c1 va souvent en d2 ou e3, la Dame n'y a pas sa place." },
              { text: "Dd1 - e1 - h4.", isCorrect: true, feedback: "C'est la manœuvre signature du Grand Prix ! La Dame passe par e1 puis s'installe en h4 pour créer des menaces de mat." },
              { text: "Dd1 - f3 - g3.", isCorrect: false, feedback: "La case f3 est généralement réservée au Cavalier g1." },
              { text: "Dd1 - e2 - c4.", isCorrect: false, feedback: "La Dame n'a rien à faire à l'aile dame dans cette ouverture." }
            ]
          },
          {
            question: "Q4. Quel est le principal risque stratégique pour les Blancs si l'attaque échoue ?",
            options: [
              { text: "Se faire mater du couloir.", isCorrect: false, feedback: "Rare dans ces structures." },
              { text: "Perdre la Dame en h4.", isCorrect: false, feedback: "La Dame est généralement bien soutenue." },
              { text: "Se retrouver avec une structure affaiblie et un mauvais Fou en c1.", isCorrect: true, feedback: "C'est le danger. Si les Noirs repoussent l'attaque, vos pions avancés deviennent des faiblesses et votre Fou c1 peut rester bloqué par le pion d3." },
              { text: "Perdre la paire de fous immédiatement.", isCorrect: false, feedback: "Ce n'est pas le risque structurel principal." }
            ]
          },
          {
            question: "Q5. Dans l'Attaque Grand Prix, quel est le rôle typique de votre pion d ?",
            options: [
              { text: "On le pousse en d4 dès que possible.", isCorrect: false, feedback: "C'est l'objectif de la Sicilienne Ouverte (avec Cf3), pas du Grand Prix." },
              { text: "On le pousse modestement en d3.", isCorrect: true, feedback: "Exact. Le pion d3 soutient solidement e4, libère le Fou c1 (vers d2 ou e3) et maintient le centre fermé pour faciliter l'attaque sur les ailes." },
              { text: "On le sacrifie en d5.", isCorrect: false, feedback: "Les sacrifices en d5 existent, mais ce n'est pas le plan standard de base." },
              { text: "Il ne bouge jamais.", isCorrect: false, feedback: "Il doit obligatoirement bouger pour libérer le reste de l'aile dame." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'trompowsky-attack',
    name: 'Attaque Trompowsky',
    moves: '1. d4 Cf6 2. Fg5',
    type: 'Agressive, Surprenante, Déséquilibrée',
    description: 'Une ouverture déroutante où les Blancs développent rapidement leur Fou pour menacer de ruiner la structure de pions noirs (en échangeant Fxf6) dès le deuxième coup.',
    pros: ['Évite la lourde théorie de l\'Est-Indienne et de la Grünfeld', 'Crée des déséquilibres immédiats (Paire de fous vs Structure)', 'Jeu psychologique fort'],
    cons: ['Les Blancs cèdent très vite la paire de Fous', 'Les Noirs obtiennent le contrôle du centre dans plusieurs variantes', 'Le Fou g5 est parfois mal placé si les Noirs jouent ...e6'],
    variations: [
      {
        id: "tr-v1",
        name: 'La Ligne Critique 2... Ce4',
        pgnEn: '1. d4 Nf6 2. Bg5 Ne4 3. Bf4 d5 4. f3 Nf6 5. e4 dxe4 6. Nc3 exf3 7. Nxf3 e6 8. Bd3 Bd6 9. Bg5 Nbd7 10. Qe2 h6',
        theory: 'Les Noirs attaquent immédiatement le Fou. Les Blancs s\'en servent comme leurre pour justifier une violente expansion et sacrifier un pion central (e4) pour un développement maximal.',
        pros: ['Contre-attaque centrale fulgurante', 'Les Cavaliers noirs sont ballottés'],
        cons: ['Laisse des trous dans la position blanche', 'Jeu très complexe nécessitant un calcul précis'],
        strategy: 'Chasser le cavalier e4 avec f3, puis construire un gros centre avec e4. Profiter de l\'avance de développement en cas de sacrifice.',
        keyMoves: ['Ne4', 'Bf4', 'f3'],
        subVariations: [
          {
            id: "tr-v1-sv1",
            name: 'Erreur Noire 4... Nd6?!',
            pgnEn: '1. d4 Nf6 2. Bg5 Ne4 3. Bf4 d5 4. f3 Nd6 5. e4 dxe4 6. Nc3 exf3 7. Nxf3 g6 8. Qd2 Bg7 9. O-O-O O-O 10. h4 h5',
            explanation: "Reculer le cavalier en d6 obstrue le développement naturel des Noirs. Les Blancs sacrifient un pion avec 5.e4 pour lancer une attaque de mat terrible via h4-h5, avec un roque opposé foudroyant."
          },
          {
            id: "tr-v1-sv2",
            name: 'Gaffe 3... c5?!',
            pgnEn: '1. d4 Nf6 2. Bg5 Ne4 3. Bf4 c5 4. d5 Qb6 5. Bc1 e6 6. f3 Nf6 7. c4 exd5 8. cxd5 d6 9. e4 g6 10. Nc3 Bg7',
            explanation: "Une tentative de punir les Blancs. Bien que 5.Fc1 semble passif, les Blancs repoussent l'attaque, gagnent de l'espace avec d5. Au 10ème coup, ils ont un centre majestueux et un développement idéal."
          },
          {
            id: "tr-v1-sv3",
            name: 'Retrait passif 3... Nf6?!',
            pgnEn: '1. d4 Nf6 2. Bg5 Ne4 3. Bf4 Nf6 4. Nd2 d5 5. e3 c5 6. c3 Nc6 7. Ngf3 e6 8. Bd3 Bd6 9. Bg3 O-O 10. Ne5 Qc7',
            explanation: "Rejouer le cavalier en f6 est une perte de temps sèche. Les Blancs en profitent pour installer confortablement un schéma type 'Système de Londres' classique, mais avec un tempo d'avance net."
          }
        ]
      },
      {
        id: "tr-v2",
        name: 'Variante Solide 2... e6',
        pgnEn: '1. d4 Nf6 2. Bg5 e6 3. e4 h6 4. Bxf6 Qxf6 5. Nf3 d6 6. Nc3 g6 7. Qd2 Bg7 8. O-O-O O-O 9. e5 Qe7 10. h4 Nc6',
        theory: 'Les Noirs préviennent les pions doublés et menacent le centre. Les Blancs prennent l\'espace avec e4, cèdent la paire de Fous et entament un combat stratégique complexe souvent avec des roques opposés.',
        pros: ['Centre contrôlé par les Blancs', 'Jeu facile et schémas d\'attaque clairs (O-O-O et h4)'],
        cons: ['Les Noirs ont la paire de Fous', 'Position solide des Noirs difficile à percer'],
        strategy: 'Consolider le centre, développer les Cavaliers, faire le grand roque (O-O-O) et lancer les pions de l\'aile roi à l\'assaut de la Dame et du Roi noirs.',
        keyMoves: ['e6', 'e4', 'Bxf6'],
        subVariations: [
          {
            id: "tr-v2-sv1",
            name: 'Le piège 3... d5?!',
            pgnEn: '1. d4 Nf6 2. Bg5 e6 3. e4 d5 4. e5 h6 5. Bd2 Nfd7 6. f4 c5 7. c3 Nc6 8. Nf3 Qb6 9. Bc1 Be7 10. a3 O-O',
            explanation: "Frapper au centre avec d5 semble logique mais après 4.e5 h6, les Blancs ne prennent pas en f6 mais reculent en d2 (ou c1). Les Noirs sont contraints dans une mauvaise version de la Française manquant d'espace."
          },
          {
            id: "tr-v2-sv2",
            name: 'Erreur 4... gxf6?!',
            pgnEn: '1. d4 Nf6 2. Bg5 e6 3. e4 h6 4. Bxf6 gxf6 5. Nf3 b6 6. Bd3 Bb7 7. Nc3 d6 8. Qe2 a6 9. O-O-O Nd7 10. Kb1 Qe7',
            explanation: "Reprendre de la Dame est obligatoire. Reprendre avec le pion g ruine volontairement la structure sans aucune compensation (contrairement à d'autres variantes où le centre d est renforcé)."
          },
          {
            id: "tr-v2-sv3",
            name: 'Passivité 5... a6?!',
            pgnEn: '1. d4 Nf6 2. Bg5 e6 3. e4 h6 4. Bxf6 Qxf6 5. Nf3 a6 6. Bd3 d6 7. O-O Nc6 8. c3 e5 9. d5 Nb8 10. Nbd2 Be7',
            explanation: "Perdre un temps sur a6 donne aux Blancs tout le loisir de monter un dispositif central impénétrable avec c3 et d5. Au 10ème coup, les pièces noires sont renvoyées sur leur première rangée."
          }
        ]
      }
    ],
	exercises: [
      {
        id: 'tromp-ex-1',
        title: 'Le chaos dès le deuxième coup',
        fen: 'rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2',
        side: 'white',
        steps: [
          {
            question: "Q1. Quelle est l'idée psychologique et stratégique principale de 2. Fg5 ?",
            options: [
              { text: "Développer toutes les pièces à l'aile dame.", isCorrect: false, feedback: "L'action se passe au centre et à l'aile roi." },
              { text: "Forcer un mat en 10 coups.", isCorrect: false, feedback: "C'est une ouverture positionnelle et agressive, pas un piège à mat." },
              { text: "Éviter la théorie lourde et menacer de doubler les pions f noirs (Fxf6).", isCorrect: true, feedback: "Exact. Vous sortez les joueurs d'Est-Indienne de leur zone de confort et menacez de ruiner leur structure de pions immédiatement." },
              { text: "Protéger le pion d4.", isCorrect: false, feedback: "Le Fou g5 ne protège pas d4." }
            ]
          },
          {
            question: "Q2. Si les Noirs jouent la ligne critique 2... Ce4 (attaquant votre Fou), que faites-vous généralement ?",
            options: [
              { text: "Prendre le Cavalier (Fxe7).", isCorrect: false, feedback: "Le fou attaquerait la Dame, pas le cavalier." },
              { text: "Reculer le Fou en f4 ou h4.", isCorrect: true, feedback: "Oui, souvent Ff4. Vous gardez le Fou actif et préparez f3 pour chasser le Cavalier noir tout en prenant le centre." },
              { text: "Protéger le Fou avec h4.", isCorrect: false, feedback: "Trop risqué, le Fou serait pris et la structure ruinée." },
              { text: "Ramener le Fou en c1.", isCorrect: false, feedback: "Cela perdrait deux temps précieux de développement." }
            ]
          },
          {
            question: "Q3. Quel avantage cédez-vous souvent volontairement dans l'Attaque Trompowsky ?",
            options: [
              { text: "Le contrôle du centre.", isCorrect: false, feedback: "Au contraire, les Blancs essaient de prendre le centre avec e4 ou d5." },
              { text: "La paire de Fous.", isCorrect: true, feedback: "En échangeant en f6 (Fxf6), vous donnez la paire de fous aux Noirs, mais vous gagnez en développement et abîmez leur structure." },
              { text: "La qualité (Tour contre Fou).", isCorrect: false, feedback: "Aucun sacrifice de qualité n'est thématique ici." },
              { text: "Le droit de roquer.", isCorrect: false, feedback: "Les Blancs roquent très souvent (petit ou grand)." }
            ]
          },
          {
            question: "Q4. Comment les Blancs attaquent-ils souvent si les Noirs jouent solidement avec ...e6 et ...h6 ?",
            options: [
              { text: "En faisant le grand roque (0-0-0) et en poussant les pions h et g.", isCorrect: true, feedback: "C'est un plan très fréquent. Après Fxf6, le centre se bloque et les Blancs lancent une marée de pions sur le Roi noir." },
              { text: "En échangeant les Dames rapidement.", isCorrect: false, feedback: "L'attaque nécessite de garder les Dames." },
              { text: "En jouant uniquement sur l'aile dame.", isCorrect: false, feedback: "Le jeu se concentre sur le centre et l'aile roi." },
              { text: "En sacrifiant un Cavalier en d5.", isCorrect: false, feedback: "Ce n'est pas un sacrifice thématique." }
            ]
          },
          {
            question: "Q5. Si les Noirs tentent de rester solides au 2ème coup en jouant 2... e6, quelle est votre réaction la plus ambitieuse ?",
            options: [
              { text: "Jouer 3. e3.", isCorrect: false, feedback: "C'est jouable mais passif, cela donne aux Noirs une partie facile." },
              { text: "Pousser 3. e4 !", isCorrect: true, feedback: "Le Cavalier f6 étant virtuellement cloué (son déplacement exposerait la Dame ou le centre), vous en profitez pour prendre tout le centre avec e4." },
              { text: "Prendre en f6 (3. Fxf6).", isCorrect: false, feedback: "Prendre ici est moins fort, car les Noirs peuvent reprendre avec la Dame (Dxf6) sans doubler leurs pions." },
              { text: "Jouer 3. c4.", isCorrect: false, feedback: "Cela transposerait vers des lignes classiques, perdant l'intérêt de la Trompowsky." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'jobava-london-system',
    name: 'Système Jobava Londres',
    moves: '1. d4 Cf6 2. Cc3 d5 3. Ff4',
    type: 'Système, Agressive, Créative',
    description: 'Une évolution moderne et tranchante du Système de Londres classique. Le développement précoce du Cavalier en c3 vise à créer des menaces rapides (Cb5 ou e4) au lieu de l\'approche passive avec c3.',
    pros: ['Très riche en tactique', 'Évite les lignes annulantes du Londres classique', 'Forçe les Noirs à résoudre des problèmes concrets très tôt'],
    cons: ['Moins de contrôle absolu sur le centre (pas de pion c3)', 'Le Cavalier c3 bloque l\'avancée du pion c', 'Si les Noirs connaissent la théorie, l\'avantage blanc s\'évapore'],
    variations: [
      {
        id: "jl-v1",
        name: 'Attaque sur c7',
        pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 c5 4. e3 cxd4 5. exd4 a6 6. Nf3 Nc6 7. h3 Bf5 8. Bd3 Bxd3 9. Qxd3 e6 10. O-O Be7',
        theory: 'Les Noirs frappent le centre par c5. Les Blancs refusent de subir et s\'appuient sur leur duo Ff4-Cc3. Les Noirs parent la menace sur c7 avec a6, menant à une bataille centrale équilibrée.',
        pros: ['Combats rapides et complexes', 'Opportunités de punir des erreurs d\'ouverture avec Cb5'],
        cons: ['Les Noirs obtiennent du jeu actif à l\'aile Dame'],
        strategy: 'Maintenir la pression avec le Fou. Si les Noirs négligent a6, sauter immédiatement avec Cb5 pour menacer la fourchette en c7.',
        keyMoves: ['Nc3', 'Bf4', 'Nb5'],
        subVariations: [
          {
            id: "jl-v1-sv1",
            name: 'La gaffe fatale 4... Nc6?!',
            pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 c5 4. e3 Nc6 5. Nb5 e5 6. dxe5 a6 7. Nc3 d4 8. exf6 dxc3 9. Qxd8+ Nxd8 10. bxc3 gxf6',
            explanation: "L'erreur typique face au Jobava. En ignorant la case b5, les Noirs permettent 5.Cb5!. La menace en c7 force les Noirs à des sacrifices désespérés comme e5. Au 10ème coup, la structure noire est en ruines."
          },
          {
            id: "jl-v1-sv2",
            name: 'Erreur 4... e6?!',
            pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 c5 4. e3 e6 5. Nb5 Na6 6. c3 Be7 7. a4 O-O 8. Nf3 Bd7 9. Bd3 Bc6 10. Ne5 Nd7',
            explanation: "Enfermer son propre Fou c8 prématurément permet encore l'incursion 5.Cb5. Le cavalier doit aller se défendre pitoyablement en a6, offrant aux Blancs une domination spatiale absolue."
          },
          {
            id: "jl-v1-sv3",
            name: 'Trop gourmand 4... Qb6?!',
            pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 c5 4. e3 Qb6 5. Nb5 Na6 6. a4 Bd7 7. Nf3 e6 8. c3 Be7 9. Bd3 O-O 10. Ne5 Rfc8',
            explanation: "Sortir la Dame pour attaquer b2 est contré sèchement par la même idée : 5.Nb5!. La Dame est inutilement exposée et le développement de l'aile roi est gravement retardé."
          }
        ]
      },
      {
        id: "jl-v2",
        name: 'Ligne Principale Solide (a6)',
        pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 a6 4. e3 e6 5. Nf3 c5 6. dxc5 Bxc5 7. Bd3 Nc6 8. O-O O-O 9. e4 h6 10. Qe2 b5',
        theory: 'Les Noirs respectent le système et jouent a6 pour interdire définitivement la case b5 au Cavalier blanc. Les Blancs transposent alors dans une forme de Française ou de Caro-Kann d\'attaque inversée.',
        pros: ['Position structurellement très saine', 'Attaque à l\'aile roi via Fd3, Ce5 et h4 possible'],
        cons: ['La pointe tactique du système est désamorcée', 'Le jeu s\'équilibre fortement'],
        strategy: 'Développer le Fou en d3, placer le Cavalier f3 en e5, et amorcer une attaque typique "à la Pillsbury" ou pousser e4 pour disloquer le centre.',
        keyMoves: ['a6', 'e3', 'Bd3'],
        subVariations: [
          {
            id: "jl-v2-sv1",
            name: 'Erreur stratégique 5... b5?!',
            pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 a6 4. e3 e6 5. Nf3 b5 6. a4 b4 7. Na2 c5 8. c3 bxc3 9. Nxc3 Bd6 10. Bxd6 Qxd6',
            explanation: "Trop ambitieux. Les Blancs punissent immédiatement cette expansion avec 6.a4. Si les Noirs poussent b4, le cavalier blanc trouve un excellent recyclage (Na2-c3) et le pion b4 devient une cible molle."
          },
          {
            id: "jl-v2-sv2",
            name: 'Passif 5... Nbd7?!',
            pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 a6 4. e3 e6 5. Nf3 Nbd7 6. Bd3 c5 7. O-O c4 8. Be2 b5 9. b3 Bb7 10. a4 b4',
            explanation: "Bloquer la poussée c5 temporairement avec le Cavalier n'est pas idéal. Les Blancs se développent harmonieusement et forcent les Noirs à fermer le centre avec c4, menant à un plan de rupture typique avec b3/a4."
          },
          {
            id: "jl-v2-sv3",
            name: 'Retard de roque 7... b5?!',
            pgnEn: '1. d4 Nf6 2. Nc3 d5 3. Bf4 a6 4. e3 e6 5. Nf3 c5 6. dxc5 Bxc5 7. Bd3 b5 8. a4 b4 9. Ne2 Bb7 10. O-O Nbd7',
            explanation: "S'entêter sur l'aile dame avec 7...b5 au lieu de se développer par Cc6 ou de roquer permet aux Blancs de désorganiser les pions avec a4, obtenant un avantage stratégique à long terme sur les cases claires."
          }
        ]
      }
    ],
	exercises: [
      {
        id: 'jl-ex-1',
        title: 'Le Cavalier c3 empoisonné',
        fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3',
        side: 'white',
        steps: [
          {
            question: "Q1. Quelle est la grande différence entre le Jobava et le Système de Londres classique ?",
            options: [
              { text: "Le Fou va en g5.", isCorrect: false, feedback: "Non, le Fou va toujours en f4." },
              { text: "Le Cavalier se développe en c3 au lieu du pion en c3.", isCorrect: true, feedback: "Exact. Le Londres classique utilise le pion c3 pour la solidité. Le Jobava utilise Cc3 pour créer des menaces tactiques rapides." },
              { text: "On ne joue pas d4.", isCorrect: false, feedback: "L'ouverture commence toujours par d4." },
              { text: "On sacrifie toujours le pion d4.", isCorrect: false, feedback: "Le pion d4 est soutenu, pas sacrifié sans raison." }
            ]
          },
          {
            question: "Q2. Quelle menace tactique immédiate le duo (Cc3 + Ff4) fait-il peser sur la position noire ?",
            options: [
              { text: "Une attaque de mat en h7.", isCorrect: false, feedback: "Pas si tôt dans la partie." },
              { text: "Le saut du Cavalier en b5 ciblant la fourchette en c7.", isCorrect: true, feedback: "C'est la pointe du système ! Si les Noirs ne font pas attention (ex: en jouant ...Cc6), Cb5 attaque c7 et gagne souvent du matériel." },
              { text: "L'enfermement de la Dame noire.", isCorrect: false, feedback: "La Dame noire n'est pas en danger de cette façon." },
              { text: "La prise du pion d5.", isCorrect: false, feedback: "Le pion d5 est bien défendu." }
            ]
          },
          {
            question: "Q3. Comment les Noirs désamorcent-ils généralement cette menace (Cb5) dans les lignes principales ?",
            options: [
              { text: "En jouant ...a6 ou ...c6 très tôt.", isCorrect: true, feedback: "C'est la meilleure défense. En contrôlant la case b5 avec un pion, les Noirs empêchent l'incursion de votre Cavalier." },
              { text: "En sortant leur Roi en d7.", isCorrect: false, feedback: "Suicidaire." },
              { text: "En donnant le pion c7.", isCorrect: false, feedback: "La fourchette c7 perdrait la Tour en a8." },
              { text: "En jouant ...h6.", isCorrect: false, feedback: "Ne contrôle absolument pas b5." }
            ]
          },
          {
            question: "Q4. Quel est un plan d'attaque typique pour les Blancs si le centre se ferme ?",
            options: [
              { text: "Installer un Cavalier en e5, soutenir avec f4, et attaquer l'aile roi.", isCorrect: true, feedback: "Oui ! C'est une attaque typique du Jobava. Le Cavalier e5 est un monstre, et les pions de l'aile roi (h4, g4) montent à l'assaut." },
              { text: "Reculer toutes les pièces sur la première rangée.", isCorrect: false, feedback: "Complètement illogique." },
              { text: "Faire le grand roque et échanger les Dames.", isCorrect: false, feedback: "L'échange des Dames tue l'attaque." },
              { text: "Jouer b4 et a4 sans préparation.", isCorrect: false, feedback: "Le jeu des Blancs est principalement orienté vers le centre et l'aile roi." }
            ]
          },
          {
            question: "Q5. Dans le Jobava, votre Cavalier occupe la case c3. Par conséquent, si les Noirs attaquent d4 avec ...c5, comment défendez-vous généralement votre centre ?",
            options: [
              { text: "En jouant c3.", isCorrect: false, feedback: "C'est physiquement impossible, votre propre Cavalier est déjà en c3 !" },
              { text: "En prenant le pion (dxc5).", isCorrect: false, feedback: "Cela cèderait le centre aux Noirs, ce qui est très inconfortable." },
              { text: "En solidifiant avec e3.", isCorrect: true, feedback: "C'est la réponse classique. Vous consolidez la base de votre système (d4) avec e3, prêt à répondre à cxd4 par exd4." },
              { text: "En jouant d5.", isCorrect: false, feedback: "La poussée d5 est parfois possible tactiquement, mais e3 est la réaction structurelle la plus saine et fréquente." }
            ]
          }
        ]
      }
    ]
  }
  ],
  black: [
    {
      id: 'caro-kann',
      name: 'Défense Caro-Kann',
      moves: '1. e4 c6 2. d4 d5',
      type: 'Solide, Positionnelle, Orientée Finale',
      description: 'Appelée "le roc". Solide avec un fou c8 qui reste libre.',
      pros: ['Exceptionnellement solide ("Le Roc")', 'Le Fou de cases claires (c8) est actif, contrairement à la Française', 'Génère de superbes finales favorables'],
      cons: ['Jeu initial lent, peu de dynamique', 'La manœuvre de développement du Cavalier roi est un peu maladroite', 'Peut être passif'],
      variations: [
        {
          id: "ck-v1",
          name: 'Variante Classique',
          pgnEn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6',
          theory: 'Ligne la plus solide. Vise une finale légèrement favorable pour les Noirs.',
          pros: ['Structure de pions en béton armé', 'Aucune faiblesse à long terme'],
          cons: ['Manque total d\'espace', 'Les Blancs dictent le rythme de la partie (h4, g4, etc.)'],
          strategy: 'Absorber la pression. Échanger le "bon" fou des blancs (Fd3) contre votre fou g6. Terminer le développement harmonieusement et gagner en finale grâce à une meilleure structure.',
          keyMoves: ['Cd7', 'e6', 'Cgf6'],
          subVariations: []
        },
        {
          id: "ck-v2",
          name: 'Variante d\'Avance (Tal)',
          pgnEn: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 c5 6. Be3 Qb6 7. Nc3 Nc6 8. O-O Qxb2 9. Qe1 cxd4 10. Bxd4 Nxd4',
          theory: 'Très tranchant. Les Blancs sacrifient souvent du matériel pour l\'attaque.',
          pros: ['Le fou c8 est magnifique', 'Le contre-jeu sur c5 est rapide et efficace'],
          cons: ['Les Blancs préparent souvent de redoutables tempêtes de pions (g4, h4) sur l\'aile roi'],
          strategy: 'Attaquer d4 avec c5 et Nc6. Si les Blancs lancent une attaque sauvage (g4), contre-attaquer violemment au centre ou sur l\'aile dame (Db6).',
          keyMoves: ['c5', 'Cc6', 'Cge7'],
          subVariations: []
        },
        {
          id: "ck-v3",
          name: 'Attaque Panov',
          pgnEn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 Nc6 6. Nf3 Bg4 7. cxd5 Nxd5 8. Qb3 Bxf3 9. gxf3 Nb6 10. d5 Nd4',
          theory: 'Transforme la Caro-Kann en structure agressive de type Gambit Dame.',
          pros: ['Désamorce les plans habituels des Blancs d\'étouffement', 'Activité des pièces noires'],
          cons: ['Oblige à jouer des structures IQP (Pion Isolé) qu\'on ne voulait pas forcément en jouant Caro-Kann'],
          strategy: 'Contrôler la case de blocage d5 devant le pion isolé blanc (d4). Échanger les pièces mineures (ce qui aide le camp défendant le pion isolé) et mettre la pression sur d4.',
          keyMoves: ['e6', 'Fe7', 'O-O'],
          subVariations: []
        },
        {
          id: "ck-v4",
          name: 'Variante d\'Échange',
          pgnEn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 Nc6 5. c3 Nf6 6. h3 g6 7. Nf3 Bg7 8. O-O O-O 9. Re1 Bf5 10. Bxf5 gxf5',
          theory: 'Les Blancs relâchent la pression centrale instantanément pour obtenir une position symétrique type Gambit Dame Refusé avec couleurs inversées.',
          pros: ['Jeu calme, idéal pour éviter la théorie agressive des Blancs', 'Structure de pions saine et sans faiblesse'],
          cons: ['La position est très symétrique et stérile au début', 'Les Blancs dictent le rythme de l\'attaque de minorité'],
          strategy: 'Se développer tranquillement. Neutraliser la tentative de contrôle blanc sur la diagonale b1-h7 (en jouant g6/Bf5) et chercher des ruptures au centre en temps voulu.',
          keyMoves: ['exd5', 'Bd3', 'c3'],
          subVariations: [
            {
              id: "ck-v4-sv1",
              name: 'Impatience 4... e5?!',
              pgnEn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 e5 5. dxe5 Nc6 6. Nf3 Bg4 7. O-O Bc5 8. Nc3 Nge7',
              explanation: "Une poussée centrale beaucoup trop hâtive. Elle isole irrémédiablement le pion d5 et donne l'avantage structurel aux Blancs qui consolident sereinement."
            },
            {
              id: "ck-v4-sv2",
              name: 'Erreur positionnelle 5... Fg4?!',
              pgnEn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 Nc6 5. c3 Bg4 6. Ne2 Bxe2 7. Qxe2 e6 8. O-O Nf6',
              explanation: "Donner la paire de fous dans une position de centre fixe/ouvert sans y être forcé est une concession stratégique lourde que les Blancs exploitent à long terme."
            },
            {
              id: "ck-v4-sv3",
              name: 'Perte de temps 6... h6?!',
              pgnEn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 Nc6 5. c3 h6 6. Bf4 Nf6 7. Nf3 e6 8. O-O Bd6',
              explanation: "Un coup paranoïaque courant. Au lieu de se développer activement, les Noirs perdent un temps crucial qui permet aux Blancs de dicter le tempo (Bf4, Nf3)."
            }
          ]
        },
        {
          id: "ck-v5",
          name: 'Variante Fantaisie (Tartakower)',
          pgnEn: '1. e4 c6 2. d4 d5 3. f3 e6 4. Nc3 Bb4 5. a3 Bxc3+ 6. bxc3 dxe4 7. Qe2 exf3 8. Nxf3 Nf6 9. Bg5 Nbd7 10. Qd2 h6',
          theory: 'Les Blancs soutiennent e4 avec f3 ! Une ligne hautement agressive qui veut maintenir un centre imposant et créer le chaos.',
          pros: ['Le pion f3 affaiblit considérablement la diagonale du Roi blanc', 'Possibilité de disloquer complètement le centre blanc en cas d\'erreur'],
          cons: ['Les Blancs obtiennent un centre massif s\'ils ne sont pas agressés', 'Positions très tactiques et inhabituelles pour la Caro-Kann'],
          strategy: 'Attaquer l\'audace blanche. On peut jouer e6 pour forcer la transposition dans une Française modifiée, ou accepter le défi (dxe4) et forcer la dame blanche à se désorganiser pour récupérer le pion.',
          keyMoves: ['f3', 'e6', 'Bb4'],
          subVariations: [
            {
              id: "ck-v5-sv1",
              name: 'Acceptation risquée 3... dxe4?!',
              pgnEn: '1. e4 c6 2. d4 d5 3. f3 dxe4 4. fxe4 e5 5. Nf3 exd4 6. Bc4 Bc5 7. O-O d3+ 8. Kh1 Nf6',
              explanation: "S'engager tête baissée dans les complications souhaitées par les Blancs. Prendre en e4 leur offre le centre majestueux et des diagonales redoutables pour leurs Fous."
            },
            {
              id: "ck-v5-sv2",
              name: 'Développement aveugle 4... Cf6?!',
              pgnEn: '1. e4 c6 2. d4 d5 3. f3 Nf6 4. e5 Nfd7 5. c3 c5 6. f4 Nc6 7. Nf3 e6 8. Bd3 Qb6',
              explanation: "Permet aux Blancs de gagner de l'espace immédiatement avec e5. La position devient une très mauvaise Française où le pion f3 soutient parfaitement le centre blanc."
            },
            {
              id: "ck-v5-sv3",
              name: 'Retraite passive 5... Fa5?!',
              pgnEn: '1. e4 c6 2. d4 d5 3. f3 e6 4. Nc3 Bb4 5. a3 Ba5 6. b4 Bc7 7. Bd3 Ne7 8. Nge2 Nd7',
              explanation: "Après l'attaque a3, reculer le Fou en a5 au lieu de prendre en c3 donne gratuitement de l'espace aux Blancs à l'aile dame, et le Fou se retrouve souvent hors-jeu."
            }
          ]
        }
      ]
    },
    {
      id: 'scandinavian',
      name: 'Défense Scandinave',
      moves: '1. e4 d5',
      type: 'Ouverte, Provocatrice, Asymétrique',
      description: 'Une réponse radicale. Les Noirs contestent immédiatement le centre.',
      pros: ['Force les Blancs hors de la théorie de e5/c5', 'Jeu très direct et franc, plans clairs', 'Structure de pions solide, souvent de type Caro-Kann'],
      cons: ['Exposition prématurée de la Dame (variantes Qxd5)', 'Peut s\'avérer un peu passif si les Blancs jouent de manière très précise'],
      variations: [
        {
          id: "sc-v1",
          name: 'Variante Classique (3... Da5)',
          pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 c6 6. Bc4 Bf5 7. Bd2 e6 8. Qe2 Bb4 9. a3 Nbd7 10. O-O O-O',
          theory: 'La ligne historique et classique. La Dame cloue parfois le Cavalier c3 et met une pression constante sur l\'aile dame. Les Noirs forment un mur solide (c6-e6) après avoir développé leur fou c8.',
          pros: ['Développement très actif des pièces mineures', 'Le Fou c8 est sorti avant la fermeture du centre (contrairement à la Française)'],
          cons: ['La Dame en a5 est sujette à des attaques tactiques ultérieures (ex: b4 ou Ce4)'],
          strategy: 'Sortir le Fou de cases claires (Bf5 ou Bg4) puis verrouiller le centre avec c6 et e6. Préparer un repli stratégique de la Dame vers c7 ou d8 dès que les Blancs menacent b4 ou a3.',
          keyMoves: ['c6', 'Bf5', 'e6'],
          subVariations: [
            {
              id: "sc-v1-sv1",
              name: 'L\'attaque prématurée 4. b4?!',
              pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. b4 Qxb4 5. Rb1 Qd6 6. Nf3 Nf6 7. d4 a6 8. Bd3 b5 9. O-O e6 10. Re1 Be7',
              explanation: "Le Gambit Leonhardt. Les Blancs sacrifient un pion pour chasser violemment la Dame. En reculant calmement en d6 (ou a3), les Noirs gardent le pion d'avance. Avec un développement classique (c6, Nf6), l'attaque blanche s'essouffle vite."
            }
          ]
        },
        {
          id: "sc-v2",
          name: 'Variante Moderne (3... Dd6)',
          pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 a6 6. g3 Bg4 7. Bg2 Nc6 8. O-O O-O-O 9. d5 Ne5 10. Bf4 Nxf3+',
          theory: 'Retirer la Dame en d6 est devenu la ligne la plus jouée. Elle reste active tout en gardant un œil sur le centre sans s\'exposer inutilement aux menaces sur la colonne a.',
          pros: ['Stabilité supérieure pour la Dame', 'Contrôle très sain du centre', 'Évite le Gambit Leonhardt'],
          cons: ['Peut parfois obstruer temporairement le Fou f8', 'Les Blancs jouent souvent un fianchetto incisif avec g3/Fg2'],
          strategy: 'Le coup clé absolu est 5...a6 pour empêcher définitivement Cb5 (qui harcèlerait la Dame). Ensuite, le grand roque est fréquent pour créer un combat dynamique.',
          keyMoves: ['Qd6', 'a6', 'Bg4'],
          subVariations: [
            {
              id: "sc-v2-sv1",
              name: 'L\'oubli critique 5... c6?!',
              pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 c6 6. Ne5 Nbd7 7. Nc4 Qc7 8. Qf3 e5',
              explanation: "Omettre le coup 5...a6 est gravissime ! Cela laisse la porte grande ouverte au Cavalier blanc (via e5 puis c4) qui va bondir et harceler la Dame sans relâche."
            },
            {
              id: "sc-v2-sv2",
              name: 'Clouage inefficace 5... Fg4?!',
              pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 Bg4 6. h3 Bh5 7. g4 Bg6 8. Ne5 Nc6',
              explanation: "Sortir le Fou en g4 avant d'avoir sécurisé le centre (a6) permet aux Blancs de contrer avec h3/g4 très agressivement, s'accaparant tout l'espace et refoulant le Fou noir."
            },
            {
              id: "sc-v2-sv3",
              name: 'Structure hybride 6... g6?!',
              pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 a6 6. g3 g6 7. Bf4 Qb6 8. Na4 Qa5+',
              explanation: "Mélanger le système a6 avec un fianchetto en g6 affaiblit beaucoup trop les cases noires et donne le tempo parfait pour que le Fou f4 attaque la Dame."
            }
          ]
        },
        {
          id: "sc-v3",
          name: 'Gambit Marshall (2... Cf6)',
          pgnEn: '1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. Nf3 g6 5. c4 Nb6 6. Nc3 Bg7 7. c5 Nd5 8. Bc4 c6 9. Qb3 O-O 10. O-O Nxc3',
          theory: 'Les Noirs refusent de compromettre leur Dame tôt. Ils ciblent d5 avec le Cavalier, quitte à transposer dans une Défense Alekhine si les Blancs forcent l\'action.',
          pros: ['Aucun problème lié à la sortie prématurée de la Dame', 'Possibilités de transpositions surprenantes (Panov inversé)'],
          cons: ['Les Blancs s\'installent sereinement au centre (c4, d4)'],
          strategy: 'Récupérer le pion d5 avec le Cavalier. Si les Blancs tentent de s\'accrocher au pion avec 3.c4, réagir violemment par 3...c6 pour ouvrir les lignes (Gambit Islandais/Panov).',
          keyMoves: ['Nf6', 'Nxd5', 'g6'],
          subVariations: [
            {
              id: "sc-v3-sv1",
              name: 'Recul hâtif 3... Cxd5?!',
              pgnEn: '1. e4 d5 2. exd5 Nf6 3. c4 Nxd5 4. d4 Nb6 5. Nf3 Bg4 6. Be2 Nc6 7. Be3 e6 8. O-O Be7',
              explanation: "Face au maintien du pion (c4), reprendre le pion au lieu de jouer le gambit c6 laisse le centre aux mains des Blancs et le Cavalier b6 très mal placé."
            },
            {
              id: "sc-v3-sv2",
              name: 'Gambit Islandais refusé 3... e6?!',
              pgnEn: '1. e4 d5 2. exd5 Nf6 3. c4 e6 4. dxe6 Bxe6 5. d4 Bb4+ 6. Bd2 Qe7 7. Bxb4 Qxb4+ 8. Qd2 Nc6',
              explanation: "Un gambit intéressant mais moins forçant. Les Blancs peuvent consolider avec un jeu précis, laissant les Noirs avec un pion de moins et peu de compensations."
            },
            {
              id: "sc-v3-sv3",
              name: 'Sortie imprudente 4... Fg4?!',
              pgnEn: '1. e4 d5 2. exd5 Nf6 3. d4 Nxd5 4. c4 Nb6 5. Nf3 Bg4 6. c5 N6d7 7. Bc4 e6 8. h3 Bh5',
              explanation: "Trop actif trop tôt. Cela se heurte au plan d'expansion central massif des Blancs (c5) qui repoussent les pièces noires aux limites de l'échiquier."
            }
          ]
        },
        {
          id: "sc-v4",
          name: 'Variante du Repli (3... Dd8)',
          pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8 4. d4 Nf6 5. Nf3 Bg4 6. h3 Bxf3 7. Qxf3 c6 8. Be3 e6 9. Bd3 Nbd7 10. O-O Be7',
          theory: 'Le repli total. Les Noirs admettent avoir joué la Dame trop tôt et la remettent au garage. Ils font le pari que leur structure hyper solide compensera cette perte de deux temps de développement.',
          pros: ['Solidité absolue à toute épreuve', 'La Dame noire est en sécurité maximale', 'Pas de théorie piégeuse pour les Blancs'],
          cons: ['Perte sèche de 2 temps d\'ouverture', 'Position extrêmement passive'],
          strategy: 'Se recroqueviller et développer patiemment façon Caro-Kann (c6, e6). Il faut absolument sortir le Fou c8 (généralement en g4) avant de fermer la porte avec e6.',
          keyMoves: ['Qd8', 'Bg4', 'c6'],
          subVariations: [
            {
              id: "sc-v4-sv1",
              name: 'Le Fou enfermé 4... e6?!',
              pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8 4. d4 Nf6 5. Nf3 e6 6. Bd3 Be7 7. O-O O-O 8. Ne5 Nbd7',
              explanation: "La pire erreur stratégique de la Scandinave. Jouer e6 avant de sortir le Fou c8 en g4 ou f5 enferme ce dernier de manière permanente. Les Noirs joueront virtuellement avec une pièce de moins."
            },
            {
              id: "sc-v4-sv2",
              name: 'Fianchetto lent 5... g6?!',
              pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8 4. d4 Nf6 5. Nf3 g6 6. Bc4 Bg7 7. h3 O-O 8. O-O Nc6',
              explanation: "Dans cette variante où les Noirs ont déjà perdu deux temps, choisir un développement lent en fianchetto donne le champ libre aux Blancs pour centraliser l'attaque."
            },
            {
              id: "sc-v4-sv3",
              name: 'Prophylaxie inutile 6... a6?!',
              pgnEn: '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8 4. d4 Nf6 5. Nf3 Bg4 6. h3 Bxf3 7. Qxf3 a6 8. Be3 Nc6',
              explanation: "La variante du repli n'a pas besoin du coup a6 protecteur (contrairement à la variante moderne). Jouer a6 ici est une perte nette d'un troisième temps de développement."
            }
          ]
        }
      ]
    },
    {
      id: 'sicilian',
      name: 'Défense Sicilienne',
      moves: '1. e4 c5',
      type: 'Asymétrique, Semi-ouverte, Agressive',
      description: 'La réponse la plus dynamique et ambitieuse contre e4. Les Noirs déséquilibrent la structure dès le premier coup.',
      pros: ['Le meilleur taux de victoire pour les Noirs contre 1.e4', 'Potentiel de contre-attaque faramineux (colonne c ouverte)', 'Positions complexes où le meilleur tacticien l\'emporte'],
      cons: ['Exige de connaître énormément de théorie', 'Les Blancs obtiennent souvent des attaques foudroyantes sur le Roi noir'],
      variations: [
        {
          id: "si-v1",
          name: 'Variante Najdorf',
          pgnEn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7 9. O-O-O Nbd7 10. Bd3 h6',
          theory: 'La Rolls-Royce de la Sicilienne. Le coup 5...a6 empêche tout Fb5/Cb5 et garde une flexibilité maximale.',
          pros: ['Flexibilité incroyable', 'Possibilités d\'attaque sur les deux ailes', 'Contrôle parfait de la case d5'],
          cons: ['Retard de développement notable', 'Attaques blanches terrifiantes'],
          strategy: 'Se développer sans se presser (Fe7, Cbd7, b5). Contre-attaquer sur l\'aile dame avec la minorité de pions (b5, a6) et la colonne c. La poussée libératrice ...d5 est le rêve noir.',
          keyMoves: ['a6', 'Cbd7', 'b5'],
          subVariations: [
            {
              id: "si-v1-sv1",
              name: 'Erreur Blanche 2. Bc4?!',
              pgnEn: '1. e4 c5 2. Bc4 e6 3. Nc3 a6 4. a4 Nc6 5. Nf3 Nge7 6. O-O d5 7. exd5 exd5 8. Ba2 g6 9. d3 Bg7 10. Bg5 Be6',
              explanation: "L'attaque Bowdler. C'est mauvais car le Fou tape dans le granit après e6. La punition consiste à préparer d5 au centre. Le Fou c4 sera constamment harcelé."
            }
          ]
        },
        {
          id: "si-v2",
          name: 'Variante du Dragon',
          pgnEn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Rc8',
          theory: 'La plus pure des lignes agressives. Le "Dragon" cracheur de feu est le fou placé en g7 sur la grande diagonale. La partie tourne systématiquement en une attaque mutuelle sur des roques opposés.',
          pros: ['Potentiel offensif magistral des Noirs', 'Génère des parties spectaculaires avec peu de nulles'],
          cons: ['L\'Attaque Yougoslave (f3, Dd2, 0-0-0) des Blancs est mortelle', 'Nécessite de connaître une théorie colossale'],
          strategy: 'Course de vitesse absolue. Les Blancs attaqueront à l\'aile roi (h4, h5, échange du Fg7). Les Noirs doivent répliquer immédiatement à l\'aile dame et sur la colonne c (Tc8, Cc4, b5).',
          keyMoves: ['g6', 'Bg7', 'Rc8'],
          subVariations: [
            {
              id: "si-v2-sv1",
              name: 'Agressivité excessive 6... Fg4?!',
              pgnEn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Bg5 Bg7 7. Qd2 Nc6 8. O-O-O O-O',
              explanation: "Le fou en g5 (au lieu de e3) n'est pas le bon plan pour l'attaque Yougoslave, il offers trop d'options défensives aux Noirs et ralentit la poussée h4."
            },
            {
              id: "si-v2-sv2",
              name: 'Ordre critique 7... Cc6?!',
              pgnEn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2 O-O 9. Bc4 a6',
              explanation: "Jouer Nc6 avant O-O permet parfois aux Blancs de s'orienter vers des plans alternatifs ou retarde le roque noir qui est vital face à f3."
            },
            {
              id: "si-v2-sv3",
              name: 'Le clouage puni 6... Cg4?!',
              pgnEn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Ng4 7. Bb5+ Bd7 8. Qxg4 Nc6 9. Qe2',
              explanation: "Une erreur tactique très courante ! Tenter d'éliminer le fou e3 avant que les Blancs ne jouent f3 permet le chèque dévastateur Bb5+, car la Dame blanche protège la case g4."
            }
          ]
        },
        {
          id: "si-v3",
          name: 'Variante Sveshnikov',
          pgnEn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Nd5 Be7 10. Bxf6 Bxf6',
          theory: 'Agressive et hautement stratégique. Les Noirs chassent le cavalier d4 (e5) au prix d\'une faiblesse béante en d5 et d\'un pion arriéré. En échange, ils s\'accaparent un dynamisme brutal.',
          pros: ['Dynamisme et activité énormes', 'Contrôle puissant des cases noires'],
          cons: ['La faiblesse structurelle (trou en d5) est éternelle', 'Le Cavalier blanc en a3 rebondit vite en d5 via c2/e3'],
          strategy: 'Assumer le trou en d5. Échanger le Cavalier fort des Blancs s\'il s\'y installe. L\'avantage d\'espace noir à l\'aile dame et la paire de Fous (souvent gagnée) fournissent un contre-jeu écrasant.',
          keyMoves: ['e5', 'Ndb5', 'b5'],
          subVariations: [
            {
              id: "si-v3-sv1",
              name: 'Séquence suicidaire 6... a6?!',
              pgnEn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 a6 7. Nd6+ Bxd6 8. Qxd6 Qe7 9. Qxe7+ Kxe7',
              explanation: "Jouer a6 tout de suite permet aux Blancs de bondir en d6 avec échec. Les Noirs doivent sacrifier leur Fou de cases noires vital et le Roi perd le droit de roque dans une très mauvaise finale."
            },
            {
              id: "si-v3-sv2",
              name: 'Omission vitale 8... Fe7?!',
              pgnEn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 Be7 8. Bxf6 gxf6 9. Nd5 O-O',
              explanation: "Dans cette variante, omettre la poussée b5 permet au Cavalier blanc en a3 (qui était hors-jeu) de revenir paisiblement vers le centre (via c4) et c'est un désastre stratégique."
            },
            {
              id: "si-v3-sv3",
              name: 'Développement passif 8... Fe6?!',
              pgnEn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 Be6 9. Nc4 Rc8',
              explanation: "Jouer Be6 au lieu du dynamique b5 n'apporte pas de tension. Les Blancs consolident facilement leur prise sur la case clé d5."
            }
          ]
        }
      ]
    },
    {
      id: 'french',
      name: 'Défense Française',
      moves: '1. e4 e6 2. d4 d5',
      type: 'Fermée, Contre-attaque, Stratégique',
      description: 'Extrêmement solide. Les Noirs acceptent de bloquer leur fou c8 en échange d\'une structure de pions en granit.',
      pros: ['Structure de pions quasiment impénétrable', 'Les plans de contre-attaque sont clairs et récurrents', 'Beaucoup de joueurs de 1.e4 détestent la jouer'],
      cons: ['Le fameux "Mauvais Fou" c8 enfermé par e6', 'Manque d\'espace crucial dans les 15 premiers coups', 'Sensation d\'étouffement si la contre-attaque échoue'],
      variations: [
        {
          id: "fr-v1",
          name: 'Variante Winawer',
          pgnEn: '1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 Qc7 8. Qxg7 Rg8 9. Qxh7 cxd4 10. Ne2 Nbc6',
          theory: 'Asymétrie pure. Les Noirs donnent leur bon fou pour détruire la structure de pions blanche (pions doublés sur la colonne c) et ferment la position.',
          pros: ['Position hypercomplexe et tranchante', 'Les pions c blancs sont des faiblesses durables'],
          cons: ['Les Blancs ont la paire de fous et une attaque forte à l\'aile roi', 'Le fou c8 noir est plus mauvais que jamais'],
          strategy: 'Détruire le centre blanc par c5 et f6. Empêcher l\'attaque blanche sur le Roi (avec Dg4). Transposer dans une finale où la mauvaise structure de pions blanche sera fatale.',
          keyMoves: ['c4', 'Da5', 'Cbc6'],
          subVariations: [
            {
              id: "fr-v1-sv1",
              name: 'Erreur d\'échange 4. exd5?!',
              pgnEn: '1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. exd5 exd5 5. Bd3 Nc6 6. a3 Bxc3+ 7. bxc3 Nge7 8. Qh5 Be6 9. Ne2 Qd7 10. h3 O-O-O',
              explanation: "Prendre en d5 dans la Winawer est une concession. Les Blancs perdent la pression centrale. Les Noirs obtiennent un jeu très facile, le fou c8 est libéré et la structure est symétrique (ou avantageuse pour les Noirs s'ils doublent les pions c)."
            }
          ]
        },
        {
          id: "fr-v2",
          name: 'Variante d\'Avance',
          pgnEn: '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 Nh6 7. b4 cxd4 8. cxd4 Nf5 9. Bb2 Bd7 10. Be2 Be7',
          theory: 'Les Blancs figent le centre en poussant e5. Ils gagnent un net avantage spatial, mais offrent aux Noirs une cible permanente et statique (la chaîne d4-e5).',
          pros: ['Les Noirs savent exactement quoi faire (frapper d4)', 'Jeu thématique et prévisible pour les Noirs'],
          cons: ['L\'avantage d\'espace blanc peut mener à un étouffement total'],
          strategy: 'Pilonner la case d4 ! Utiliser c5, Cc6, Db6 et potentiellement f6 pour casser la chaîne de pions. Si d4 s\'effondre, la position blanche entière s\'effondre.',
          keyMoves: ['c5', 'Qb6', 'Nf5'],
          subVariations: [
            {
              id: "fr-v2-sv1",
              name: 'Rupture prématurée 3... f6?!',
              pgnEn: '1. e4 e6 2. d4 d5 3. e5 f6 4. Nf3 c5 5. Bd3 Nc6 6. O-O cxd4 7. Re1 f5 8. Nbd2',
              explanation: "Casser avec f6 trop tôt affaiblit énormément le roi noir avant même d'avoir mis la pression classique sur d4 via la poussée c5. Les Blancs obtiennent d'excellentes opportunités d'attaque."
            },
            {
              id: "fr-v2-sv2",
              name: 'Développement timide 5... Fd7?!',
              pgnEn: '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Bd7 6. Be2 Nge7 7. O-O Nf5 8. a3 a6',
              explanation: "Un développement lent qui ne pose pas la question immédiate à la base du centre blanc d4 (qui nécessite normalement Db6). Cela laisse les Blancs respirer et solidifier."
            },
            {
              id: "fr-v2-sv3",
              name: 'Fermeture tragique 6... c4?!',
              pgnEn: '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 c4 7. Nbd2 Bd7 8. Be2 Na5',
              explanation: "Fermer complètement le centre relâche absolument toute la pression sur d4. Laissant la chaîne blanche intacte, les Blancs n'ont plus qu'à attaquer sereinement à l'aile roi."
            }
          ]
        },
        {
          id: "fr-v3",
          name: 'Variante Tarrasch',
          pgnEn: '1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 Nc6 6. Bb5 Bd6 7. dxc5 Bxc5 8. O-O Ne7 9. Nb3 Bd6 10. Re1 O-O',
          theory: 'Les Blancs jouent Nd2 pour éviter le clouage fâcheux du Fou en b4 (typique de la Winawer) et se gardent l\'option de jouer c3 pour soutenir d4.',
          pros: ['Flexible et solide pour les deux camps', 'Les Noirs égalisent plus facilement l\'espace'],
          cons: ['Les Blancs mettent moins de pression directe sur les Noirs'],
          strategy: 'Si les Noirs isolent leur pion d (en jouant c5 puis cxd4), la partie devient une lutte classique de Pion Dame Isolé. L\'activité des pièces noires compensera la faiblesse du pion d5.',
          keyMoves: ['c5', 'exd5', 'Bd6'],
          subVariations: [
            {
              id: "fr-v3-sv1",
              name: 'Erreur positionnelle 3... Cf6?!',
              pgnEn: '1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6 7. Ne2 cxd4 8. cxd4 f6',
              explanation: "Ce coup permet aux Blancs de jouer e5 et de retomber dans une variante d'Avance. C'est très favorable aux Blancs car leur Fou d3 est parfaitement positionné."
            },
            {
              id: "fr-v3-sv2",
              name: 'Reprise dangereuse 4... Dxd5?!',
              pgnEn: '1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 Qxd5 5. Ngf3 cxd4 6. Bc4 Qd8 7. O-O Nc6 8. Nb3',
              explanation: "Reprendre de la Dame l'expose inutilement et donne de nombreux tempos de développement aux Blancs (Cgf3, Fc4) qui gagneront une avance d'activité majeure."
            },
            {
              id: "fr-v3-sv3",
              name: 'Isolement anticipé 5... cxd4?!',
              pgnEn: '1. e4 e6 2. d4 d5 3. Nd2 c5 4. exd5 exd5 5. Ngf3 cxd4 6. Bb5+ Bd7 7. Nxd4 Bxb5 8. Nxb5 Nc6',
              explanation: "Isoler volontairement et prématurément le pion d5 noir sans s'être complètement développé offre aux Blancs des cibles trop faciles à attaquer et un blocage en d4 idéal."
            }
          ]
        }
      ]
    },
	{
    id: 'alekhine-defense',
    name: 'Défense Alekhine',
    moves: '1. e4 Cf6',
    type: 'Hypermoderne, Provocatrice, Dynamique',
    description: 'Vous provoquez immédiatement l\'avancée des pions centraux blancs pour les inciter à s\'étendre. Le but ? Prouver que leur centre est lourd et vulnérable, pour le détruire de l\'extérieur.',
    pros: ['Pousse les Blancs hors de leur zone de confort (adieu les Espagnoles et Italiennes !)', 'Mène à des positions très déséquilibrées, idéales pour jouer la gagne', 'Le grand centre blanc se transforme souvent en une cible géante pour vos pièces'],
    cons: ['Risque d\'asphyxie par manque d\'espace si votre contre-attaque échoue', 'Votre Cavalier perd plusieurs temps au début (f6-d5-b6)', 'Exige de la précision : un mauvais coup et vous êtes écrasé'],
    variations: [
      {
        id: "al-v1",
        name: 'Attaque des Quatre Pions',
        pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 Nc6 7. Be3 Bf5 8. Nc3 e6 9. Nf3 Be7 10. Be2 O-O',
        theory: 'La ligne la plus ambitieuse des Blancs. Ils construisent un centre de pions massif (c4, d4, e5, f4). Toute votre partie consistera à miner cet édifice avant de vous faire étouffer.',
        pros: ['Le centre blanc est souvent surétendu, fragile et plein de "trous" (cases faibles)', 'Vos plans de sape sont thématiques et très clairs (...dxe5, ...c5)'],
        cons: ['Si le centre blanc survit à la tempête, vous perdrez par manque d\'espace', 'Vos pièces mineures ont du mal à trouver des cases naturelles au début'],
        strategy: 'Ne laissez jamais les Blancs consolider ! Cassez le centre immédiatement avec ...dxe5. Ensuite, attaquez la base de leur chaîne (d4) avec ...c5 et ...Cc6, ou fixez-la avec ...e6 pour attaquer les cases noires.',
        keyMoves: ['dxe5', 'c5', 'e6'],
        subVariations: [
          {
            id: "al-v1-sv1",
            name: 'Erreur passive 5... e6?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 e6 6. Nc3 Be7 7. Nf3 O-O 8. Bd3 Nc6 9. a3 a5 10. O-O d5',
            explanation: "Jouer 5...e6 est trop lent et consolide les Blancs. Vous devez absolument miner leur centre par 5...dxe5. Ici, les Blancs se développent tranquillement avec Fd3 et conservent un avantage d'espace étouffant sans être inquiétés jusqu'au 10ème coup."
          },
          {
            id: "al-v1-sv2",
            name: 'Gaffe tactique 5... Nfd7?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 Nfd7 6. c5 dxc5 7. dxc5 Nxc5 8. Qxd8+ Kxd8 9. Be3 e6 10. Nc3 Nbd7',
            explanation: "Un placement catastrophique de votre part. Les Blancs poussent c5. Même si vous regagnez le pion en c5, vous perdez le droit de roquer après l'échange des dames et accusez un retard de développement dramatique."
          },
          {
            id: "al-v1-sv3",
            name: 'Imprécision 6... c5?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 dxe5 6. fxe5 c5 7. d5 e6 8. Nc3 exd5 9. cxd5 c4 10. d6 Be6',
            explanation: "Tenter d'exploser le centre trop vite avec 6...c5 donne aux Blancs un terrible pion passé protégé en d5. Au 10ème coup, ce pion d6 coupe complètement votre position en deux et paralyse vos pièces."
          }
        ]
      },
      {
        id: "al-v2",
        name: 'Variante Moderne',
        pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. Be2 e6 6. O-O Be7 7. c4 Nb6 8. Nc3 O-O 9. Be3 d5 10. c5 N6d7',
        theory: 'Le choix le plus populaire et solide pour les Blancs. Ils refusent de s\'étendre à outrance avec c4 et privilégient un développement sain. Vous devez adopter une approche plus subtile et positionnelle.',
        pros: ['Vous n\'avez pas à affronter la pression étouffante des 4 pions', 'Votre développement (avec Fg4 ou g6) est fluide et naturel'],
        cons: ['L\'avantage d\'espace des Blancs est beaucoup plus stable et dur à attaquer', 'Il est plus difficile de créer du chaos tactique rapidement'],
        strategy: 'Contestez le pion e5 en éliminant son défenseur via ...Fg4. L\'alternative est de jouer sur les cases noires avec un fianchetto (...g6 et ...Fg7). Frappez au centre avec ...c5 ou ...d5 dès que possible.',
        keyMoves: ['Bg4', 'g6', 'd5'],
        subVariations: [
          {
            id: "al-v2-sv1",
            name: 'Erreur 4... Nc6?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Nc6 5. c4 Nb6 6. e6 fxe6 7. Nc3 e5 8. d5 Nb8 9. Ng5 g6 10. Bd3 Bg7',
            explanation: "Bloquer votre propre pion c avec le cavalier en c6 permet aux Blancs le sacrifice de pion thématique 6.e6!. Cela détruit complètement votre structure à l'aile roi, et l'incursion du Cavalier blanc en g5 devient mortelle."
          },
          {
            id: "al-v2-sv2",
            name: 'Imprécision 4... dxe5?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 dxe5 5. Nxe5 g6 6. Bc4 c6 7. O-O Bg7 8. Re1 O-O 9. Nc3 Be6 10. Bb3 Nd7',
            explanation: "Prendre trop tôt libère le pion d4 et place le Cavalier blanc sur la puissante case e5. Les Blancs obtiennent un jeu très actif et vous forcent à des contorsions défensives difficiles (comme Fe6 pour soutenir d5)."
          },
          {
            id: "al-v2-sv3",
            name: 'Ligne passive 5... g6?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. Be2 g6 6. O-O Bg7 7. c4 Nb6 8. h3 Bxf3 9. Bxf3 Nc6 10. Bxc6+ bxc6',
            explanation: "Mélanger le clouage Fg4 avec la structure en g6 est souvent douteux. Les Blancs forcent l'échange en f3, puis punissent votre cavalier b6 en détruisant la structure de votre aile dame avec Fxc6+."
          }
        ]
      },
	  {
        id: "al-v3",
        name: 'Variante Krejcik (Sacrifice en f7)',
        pgnEn: '1. e4 Nf6 2. e5 Nd5 3. Bc4 Nb6 4. Bxf7+ Kxf7 5. Qf3+ Kg8 6. d4 d6 7. Nc3 Nc6 8. Nge2 dxe5 9. d5 Nd4 10. Nxd4 exd4',
        theory: 'Une ligne de choc très agressive (souvent vue en blitz). Les Blancs sacrifient leur Fou pour vous empêcher de roquer et espèrent vous mater dans la foulée. Si vous défendez avec précision, vous êtes simplement gagnant avec une pièce de plus.',
        pros: ['Vous gagnez une pièce nette dès le 4ème coup', 'Si vous parvenez à consolider et développer vos pièces, la victoire est mathématique en finale'],
        cons: ['Votre Roi est déroqué et restera au centre un long moment', 'Exige des nerfs d\'acier : un seul coup passif et l\'attaque blanche devient mortelle'],
        strategy: 'Acceptez le sacrifice (4... Kxf7). Ne laissez SURTOUT PAS votre Roi au centre (pas de Re8), cachez-le en g8 ! C\'est ce qu\'on appelle le "roque artificiel". Ensuite, frappez vite au centre avec ...d6 et ...Cc6 pour obliger les Blancs à défendre plutôt qu\'à attaquer.',
        keyMoves: ['Kxf7', 'Kg8', 'd6'],
        subVariations: [
          {
            id: "al-v3-sv1",
            name: 'Erreur panique 5... Ke8?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. Bc4 Nb6 4. Bxf7+ Kxf7 5. Qf3+ Ke8 6. d4 d6 7. Nh3 Nc6 8. Ng5 Nxd4 9. Qf7+ Kd7 10. e6+ Kc6',
            explanation: "Reculer le Roi en e8 est une erreur naturelle mais grave. Cela bloque votre Tour h8 pour toute la partie et laisse votre Roi exposé aux poussées centrales. Conséquence : au 10ème coup, votre Roi doit fuir misérablement vers l'aile dame."
          },
          {
            id: "al-v3-sv2",
            name: 'Gaffe défensive 6... e6?!',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. Bc4 Nb6 4. Bxf7+ Kxf7 5. Qf3+ Kg8 6. d4 e6 7. Nh3 Nc6 8. Ng5 Qe8 9. c3 d6 10. exd6 cxd6',
            explanation: "Jouer 6...e6 au lieu de 6...d6 est trop passif. Cela limite la mobilité de votre propre Fou c8 et permet au Cavalier blanc de s'installer dangereusement en g5 (menaçant le mat en f7 et vous forçant à défendre maladroitement avec votre Dame)."
          },
          {
            id: "al-v3-sv3",
            name: 'La variante 5. Qh5+',
            pgnEn: '1. e4 Nf6 2. e5 Nd5 3. Bc4 Nb6 4. Bxf7+ Kxf7 5. Qh5+ g6 6. Qf3+ Kg8 7. d4 d6 8. Nc3 Nc6 9. Nge2 Bg7 10. Bf4 dxe5',
            explanation: "Souvent, les Blancs jouent Qh5+ au lieu de Qf3+. L'idée est d'induire la faiblesse ...g6. N'ayez pas peur, jouez 5...g6 ! La Dame recule en f3, votre Roi file à l'abri en g8, et le pion g6 vous servira même à fianchetter magnifiquement votre Fou en g7."
          }
		]
	  }
    ],
	exercises: [
		{
          id: 'alk-ex-1',
          title: 'Détruire le centre blanc',
          // FEN après 1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 (Cavalier d5 attaqué)
          fen: 'rnbqkb1r/ppp1pppp/3p4/3nP3/2PP4/8/PP3PPP/RNBQKBNR b KQkq - 0 4',
          side: 'black',
          steps: [
            {
              question: "Q1. Quel est le principe philosophique derrière la Défense Alekhine face à l'avancée des pions blancs ?",
              options: [
                { text: "Créer un mur de pions symétrique.", isCorrect: false, feedback: "Au contraire, la structure devient très asymétrique dès le premier coup." },
                { text: "Provoquer l'extension du centre blanc pour en faire une cible.", isCorrect: true, feedback: "C'est le concept hypermoderne par excellence : un grand centre est puissant, mais s'il est mal soutenu, c'est une cible géante pour vos pièces." },
                { text: "Échanger les pièces le plus vite possible.", isCorrect: false, feedback: "Les Blancs ayant plus d'espace, échanger toutes les pièces les avantagerait en finale." },
                { text: "Jouer uniquement pour la finale.", isCorrect: false, feedback: "C'est une ouverture très dynamique qui se joue sur des tactiques et des ruptures rapides en milieu de jeu." }
              ]
            },
            {
              question: "Q2. Dans la position actuelle (les Blancs viennent de jouer 4. c4), que doit faire votre Cavalier attaqué en d5 ?",
              options: [
                { text: "Prendre en c4 (dxc4).", isCorrect: false, feedback: "Impossible, c'est le pion d6 qui est sur le plateau, pas d5. Le cavalier doit fuir." },
                { text: "Reculer en f6.", isCorrect: false, feedback: "Cela perdrait un temps énorme et vous remettrait à la case départ, avec moins d'espace." },
                { text: "Aller en b6.", isCorrect: true, feedback: "Exact. Le Cavalier se met en sécurité en b6 tout en gardant un œil sur les cases centrales (d5 et c4)." },
                { text: "Sauter en e3.", isCorrect: false, feedback: "C'est un suicide tactique, le cavalier serait immédiatement capturé." }
              ]
            },
            {
              question: "Q3. Une fois que les Blancs établissent leur massive \"Attaque des 4 pions\" (avec c4, d4, e5 et f4), quel est votre plan de destruction ?",
              options: [
                { text: "Pousser ...g5 pour attaquer f4.", isCorrect: false, feedback: "Trop affaiblissant pour votre propre aile roi, alors que vous n'êtes pas encore développé." },
                { text: "Jouer sur l'aile dame avec ...a6 et ...b5.", isCorrect: false, feedback: "C'est une attaque de flanc, or le danger de mort immédiat se trouve au centre." },
                { text: "Échanger en e5 (...dxe5) puis frapper avec ...c5.", isCorrect: true, feedback: "Parfait. Il faut saper immédiatement les fondations de la chaîne blanche (d4/e5) pour la faire s'effondrer avant qu'ils ne consolident." },
                { text: "Jouer un coup d'attente comme ...h6.", isCorrect: false, feedback: "Une erreur fatale. Dans l'Alekhine, chaque tempo compte pour détruire le centre." }
              ]
            },
            {
              question: "Q4. Quel est souvent le meilleur rôle pour votre Fou de cases claires (c8) dans les lignes principales de l'Alekhine ?",
              options: [
                { text: "En d7 pour défendre passivement le Cavalier b6.", isCorrect: false, feedback: "Ce Fou serait beaucoup trop passif sur cette case." },
                { text: "En g4 pour clouer le Cavalier f3.", isCorrect: true, feedback: "Oui ! Le Cavalier f3 est le défenseur principal du centre blanc (surtout de d4). Le clouer ou l'éliminer ruine la structure adverse." },
                { text: "En b7 en fianchetto.", isCorrect: false, feedback: "La grande diagonale est généralement obstruée par les pions centraux d4 et e5." },
                { text: "Il reste en c8 jusqu'à la fin.", isCorrect: false, feedback: "Contrairement à la Française, le Fou c8 de l'Alekhine doit sortir activement." }
              ]
            },
            {
              question: "Q5. Si vous jouez trop passivement face au grand centre blanc, quel est le danger mortel de cette ouverture ?",
              options: [
                { text: "Mourir d'asphyxie par manque d'espace.", isCorrect: true, feedback: "C'est le grand risque. Si le centre blanc survit à vos assauts, il va vous écraser et paralyser toutes vos pièces sur les deux premières rangées." },
                { text: "Se faire mater du couloir.", isCorrect: false, feedback: "Rien à voir avec la structure centrale." },
                { text: "Perdre la finale de pions systématiquement.", isCorrect: false, feedback: "Si vous arrivez en finale de pions purs, votre structure est souvent plus saine que celle des Blancs !" },
                { text: "Avoir un mauvais Fou en c8.", isCorrect: false, feedback: "Le Fou c8 trouve presque toujours une bonne case (g4 ou f5)." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'czech-pirc',
      name: 'Défense Tchèque (Pirc)',
      moves: '1. e4 d6 2. d4 Cf6 3. Cc3 c6',
      type: 'Hypermoderne, Solide, Asymétrique',
      description: 'Une variante très flexible de la défense Pirc. En jouant c6, les Noirs retardent la sortie du fou roi pour consolider le centre, soutenir une future poussée d5 ou lancer une expansion fulgurante à l\'aile dame avec b5.',
      pros: ['Très solide et difficile à percer', 'Évite les lignes théoriques les plus agressives de la Pirc (Attaque Autrichienne directe)', 'Grande flexibilité dans les plans (jeu à l\'aile dame ou au centre)'],
      cons: ['Développement initial de l\'aile roi un peu lent', 'Manque d\'espace dans les 10 premiers coups', 'Exige une grande patience positionnelle'],
      variations: [
        {
          id: "cz-v1",
          name: 'Ligne Principale face à f4',
          pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. f4 Qa5 5. Bd3 e5 6. Nf3 Bg4 7. dxe5 dxe5 8. h3 Bxf3 9. Qxf3 Nbd7 10. O-O',
          theory: 'Les Blancs optent pour une approche agressive avec f4. Cependant, le coup c6 prend tout son sens : il permet la sortie rapide de la Dame en a5. Cela cloue le cavalier c3 et met instantanément la pression sur le centre blanc.',
          pros: ['Contre-jeu immédiat sur les cases noires (e5, c5)', 'Désamorce parfaitement la violence de l\'attaque f4'],
          cons: ['La Dame noire sort tôt et peut devenir une cible', 'La structure centrale peut s\'ouvrir dangereusement'],
          strategy: 'Maintenir la pression sur e4. Échanger le fou g4 contre le cavalier f3 pour affaiblir le contrôle central blanc. Utiliser les cavaliers pour dominer les cases noires centrales (surtout e5).',
          keyMoves: ['Qa5', 'e5', 'Bg4'],
          subVariations: [
            {
              id: "cz-v1-sv1",
              name: 'Transposition fautive 4... g6?!',
              pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. f4 g6 5. Nf3 Bg7 6. e5 Nd5 7. Nxd5 cxd5 8. Bd3 O-O',
              explanation: "Jouer g6 face à f4 annule le bénéfice de c6. Les Blancs gagnent d'un coup la possibilité de pousser e5 avec une force écrasante. Le pion c6 obstrue le propre cavalier noir et la position devient très étouffante."
            },
            {
              id: "cz-v1-sv2",
              name: 'L\'erreur de capture 5... exd4?!',
              pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. f4 Qa5 5. Bd3 exd4 6. b4 Qxb4 7. Bd2 Qb6 8. Nce2 e5 9. Nf3',
              explanation: "Bien que les Noirs semblent gagner un pion, la tactique b4! des Blancs détourne la Dame. Les Blancs gagnent une immense avance de développement, la paire de Fous rayonne, et la Dame noire est mal placée."
            }
          ]
        },
        {
          id: "cz-v2",
          name: 'Système Positionnel (Cf3)',
          pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. Nf3 Bg4 5. h3 Bh5 6. Bd3 e6 7. O-O d5 8. e5 Nfd7 9. Ne2 c5 10. c3',
          theory: 'Face au développement tranquille des Blancs (Cf3), les Noirs adoptent une structure hybride qui ressemble à la Caro-Kann. Le Fou c8 est sorti en dehors de la chaîne de pions avant de jouer e6.',
          pros: ['Jeu extrêmement solide, aucune faiblesse', 'Le Fou c8 (généralement problématique) est ici très actif'],
          cons: ['Peu d\'opportunités d\'attaque directe', 'Les Blancs conservent un net avantage d\'espace'],
          strategy: 'Verrouiller le développement avec e6. Pousser d5 pour contester le centre. Si les Blancs ferment avec e5, préparer la rupture c5 thématique pour attaquer la base de la chaîne de pions (d4).',
          keyMoves: ['Bg4', 'e6', 'd5'],
          subVariations: [
            {
              id: "cz-v2-sv1",
              name: 'L\'échange gratuit 5... Bxf3?!',
              pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. Nf3 Bg4 5. h3 Bxf3 6. Qxf3 g6 7. e5 dxe5 8. dxe5 Nd5 9. Bc4',
              explanation: "Céder la paire de fous sans y être contraint (la position n'est pas encore fermée) donne un avantage immédiat. Les Blancs ouvrent le centre avec e5 et la pression sur les cases claires noires (f7, d5) devient étouffante."
            },
            {
              id: "cz-v2-sv2",
              name: 'Retard de développement 6... g6?!',
              pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. Nf3 Bg4 5. h3 Bh5 6. Bd3 g6 7. g4 Nxg4 8. hxg4 Bxg4 9. Be2',
              explanation: "Mélanger la sortie du Fou h5 avec un fianchetto en g6 est dramatiquement lent. Cela permet aux Blancs de punir tactiquement avec l'enfermement g4, forçant les Noirs à sacrifier une pièce mineure pour deux pions."
            }
          ]
        },
        {
          id: "cz-v3",
          name: 'L\'Expansion Agressive (4... b5)',
          pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. Bc4 b5 5. Bd3 e5 6. Nf3 Nbd7 7. O-O Be7 8. Ne2 a6 9. c3 O-O 10. Ng3',
          theory: 'L\'interprétation la plus moderne de la Tchèque. Les Noirs utilisent c6 non seulement pour défendre d5, mais comme tremplin pour une attaque immédiate de minorité avec b5, gagnant un espace précieux sur le flanc.',
          pros: ['Saisit l\'initiative à l\'aile dame', 'Déséquilibre la position de manière proactive', 'Chasse souvent les pièces blanches de leurs cases idéales'],
          cons: ['Retarde considérablement le développement du Roi', 'Crée des failles structurelles (c6 devient arriéré) si l\'attaque échoue'],
          strategy: 'Combiner la poussée de l\'aile dame (b5, a6) avec une frappe centrale (e5) au moment précis où les Blancs doivent réorganiser leurs pièces. Terminer le développement via Fe7 et roquer rapidement.',
          keyMoves: ['b5', 'e5', 'Nbd7'],
          subVariations: [
            {
              id: "cz-v3-sv1",
              name: 'Gourmandise spatiale 5... b4?!',
              pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. Bc4 b5 5. Bd3 b4 6. Nce2 e5 7. Nf3 Qc7 8. O-O Be7 9. c3',
              explanation: "Pousser b4 trop tôt repousse certes le Cavalier, mais cela fige irrémédiablement l'aile dame. Le Cavalier blanc se recycle idéalement vers l'aile roi (via e2 vers g3) et les Blancs détruiront facilement l'avant-poste b4 avec c3."
            },
            {
              id: "cz-v3-sv2",
              name: 'Mauvaise rupture 5... d5?!',
              pgnEn: '1. e4 d6 2. d4 Nf6 3. Nc3 c6 4. Bc4 b5 5. Bd3 d5 6. exd5 Nxd5 7. Nxd5 Qxd5 8. Nf3 Bg4 9. a4',
              explanation: "Jouer d5 après avoir affaibli l'aile dame par b5 est stratégiquement incohérent. Les Blancs ouvrent le centre (exd5) et la position noire devient instable, la case c6 est béante et les pièces blanches rebondissent avec un gain de tempo."
            }
          ]
        }
      ],
      exercises: [
        {
          id: 'cz-ex-1',
          title: 'Manœuvres en centre fermé',
          fen: 'r1bq1rk1/pp1n1ppp/2pb1n2/3p2B1/3P4/2N2N2/PPP1BPPP/R2Q1RK1 b - - 5 9',
          side: 'black',
          steps: [
            {
              question: "Q1. Quel est l'objectif principal du petit coup de pion ...c6 joué dès l'ouverture ?",
              options: [
                { text: "Préparer un fianchetto avec b6.", isCorrect: false, feedback: "Le fou de cases claires se développe souvent ailleurs dans la Pirc." },
                { text: "Soutenir le pion d5 et préparer une attaque sur l'aile Dame avec ...b5.", isCorrect: true, feedback: "C'est exact. c6 solidifie le centre et sert de tremplin à l'expansion b5-a6." },
                { text: "Empêcher le Cavalier blanc de venir en d5.", isCorrect: false, feedback: "C'est un bénéfice secondaire, mais pas l'objectif principal." },
                { text: "Créer une case de fuite pour le Roi.", isCorrect: false, feedback: "Le Roi ira roquer." }
              ]
            },
            {
              question: "Q2. Regardez votre structure de pions centrale (c6-d5). S'il s'agissait d'une flèche, vers quel flanc pointe-t-elle ?",
              options: [
                { text: "L'aile Dame.", isCorrect: false, feedback: "Les pions montent de c6 vers d5, donc vers la droite." },
                { text: "L'aile Roi.", isCorrect: true, feedback: "Exactement. Votre avantage spatial naturel se dirige vers l'aile Roi." },
                { text: "Elle ne pointe nulle part.", isCorrect: false, feedback: "Toute chaîne diagonale indique une direction." },
                { text: "Directement sur le Roi blanc.", isCorrect: false, feedback: "C'est un indicateur de zone, pas un viseur direct." }
              ]
            },
            {
              question: "Q3. Sachant que la structure pointe vers l'aile Roi, quel est le levier de rupture idéal pour ouvrir cette zone ?",
              options: [
                { text: "Pousser ...a5.", isCorrect: false, feedback: "C'est à l'aile Dame." },
                { text: "Pousser ...c5.", isCorrect: false, feedback: "C'est une rupture centrale, utile, mais qui ne suit pas la direction de l'aile Roi." },
                { text: "Pousser ...e5.", isCorrect: true, feedback: "C'est la rupture parfaite pour percuter le centre blanc et ouvrir les lignes vers le Roi." },
                { text: "Pousser ...h6.", isCorrect: false, feedback: "C'est un coup prophylactique, pas une rupture." }
              ]
            },
            {
              question: "Q4. Pour préparer la poussée ...e5 efficacement, où le Cavalier d7 est-il souvent manœuvré si la position est bloquée ?",
              options: [
                { text: "Vers b6.", isCorrect: false, feedback: "Cela l'éloigne de l'action centrale." },
                { text: "Il reste en d7.", isCorrect: false, feedback: "Il y est souvent passif s'il ne peut pas bondir." },
                { text: "Vers f8, puis g6 ou e6.", isCorrect: true, feedback: "C'est la manœuvre classique hypermoderne pour améliorer la pire pièce et soutenir l'aile Roi." },
                { text: "Il est sacrifié en c5.", isCorrect: false, feedback: "Aucun intérêt sans gain matériel immédiat." }
              ]
            },
            {
              question: "Q5. Psychologiquement, quel est le plus grand piège à éviter avec les Noirs dans cette structure ?",
              options: [
                { text: "S'impatienter et ouvrir le centre sans que les pièces soient prêtes.", isCorrect: true, feedback: "La Tchèque demande des nerfs d'acier. Ouvrir trop tôt favorise l'avantage d'espace blanc." },
                { text: "Jouer trop vite.", isCorrect: false, feedback: "Valable pour toutes les ouvertures." },
                { text: "Oublier de roquer.", isCorrect: false, feedback: "Le roque est généralement sécurisé assez vite." },
                { text: "Échanger les Dames.", isCorrect: false, feedback: "L'échange des Dames est souvent favorable aux Noirs dans les structures fermées pour atténuer l'attaque." }
              ]
            }
          ]
        }
      ]
    }, 
  ]
};
window.REPERTOIRE_BUILDER = {
  quiz: [
    {
      question: "Q1. Face à un grand centre de pions adverse, quelle est votre réaction ?",
      options: [
        { text: "Je le pulvérise immédiatement avec des sacrifices de pièces.", style: "agressif" },
        { text: "Je le bloque solidement avec mes propres pions au centre.", style: "positionnel" },
        { text: "Parfait ! C'est une grande cible. Je vais le saper à distance avec des leviers latéraux.", style: "hypermoderne" },
        { text: "Je m'en fiche, je développe mes pièces selon mon schéma habituel.", style: "systeme" },
      ]
    },
    {
      question: "Q2. Quelle phrase décrit le mieux votre gestion du temps dans l'ouverture ?",
      options: [
	    { text: "J'attends que l'adversaire s'engage pour choisir la meilleure rupture de pion.", style: "hypermoderne" },
        { text: "Je joue mes 10 premiers coups en 30 secondes, les yeux fermés.", style: "systeme" },
        { text: "Je prends mon temps pour construire une position sans aucune faiblesse.", style: "positionnel" },
        { text: "Je cherche très vite la faille tactique pour écourter la partie.", style: "agressif" },
      ]
    },
    {
      question: "Q3. Quelle est votre pire phobie sur l'échiquier ?",
      options: [
        { text: "Une position complètement verrouillée où il n'y a pas de tactique.", style: "agressif" },
		{ text: "Devoir défendre passivement sans pouvoir contre-attaquer avec mes pions.", style: "hypermoderne" },
        { text: "Une position chaotique où je ne contrôle plus rien.", style: "positionnel" },
        { text: "Qu'on me sorte de ma zone de confort et de mes plans connus dès le 2ème coup.", style: "systeme" },
      ]
    },
    {
      question: "Q4. En termes d'apprentissage théorique, vous êtes plutôt...",
      options: [
		{ text: "Zéro théorie : je veux un mur incassable qui marche contre tout.", style: "systeme" },
        { text: "Structures : je veux comprendre où vont mes pions et comment gagner la finale.", style: "positionnel" },
		{ text: "Lignes tranchantes : j'apprends les pièges mortels par cœur.", style: "agressif" },
        { text: "Fianchettos et leviers : je retiens les idées de contre-attaque à distance.", style: "hypermoderne" }, 
      ]
    },
    {
      question: "Q5. Choisissez votre arme de prédilection :",
      options: [
        { text: "Le Cavalier : sauteur de lignes, roi des fourchettes et du chaos.", style: "agressif" },
		{ text: "Le Pion : l'âme des échecs, bâtisseur de forteresses impénétrables.", style: "systeme" },
        { text: "La Tour : pour dominer les colonnes ouvertes et ratisser la finale.", style: "positionnel" },
        { text: "Le Fou en fianchetto : un sniper tapi dans l'ombre qui contrôle tout l'échiquier.", style: "hypermoderne" },
      ]
    }
  ],
  
  profiles: {
    // --- LES 4 PROFILS PURS ---
    pure_agressif: {
      name: "Le Berserker (Agressif Classique)",
      description: "Tactique frontale ! Vous occupez le centre et lancez vos pièces à l'assaut du Roi ennemi. Les sacrifices ne vous font pas peur.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Gambit Roi", 
        "Défense contre e4 conseillée : Sicilienne Dragon", 
        "Défense contre d4 conseillée : Défense Grünfeld"
      ]
    },
    pure_positionnel: {
      name: "Le Boa Constrictor (Stratégie Classique)",
      description: "Vous étouffez votre adversaire. Vous aimez les centres fixes, les manœuvres lentes et la domination stratégique qui mène à une finale gagnante.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Gambit Dame", 
        "Défense contre e4 conseillée : Défense Française", 
        "Défense contre d4 conseillée : Gambit Dame Refusé (Orthodoxe)"
      ]
    },
    pure_systeme: {
      name: "La Muraille (Pragmatique)",
      description: "Vous détestez la théorie. Vous voulez déployer vos pièces exactement de la même manière à chaque partie derrière une structure de pions incassable.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Système de Londres", 
        "Défense contre e4 conseillée : Défense Caro-Kann", 
        "Défense contre d4 conseillée : Défense Slave"
      ]
    },
    pure_hypermoderne: { // <-- NOUVEAU PROFIL MANQUANT AJOUTÉ
      name: "L'Illusionniste (Hypermoderne Pur)",
      description: "Vous refusez l'occupation classique ! Vous laissez volontairement le centre à votre adversaire pour mieux le détruire ensuite depuis les flancs (fianchettos).",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Début Réti", 
        "Défense contre e4 conseillée : Défense Alekhine", 
        "Défense contre d4 conseillée : Défense Est-Indienne"
      ]
    },

    // --- LES 6 PROFILS HYBRIDES (Triés par ordre alphabétique pour le code) ---
    agressif_hypermoderne: {
      name: "Le Sniper (Contre-Attaque)",
      description: "Vous aimez laisser l'adversaire prendre le centre pour mieux le faire exploser ensuite. Vous cherchez le KO technique grâce au dynamisme de vos pièces.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Attaque Grand Prix", 
        "Défense contre e4 conseillée : Défense Alekhine", 
        "Défense contre d4 conseillée : Défense Est-Indienne"
      ]
    },
    agressif_positionnel: {
      name: "L'Attaquant Calculateur (Universel)",
      description: "Vous cherchez l'initiative et l'attaque, mais en vous basant sur des principes classiques et sains. Vous ne sacrifiez pas sans garantie structurelle.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Partie Italienne", 
        "Défense contre e4 conseillée : Sicilienne Najdorf", 
        "Défense contre d4 conseillée : Défense Semi-Slave"
      ]
    },
    agressif_systeme: {
      name: "Le Franc-Tireur (Système Offensif)",
      description: "Vous aimez les schémas d'ouverture fixes, mais dans un seul but : lancer une attaque rapide et foudroyante sur le Roi adverse sans apprendre 20 coups de théorie.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Système Jobava", 
        "Défense contre e4 conseillée : Défense Scandinave", 
        "Défense contre d4 conseillée : Défense Tchigorine"
      ]
    },
    hypermoderne_positionnel: { // <-- RENOMMÉ (était positionnel_hypermoderne)
      name: "L'Architecte (Contrôle à distance)",
      description: "Vous jouez sur les couleurs ! Vous contrôlez le centre à distance avec vos Fous et vos pions de flanc, créant des pressions invisibles mais mortelles.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Partie Catalane", 
        "Défense contre e4 conseillée : Défense Caro-Kann", 
        "Défense contre d4 conseillée : Défense Nimzo-Indienne"
      ]
    },
    hypermoderne_systeme: { // <-- RENOMMÉ (était systeme_hypermoderne)
      name: "Le Caméléon (Système Flexible)",
      description: "Vous utilisez des structures hypermodernes mais de manière très systématique. Vous laissez le centre pour construire une attaque sur le flanc, peu importe la réponse adverse.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Attaque Est-Indienne", 
        "Défense contre e4 conseillée : Défense Pirc", 
        "Défense contre d4 conseillée : Défense Hollandaise"
      ]
    },
    positionnel_systeme: { // <-- NOUVEAU PROFIL MANQUANT AJOUTÉ
      name: "Le Roc (Système Positionnel)",
      description: "La solidité absolue. Vous jouez des systèmes d'ouverture sans risque, conçus pour annuler toute dynamique adverse et gagner de longues batailles stratégiques.",
      suggestions: [
        "Ouverture avec les Blancs conseillée : Ouverture Anglaise (Structure Botvinnik)", 
        "Défense contre e4 conseillée : Défense Française (Variante d'Échange)", 
        "Défense contre d4 conseillée : Défense Orthodoxe"
      ]
    }
  }
};