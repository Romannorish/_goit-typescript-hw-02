import css from "./Loader.module.css";
import {DNA} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.load}>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loader