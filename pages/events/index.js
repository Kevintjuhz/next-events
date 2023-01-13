import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

function ALlEventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    const handleSearch = (year, month) => {
        const fullPath =`/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <>
            <EventsSearch onSearch={handleSearch} />
            <EventList items={events} />
        </>
    )
}

export default ALlEventsPage