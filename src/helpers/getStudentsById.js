export default function getStudentsById(state, propName, studentIndex) {
  return state[propName].filter((student) => student.index == studentIndex);
}
