import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Bruno Arruda"
        content="Dolor sit amet consectetur adipisicing elit. Praesentium vel architecto aperiam eius expedita amet ut sapiente velit placeat! Vero, nihil? Illo molestias vitae architecto dolores unde et perspiciatis soluta!"
      />
      <Post
        author="Lorem Ipsum"
        content="Dolor sit amet, consectetur adipisicing elit. Deleniti fugit, necessitatibus libero, provident sit placeat nesciunt nostrum ad, quidem error rem deserunt quibusdam beatae maiores temporibus cumque quia voluptatibus illum!"
      />
    </div>
  );
}
