import ListItem from "./ListItem"

export default function AccordianList({listData, toggleShow, expandedItem }) {
    return (

        <ul>
            {listData.length === 0 && "no data"}
            {listData.map((item) => {
                return (
                    <ListItem 
                        {...item}
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        toggleShow={toggleShow}
                        expandedItem={expandedItem}
                    />
                )
            })}
        </ul>
    )
}