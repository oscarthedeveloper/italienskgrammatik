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

# <Highlight color="#0f025b">Intro</Highlight>

import HighlightTooltip from '@site/src/components/HighlightTooltip';

<HighlightTooltip
  text="Ett <strong>verb</strong> är något man kan göra, t.ex. tuta och köra!"
  highlights={[
    { word: "verb", tooltip: "🇮🇹 verbo" },
  ]}
/>

## <Highlight color="#0f025b">Indelningsgrunder</Highlight>

### <Highlight color="#0f025b">Person</Highlight>

Italienska verb böjs efter **1:a, 2:a och 3:e person** i både **singular** och **plural**.

<table>
  <tbody>
  <tr>
      <td> **Person**</td>
      <td> **Singular**</td>
      <td> **Plural**</td>
      </tr>
    <tr>
      <td> **1:a**</td>
      <td> *io*</td>
      <td> *noi*</td>
    </tr>
    <tr>
      <td> **2:a**</td>
      <td> *tu*</td>
      <td> *voi*</td>
    </tr>
    <tr>
      <td> **3:e**</td>
      <td> *lui, lei*      
      *Lei*</td>
      <td> *loro*</td>
    </tr>
  </tbody>
</table>


### <Highlight color="#0f025b">Konjugationer</Highlight>

De italienska verben delas in i tre **konjugationer** efter infinitivens ändelser.

1. <span className="highlight-blue">-are</span>, t.ex. *<span className="highlight-blue">ballare</span>*
2. <span className="highlight-red">-ere</span>, t.ex. *<span className="highlight-red">credere</span>*
3. <span className="highlight-green">-ire</span>, t.ex. *<span className="highlight-green">dormire</span>*

### <Highlight color="#0f025b">Modus</Highlight>

Det italienska verbsystemet har tre modi:

1. ***indicativo***: *io canto*
2. ***congiuntivo***: *che io canti*
3. ***imperativo***: *canta!*

**Konjunktiv** har fallit ur bruk i modern svenska och är därför ett främmande modus för många svenskar. 

Konjunktiv används främst i **bisatser** som inleds med *che*. Det är oftast ett uttryck i **huvudsatsen** som framkallar konjunktiven i bisatsen. 

:::note EXEMPEL

<span className="highlight-blue">É peccato</span> <span className="highlight-aqua">che</span> <span className="highlight-red">io non parli italiano</span>.      
<span className="highlight-blue">Credo</span> <span className="highlight-aqua">che</span> <span className="highlight-red">ballino</span>.      
<span className="highlight-blue">Sembra</span> <span className="highlight-aqua">che</span> <span className="highlight-red">lui dorma</span>.      

:::

<div class="subject-box">
  <span class="blue-dot"></span>
  <span class="subject-text">Huvudsats</span>
    <span class="aqua-dot"></span>
  <span class="subject-text">Bisatsinledare</span>
    <span class="red-dot"></span>
  <span class="subject-text">Bisats</span>
</div>

:::info TALSPRÅK

I talspråk kan ibland *che* uteslutas.

<span className="highlight-blue">Spero</span> <span className="highlight-red">questo video sia stato utile</span>.     
<span className="highlight-blue">Non credo</span> <span className="highlight-red">l'abbiano vista</span>.  


:::

### <Highlight color="#0f025b">Tempus</Highlight>

**Enkla tempus**:

- ***presente***: *io canto*
- ***imperfetto***: *io cantavo*
- ***passato remoto***: *io cantai*
- ***futuro***: *io canterò*
- ***condizionale***: *io canterei*

**Sammansatta tempus**:

- ***passato prossimo***: *ho cantato*
- ***trapassato prossimo***: *avevo cantato*
- ***trapassato remoto***: *ebbi contato*
- ***futuro anteriore***: *avrò cantato*
- ***condizionale passato***: *avrei cantato*

## <Highlight color="#0f025b">Ändelser</Highlight>

<span className="highlight-aqua">Person</span>, <span className="highlight-yellowgreen">modus</span> och <span className="highlight-purple">tempus</span> uttrycks alltså av att infinitivens ändelse byts ut.

