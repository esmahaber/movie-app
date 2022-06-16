import Footer from '../components/Footer'
import Header from '../components/Header'

type Props = {
    children: JSX.Element,
  };

function GridLayout({children}: Props) {
  return (
    <div className="grid-container">
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default GridLayout;