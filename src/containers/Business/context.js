import React, { useState } from "react";
import { useApiContext } from "../../context";
export const BusinessContext = React.createContext();

const initialState = {
  business_type: null,
  name: null,
  description: null,
  headquarters: null,
  ceo_name: null,
  ceo_gender: null,
  ceo_image: null,
  company_logo: null,

  // ====== ECOSYSTEM ======
  ecosystem: null,
  sub_ecosystem: null,
  // sub_segment: null,
  sub_ecosystem_sub_class: null,
  selectedEcosystemNames: null,
  selectedSubEcosystemNames: null,
  selectedSubClassNames: null,
  // ====== ECOSYSTEM ======

  sector: null,
  address: undefined,
  state: null,
  business_level: null,
  num_supported_business: null,
  website: null,
  num_of_employees: null,
  funding: null,
  funding_currency: null,
  funding_currency_value: null,
  company_valuation: null,
  currency: null,
  currency_value: null,
  email: null,
  phone: null,
  facebook: null,
  instagram: null,
  linkedin: null,
  twitter: null,
  cac_doc: null,
  is_entrepreneur: false,
  is_ecosystem: false,
  is_active: true,
  is_startup: null,
};

const BusinessProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const { organization } = useApiContext();

  const addBusiness = async businessData => {
    const res = await organization.addBusiness(businessData);

    if (res.status && res.status === 200) {
      console.log("DATA", res.data);
    }
  };

  const clearBusinessData = () => {
    console.log("Cleared Business Data");
    setState(initialState);
  };

  return (
    <BusinessContext.Provider
      value={{ state, clearBusinessData, setState, addBusiness }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessProvider;
