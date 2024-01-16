import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.overlay}>
      <RotatingLines
        className={css.loader}
        visible={true}
        height="200px"
        width="400px"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
