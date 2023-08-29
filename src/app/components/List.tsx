// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist',
//     'Bilal Afridi'
//   ];


// export default function List(){
// const listItems = people.map(people => <li>{people}</li>)
//     return <ul>{listItems}</ul>;
// }

interface People{
    id: number;
    name: string;
    profession: string;
}

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  

export default function List(){
    const chemists = people.filter(people => people.profession === "chemist")
    const listItems = chemists.map(people => 
            <li key={people.id}>
                <img src={`https://i.imgur.com/${people.imageId}s.jpg`} alt={people.name}/>
                <p>
                    <b>{people.name}</b>
                    {" " + people.profession + " "}
                    Known For {people.accomplishment}

                </p>
            </li>
        )
        return <ul>{listItems}</ul>
    }
    