import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Hourglass
      visible={true}
      height="45"
      width="45"
      ariaLabel="hourglass-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'25px',
      }}
      wrapperClass=""
      colors={['#ceb130', '#ceb130']}
    />
  );
};
