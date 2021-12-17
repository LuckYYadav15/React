import MeetupList from "../meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: '../images/street_1.jpeg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing mmetup which you definitely should not miss. It will be great if you read it.'
    },
    {
        id: 'm2',
        title: 'This is second meetup',
        image: '../images/street_2.jpeg',
        address: 'Meetupstreet 12, 67890 Meetup City',
        description: 'This is a second, amazing mmetup which you definitely should not miss. It will be great if you read it.'
    }
]

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
}

export default AllMeetupsPage;