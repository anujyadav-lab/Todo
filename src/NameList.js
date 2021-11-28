import React from "react"
import Person from "./Person"
export default NameList(){
    const persons=[
        {
            id:1,
            name:'andy',
            age:20,
            skill:'coding'
        },
        {
            id:2,
            name:'sandy',
            age:20,
            skill:'marketing'
        },
        {
            id:3,
            name:'wandy',
            age:20,
            skill:'sales'
        }
    ]
        const personList = persons.map(person=><person key={person.id} person={person}/>)

        return <div>{personList}</div>
}
