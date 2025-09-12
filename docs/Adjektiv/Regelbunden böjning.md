---
sidebar_position: 1
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

# <Highlight color="#0f025b">Regelbunden böjning</Highlight>

<HighlightTooltip
  text="Ett italienskt adjektiv böjs efter sitt huvudord, vilket kan variera i <strong>genus</strong> och <strong>numerus</strong>. Det finns två grupper: de som slutar på <strong>-o</strong> eller <strong>-a</strong> och de som slutar på <strong>-e</strong>. Den ena ändras beroende av genus medan den andra inte gör det."
  highlights={[
    { word: "adjektiv", tooltip: "🇮🇹 aggettivo" },
  ]}
/>

## <Highlight color="#0f025b">Grupp 1 & 2</Highlight>

<div class="row">
  <div class="col col--7">
<table>
  <tbody>
    <tr>
      <td colspan="2">**Maskulinum**</td>
      <td colspan="2">**Femininum**</td>
    </tr>
    <tr>
      <td>**Singular**</td>
      <td>**Plural**</td>
      <td>**Singular**</td>
      <td>**Plural**</td>
    </tr>
    <tr>
      <td>
        <div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> -o </div>
      </td>
      <td>
        <div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> -i </div>
      </td>
      <td>
        <div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> -a </div>
      </td>
      <td rowspan="2">
        <div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> -e </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
  <div class="col col--5">
<table>
  <tbody>
  <tr>
      <td colspan="2">**Mask. & fem.**</td>
    </tr>
    <tr>
      <td>**Singular**</td>
      <td>**Plural**</td>
    </tr>
    <tr>
      <td>
        <div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> -e </div>
      </td>
      <td>
        <div style={{ border: '4px solid var(--highlight)', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: 'var(--highlight)', textAlign: 'center' }}> -i </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</div>

<div class="row">
  <div class="col col--7">
:::note EXEMPEL

*Il ragazzo è content**o**.    
I ragazzi sono content**i**.     
La ragazza è content**a**.    
Le ragazze sono content**e***.

:::
  </div>
  <div class="col col--5">
:::note EXEMPEL

*Il ragazzo è gentil**e**.    
I ragazzi sono gentil**i**.     
La ragazza è gentil**e**.    
Le ragazze sono gentil**i***.

:::
  </div>
</div>

## <Highlight color="#0f025b">Särskild böjning</Highlight>

### <Highlight color="#0f025b">Adjektiv på -co</Highlight>

Adjektiv på **-co** bildar maskulinum på följande sätt:

- **-chi** om betoningen ligger på **andra** stavelsen från slutet, t.ex. *stanco*.
- **-ci** om betoningen ligger på **tredje** stavelsen från slutet, t.ex. *magnifico*.

Femininum plural av dessa adjektiv får **alltid** **-che**, t.ex. *ricche*, *stanche*, *magnifiche*.

### <Highlight color="#0f025b">Adjektiv på -go</Highlight>

Adjektiv på **-go** (**-ga**) får i plural alltid **-ghi** (**-ghe**), t.ex. *lungo → lunghi, lunga → lunghe.*

### <Highlight color="#0f025b">Vissa färgadjektiv</Highlight>

Vissa färgadjektiv samt färgnyanser som består av två adjektiv är oböjliga. 

:::note EXEMPEL

*I vestiti sono **blu**.    
Questi sono **verde chiaro**.     
Ha i capelli **viola**.*

:::info GÄLLER ÄVEN

*Marrone, arancione, rosa, lilla, giallo crema, etc.*

:::

## <Highlight color="#0f025b">Adjektiv med flera huvudord</Highlight>

Om adjektivet syftar på flera huvudord gäller följande regler:

- När adjektivet står som predikatsfyllnad sätts det i maskulinum plural om ett av subjekten är maskulint.
- När subjekten har samma genus och står i singular sätts adjektivet i motsvaande genus i plural.

:::note EXEMPEL

*<span className="highlight-blue">Pino</span> e <span className="highlight-red">Sara</span> sono molto **simpatici**.    
Il mio <span className="highlight-blue">amico</span> e la sua <span className="highlight-red">ragazza</span> sono **americani.**.      
Io studio la <span className="highlight-red">lingua</span> e la <span className="highlight-red">letteratura</span> **tedesche**.    
Il mio <span className="highlight-blue">amico</span> e suo <span className="highlight-blue">padre</span> sono **italiani**.*

::: 

<div class="subject-box">
  <span class="blue-dot"></span>
  <span class="subject-text">Maskulinum</span>
  <span class="red-dot"></span>
  <span class="subject-text">Femininum</span>
</div>

## <Highlight color="#0f025b">Buono & bello</Highlight>

Adjektiven *buono* och *bello* böjs annorlunda beroende om de står **före** eller **efter** sitt huvudord.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import KonjunktivAR from '@site/src/components/KonjunktivAR.js';
import KonjunktivERIR from '@site/src/components/KonjunktivERIR.js';

<Tabs>
  <TabItem value="bello" label="Bello" default>
    <div className="row">
      <div className="col col--7">
        <KonjunktivAR />
      </div>
      <div className="col col--5">
        :::note EXEMPEL

        *Il **bel** regalo! Sì, è **bello**.     
        Il <strong>bell'</strong>anello! Sì, è **bello**.     
        Il **bello** specchio! Sì, è **bello**.     
        I **bei** regali! Sì, sono **belli**.    
        I **begli** amici. Sì, sono **belli**.     
        La **bella** ragazza. Sì, è **bella**.      
        Le **belle** ragazze. Sì, sono **belle**.*     

        :::
      </div>
    </div>
  </TabItem>
  <TabItem value="buono" label="Buono">
    <div className="row">
      <div className="col col--7">
        <KonjunktivERIR />
      </div>
      <div className="col col--5">
        :::note EXEMPEL

        *Che **buon** regalo! Sì, è **buono**.     
        Che **buon** anello! Sì, è **buono**.     
        Che **buono** specchio! Sì, è **buono**.     
        Che **buoni** regali! Sì, sono **buoni**.    
        Che **buoni** amici! Sì, sono **buoni**.     
        Che **buona** ragazza! Sì, è **buona**.      
        Che **buone** ragazze! Sì, sono **buone**.*

        :::
      </div>
    </div>
  </TabItem>
</Tabs>

