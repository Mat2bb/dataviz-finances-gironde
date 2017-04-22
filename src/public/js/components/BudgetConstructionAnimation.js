import React from 'react';

import { max, sum } from 'd3-array';

/*
interface BudgetConstructionAnimationProps{
    Dotation: 100000,
    Machins: 200000,
    Impots: 300000,
    RecettesInvestissement: 400000,
    RecettesEmprunts: 500000,
    EpargneBrute: 600000,
    DepensesFonctionnement: 700000,
    FraisFinanciers: 800000,
    Investissements: 900000
}
 */

export default function (amounts) {

    const {DotationEtat, FiscalitéDirecte, FiscalitéIndirecte, RecettesDiverses} = amounts;

    const rf = sum([DotationEtat, FiscalitéDirecte, FiscalitéIndirecte, RecettesDiverses]);
    const ri = 0, di = 0, df = 0;

    const maximum = max([rf, ri, df, di]);
    const maxBrickPercentHeight = 85;


    return React.createElement('article', { className: 'budget-construction' },
        DotationEtat ? React.createElement('div', {className: 'bricks'}, 
            React.createElement('div', {className: 'column'},
                /*React.createElement('div', {className: 'total'}, 
                    React.createElement('span', {className: 'number'}, (rf/1000000000).toFixed(3) ), 
                    ' milliards'
                ),*/
                React.createElement('div', {className: 'brick dotation-etat', style: {
                    height: (maxBrickPercentHeight*DotationEtat/maximum)+'%'
                }}, `Dotation de l'Etat`),
                React.createElement('div', {className: 'brick fiscalite-directe', style: {
                    height: (maxBrickPercentHeight*FiscalitéDirecte/maximum)+'%'
                }}, 'Fiscalité directe'),
                React.createElement('div', {className: 'brick fiscalite-indirecte', style: {
                    height: (maxBrickPercentHeight*FiscalitéIndirecte/maximum)+'%'
                }}, 'Fiscalité indirecte'),
                React.createElement('div', {className: 'brick recettes-diverses', style: {
                    height: (maxBrickPercentHeight*RecettesDiverses/maximum)+'%'
                }}, 'Recettes diverse')
            ), 
            React.createElement('div', {className: 'column'}, ''
                /*React.createElement('div', {className: 'total'}, 
                    React.createElement('span', {className: 'number'}, (ri/1000000).toFixed(0)),
                    ' millions'
                ),
                React.createElement('div', {className: 'brick', style: {
                    height: (maxBrickPercentHeight*ri/maximum)+'%',
                    backgroundColor: '#0E7FAB'
                }}, 'RECETTES D’INVESTISSEMENT')*/
            ), 
            React.createElement('div', {className: 'column'}, ''
                /*React.createElement('div', {className: 'total'}, 
                    React.createElement('span', {className: 'number'}, (df/1000000000).toFixed(3)),
                    ' milliards'
                ),
                React.createElement('div', {className: 'brick', style: {
                    height: (maxBrickPercentHeight*df/maximum)+'%',
                    backgroundColor: '#F8C738'
                }}, 'DÉPENSES DE FONCTIONNEMENT')*/
            ), 
            React.createElement('div', {className: 'column'}, ''
                /*React.createElement('div', {className: 'total'}, 
                    React.createElement('span', {className: 'number'}, (di/1000000).toFixed(0)),
                    ' millions'
                ),
                React.createElement('div', {className: 'brick', style: {
                    height: (maxBrickPercentHeight*di/maximum)+'%',
                    backgroundColor: '#B8C30F'
                }}, 'DÉPENSES D’INVESTISSEMENT')*/
            )
        ) : undefined,
        React.createElement('hr'),
        React.createElement('dl', {},
            React.createElement('div', {className: 'column'},
                React.createElement('dt', {}, 'Recettes de fonctionnement'),
                React.createElement('dd', {}, `Ces recettes proviennent principalement du produit des impôts et taxes directes et indirectes, ainsi que des dotations versées par l'État`),
                React.createElement('dt', {}, 'Emprunt'), 
                React.createElement('dd', {}, `Il permet au Département d'atteindre l’équilibre budgétaire et d’investir dans des projets d’ampleur ou durables.`)
            ), 
            React.createElement('div', {className: 'column'}, 
                React.createElement('dt', {}, 'Dépenses de fonctionnement'), 
                React.createElement('dd', {}, `Ces dépenses financent principalement les allocations et prestations sociales ou de solidarité, les services de secours (pompiers), les transports, les collèges, les routes, ainsi que le fonctionnement propre du Département (salaires et moyens) et les intérêts d’emprunts. `)
            ), 
            React.createElement('div', {className: 'column'}, 
                React.createElement('dt', {}, 'Recettes d’investissement'), 
                React.createElement('dd', {}, `Elles sont principalement constituées de dotations de l’Etat et de subventions`),
                React.createElement('dt', {}, `Dépenses d'investissement`), 
                React.createElement('dd', {}, `Elles concernent des programmes structurants ou stratégiques pour le développement du territoire girondin : bâtiments, routes, collèges, etc.`)
            )
        )
    );

}
