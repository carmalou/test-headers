import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>
    <h1>Hello POST world</h1>

    <p>Session: {props.session}</p>
  </div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const buf = context.req.read()

  if(!buf) {
    return {
      props: {
        session: 'NO SESSION DATA AVAILABLE'
      }
    }
  }
  
  return {
    props: {
      session: buf.toString('utf-8')
    }
  }
}