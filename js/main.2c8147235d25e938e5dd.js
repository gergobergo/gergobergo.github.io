(() => {
    'use strict';
    var e = {
            503: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.Verb = void 0);
                var i = (function () {
                    function e(e, t, i) {
                        var n = e.infinitiv,
                            r = e.prateritum,
                            a = e.perfect,
                            f = e.hungarian;
                        (this.questionElement = t),
                            (this.solutionElement = i),
                            (this.infinitiv = n),
                            (this.prateritum = r),
                            (this.perfect = a),
                            (this.hungarian = f),
                            this.init();
                    }
                    return (
                        (e.prototype.destroy = function () {
                            (this.questionElement.innerText = ''),
                                (this.solutionElement.innerHTML = '');
                        }),
                        (e.prototype.showSolution = function () {
                            this.questionElement.classList.add('hidden'),
                                this.solutionElement.classList.remove('hidden');
                        }),
                        (e.prototype.init = function () {
                            this.questionElement.classList.remove('hidden'),
                                (this.questionElement.innerText =
                                    this.infinitiv),
                                this.solutionElement.classList.add('hidden'),
                                (this.solutionElement.innerHTML =
                                    this.createSolutionElements());
                        }),
                        (e.prototype.createSolutionElements = function () {
                            var e;
                            return '\n        <div>\n            <p><b>'
                                .concat(
                                    this.infinitiv,
                                    '<b></p>\n            <p>'
                                )
                                .concat(
                                    this.prateritum,
                                    '</p>\n            <p>'
                                )
                                .concat(this.perfect, '</p>\n            <p>')
                                .concat(
                                    null !== (e = this.hungarian) &&
                                        void 0 !== e
                                        ? e
                                        : '',
                                    '</p>\n        </div>\n    '
                                );
                        }),
                        e
                    );
                })();
                t.Verb = i;
            },
            301: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.data = void 0),
                    (t.data = [
                        {
                            infinitiv: 'gehen',
                            hungarian: 'menni (gyalog)',
                            perfect: 'ist gegangen',
                            prateritum: 'ging',
                        },
                        {
                            infinitiv: 'fahren',
                            hungarian: 'menni (autoval, busszal)',
                            perfect: 'ist/hat gefahren',
                            prateritum: 'fuhr',
                        },
                        {
                            infinitiv: 'backen',
                            perfect: 'hat gebacken',
                            prateritum: 'buk',
                        },
                        {
                            infinitiv: 'laden',
                            perfect: 'hat geladen',
                            prateritum: 'lud',
                        },
                        {
                            infinitiv: 'laufen',
                            perfect: 'ist gelaufen',
                            prateritum: 'lief',
                        },
                        {
                            infinitiv: 'schaffen',
                            perfect: 'hat geschaffen',
                            prateritum: 'schuf',
                        },
                        {
                            infinitiv: 'schlagen',
                            perfect: 'hat geschlagen',
                            prateritum: 'schlug',
                        },
                        {
                            infinitiv: 'tragen',
                            perfect: 'hat getragen',
                            prateritum: 'trug',
                        },
                        {
                            infinitiv: 'wachsen',
                            perfect: 'ist gewachsen',
                            prateritum: 'wuchs',
                        },
                        {
                            infinitiv: 'waschen',
                            perfect: 'hat gewaschen',
                            prateritum: 'wusch',
                        },
                        {
                            infinitiv: 'braten',
                            perfect: 'hat gebraten',
                            prateritum: 'briet',
                        },
                        {
                            infinitiv: 'fallen',
                            perfect: 'ist gefallen',
                            prateritum: 'fiel',
                        },
                        {
                            infinitiv: 'halten',
                            perfect: 'hat gehalten',
                            prateritum: 'hielt',
                        },
                        {
                            infinitiv: 'lassen',
                            perfect: 'hat gelassen',
                            prateritum: 'ließ',
                        },
                        {
                            infinitiv: 'raten',
                            perfect: 'hat geraten',
                            prateritum: 'riet',
                        },
                        {
                            infinitiv: 'schlafen',
                            perfect: 'hat geschlafen',
                            prateritum: 'schlief',
                        },
                        {
                            infinitiv: 'empfangen',
                            perfect: 'hat empfangen',
                            prateritum: 'empfing',
                        },
                        {
                            infinitiv: 'fangen',
                            perfect: 'hat gefangen',
                            prateritum: 'fing',
                        },
                        {
                            infinitiv: 'saufen',
                            perfect: 'hat gesoffen',
                            prateritum: 'soff',
                        },
                        {
                            infinitiv: 'hauen',
                            perfect: 'hat gehauen',
                            prateritum: 'hieb / haute',
                        },
                        {
                            infinitiv: 'geschehen',
                            perfect: 'hat geschehen',
                            prateritum: 'geschah',
                        },
                        {
                            infinitiv: 'lesen',
                            perfect: 'hat gelesen',
                            prateritum: 'las',
                        },
                        {
                            infinitiv: 'sehen',
                            perfect: 'hat gesehen',
                            prateritum: 'sah',
                        },
                        {
                            infinitiv: 'essen',
                            perfect: 'hat gegessen',
                            prateritum: 'aß',
                        },
                        {
                            infinitiv: 'fressen',
                            perfect: 'hat gefressen',
                            prateritum: 'fraß',
                        },
                        {
                            infinitiv: 'genesen',
                            perfect: 'hat genesen',
                            prateritum: 'genas',
                        },
                        {
                            infinitiv: 'geben',
                            perfect: 'hat gegeben',
                            prateritum: 'gab',
                        },
                        {
                            infinitiv: 'messen',
                            perfect: 'hat gemessen',
                            prateritum: 'maß',
                        },
                        {
                            infinitiv: 'treten',
                            perfect: 'ist getraten',
                            prateritum: 'trat',
                        },
                        {
                            infinitiv: 'vergessen',
                            perfect: 'hat vergessen',
                            prateritum: 'vergaß',
                        },
                        {
                            infinitiv: 'befehlen',
                            perfect: 'hat befohlen',
                            prateritum: 'befahl',
                        },
                        {
                            infinitiv: 'empfehlen',
                            perfect: 'hat empfohlen',
                            prateritum: 'empfahl',
                        },
                        {
                            infinitiv: 'stehlen',
                            perfect: 'hat gestohlen',
                            prateritum: 'stahl',
                        },
                        {
                            infinitiv: 'gebären',
                            perfect: 'ist/hat geboren',
                            prateritum: 'gebar',
                        },
                        {
                            infinitiv: 'bergen',
                            perfect: 'hat geborgen',
                            prateritum: 'barg',
                        },
                        {
                            infinitiv: 'brechen',
                            perfect: 'hat gebrochen',
                            prateritum: 'brach',
                        },
                        {
                            infinitiv: 'erschrecken',
                            perfect: 'hat erschrocken',
                            prateritum: 'erschrak',
                        },
                        {
                            infinitiv: 'gelten',
                            perfect: 'hat gegolten',
                            prateritum: 'galt',
                        },
                        {
                            infinitiv: 'helfen',
                            perfect: 'hat geholfen',
                            prateritum: 'half',
                        },
                        {
                            infinitiv: 'nehmen',
                            perfect: 'ist genommen',
                            prateritum: 'nahm',
                        },
                        {
                            infinitiv: 'sprechen',
                            perfect: 'hat gesprochen',
                            prateritum: 'sprach',
                        },
                        {
                            infinitiv: 'stechen',
                            perfect: 'hat gestochen',
                            prateritum: 'stach',
                        },
                        {
                            infinitiv: 'sterben',
                            perfect: 'ist gestorben',
                            prateritum: 'starb',
                        },
                        {
                            infinitiv: 'treffen',
                            perfect: 'hat getroffen',
                            prateritum: 'traf',
                        },
                        {
                            infinitiv: 'werben',
                            perfect: 'hat geworben',
                            prateritum: 'warb',
                        },
                        {
                            infinitiv: 'werfen',
                            perfect: 'hat geworfen',
                            prateritum: 'warf',
                        },
                        {
                            infinitiv: 'bewegen',
                            perfect: 'ist bewogen',
                            prateritum: 'bewog',
                        },
                        {
                            infinitiv: 'heben',
                            perfect: 'hat gehoben',
                            prateritum: 'hob',
                        },
                        {
                            infinitiv: 'schmelzen',
                            perfect: 'hat geschmolzenx',
                            prateritum: 'schmolz',
                        },
                        {
                            infinitiv: 'schwellen',
                            perfect: 'hat geschwollen',
                            prateritum: 'schwoll',
                        },
                        {
                            infinitiv: 'gehen',
                            perfect: 'ist gegangen',
                            prateritum: 'ging',
                        },
                        {
                            infinitiv: 'stehen',
                            perfect: 'ist/hat gestanden',
                            prateritum: 'stand',
                        },
                        {
                            infinitiv: 'bleiben',
                            perfect: 'ist geblieben',
                            prateritum: 'blieb',
                        },
                        {
                            infinitiv: 'gedeihen',
                            perfect: 'hat gediehen',
                            prateritum: 'gedieh',
                        },
                        {
                            infinitiv: 'leihen',
                            perfect: 'hat geliehen',
                            prateritum: 'lieh',
                        },
                        {
                            infinitiv: 'meiden',
                            perfect: 'hat gemieden',
                            prateritum: 'mied',
                        },
                        {
                            infinitiv: 'scheiden',
                            perfect: 'hat geschieden',
                            prateritum: 'schied',
                        },
                        {
                            infinitiv: 'scheinen',
                            perfect: 'hat geschienen',
                            prateritum: 'schien',
                        },
                        {
                            infinitiv: 'schreiben',
                            perfect: 'hat geschrieben',
                            prateritum: 'schrieb',
                        },
                        {
                            infinitiv: 'schreien',
                            perfect: 'hat geschrie(e)n',
                            prateritum: 'schrie',
                        },
                        {
                            infinitiv: 'schweigen',
                            perfect: 'ist geschwiegen',
                            prateritum: 'schwieg',
                        },
                        {
                            infinitiv: 'steigen',
                            perfect: 'ist gestiegen',
                            prateritum: 'stieg',
                        },
                        {
                            infinitiv: 'treiben',
                            perfect: 'hat getrieben',
                            prateritum: 'trieb',
                        },
                        {
                            infinitiv: 'weisen',
                            perfect: 'hat gewiesen',
                            prateritum: 'wies',
                        },
                        {
                            infinitiv: 'verzeihen',
                            perfect: 'hat verziehen',
                            prateritum: 'verzieh',
                        },
                        {
                            infinitiv: 'beißen',
                            perfect: 'hat gebissen',
                            prateritum: 'biss',
                        },
                        {
                            infinitiv: 'gleichen',
                            perfect: 'hat geglichen',
                            prateritum: 'glich',
                        },
                        {
                            infinitiv: 'greifen',
                            perfect: 'hat gegriffen',
                            prateritum: 'griff',
                        },
                        {
                            infinitiv: 'leiden',
                            perfect: 'hat gelitten',
                            prateritum: 'litt',
                        },
                        {
                            infinitiv: 'reiten',
                            perfect: 'hat geritten',
                            prateritum: 'ritt',
                        },
                        {
                            infinitiv: 'scheißen',
                            perfect: 'hat geschissen',
                            prateritum: 'schiss',
                        },
                        {
                            infinitiv: 'schmeißen',
                            perfect: 'hat geschmissen',
                            prateritum: 'schmiss',
                        },
                        {
                            infinitiv: 'schneiden',
                            perfect: 'hat geschnitten',
                            prateritum: 'schnitt',
                        },
                        {
                            infinitiv: 'schreiten',
                            perfect: 'hat geschritten',
                            prateritum: 'schritt',
                        },
                        {
                            infinitiv: 'schreiben',
                            perfect: 'hat geschrieben',
                            prateritum: 'schrieb',
                        },
                        {
                            infinitiv: 'streichen',
                            perfect: 'hat gestrichen',
                            prateritum: 'strich',
                        },
                        {
                            infinitiv: 'streiten',
                            perfect: 'hat gestritten',
                            prateritum: 'stritt',
                        },
                        {
                            infinitiv: 'heißen',
                            perfect: 'hat geheißen',
                            prateritum: 'hieß',
                        },
                        {
                            infinitiv: 'beginnen',
                            perfect: 'ist begonnen',
                            prateritum: 'begann',
                        },
                        {
                            infinitiv: 'gewinnen',
                            perfect: 'hat gewonnen',
                            prateritum: 'gewann',
                        },
                        {
                            infinitiv: 'schwimmen',
                            perfect: 'ist/hat gestritten',
                            prateritum: 'schwamm',
                        },
                        {
                            infinitiv: 'binden',
                            perfect: 'hat gebunden',
                            prateritum: 'band',
                        },
                        {
                            infinitiv: 'dringen',
                            perfect: 'hat gedrungen',
                            prateritum: 'drang',
                        },
                        {
                            infinitiv: 'finden',
                            perfect: 'hat gefunden',
                            prateritum: 'fand',
                        },
                        {
                            infinitiv: 'gelingen',
                            perfect: 'hat gelungen',
                            prateritum: 'gelang',
                        },
                        {
                            infinitiv: 'klingen',
                            perfect: 'hat geklungen',
                            prateritum: 'klang',
                        },
                        {
                            infinitiv: 'schwinden',
                            perfect: 'hat geschwunden',
                            prateritum: 'schwand',
                        },
                        {
                            infinitiv: 'singen',
                            perfect: 'hat gesungen',
                            prateritum: 'sang',
                        },
                        {
                            infinitiv: 'sinken',
                            perfect: 'hat gesunken',
                            prateritum: 'sank',
                        },
                        {
                            infinitiv: 'springen',
                            perfect: 'ist gesprungen',
                            prateritum: 'sprang',
                        },
                        {
                            infinitiv: 'trinken',
                            perfect: 'hat getrunken',
                            prateritum: 'trank',
                        },
                        {
                            infinitiv: 'zwingen',
                            perfect: 'hat gezwungen',
                            prateritum: 'zwang',
                        },
                        {
                            infinitiv: 'bitten',
                            perfect: 'hat gebeten',
                            prateritum: 'bat',
                        },
                        {
                            infinitiv: 'sitzen',
                            perfect: 'ist/hat gesessen',
                            prateritum: 'saß',
                        },
                        {
                            infinitiv: 'biegen',
                            perfect: 'hat gebogen',
                            prateritum: 'bog',
                        },
                        {
                            infinitiv: 'bieten',
                            perfect: 'hat geboten',
                            prateritum: 'bot',
                        },
                        {
                            infinitiv: 'fliegen',
                            perfect: 'ist geflogen',
                            prateritum: 'flog',
                        },
                        {
                            infinitiv: 'fliehen',
                            perfect: 'hat geflohen',
                            prateritum: 'floh',
                        },
                        {
                            infinitiv: 'fließen',
                            perfect: 'hat geflossen',
                            prateritum: 'floss',
                        },
                        {
                            infinitiv: 'frieren',
                            perfect: 'hat gefroren',
                            prateritum: 'fror',
                        },
                        {
                            infinitiv: 'genießen',
                            perfect: 'hat genossen',
                            prateritum: 'genoss',
                        },
                        {
                            infinitiv: 'gießen',
                            perfect: 'hat gegossen',
                            prateritum: 'goss',
                        },
                        {
                            infinitiv: 'kriechen',
                            perfect: 'hat gekrochen',
                            prateritum: 'kroch',
                        },
                        {
                            infinitiv: 'riechen',
                            perfect: 'hat gerochen',
                            prateritum: 'roch',
                        },
                        {
                            infinitiv: 'schieben',
                            perfect: 'hat geschoben',
                            prateritum: 'schob',
                        },
                        {
                            infinitiv: 'schießen',
                            perfect: 'hat geschossen',
                            prateritum: 'schoss',
                        },
                        {
                            infinitiv: 'schließen',
                            perfect: 'hat geschlossen',
                            prateritum: 'schloss',
                        },
                        {
                            infinitiv: 'verlieren',
                            perfect: 'hat verloren',
                            prateritum: 'verlor',
                        },
                        {
                            infinitiv: 'wiegen',
                            perfect: 'hat gewogen',
                            prateritum: 'wog',
                        },
                        {
                            infinitiv: 'ziehen',
                            perfect: 'hat gezogen',
                            prateritum: 'zog',
                        },
                        {
                            infinitiv: 'liegen',
                            perfect: 'hat gelegen',
                            prateritum: 'lag',
                        },
                        {
                            infinitiv: 'kommen',
                            perfect: 'ist gekommen',
                            prateritum: 'kam',
                        },
                        {
                            infinitiv: 'stoßen',
                            perfect: 'hat gestoßen',
                            prateritum: 'stieß',
                        },
                        {
                            infinitiv: 'tun',
                            perfect: 'hat getan',
                            prateritum: 'tat',
                        },
                        {
                            infinitiv: 'rufen',
                            perfect: 'hat gerufen',
                            prateritum: 'rief',
                        },
                        {
                            infinitiv: 'hängen',
                            perfect: 'hat gehangen',
                            prateritum: 'hing',
                        },
                        {
                            infinitiv: 'schwören',
                            perfect: 'hat geschworen',
                            prateritum: 'schwor',
                        },
                        {
                            infinitiv: 'lügen',
                            perfect: 'hat gelogen',
                            prateritum: 'log',
                        },
                        {
                            infinitiv: 'trügen',
                            perfect: 'hat getrogen',
                            prateritum: 'trog',
                        },
                        {
                            infinitiv: 'haben',
                            perfect: 'hat gehabt',
                            prateritum: 'hatte',
                        },
                        {
                            infinitiv: 'sein',
                            perfect: 'ist gewesen',
                            prateritum: 'war',
                        },
                        {
                            infinitiv: 'werden',
                            perfect: 'ist geworden',
                            prateritum: 'wurde',
                        },
                        {
                            infinitiv: 'salzen',
                            perfect: 'hat gestoßen',
                            prateritum: 'stieß',
                        },
                        {
                            infinitiv: 'stoßen',
                            perfect: 'hat gesalzen',
                            prateritum: 'salzte',
                        },
                        {
                            infinitiv: 'brennen',
                            perfect: 'hat gebrannt',
                            prateritum: 'brannte',
                        },
                        {
                            infinitiv: 'bringen',
                            perfect: 'hat gebracht',
                            prateritum: 'brachte',
                        },
                        {
                            infinitiv: 'denken',
                            perfect: 'hat gedacht',
                            prateritum: 'dachte',
                        },
                        {
                            infinitiv: 'kennen',
                            perfect: 'hat gekannt',
                            prateritum: 'kannte',
                        },
                        {
                            infinitiv: 'nennen',
                            perfect: 'hat genannt',
                            prateritum: 'nannte',
                        },
                        {
                            infinitiv: 'rennen',
                            perfect: 'ist gerannt',
                            prateritum: 'rannte',
                        },
                        {
                            infinitiv: 'senden',
                            perfect: 'hat gesandt',
                            prateritum: 'sandte',
                        },
                        {
                            infinitiv: 'wenden',
                            perfect: 'hat gewandt',
                            prateritum: 'wandte',
                        },
                        {
                            infinitiv: 'wissen',
                            perfect: 'hat gewusst',
                            prateritum: 'wusste',
                        },
                        {
                            infinitiv: 'können',
                            perfect: 'hat gekonnt',
                            prateritum: 'konnte',
                        },
                        {
                            infinitiv: 'dürfen',
                            perfect: 'hat gedurft',
                            prateritum: 'durfte',
                        },
                        {
                            infinitiv: 'müssen',
                            perfect: 'hat gemusst',
                            prateritum: 'musste',
                        },
                        {
                            infinitiv: 'sollen',
                            perfect: 'hat gesollt',
                            prateritum: 'sollte',
                        },
                        {
                            infinitiv: 'wollen',
                            perfect: 'hat gewollt',
                            prateritum: 'wollte',
                        },
                    ]);
            },
            949: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.getRandomVerb = void 0),
                    (t.getRandomVerb = function (e) {
                        return e[Math.floor(Math.random() * e.length)];
                    });
            },
        },
        t = {};
    function i(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var a = (t[n] = { exports: {} });
        return e[n](a, a.exports, i), a.exports;
    }
    (() => {
        var e,
            t = i(503),
            n = i(301),
            r = i(949),
            a = document.querySelector('.next'),
            f = document.querySelector('.flip'),
            p = document.querySelector('.question'),
            h = document.querySelector('.solution');
        if (p && h) {
            var s = function () {
                return new t.Verb((0, r.getRandomVerb)(n.data), p, h);
            };
            (e = s()),
                null == a ||
                    a.addEventListener('click', function () {
                        null == e || e.destroy(), (e = s());
                    }),
                null == f ||
                    f.addEventListener('click', function () {
                        return null == e ? void 0 : e.showSolution();
                    });
        }
    })();
})();
