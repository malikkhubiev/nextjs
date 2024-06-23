import A from "../components/A";
import MainContainer from '../components/MainContainer'
function Users({users}) {
  return (
    <MainContainer>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <A href={`/users/${user.id}`} text={user.name}></A>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export default Users;

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return {
        props: {users}
    }
}