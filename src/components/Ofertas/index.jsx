import Oferta from "../Oferta";
import Title from "../Title";
import { OfertasElements, Section } from "./styled";
import PlantaOferta from "../../assets/images/planta-oferta.png"

export default function Ofertas() {
  return (
    <Section>
      <Title smallTitle="Conheça nossas" mainTitle={<h1>ofertas</h1>} />
      <OfertasElements>
        <Oferta title="Ajuga Reptans" price="20.00" imgUrl={PlantaOferta} />
        <Oferta title="Ajuga Reptans" price="20.00" imgUrl={PlantaOferta} />
        <Oferta title="Ajuga Reptans" price="20.00" imgUrl={PlantaOferta} />
        <Oferta title="Ajuga Reptans" price="20.00" imgUrl={PlantaOferta} />
        <Oferta title="Ajuga Reptans" price="20.00" imgUrl={PlantaOferta} />
        <Oferta title="Ajuga Reptans" price="20.00" imgUrl={PlantaOferta} />
      </OfertasElements>
    </Section>
  )
}