const Nav = (props) => {
    return (
      <nav aria-label="Main Navigation" role="navigation">
        <ul className="top-nav">
          <li>
            <a href={props.refer}>Women's</a>
          </li>
          <li>
            <a href={props.refer}>Men's</a>
          </li>
          <li>
            <a href={props.refer}>On the Street</a>
          </li>
          <li>
            <a href={props.refer}>The Catwalk</a>
          </li>
          <li>
            <a href={props.refer}>AdWatch</a>
          </li>
          <li>
            <a href={props.refer}>About</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  const FooterNav = (props) => {
    return (
      <nav aria-label="Main Navigation" role="navigation">
        <ul className="footer-nav">
          <li>
            <a href={props.refer}>Home</a>
          </li>
          <li>
            <a href={props.refer}>Women's</a>
          </li>
          <li>
            <a href={props.refer}>Men's</a>
          </li>
          <li>
            <a href={props.refer}>On the Street</a>
          </li>
          <li>
            <a href={props.refer}>The Catwalk</a>
          </li>
          <li>
            <a href={props.refer}>AdWatch</a>
          </li>
          <li>
            <a href={props.refer}>About</a>
          </li>
          <li>
            <a href={props.refer}>Tips</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export { Nav, FooterNav };
  