import { Link, routes } from '@redwoodjs/router'
import { Header, Footer } from "shared/index"

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BlogLayout
