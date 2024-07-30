import React, { useEffect, useState } from "react";

interface IBlogsProps {}

const Blogs: React.FunctionComponent<IBlogsProps> = (props) => {
  useEffect(() => {
    document.title = "Shashwat | Blogs";
  }, []);

  return (
    <div className="text-center mt-4 mb-4">
      <h1>Blogs Coming Soon</h1>
      <p>
        We are working hard to bring you insightful articles and the latest
        updates. Stay tuned!
      </p>
    </div>
  );
};

export default Blogs;
