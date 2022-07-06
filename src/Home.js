//COMPONENTS
import Card from './components/card'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPaw, faFilter } from '@fortawesome/free-solid-svg-icons'

//CSS
import head from './css/home_head.module.css'
import body from './css/home_body.module.css'
import global from './css/home_global.module.css'

//ASSETS
import banner1 from './public/banner1.png'


export default function Home() {
  return (
    <>
      <div className={head}>
        <div className={head.popup}>
          <p>Primeira vez por aqui? use nosso cupom <span>GATOFODA20</span> para 20% de desconto em qualquer produto!</p>
        </div>
        <div className={head.bannerDiv}>
          <h1>Gatofoda <FontAwesomeIcon className={head.pawBanner} icon={faPaw} /></h1>
        </div>

        <div className={head.optionsDiv}>
          <ul>
            <li className={head.optionsli}><p>Farmácia</p></li>
            <li className={head.optionsli}><p>Marcas</p></li>
            <li className={head.optionsli}><p>Ração</p></li>
            <li className={head.optionsli}><p>Casa e Jardim</p></li>
          </ul>
        </div>

        <div className={head.search}>
          <div className={head.searchDiv}>
            <FontAwesomeIcon className={head.searchIcon} icon={faSearch} />
            <input placeholder='Procure um produto!'/>

            <FontAwesomeIcon className={head.FilterSearch} icon={faFilter} />
          </div>
        </div>
      </div>

      <div className={body}>
        <div className={body.banner1Div}>
          <img className={body.banner1} src={banner1} />
        </div>

        <section className={body.houseDiv}>
          <h1 className={body.houseTitle}>Seu gato acordou hoje virado no jiraiya?</h1>

        <div className={global.cardGrid}>
          <Card
          title="Catnip | Erva de Gato"
          desc="Seu gato ta possuido? Água santa talvez resolva, mas esse aqui é 100% garantido!"
          value="16,50">

          </Card>
        </div>

        </section>
      </div>
    </>
  )
}