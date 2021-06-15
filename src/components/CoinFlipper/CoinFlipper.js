import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count:0,
      turaCount:0,
      yaziCount:0,
    };
  }

  paraAt = () =>{   //0 ve 1 arası random değer alarak parayı yazı tura yapıyoruz
    let durum = Math.round(Math.random());
    if(durum == 1){
      this.setState({side : "yazi"});
      this.setState({yaziCount: this.state.yaziCount + 1 });  
    }
    else{
      this.setState({side : "tura"});
      this.setState({turaCount: this.state.turaCount + 1 });  
    } 
    
  }

  handleClick = () => {
    //  parayı atıyoruz
    this.paraAt();  
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({flipping: true });
    // kaç atış yapıldığını count değerini her defasında 1 kez arttırarak hesaplıyoruz
    this.setState({ count: this.state.count + 1 });   
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atış,
          <strong> {this.state.turaCount} </strong> tura,
          <strong> {this.state.yaziCount} </strong>
           yazı.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
