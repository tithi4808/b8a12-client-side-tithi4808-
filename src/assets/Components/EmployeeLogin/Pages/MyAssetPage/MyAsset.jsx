import React, { useState, useEffect,useContext } from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';


const MyAsset = () => {


  const {User}=useContext(AuthContext)
  const[member,setmember]=useState("")
  const currentemail=User?.email
  
  console.log(User)
  useEffect(()=>{
    if(User?.email)
    {
      fetch('https://b8a12-server-side-tithi4808.vercel.app/fullteams')
    .then(res=>res.json())
    .then(data=>{
      
        const email=data.find(id=>id.email===User.email)
      setmember(email.email)
      
    })
    }
  },[User?.email])


  
  const [searchTerm, setSearchTerm] = useState('');

  
  const [requestStatusFilter, setRequestStatusFilter] = useState('all');
  const [assetTypeFilter, setAssetTypeFilter] = useState('all');

  
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://b8a12-server-side-tithi4808.vercel.app/requestassets'); 
        const data = await response.json();

        
        const filteredBySearch = data.filter((product) => {
          return product.Product_Name.toLowerCase().includes(searchTerm.toLowerCase());
        });

      
        const filteredByRequestStatus =
          requestStatusFilter === 'all'
            ? filteredBySearch
            : filteredBySearch.filter((product) => product.request_status === requestStatusFilter);

       
        const filteredByAssetType =
          assetTypeFilter === 'all'
            ? filteredByRequestStatus
            : filteredByRequestStatus.filter(
                (product) =>
                  (assetTypeFilter === 'returnable' && product.Asset_Type === 'Returnable') ||
                  (assetTypeFilter === 'nonReturnable' && product.Asset_Type === 'Non-Returnable')
              );

        setFilteredProducts(filteredByAssetType);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm, requestStatusFilter, assetTypeFilter]);

  const styles = {
    printingDate: {
      fontSize: 12,
      textAlign: 'center',
      position: 'absolute',
      bottom: 30, // Adjust the bottom margin as needed
      left: 0,
      right: 0,
    },
  };

  const PrintDocument = ({ product }) => (
    <Document>
      <Page>
        
        <Text>{"Company Name: XYZ Company"}</Text>
        <Text >{`Asset Type: ${product['Asset_Type']}`}</Text>
       
        <Text style={styles.printingDate}>{`Printing Date: ${new Date().toLocaleString()}`}</Text>
      </Page>
    </Document>
  );
  

  return (
    <div >
            {
                User && member==currentemail? <div>

<div className='max-w-6xl mx-auto'>



<div className='flex max-w-4xl mx-auto space-x-12 mb-10'>
<div className='border-2 px-2 py-4'>
  <form className='' onChange={(e) => setSearchTerm(e.target.value)} action="">
  <label>Search here:     </label>
    <input className='border-4' type="text" placeholder="Search by name..." value={searchTerm} />
  </form>
</div>
  <div className='border-2 px-2 py-4'>
    <label>Request Status:</label>
    <select
      value={requestStatusFilter}
      onChange={(e) => setRequestStatusFilter(e.target.value)}
    >
      <option value="all">All</option>
      <option value="pending">Pending</option>
      <option value="approved">Approved</option>
    </select>
  </div>

  <div className='border-2 px-2 py-4'>
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
</div>


<table className="min-w-full">
  <thead>
    <tr>
      <th>Asset Name</th>
      <th>Asset Type</th>
      <th>Request Date</th>
      <th>Approval Date</th>
      <th>Request Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
{filteredProducts.map((product) => (
       <tr key={product['_id']}>
        <td className='my-4'>{product['Product_Name']}</td>
        <td className='my-4'>{product['Asset_Type']}</td>
        <td className='my-4'>{product['requestDate']}</td>
        <td className='my-4'>{product['Aproval_Date']}</td>
        <td className='my-4'>{product['request_status']}</td>
        {
          product['request_status']=="pending"?<td className='my-4'><button className='btn'>Cancel</button></td> : <td className="my-4 flex gap-8">
          {product['request_status'] === 'approved' && (
            <PDFDownloadLink
              document={<PrintDocument product={product} />}
              fileName={`Asset_Details_${product['Product_Name']}.pdf`}
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : <button className='btn'>Print</button>
              }
            </PDFDownloadLink>
          )}
        </td>
        }
        
      </tr>
      
    
    ))}
    
  </tbody>
</table>
</div>

                


                </div>:<p className='text-4xl font-bold my-10'>OOPS!! You are not in the team.</p>
            }
            
        </div>
  );
};

export default MyAsset;

