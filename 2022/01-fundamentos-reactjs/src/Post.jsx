export function Post(props) {
  return (
    <p>
      <strong>{props.author}</strong> - {props.content}
    </p>
  );
}
