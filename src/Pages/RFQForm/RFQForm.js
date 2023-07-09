import React, { useState } from 'react';
import './RFQForm.css';

const RFQForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [domestic, setDomestic] = useState(false);
  const [isExport, setIsExport] = useState(false);
  const [customerRef, setCustomerRef] = useState('');
  const [enquiryDate, setEnquiryDate] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [ecn, setECN] = useState('');
  const [quoteSubmitDate, setQuoteSubmitDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="heading">
          <h2>RFQ-Form</h2>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Customer Name:</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Contact Person:</label>
            <input
              type="text"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />
          </div>

          <div className="checkbox-label">
            <label>Domestic:</label>
            <input
              type="checkbox"
              checked={domestic}
              onChange={(e) => setDomestic(e.target.checked)}
            />
          </div>

          <div className="checkbox-label">
            <label>Export:</label>
            <input
              type="checkbox"
              checked={isExport}
              onChange={(e) => setIsExport(e.target.checked)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Customer Ref:</label>
            <input
              type="text"
              value={customerRef}
              onChange={(e) => setCustomerRef(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Enquiry Date:</label>
            <input
              type="text"
              value={enquiryDate}
              onChange={(e) => setEnquiryDate(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Delivery Address:</label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>ECN:</label>
            <input
              type="text"
              value={ecn}
              onChange={(e) => setECN(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Quote Submit Date:</label>
            <input
              type="text"
              value={quoteSubmitDate}
              onChange={(e) => setQuoteSubmitDate(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>RFQ - Attributes</label>
            {/* <input type="text" /> */}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>1. Part Name:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>2. Part Number - MACH:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>3. Part Number - CAST:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>4. Project Name/Other Details:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>5. Aakar Foundry Enquiry No *1:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>6. Qty Per Annum (Nos):</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>7. Product Life (in Years):</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>8. Process Reqd (HPDC, LPDC, GDC):</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>9. Aluminum Alloy Specification:</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Cast Modification:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>10. Requirements - Raw or Machined:</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Mach Modification:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>11. Specific Product & QC requirements:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>12. Shot Blasting:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>13. Anodizing/Chromotising Required?</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>14. Powder Coating Required? What Colour?</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>15. Bought Out Material Details:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>16. Leak Testing & Pressure Requirement:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>17. Impregnation Required?</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>18. Heat Treatment Required?</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>19. Packaging - Corrugated/PP/Plastic/Exports Grade?</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>20. Delivery Location & Basis:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>21. (Ex-Works /FOB/CIF/DDP/DDU)    
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>22. Destination port / address   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>23. Annual Tonnage - MT    
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>24. Quote Currency (£, € , $ , INR)    
:</label>
            <input type="text" />
          </div>
        </div>
        

        <div className="form-row">
          <div className="form-group">
            <label>Risk Analysis:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Is there any risk associated with these fields:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Internal Estimation</label>
            {/* <input type="text" /> */}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Design and Foundary</label>
            {/* <input type="text" /> */}
          </div>
        </div>

        
        <div className="form-row">
          <div className="form-group">
            <label>1. Finished Wt (Machined) (Kg)   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>2. Net Raw Casting Wt (Kg)   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>3. Part Surface Area - in MM Square    
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>4. Die-Casting Process   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>5. No. of Impressions or Cavities    
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>6. Alternative Raw Material Suggested By Aakar   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>7. Die cost (Rs Lakhs)   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>8. Core Box Cost   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>9. Expected Die Life (Shots)   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>10. Die Manufacturing Period in Weeks    
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>11. No of shots/Hr   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>12. No. of Sand Cores Required   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>13. Total Sand Weight (Kg):</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Machine and Quality</label>
            {/* <input type="text" /> */}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>14. Machine Type - CNC/VMC/HMC Please Specify    
</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>15. Machining cost (Rs/Pc)   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>16. Machining Fixture cost (One time Inv)    
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>17. Inspection Gauges Cost   
</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>18. Leak testing fixture cost    
</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>19. Washing fixture cost   
</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>20. Plastic Protection Cap Costs (Specify Quantity & Cost)   
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>21.Packaging Cost-(Corrugated/PP/Plastic/Exports Grade)
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>New Product Development</label>
            {/* <input type="text" /> */}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>22. First Sample Date    
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>23. PSW /PPAP Date
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>24. Capital Investment for machines      
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>25. Part Feasible        
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>26. Feasible with changes  
:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>27. Part Not Feasible        
:</label>
            <input type="text" />
          </div>
        </div>


        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RFQForm;
