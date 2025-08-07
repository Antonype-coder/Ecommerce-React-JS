import Loading from '../components/Loading/Loading';

const withLoader = (Component) => {
  return function WrappedComponent({ loading, ...props }) {
    if (loading) return <Loading />;
    return <Component {...props} />;
  };
};

export default withLoader;
