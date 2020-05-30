import React, { useState } from 'react';
import brands from '../json/Brands.json';
import subBrands from '../json/SubBrands.json';
console.log('brands: ', brands);
console.log('subBrands: ', subBrands);

export default (props) => {
  const [brand, setBrand] = useState(brands[0].BrandCode);

  const handleBrandCodeSubmit = (e) => setBrand(e.target.value);

  const formatSubBrands = () => {
    console.log('format sub brand with brand ', brand);

    console.log('formatted: ', subBrands.filter(b => b.BrandCode === brand));

    return subBrands.filter(b => b.BrandCode === brand).map(item => (
      <option key={item.ID} value={item.BrandCode}>{item.BrandName}</option>
    ));
  }

  return (
    <li>
      <h2>{ props.item.BrandName }</h2>
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
      <select name="brands" id="brands">
        { formatSubBrands() }
      </select>
      <br />
      <button onClick={handleBrandCodeSubmit}>Override</button>
    </li>
  );
};
