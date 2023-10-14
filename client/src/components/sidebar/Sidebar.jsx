import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque tenetur harum deleniti vero officiis error provident debitis.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Life">
                    Life
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Music">
                    Music
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Sport">
                    Sport
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Style">
                    Style
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Tech">
                    Tech
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link className="link" to="/posts?cat=Cinema">
                    Cinema
                    </Link>
                </li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i> 
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
