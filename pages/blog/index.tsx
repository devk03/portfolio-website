import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import BlogPeekerPost from "../../components/blogComponents/blogPeekerPost";
import router from "next/router";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { handleSignOut } from "../../components/general/signOut";
// Define the structure of a post object
interface Post {
  id: string;
  content: string;
  header: string;
  // for future reference if you want to add more fields add them here
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Use the Post interface
  const [isAdmin, setIsAdmin] = useState(false);

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

  useEffect(() => {
    // Subscribe to auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const email = user.email;
        if (email === "dtkunjadia@gmail.com") {
          setIsAdmin(true);
        }
      }
    });
  }, []);

  return (
    <>
      <title>Blog</title>
      <div className="bg-sky-200  h-screen ">
        <header className="z-10 text-xl md:text-2xl py-4 bg-zinc-900 text-center text-white sticky top-0">
          <div className="flex flex-wrap justify-center px-2">
            <button
              className="px-2 py-1"
              type="button"
              onClick={() => router.push("/")}
            >
              Home
            </button>
            {!isAdmin && ( // If the user is not logged in, render the Admin-Login button
              <button
                className="px-2 py-1"
                type="button"
                onClick={() => router.push("/login")}
              >
                Admin-Login
              </button>
            )}
            {isAdmin && ( // If the user is not logged in, render the Admin-Login button
              <button
                className="px-2 py-1"
                type="button"
                onClick={() => handleSignOut(auth, { isAdmin, setIsAdmin })}
              >
                Logout
              </button>
            )}
          </div>
        </header>
        <h1 className="text-5xl font-bold text-center py-10">
          Welcome to My Blog!
        </h1>
        <div>
          {/* Loop through all posts and display them */}
          {isAdmin && (
            <button
              type="button"
              onClick={() => router.push("/blog/post")}
              className="mx-auto flex items-center justify-center bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Make A New Post
            </button>
          )}
          {posts.map((post: Post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <BlogPeekerPost
                header={post.header}
                id={post.id}
                admin={isAdmin}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
