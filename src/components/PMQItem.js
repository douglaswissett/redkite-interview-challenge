import React, { useState } from 'react';
import brands from '../json/Brands.json';
import subBrands from '../json/SubBrands.json';


export default (props) => {
  const [brand, setBrand] = useState('');

  const handleBrandCodeSubmit = (e) => setBrand(e.target.value);

  const formatSubBrands = () => {
    return subBrands.filter(b => b.BrandCode.toString() === brand.toString()).map(item => (
      <option key={item.ID} value={item.BrandCode}>{item.IndividualBrandVariantName}</option>
    ));
  }

  return (
    <li className="row-item">
      <h2>{ props.item.BrandName }</h2>
      <label className="row-label">Brand </label>
      <select
        name="brands"
        id="brands"
        onChange={handleBrandCodeSubmit}
        value={brand}
      >
        {
          brands.map(item => (
            <option key={item.ID} value={item.BrandCode}>{item.BrandName}</option>
          ))
        }
      </select>
      <br />
      <label className="row-label">Subbrand </label>
      <select
        name="subBrands"
        id="subBrands">
        { formatSubBrands() }
      </select>
    </li>
  );
};
