import FeaturedPosts from '@/components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

const Dummy_Posts = [
  {
    title:'Post 1 Next js', image:'pexels-marlon-schmeiski-5704362.jpg' , excerpt:'NextJS is a React framework for production - it makes building fullstack raect apps and site with server side rendering ' , data:'2023-4-19' ,slug:'getting-started-with-nextjs'
  },
  {
    title:'Post 1 Next js', image:'pexels-harrison-macourt-6708369.jpg' , excerpt:'NextJS is a React framework for production - it makes building fullstack raect apps and site with server side rendering ' , data:'2023-4-19' ,slug:'getting-started-with-nextjs2'
  },
  {
    title:'Post 1 Next js', image:'pexels-marlon-schmeiski-5704362.jpg' , excerpt:'NextJS is a React framework for production - it makes building fullstack raect apps and site with server side rendering ' , data:'2023-4-19' ,slug:'getting-started-with-nextjs3'
  },
  {
    title:'Post 1 Next js', image:'pexels-harrison-macourt-6708369.jpg' , excerpt:'NextJS is a React framework for production - it makes building fullstack raect apps and site with server side rendering ' , data:'2023-4-19' ,slug:'getting-started-with-nextjs4'
  }
]
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={Dummy_Posts} />
    </>
  )
}
