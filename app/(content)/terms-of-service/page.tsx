import { Styles } from "@/app/styles";
import { TermsPolicies } from "@/constants";
import React from "react";

const TermsOfService = () => {
  return (
    <iframe
      src={TermsPolicies.Terms_of_service_url}
      className={`${Styles.fullScreenIFrame}`}
    />
  );
};

export default TermsOfService;