<table>
<tbody>
<tr>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">BALLARE</span></td>
<td><div style={{ padding: '10px', fontSize: '30px', color: 'var(--highlight)', textAlign: 'center' }}> + </div></td>
<td style={{ textAlign: 'center' }}><span className="highlight-aqua">1:A PERSON SINGULAR</span>     
<span className="highlight-yellowgreen">KONJUNKTIV</span>      
<span className="highlight-purple">PRESENS</span></td>
<td><div style={{ padding: '10px', fontSize: '30px', color: 'var(--highlight)', textAlign: 'center' }}> → </div></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">BALLI</span></td>
<td>*jag dansade*</td>
</tr>
<tr>
<td style={{ textAlign: 'center' }}><span className="highlight-red">CREDERE</span></td>
<td><div style={{ padding: '10px', fontSize: '30px', color: 'var(--highlight)', textAlign: 'center' }}> + </div></td>
<td style={{ textAlign: 'center' }}><span className="highlight-aqua">3:A PERSON PLURAL</span>     
<span className="highlight-yellowgreen">INDIKATIV</span>      
<span className="highlight-purple">IMPERFEKT</span></td>
<td><div style={{ padding: '10px', fontSize: '30px', color: 'var(--highlight)', textAlign: 'center' }}> → </div></td>
<td style={{ textAlign: 'center' }}><span className="highlight-red">CREDEVANO</span></td>
<td>*de trodde*</td>
</tr>
<tr>
<td style={{ textAlign: 'center' }}><span className="highlight-green">DORMIRE</span></td>
<td><div style={{ padding: '10px', fontSize: '30px', color: 'var(--highlight)', textAlign: 'center' }}> + </div></td>
<td style={{ textAlign: 'center' }}><span className="highlight-aqua">1:A PERSON PLURAL</span>     
<span className="highlight-yellowgreen">INDIKATIV</span>      
<span className="highlight-purple">PASSATO REMOTO</span></td>
<td><div style={{ padding: '10px', fontSize: '30px', color: 'var(--highlight)', textAlign: 'center' }}> → </div></td>
<td style={{ textAlign: 'center' }}><span className="highlight-green">DORMIMMO</span></td>
<td>*vi sov*</td>
</tr>
</tbody>
</table>

:::info

Eftersom ändelserna ofta uttrycker person behöver inte alltid de personliga pronomina sättas ut.

:::

## <Highlight color="#0f025b">Fullständigt böjningsschema - finita verbformer</Highlight>

### <Highlight color="#0f025b">Presente</Highlight>


<table>
<tbody>
<tr>
<td rowspan="4">**SING.**</td>
<td></td>
<td>**INDIKATIV**</td>
<td>**KONJUNKTIV**</td>
<td rowspan="4">**PLUR.**</td>
<td>**INDIKATIV**</td>
<td>**KONJUNKTIV**</td>
</tr>
<tr>
<td>**1:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-o</span>     
<span className="highlight-red">-o</span>     
<span className="highlight-green">-o</span></td>
<td rowspan="3" style={{ textAlign: 'center' }}><span className="highlight-blue">-i</span>     
<span className="highlight-red">-a</span>     
<span className="highlight-green">-a</span></td>
<td colspan="2" style={{ textAlign: 'center' }}><span className="highlight-blue">-iamo</span>     
<span className="highlight-red">-iamo</span>     
<span className="highlight-green">-iamo</span></td>     
</tr>
<tr>
<td>**2:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-i</span>     
<span className="highlight-red">-i</span>     
<span className="highlight-green">-i</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-ate</span>     
<span className="highlight-red">-ete</span>     
<span className="highlight-green">-ite</span></td>     <td style={{ textAlign: 'center' }}><span className="highlight-blue">-iate</span>     
<span className="highlight-red">-iate</span>     
<span className="highlight-green">-iate</span></td>
</tr>
<tr>
<td>**3:e**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-a</span>     
<span className="highlight-red">-e</span>     
<span className="highlight-green">-e</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-ano</span>     
<span className="highlight-red">-ono</span>     
<span className="highlight-green">-ono</span></td>   <td style={{ textAlign: 'center' }}><span className="highlight-blue">-ino</span>     
<span className="highlight-red">-ano</span>     
<span className="highlight-green">-ano</span></td>
</tr>
</tbody>
</table>

### <Highlight color="#0f025b">Imperfetto</Highlight>


<table>
<tbody>
<tr>
<td rowspan="4">**SING.**</td>
<td></td>
<td>**INDIKATIV**</td>
<td>**KONJUNKTIV**</td>
<td rowspan="4">**PLUR.**</td>
<td>**INDIKATIV**</td>
<td>**KONJUNKTIV**</td>
</tr>
<tr>
<td>**1:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-avo</span>     
<span className="highlight-red">-evo</span>     
<span className="highlight-green">-ivo</span></td>
<td rowspan="2" style={{ textAlign: 'center' }}><span className="highlight-blue">-assi</span>     
<span className="highlight-red">-essi</span>     
<span className="highlight-green">-issi</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-avamo</span>     
<span className="highlight-red">-evamo</span>     
<span className="highlight-green">-ivamo</span></td><td style={{ textAlign: 'center' }}><span className="highlight-blue">-assimo</span>     
<span className="highlight-red">-essimo</span>     
<span className="highlight-green">-issimo</span></td>       
</tr>
<tr>
<td>**2:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-avi</span>     
<span className="highlight-red">-evi</span>     
<span className="highlight-green">-ivi</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-avate</span>     
<span className="highlight-red">-evate</span>     
<span className="highlight-green">-ivate</span></td>     <td style={{ textAlign: 'center' }}><span className="highlight-blue">-aste</span>     
<span className="highlight-red">-este</span>     
<span className="highlight-green">-iste</span></td>
</tr>
<tr>
<td>**3:e**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-ava</span>     
<span className="highlight-red">-eva</span>     
<span className="highlight-green">-iva</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-asse</span>     
<span className="highlight-red">-esse</span>     
<span className="highlight-green">-isse</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-avano</span>     
<span className="highlight-red">-evano</span>     
<span className="highlight-green">-ivano</span></td>   <td style={{ textAlign: 'center' }}><span className="highlight-blue">-assero</span>     
<span className="highlight-red">-essero</span>     
<span className="highlight-green">-issero</span></td>
</tr>
</tbody>
</table>

