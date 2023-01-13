import EventItem from "./event-item";
import classes from "./event-list.module.css"

function EventList({ items }) {

    const renderedItems = items.map((event) => {
        return <EventItem
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
            key={event.id}
        />
    })

    return <ul className={classes.list}>
        {renderedItems}
    </ul>
}

export default EventList;