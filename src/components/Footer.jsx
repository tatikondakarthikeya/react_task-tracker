import GitHubButton from 'react-github-btn';

function Footer() {
  return (
    <footer className="safari_only py-3 text-white text-center">
      <p>
        Support us or Contribute on{" "}
        <a
          href="https://github.com/tatikondakarthikeya/task_tracker"
          target="_blank"
          rel="noreferrer"
          className="text-primary text-decoration-none mx-2"
        >
          GitHub &#10084;&#65039;
        </a>
      </p>
      <GitHubButton
        href="https://github.com/tatikondakarthikeya/task_tracker"
        className="p-0 m-0"
      >
        Give us a Star
      </GitHubButton>
    </footer>
  );
}

export default Footer;
