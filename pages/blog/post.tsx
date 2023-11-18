import React, { useState, useEffect } from "react";
import BlogForm from "../../components/blogComponents/blogForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase"; // Import your Firebase auth instance
import { useRouter } from "next/router";

const Blog = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Subscribe to auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const email = user.email;
        if (email === "dtkunjadia@gmail.com") {
          setIsAdmin(true);
        }
      } else {
        router.push("/login");
      }
    });
  }, []);
  if (isAdmin) {
    return (
      <>
        <title>Blog</title>
        <BlogForm />
      </>
    );
  } else {
    return (
      <>
        <title>Blog</title>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <p className="text-2xl">
            you are not authorized to view this page, please login with the
            correct google credentials :D
          </p>
        </div>
      </>
    );
  }
};

export default Blog;
