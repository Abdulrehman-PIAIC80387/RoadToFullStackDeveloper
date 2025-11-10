import { useQuery } from "@tanstack/react-query";

/* ---------------------- Service Layer (same file) ---------------------- */
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

/* ---------------------- UI Component ---------------------- */
const FetchRQ = () => {
  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isPending) return <p>Loading…</p>;
  if (error) return <p>Failed to fetch posts</p>;

  return (
    <section>
      <h2>Posts</h2>
      <ul>
        {posts?.map(({ id, userId, title }) => (
          <li key={id}>
            <p>User ID: {userId}</p>
            <p>Title: {title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FetchRQ;
