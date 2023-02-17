import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(JSON.stringify(props, null,2))
  return <div>
    <h1>Hello world</h1>
    {Object.keys(props.headers).map((header, i) => <p key={i}>{header}: {props.headers[header]}</p>)}
  </div>
}

export async function getServerSideProps(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
  return {
    props: {
      headers: context.req.headers
    }
  }
}