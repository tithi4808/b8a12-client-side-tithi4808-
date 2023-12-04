import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const AssetList = () => {
  const loadedData = useLoaderData();

  
  const [searchTerm, setSearchTerm] = useState('');

  
  const [stockStatusFilter, setStockStatusFilter] = useState('all'); 
  const [assetTypeFilter, setAssetTypeFilter] = useState('all'); 

  
  const [sortBy, setSortBy] = useState('quantity'); 

  
  const [filteredProducts, setFilteredProducts] = useState(loadedData);

  
  useEffect(() => {
   
    const filteredBySearch = loadedData.filter((product) => {
        const productName = product['Product_Name'];
        
        return typeof productName === 'string' &&
          productName.toLowerCase().includes(searchTerm.toLowerCase());
      });

    
    const filteredByStockStatus =
      stockStatusFilter === 'all'
        ? filteredBySearch
        : filteredBySearch.filter((product) =>
            stockStatusFilter === 'available'
              ? product['Product_Quantity'] > 0
              : product['Product_Quantity'] === 0
          );

  
    const filteredByAssetType =
      assetTypeFilter === 'all'
        ? filteredByStockStatus
        : filteredByStockStatus.filter(
            (product) =>
              (assetTypeFilter === 'returnable' &&
                product['Asset_Type'] === 'Returnable') ||
              (assetTypeFilter === 'nonReturnable' &&
                product['Asset_Type'] === 'Non-Returnable')
          );

    
          const sortedProducts = filteredByAssetType.sort((a, b) => {
            return sortBy === 'less'
              ? a['Product_Quantity'] - b['Product_Quantity']
              : b['Product_Quantity'] - a['Product_Quantity'];
          });

    setFilteredProducts(sortedProducts);
  }, [loadedData, searchTerm, stockStatusFilter, assetTypeFilter, sortBy]);

  return (
    <div className='px-40'>
<div>
    <div className='border-2 py-4 mb-10'>
     <form onChange={(e) => setSearchTerm(e.target.value)} action="">
     <label>Search by name:  </label>
      <input className='border-2'
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        
      /></form>
     </div>
     
     <div className='flex mb-10 '>
     

     
     <div>
        <label>Stock Status:</label>
        <select
          value={stockStatusFilter}
          onChange={(e) => setStockStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="outOfStock">Out of Stock</option>
        </select>

       
      </div>


      <div>
      <label>Asset Type:</label>
        <select
          value={assetTypeFilter}
          onChange={(e) => setAssetTypeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="returnable">Returnable</option>
          <option value="nonReturnable">Non-Returnable</option>
        </select>
        </div>

      <div className='bg-blue-100 border-2 '>
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="less">Low to High</option>
          <option value="much">High to low</option>
        </select>
      </div>

      

      
     


     </div>
      
     </div>

      {/* List Section */}
      <table className="min-w-full">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Quantity</th>
      <th>Date Added</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody >
    {filteredProducts.map((product) => (
      <tr key={product['Product_Name']}>


        <td className='my-4'>{product['Product_Name']}</td>
        <td className='my-4'>{product['Product_Type']}</td>
        <td className='my-4'>{product['Product_Quantity']}</td>
        <td className='my-4'>{product['Date_Added']}</td>
        <td  className=" my-4 flex gap-8">
          <button className='mx-4 btn'>Update</button>
          <button className='btn'>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default AssetList;
