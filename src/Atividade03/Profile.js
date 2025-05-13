// export default function Profile() {
//     return (
//         <img
//             src="https://i.imgur.com/MK3eW3Am.jpg"
//             alt="Katherine Johnson"
//         />
//     );
// }



// function Avatar() {
//     return (
//         <img
//             className="avatar"
//             src="https://i.imgur.com/1bX5QH6.jpg"
//             alt="Lin Lanying"
//             width={100}
//             height={100}
//         />
//     )
// }

// export default function Profile() {
//     return (
//         <Avatar />
//     );
// }


import { getImageUrl } from "./utils";
function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'Yfe0qp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OK567lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    )
}