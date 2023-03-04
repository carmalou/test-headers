import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

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

  const searchParams = new URLSearchParams(buf.toString('utf-8'))
  
  const packet = Array.from(searchParams.entries()).reduce((acc: Record<string, string>, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

  console.log('PACKET', packet)
  
  return {
    props: {
      session: buf.toString('utf-8')
    }
  }
}