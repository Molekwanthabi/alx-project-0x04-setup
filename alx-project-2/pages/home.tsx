
import { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

const HomePage = () => {
  // State to manage modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // State to store posts added by users
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  // Function to handle adding a new post
  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div>
      {/* Header with navigation */}
      <Header />

      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Home Page</h1>

        {/* Button to open modal */}
        <div className="flex justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Add New Post
          </button>
        </div>

        {/* Modal Component */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />

        {/* Display posts using Card component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
