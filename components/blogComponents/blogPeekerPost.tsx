import React from "react";

// Define an interface for the component's props
interface BlogPeekerPostProps {
  header: string;
  id: string;
}

// Adjust the component to accept props
const BlogPeekerPost: React.FC<BlogPeekerPostProps> = ({
  header,
  id,
}) => {

  return (
    <div className="p-8 mt-5 ml-5 mr-5 bg-gray-100 rounded-lg shadow-lg"> {/* Updated padding here */}
      <h1 className="font-bold text-2xl p-8">{header}</h1> {/* Updated padding here */}
    </div>
  );
};

export default BlogPeekerPost;
