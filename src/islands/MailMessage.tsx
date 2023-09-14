export default function MailMessage(props: { title: string }) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>这是一封测试邮件</p>
    </div>
  );
}
