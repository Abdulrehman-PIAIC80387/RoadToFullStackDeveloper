import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/apiClient";

export default function PostsCrud() {
  const queryClient = useQueryClient();
  const [post, setPost] = useState({ title: "", body: "", userId: 1 });


  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: api.getPosts,
  });


  const createMutation = useMutation({
    mutationFn: api.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      alert("Post created!");
    },
  });

 
  const updateMutation = useMutation({
    mutationFn: ({ id, form }) => api.updatePost(id, form),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      alert("Post updated!");
    },
  });


  const deleteMutation = useMutation({
    mutationFn: api.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      alert("Post deleted!");
    },
  });

  if (isLoading) return <p>Loading Posts...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>CRUD — JSONPlaceholder + React Query</h2>

   
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (post.id) {
            updateMutation.mutate({ id: post.id, form: post });
          } else {
            createMutation.mutate(post);
          }

          setPost({ title: "", body: "", userId: 1 });
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <button type="submit">{post.id ? "Update" : "Create"}</button>
      </form>

      <br />

     
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
              <td>
                <button onClick={() => setPost(p)}>✏ Edit</button>
                <button onClick={() => deleteMutation.mutate(p.id)}>🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
