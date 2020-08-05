export default addName = e => ({
    type:"ADD_NAME",
    payload: { name: e.target.name, age: e.target.age}
})

export default updateName = id => ({
    type: "SELECT_FAVE_NAME",
    payload: id
})