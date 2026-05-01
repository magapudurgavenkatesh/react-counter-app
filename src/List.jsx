function List(){
    const fruits=[{id:1,name:"apple",calories:95},
                 {id:2,name:"bananna",calories:45},
                 {id:3,name:"orange",calories:50},
                 {id:4,name:"grapes",calories:80}];
    fruits.sort((a,b)=>a.name.localeCompare(b.name));

    const listItems=fruits.map(fruit => <li key={fruits.id}>
                                        {fruit.name}:&nbsp;
                                        <b>{fruit.calories}</b></li>);
    return(<ul>{listItems}</ul>);
}
export default List