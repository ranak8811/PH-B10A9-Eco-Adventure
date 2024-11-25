import useTitle from "../../public/PageTitle/title";

const LoadingPage = () => {
  useTitle("Loading Page");
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
};

export default LoadingPage;
