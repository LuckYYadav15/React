// import { response } from "express";
// import res from "express/lib/response";
import { useState, useEffect } from "react";
import MeetupList from "../meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image: '../images/street_1.jpeg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description: 'This is a first, amazing mmetup which you definitely should not miss. It will be great if you read it.'
//     },
//     {
//         id: 'm2',
//         title: 'This is second meetup',
//         image: '../images/street_2.jpeg',
//         address: 'Meetupstreet 12, 67890 Meetup City',
//         description: 'This is a second, amazing mmetup which you definitely should not miss. It will be great if you read it.'
//     }
// ]

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-7d7a3-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setLoadedMeetups(data);
            });
    }, []);//empty array beacuse we din't used any dependeny in useEffect function


    if (isLoading) {
        return (
            <section>
                <p>Loading.....</p>
            </section>
        );
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;