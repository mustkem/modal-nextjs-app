import Link from "next/link";
import { connect } from "react-redux";

const Page = ({ title, linkTo, posts }) => (
  <div>
    <h1>{title}</h1>
    <div>
      {posts.data &&
        posts.data.map((item) => {
          return <div>{item.name}</div>;
        })}
    </div>
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
);

export default connect((state) => state)(Page);
