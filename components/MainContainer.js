import Head from 'next/head';
import A from './A'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={ "study" + keywords }></meta>
                <title></title>
            </Head>
            <div>
                <A href={'/'} text="Main"/>
                <A href={'/users'} text="Users"/>
            </div>
            <div>
                {children}
            </div>

            
          <style jsx>
            {`
              .navbar {
                background: grey;
                padding: 15px;
              }
            `}
          </style>
        </>

    )
}

export default MainContainer;