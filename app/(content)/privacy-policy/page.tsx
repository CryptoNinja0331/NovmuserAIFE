import { Styles } from "@/app/styles";
import { TermsPolicies } from "@/constants";

const PrivacyPolicy = () => {
  return (
    <iframe
      src={TermsPolicies.Privacy_policy_url}
      className={`${Styles.fullScreenIFrame}`}
    />
  );
};

export default PrivacyPolicy;
