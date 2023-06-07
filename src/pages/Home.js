import Post from "../components/Post";

export default function Home() {
  const posts = [
    {
      text: "This is a text",
      user: "albin",
      date: "2023-06-07",
      time: "16:48",
      img: "https://fastly.picsum.photos/id/728/200/200.jpg?hmac=ewJNfbVjP_8FUokKp00XS9m2FOzyZbpNE5rG97r7cdw",
    },
    {
      text: "Another post",
      user: "emma",
      date: "2023-06-06",
      time: "10:30",
      img: "https://fastly.picsum.photos/id/23/200/200.jpg?hmac=IMR2f77CBqpauCb5W6kGzhwbKatX_r9IvgWj6n7FQ7c",
    },
    {
      text: "Hello, world!",
      user: "john",
      date: "2023-06-05",
      time: "20:15",
      img: "https://fastly.picsum.photos/id/860/200/200.jpg?hmac=xEnSgZhxWVFOWiVCBQzYpKUH7S5nFb7-QTZ8Hfqwq4M",
    },
    {
      text: "A new day begins",
      user: "sarah",
      date: "2023-06-04",
      time: "09:00",
      img: "https://fastly.picsum.photos/id/108/200/200.jpg?hmac=JbZfKLS2wWv420Eq9HSIstvyiTaniwUcJjhDeOdwc88",
    },
  ];

  return (
    <>
      {posts.map(post => (
        <Post key={post.date} post={post} />
      ))}
    </>
  );
}
