import React, { useState, useEffect } from 'react';

function CompanyList() {
  const [companydata, setCompanyData] = useState([]);

  useEffect(() => {
    fetch('/companies.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setCompanyData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {companydata?.map((record) => (
        <div key={record.id}>
          <h2>{record.name}</h2>
          <p>ID: {record.id}</p>
          <p>Industry: {record.industry}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;