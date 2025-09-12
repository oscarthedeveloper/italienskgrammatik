---
sidebar_position: 2
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

import HighlightTooltip from '@site/src/components/HighlightTooltip';

# <Highlight color="#0f025b">Komparation</Highlight>

**Komparation** av adjektiv bildas genom att *più* (mer) eller *meno* (mindre) läggs till grundformen (positiv). Superlativen bildas av att komparativformen föregås av bestämd artikel. Om superlativen placeras efter sitt huvudord upprepas inte den bestämda artikeln.

<div className="row">
<div className="col col--7">
<table>
  <tbody>
    <tr>
      <td style={{ textAlign: 'center' }}>**POSITIV**</td>
      <td style={{ textAlign: 'center' }}>**KOMPARATIV**</td>
      <td style={{ textAlign: 'center' }}>**SUPERLATIV**</td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> giovane </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> più giovane </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> il più giovane </div></td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> forte </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> meno forte </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> il meno forte </div></td>
    </tr>
  </tbody>
</table>
      </div>
      <div className="col col--5">
        :::note EXEMPEL

        *Pino ha dieci anni. È **giovane**.     
        Roberto ha otto anni. È **più giovane**.    
        Giorgio ha cinque anni. È **il più giovane**.    
        Anna è **la** ragazza **più bella** del mondo.* 

        :::
      </div>
    </div>

## <Highlight color="#0f025b">Di i jämförelser</Highlight>

**Än** i jämförelser motsvaras av *di* framför 
<span className="highlight-blue">**substantiv**</span>, 
<span className="highlight-red">**pronomen**</span> och 
<span className="highlight-aqua">**räkneord**</span>.

        :::note EXEMPEL

        *L'aereo è più veloce **del** <span className="highlight-blue">treno.</span>     
        È più grande **di** <span className="highlight-red">te.</span>.     
        Il viaggio costava meno **di** <span className="highlight-aqua">trecentomila</span>trecentomila euro.*     

        :::

## <Highlight color="#0f025b">Che i jämförelser</Highlight>

**Än** i jämförelser motsvaras av *che*:
- framför <span className="highlight-blue">**preposition**</span>
- framför <span className="highlight-red">**verb**</span>
- framför <span className="highlight-aqua">**adverb**</span>
- <span className="highlight-green">**vid jämförelse av två egenskaper hos samma föremål**</span>
- <span className="highlight-magenta">**vid jämförelse mellan två substantiv**</span>

:::note EXEMPEL

        *Fa più caldo in Italia **che** <span className="highlight-blue">in</span> Svezia.     
        È più facile dirlo **che** <span className="highlight-red">farlo</span>.     
        Meglio tarde **che** <span className="highlight-aqua">mai</span>.*     
        *<span className="highlight-green">È più bella che intelligente.</span>    
        <span className="highlight-magenta">L'Italia produce più vino che birra.</span>*

  :::

## <Highlight color="#0f025b">Komparationsuttryck</Highlight>

:::note <span className="highlight-blue">LIKA</span> ... <span className="highlight-red">SOM</span>

        1. *Luigi è <span className="highlight-blue">così</span> intelligente <span className="highlight-red">come</span> suo padre.*      
        2. *Paolo è <span className="highlight-blue">tanto</span> bravo <span className="highlight-red">quanto</span> Matteo.*     
  :::

  :::note <span className="highlight-blue">Ju mer</span> ... <span className="highlight-red">desto mer (mindre)</span>

        1. *<span className="highlight-blue">Quanto più</span> guadagna <span className="highlight-red">tanto più</span> spende.*   
        *<span className="highlight-blue">Quanto più</span> spende <span className="highlight-red">tanto meno</span> risparmia.* 
        2. *<span className="highlight-blue">Più</span> si lavora <span className="highlight-red">e più</span> e più si vedono i colleghi.*     
        *<span className="highlight-blue">Più</span> si lavora <span className="highlight-red">e meno</span> e meno si vedono gli amici.*        
  :::

  ## <Highlight color="#0f025b">Dubbla komparationsformer</Highlight>

Några adjektiv har **dubbla komparationsformer**, vilket betyder att **ett** adjektiv kan kompareras på **två** sätt - och dessa har olika betydelse.

<table>
  <tbody>
    <tr>
      <td style={{ textAlign: 'center' }}>**POSITIV**</td>
      <td style={{ textAlign: 'center' }}>**KOMPARATIV**</td>
      <td style={{ textAlign: 'center' }}>**SUPERLATIV**</td>
      <td style={{ textAlign: 'center' }}>**BETYDELSE**</td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> buono </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> più buono </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> migliore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> il più buono </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> il migliore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> snällare </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> bättre </div></td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> cattivo </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> più cattivo </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> peggiore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> il più cattivo </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> il peggiore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> elakare </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> sämre </div></td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> grande </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> più grande </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> maggiore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> il più grande </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> il maggiore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> större </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> äldre </div></td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> piccolo </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> più piccolo </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> minore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> il più piccolo </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> il minore </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> mindre </div><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center', marginBlock:'4px' }}> yngre </div></td>
    </tr>
  </tbody>
</table>

  ## <Highlight color="#0f025b">Oregelbunden komparation</Highlight>

<table>
  <tbody>
    <tr>
      <td style={{ textAlign: 'center' }}>**POSITIV**</td>
      <td style={{ textAlign: 'center' }}>**KOMPARATIV**</td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> bene </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> meglio </div></td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> male </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> peggio </div></td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> molto </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> più </div></td>
    </tr>
    <tr>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> poco </div></td>
      <td><div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> meno </div></td>
    </tr>
</tbody>
</table>