import css from "./css/Sidebar.module.css"

export default function Sidebar() {
    return (
        <div className={css.sidebar}>
            <a href = "#." target= "_blank">My Photos</a>
            <a href = "#." target= "_blank">My Illustrations</a>
            <a href = "#." target= "_blank">My Paintings</a>
        </div>
    )
};
