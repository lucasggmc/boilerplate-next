//import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React avançado' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
