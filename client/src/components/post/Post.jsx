import { Link } from "react-router-dom";
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="data:image/jpeg;base64,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" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                    <Link className="link" to="/posts?cat=Music">
                        Music
                    </Link>
                </span>
                <span className="postCat">
                    <Link className="link" to="/posts?cat=Music">
                        Life
                    </Link>
                </span>
            </div>
            <span className="postTitle">
                <Link className="link" to="/post/abc">Lorem ipsum dolor sit.</Link>
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
    </div>
  )
}
