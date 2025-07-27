import Nav from '../UI/molecules/Nav/Nav.js'
import { useHomePage } from '../Application/hooks/Pages/HomePage/useHomePage.js'

export const Home = () => {
  const { state, services } = useHomePage?.() || {} // TODO: implement useHomePage hook
  const left = "TODO: implement left component"
  const middle = "TODO: implement middle component"
  const right = "TODO: implement right component"
  return (
    <>
      <Nav /* slots=\{{ left middle, right }} */ />
      {/* Implement Body */}
      {/* Implement Footer */}
    </>
  )
}
export default Home