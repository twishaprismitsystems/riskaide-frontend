const PageLoading = () => {
  return (
    <>
      <div className="lds-roller-wrapper h-screen w-scree">
        <div className="lds-roller absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PageLoading;
