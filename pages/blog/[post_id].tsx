import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getFirestore, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import DOMPurify from "dompurify";
import { extractTimeAndDate } from "../../components/blogComponents/timeStamp";
import { auth } from "../../firebase"; // Import your Firebase auth instance
import { onAuthStateChanged } from "firebase/auth";

type BlogPost = {
  id: string;
  header: string;
  content: string;
  timeStamp: string;
};

const BlogPostPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const { post_id } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [timeStamp, setTimeStamp] = useState<any>("");

  const HandleDelete = async (post_id: string) => {
    try {
      await deleteDoc(doc(db, "posts", post_id));
      console.log("Document successfully deleted!");
      router.push("/blog");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };
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
  const createMarkup = (htmlContent: string) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  useEffect(() => {
    const fetchPost = async () => {
      // Ensure post_id is a string
      const postId = Array.isArray(post_id) ? post_id[0] : post_id;

      if (postId) {
        // Check if postId is not null or undefined
        try {
          const postRef = doc(db, "posts", postId);
          const docSnap = await getDoc(postRef);
          if (docSnap.exists()) {
            // Use the data from the document
            setPost({
              id: docSnap.id,
              ...docSnap.data(),
            } as BlogPost);
            setTimeStamp(extractTimeAndDate(docSnap.data().timeStamp));
            console.log(timeStamp);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
    };

    fetchPost();
  }, [post_id]); // This will re-run when post_id changes

  if (!post) {
    return <div>Loading... {post_id}</div>;
  }

  return (
    <div className="min-h-screen bg-sky-100">
      <header className="z-10 text-xl md:text-2xl py-4 bg-zinc-900 text-center text-white sticky top-0">
        <div className="flex flex-wrap justify-center px-2">
          <button
            className="px-2 py-1"
            type="button"
            onClick={() => router.push("/")}
          >
            Home
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
      <h1 className="text-4xl font-bold text-center my-8">{post.header}</h1>
      <p className="text-2xl font-bold text-center my-8">{timeStamp["date"]}</p>

      <div
        dangerouslySetInnerHTML={createMarkup(post.content)}
        className="mx-auto p-5 max-w-4xl bg-white shadow-lg rounded-lg my-10"
      />
      {isAdmin && (
        <div className="flex items-center">
          <button
            className="bg-red-500 shadow-lg mx-auto hover:bg-red-700 text-white font-bold p-2 rounded"
            onClick={() => {
              // Convert post_id to string if it is not undefined or an array
              const postId = Array.isArray(post_id) ? post_id[0] : post_id;
              if (postId) {
                HandleDelete(postId);
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
