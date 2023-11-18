import React from "react";

// Define an interface for the component's props
interface BlogPeekerPostProps {
  header: string;
  id: string;
  admin: boolean;
}

// Adjust the component to accept props
const BlogPeekerPost: React.FC<BlogPeekerPostProps> = ({
  header,
  id,
  admin,
}) => {
  return (
    <div className="p-8 mt-5 ml-5 mr-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="font-bold text-2xl p-8 flex-grow">{header}</h1>
    </div>
  );
};

export default BlogPeekerPost;
