import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/A.module.css'

export default function User({user}) {
    const { query } = useRouter();

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User with id {query.id}</h1>
                <div>Name - {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json();
    return {
        props: {user}
    }
}