import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import DOMPurify from 'dompurify';

// Define the structure of a post object
interface Post {
  id: string;
  content: string;
  header: string;
  // include other fields you expect to have
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Use the Post interface

  useEffect(() => {
    const colRef = collection(db, 'posts');

    getDocs(colRef)
      .then((snapshot) => {
        const postsData: Post[] = []; // Use the Post interface
        snapshot.forEach((doc: DocumentData) => {
          const postData = { id: doc.id, ...doc.data() } as Post; // Cast to the Post type
          postsData.push(postData);
        });
        setPosts(postsData);
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });
  }, []);

  // Function to sanitize and create markup for dangerouslySetInnerHTML
  const createMarkup = (htmlContent: string) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.header}</h2>
          <div dangerouslySetInnerHTML={createMarkup(post.content)} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
