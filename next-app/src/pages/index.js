export default function Home(props) {
  console.log(JSON.stringify(props, null,2))
  return <div>
    <h1>Hello world</h1>
    {Object.keys(props.headers).map((header, i) => <p>{header}: {props.headers[header]}</p>)}
  </div>
}

export async function getServerSideProps(context) {
  return {
    props: {
      headers: context.req.headers
    }
  }
}