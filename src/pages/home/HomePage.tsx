import { Advantages } from '../../components/Advantages';
import { Goods } from '../../components/Goods';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Advantages />
      <Goods />
      <Search />
    </div>
  )
}