### <Highlight color="#0f025b">Passato remoto</Highlight>

<table>
<tbody>
<tr>
<td rowspan="4">**SING.**</td>
<td></td>
<td>**INDIKATIV**</td>
<td>**KONJUNKTIV**</td>
<td rowspan="4">**PLUR.**</td>
<td>**INDIKATIV**</td>
<td>**KONJUNKTIV**</td>
</tr>
<tr>
<td>**1:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-ai</span>     
<span className="highlight-red">-ei</span>     
<span className="highlight-green">-ii</span></td>
<td rowspan="2" style={{ textAlign: 'center' }}><span className="highlight-blue">-assi</span>     
<span className="highlight-red">-essi</span>     
<span className="highlight-green">-issi</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-ammo</span>     
<span className="highlight-red">-emmo</span>     
<span className="highlight-green">-immo</span></td><td style={{ textAlign: 'center' }}><span className="highlight-blue">-assimo</span>     
<span className="highlight-red">-essimo</span>     
<span className="highlight-green">-issimo</span></td>       
</tr>
<tr>
<td>**2:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-asti</span>     
<span className="highlight-red">-esti</span>     
<span className="highlight-green">-isti</span></td>
<td colspan="2" style={{ textAlign: 'center' }}><span className="highlight-blue">-aste</span>     
<span className="highlight-red">-este</span>     
<span className="highlight-green">-iste</span></td>     
</tr>
<tr>
<td>**3:e**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-ò</span>     
<span className="highlight-red">-é</span>     
<span className="highlight-green">-ì</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-asse</span>     
<span className="highlight-red">-esse</span>     
<span className="highlight-green">-isse</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-arono</span>     
<span className="highlight-red">-erono</span>     
<span className="highlight-green">-irono</span></td>   <td style={{ textAlign: 'center' }}><span className="highlight-blue">-assero</span>     
<span className="highlight-red">-essero</span>     
<span className="highlight-green">-issero</span></td>
</tr>
</tbody>
</table>

### <Highlight color="#0f025b">Futuro e condizionale</Highlight>

<table>
<tbody>
<tr>
<td rowspan="4">**SING.**</td>
<td></td>
<td>**FUTURO**</td>
<td>**CONDIZIONALE**</td>
<td rowspan="4">**PLUR.**</td>
<td>**FUTURO**</td>
<td>**CONDIZIONALE**</td>
</tr>
<tr>
<td>**1:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-erò</span>     
<span className="highlight-red">-erò</span>     
<span className="highlight-green">-irò</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-erei</span>     
<span className="highlight-red">-erei</span>     
<span className="highlight-green">-irei</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-eremo</span>     
<span className="highlight-red">-eremo</span>     
<span className="highlight-green">-iremo</span></td><td style={{ textAlign: 'center' }}><span className="highlight-blue">-eremmo</span>     
<span className="highlight-red">-eremmo</span>     
<span className="highlight-green">-iremmo</span></td>       
</tr>
<tr>
<td>**2:a**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-erai</span>     
<span className="highlight-red">-erai</span>     
<span className="highlight-green">-irai</span></td>     <td style={{ textAlign: 'center' }}><span className="highlight-blue">-eresti</span>     
<span className="highlight-red">-eresti</span>     
<span className="highlight-green">-iresti</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-erete</span>     
<span className="highlight-red">-erete</span>     
<span className="highlight-green">-irete</span></td>     <td style={{ textAlign: 'center' }}><span className="highlight-blue">-ereste</span>     
<span className="highlight-red">-ereste</span>     
<span className="highlight-green">-ireste</span></td>
</tr>
<tr>
<td>**3:e**</td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-erà</span>     
<span className="highlight-red">-erà</span>     
<span className="highlight-green">-irà</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-erebbe</span>     
<span className="highlight-red">-erebbe</span>     
<span className="highlight-green">-irebbe</span></td>
<td style={{ textAlign: 'center' }}><span className="highlight-blue">-eranno</span>     
<span className="highlight-red">-eranno</span>     
<span className="highlight-green">-iranno</span></td>   <td style={{ textAlign: 'center' }}><span className="highlight-blue">-erebbero</span>     
<span className="highlight-red">-erebbero</span>     
<span className="highlight-green">-irebbero</span></td>
</tr>
</tbody>
</table>