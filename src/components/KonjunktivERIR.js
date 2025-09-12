import React, { useState } from 'react';
import './TableSwitch.css';

const KonjunktivERIR = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="table-switch">
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <span className="switch-label">{isChecked ? 'Efter huvudordet' : 'Före huvudordet'}</span>
      </div>
      <div className="table-container">
        {isChecked ? (
          <table className="table-content singular">
  <tbody>
    <tr>
      <td colspan="2"><strong>Maskulinum</strong></td>
      <td colspan="2"><strong>Femininum</strong></td>
    </tr>
    <tr>
      <td><strong>Singular</strong></td>
      <td><strong>Plural</strong></td>
      <td><strong>Singular</strong></td>
      <td><strong>Plural</strong></td>
    </tr>
    <tr>
      <td><i>buono</i></td>
      <td><i>buoni</i></td>
      <td><i>buona</i></td>
      <td><i>buone</i></td>
    </tr>
  </tbody>
</table>
        ) : (
          <table className="table-content indikativ">
  <tbody>
    <tr>
      <td colspan="2"><strong>Maskulinum</strong></td>
      <td colspan="2"><strong>Femininum</strong></td>
    </tr>
    <tr>
      <td><strong>Singular</strong></td>
      <td><strong>Plural</strong></td>
      <td><strong>Singular</strong></td>
      <td><strong>Plural</strong></td>
    </tr>
    <tr>
      <td><i>buon</i></td>
      <td rowspan="2"><i>buoni</i></td>
      <td rowspan="2"><i>buona</i></td>
      <td rowspan="2"><i>buone</i></td>
    </tr>
    <tr>
      <td><i>buono</i></td>
    </tr>
  </tbody>
</table>
        )}
      </div>
    </div>
  );
};

export default KonjunktivERIR;

/*
<table>
<tbody>
<tr>
    <td rowspan="3"> <b>Singular</b></td>
    <td> <b>1:a</b></td>
    <td> <i>yo</i></td>
    <th width="100px"> -<b>o</b> </th>
    <td> <i>hablo</i> </td>
</tr>
<tr>
<td> <b>2:a</b></td>
    <td> <i>tú</i></td>
    <th width="100px"> -<b>as</b> </th>
    <td> <i>hablas</i> </td>
  </tr>
<tr>
<td> <b>3:e</b></td>
    <td> <i>él</i><br></br>
    <i>ella</i><br></br>
    <i>ello</i></td>
    <th width="100px"> -<b>a</b></th>
    <td> <i>habla</i> </td>
</tr>
<tr>
    <td rowspan="3"> <b>Plural</b></td>
    <td> <b>1:a</b> </td>
    <td> <i>nosotros</i></td>
    <th width="100px"> -<b>amos</b> </th>
    <td> <i>hablamos</i> </td>
</tr>
<tr>
<td> <b>2:a</b> </td>
    <td> <i>vosotros</i></td>
    <th width="100px"> -<b>áis</b> </th>
    <td> <i>hablan</i> </td>
  </tr>
<tr>
<td> <b>3:e</b> </td>
    <td> <i>ellos</i></td>
    <th width="100px"> -<b>an</b> </th>
    <td> <i>hablan</i> </td>
</tr>
</tbody>
</table>  
          ) : (
<table>
<tbody>
<tr>
    <td rowspan="3"> **Singular**</td>
    <td> **1:a** </td>
    <td> *yo* </td>
    <th width="100px"> -**e** </th>
    <td> *hable* </td>
</tr>
<tr>
    <td> **2:a** </td>
    <td> *tú* </td>
    <th> -**es** </th>
    <td> *hables* </td>
  </tr>
<tr>
    <td> **3:e** </td>
    <td> *él*     
    *ella*       
    *ello*</td>
    <th> -**e** </th>
    <td> *hable* </td>
</tr>
<tr>
    <td rowspan="3"> **Plural**</td>
    <td> **1:a**</td>
    <td> *nosotros*</td>
    <th> -**emos** </th>
    <td> *hablemos* </td>
</tr>
<tr>
    <td> **2:a** </td>
    <td> *vosotros* </td>
    <th> -**éis** </th>
    <td> *habléis* </td>
  </tr>
<tr>
    <td> **3:e** </td>
    <td> *ellos* </td>
    <th> -**en** </th>
    <td> *hablen* </td>
</tr>
</tbody>
</table>  
*/