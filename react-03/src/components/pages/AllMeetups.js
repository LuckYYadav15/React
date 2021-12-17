const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://en.wikipedia.org/wiki/Munich#/media/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing mmetup which you definitely should not miss. It will be great if you read it.'
    },
    {
        id: 'm2',
        title: 'This is second meetup',
        image: 'https://en.wikipedia.org/wiki/Munich#/media/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        address: 'Meetupstreet 12, 67890 Meetup City',
        description: 'This is a second, amazing mmetup which you definitely should not miss. It will be great if you read it.'
    }
]

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                {DUMMY_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>
                })}
            </ul>
        </section>
    );
}

export default AllMeetupsPage;