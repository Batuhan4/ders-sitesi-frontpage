import React from "react";
import logoimg from './images-page/testlavodlogo.png';
import bgimg from  './images-page/bg1.png';
class Home extends React.Component{
    render(){
        return(
            <div>
                   <div class="main">
      <nav>
        <a href="#">Anasayfa</a>
        <a href="pages/singin/index.html">Fizik</a>
        <a href="pages/singin/index.html">Matematik</a>
        <a class="kayit" href="#">Kayıt ol</a>
        <div class="animation start-home"></div>
        <a href="pages/singin/index.html"><button class="buton">Giriş Yap</button></a>
      </nav>
      <div class="logo">
        <a href="#"
          ><img class="logoimg" src={logoimg} alt="logo"
        /></a>
      </div>
      <div class="bg">
        <img class="bgimg" src={bgimg} alt="bgimg" />
      </div>
      <div class="yazi">
        Bilgiye hızlı ve kolay şekilde erişme imkanı sağlayan TESTLAVOD zaman ve
        mekandan bağımsız olması yönüyle öğrencinin eğitim ortamına internet
        imkanı olan her yerden erişim olanağı sağlar. Dersleri belgesel tadında
        dinleme imkanı veren bir platform olan TESTLAVOD, sizi sınıf ortamını
        aratmayan bir eğitim imkanı sunar. Derslerin PDF çıktısını alıp not
        tutabileceğiniz ve dilediğiniz zaman tekrar yapabileceğiniz sınırsız
        erişim imkanı sağlar. Test çözerken, öğrenebileceğiniz...
      </div>
      <div class="devam"><a class="cser" href="#">Devamını Oku</a></div>
      <div class="baslik">TESTLA VOD</div>
      <div class="root"></div>
    </div>
            </div>
        );
    }
}

export default Home;