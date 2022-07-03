import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Arruda"
            content="Dolor sit amet consectetur adipisicing elit. Praesentium vel architecto aperiam eius expedita amet ut sapiente velit placeat! Vero, nihil? Illo molestias vitae architecto dolores unde et perspiciatis soluta!"
          />
          <Post
            author="Lorem Ipsum"
            content="Dolor sit amet, consectetur adipisicing elit. Deleniti fugit, necessitatibus libero, provident sit placeat nesciunt nostrum ad, quidem error rem deserunt quibusdam beatae maiores temporibus cumque quia voluptatibus illum!"
          />
        </main>
      </div>
    </div>
  );
}
