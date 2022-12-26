import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <TailSpin
      height="30"
      width="30"
      color="green"
      ariaLabel="tail-spin-loading"
      radius="1"
      visible={true}
    />
  );
};

export default Spinner;
