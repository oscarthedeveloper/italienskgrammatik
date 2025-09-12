---
sidebar_position: 3
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

# <Highlight color="#0f025b">Placering</Highlight>

**Adjektivens placering** skiljer sig i italienskan från den i svenskan. Adjektivet placeras:

1. **Efter** sitt huvudord i synnerhet när det betecknar **färg**, **nationalitet** och **form**.
2. **Efter** sitt huvudord när det förstärks med adverb såsom *molto*, *abbastanza* och *poco*.
3. **Före** sitt huvudord när det gäller korta, vanliga adjektiv såsom *piccolo*, *grande*, *buono*, *bello*, *vecchio*, *primo*, *ultimo* och *nuovo*.

:::note EXEMPEL

1. *La casa ha una <span className="highlight-blue">facciata</span> <span className="highlight-red">grigia</span>*.    
*Studio la <span className="highlight-blue">lingua</span> <span className="highlight-red">italiana</span>*.      
*Ho comprato uno <span className="highlight-blue">specchio</span> <span className="highlight-red">rotondo</span>*. 
2. *È una <span className="highlight-blue">città</span> <span className="highlight-red">molto grande</span>*.     
*Hanno visto un <span className="highlight-blue">film</span> <span className="highlight-red">poco interessante</span>*.      
*Bevi un <span className="highlight-blue">vino</span> <span className="highlight-red">abbastanza buono</span>*.  
3. *Roma è una <span className="highlight-red">grande</span> <span className="highlight-blue">città</span>*.       
*Era un <span className="highlight-red">ottimo</span> <span className="highlight-blue">vino</span>*.       
*Sono stati buoni gli <span className="highlight-red">ultimi</span> <span className="highlight-blue">giorni</span>*.  

:::

<div class="subject-box">
  <span class="blue-dot"></span>
  <span class="subject-text">Huvudord</span>
    <span class="red-dot"></span>
  <span class="subject-text">Adjektiv</span>
</div>

## <Highlight color="#0f025b">Placering & betydelse</Highlight>

Vissa adjektiv har olika betydelse beroende på denna placering **före** eller **efter** sitt huvudord.

<table>
  <tbody>
    <tr>
      <td>**FÖRE**</td>
      <td rowspan="2"><div style={{ border: '4px solid #ba181b', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: '#ba181b', textAlign: 'center' }}> povero </div></td>
      <td> *stackars*</td>
      <td> *È una <span className="highlight-red">povera</span> <span className="highlight-blue">donna</span>.*</td>
    </tr>
    <tr>
      <td>**EFTER**</td>
      <td>*fattig*</td>
      <td> *È una <span className="highlight-blue">donna</span> <span className="highlight-red">povera</span>.*</td>
    </tr>
    <tr>
      <td>**FÖRE**</td>
      <td rowspan="2"><div style={{ border: '4px solid #ba181b', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: '#ba181b', textAlign: 'center' }}> semplice </div></td>
      <td> *enkel*</td>
      <td> *Abbiamo fatto una <span className="highlight-red">semplice</span> <span className="highlight-blue">domanda</span>.*</td>
    </tr>
    <tr>
      <td>**EFTER**</td>
      <td>*lätt*</td>
      <td> *Abbiamo fatto una <span className="highlight-blue">domanda</span> <span className="highlight-red">semplice</span>.*</td>
    </tr>
    <tr>
      <td>**FÖRE**</td>
      <td rowspan="2"><div style={{ border: '4px solid #ba181b', padding: '10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', color: '#ba181b', textAlign: 'center' }}> *certo* </div></td>
      <td> viss</td>
      <td> *Gli ho dato una <span className="highlight-red">certa</span> <span className="highlight-blue">informazione</span>.*</td>
    </tr>
    <tr>
      <td>**EFTER**</td>
      <td>*säker*</td>
      <td> *Gli ho dato un'<span className="highlight-blue">informazione</span> <span className="highlight-red">certa</span>.*</td>
    </tr>
  </tbody>
</table>

<div class="subject-box">
  <span class="blue-dot"></span>
  <span class="subject-text">Huvudord</span>
    <span class="red-dot"></span>
  <span class="subject-text">Adjektiv</span>
</div>