import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";
export default function ({ user }) {
  const router = useRouter();
  return (
    <MainContainer keywords={"Не ОЖИДАЛАХАХАХАХАХ!"}>
      <div className={styles.user}>
        <h3>
          {" "}
          User: {user.id}, {user.name}{" "}
        </h3>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
