import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import DOMPurify from "dompurify";
import BlogPeekerPost from "../../components/blogComponents/blogPeekerPost";
import router from "next/router";
// Define the structure of a post object
interface Post {
  id: string;
  content: string;
  header: string;
  // for future reference if you want to add more fields add them here
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Use the Post interface

  useEffect(() => {
    // Get all posts from the database
    const postRef = collection(db, "posts");

    // Get all documents in the posts collection
    getDocs(postRef)
      .then((snapshot) => {
        const postsData: Post[] = []; // Use the Post interface
        snapshot.forEach((doc: DocumentData) => {
          const postData = { id: doc.id, ...doc.data() } as Post; // Cast to the Post type
          postsData.push(postData);
        });

        // Set the posts state to the array of posts
        setPosts(postsData);
      })
      .catch((error) => {
        console.error("Error getting documents:", error);
      });
  }, []);

  // Function to sanitize and create markup for dangerouslySetInnerHTML
  const createMarkup = (htmlContent: string) => {
    console.log({ __html: DOMPurify.sanitize(htmlContent) });
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  return (
    <>
      <title>Blog</title>
      <header className="z-10 text-xl md:text-2xl py-4 bg-zinc-900 text-center text-white sticky top-0">
        <div className="flex flex-wrap justify-center px-2">
          <a href="#contact" className="px-2 py-1">
            Contact
          </a>
          <a href="#bio" className="px-2 py-1">
            About Me
          </a>
          <button
            className="px-2 py-1"
            type="button"
            onClick={() => router.push("/blog")}
          >
            Blog
          </button>
          <button
            className="px-2 py-1"
            type="button"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </header>
      <div>
        <h1 className="text-3xl font-bold">Blog</h1>
        {/* Loop through all posts and display them */}
        {posts.map((post: Post) => (
          <>
            <BlogPeekerPost
              header={post.header}
              id={post.id}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Blog;
