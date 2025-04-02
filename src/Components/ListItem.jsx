export default function ListItem({id, title, content, toggleShow, expandedItem}) {
const isOpen = expandedItem === id;

    return (
            <li  onClick={()=> toggleShow(id)}>
              <h3>{title}</h3>
              {isOpen && <p>{content}</p>}
            </li>
    )
}