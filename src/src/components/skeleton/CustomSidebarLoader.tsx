const CustomSidebarLoader = () => {
  const generateDummyUsers = [...Array(9)];

  return (
    <>
      {generateDummyUsers.map(() => (
        <div className=" flex items-center my-3 animate-pulse">
          <div>
            <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
            <div className="relative -top-3 -right-8 w-2.5 h-2.5 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <span className="ml-3 w-24 h-4 bg-gray-100 rounded"></span>
            <span className="ml-3 w-16 h-3 bg-gray-100 rounded"></span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomSidebarLoader;
