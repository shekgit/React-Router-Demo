import React, {createContext} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CompanyDataContext = createContext();

const CompanyContext = ({children}) => {

    const companyData = {
        headline: "Where React Meets Revolution",
        subhead: "We don't just code React—we craft digital experiences that transform businesses.",
        points: [
            "React Architects",
            "Pixel-Perfect Experiences",
            "Blazing-Fast Performance",
            "Your Growth Partner",
            "Innovation-Driven",
            "Scalable From Day One"
        ],
        cta: "Build Your Digital Future →"
    };

    return (
       <CompanyDataContext.Provider value={companyData}>
           {children}
       </CompanyDataContext.Provider>
    );
};

export default CompanyContext;