export default function Contact() {
  return (
    <form style={{ padding: 40 }}>
      <h2>Contact Me</h2>
      <input placeholder="Name" /><br />
      <input placeholder="Email" /><br />
      <textarea placeholder="Message" /><br />
      <button>Send</button>
    </form>
  );
}
