import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import FavoriteButton from "./FavoriteButton";
import CartIcon from "./CartIcon";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";

function Header() {
    return ( 
        <header className="bg-white py-5 border-b border-b-black/20">
           <Container className="flex items-center justify-between text-light-color">
                <div className="w-auto md:w-1/3 gap-2.5 flex items-center justify-start md:gap-0">
                  <MobileMenu />
                  <Logo/>
                </div>
                <HeaderMenu/>
                <div className="w-auto md:w-1/3 flex items-center justify-end gap-8">
                  <SearchBar/>
                  <CartIcon/>
                  <FavoriteButton/>
                  <SignIn />
                </div>
           </Container>
        </header>
     );
}

export default Header;