import EmailField from "./EmailField";

export default function AssinaturaNewsletter() {
  return (
    <div className="content">
      <div className="main">
        <span>
          sua casa com as
        </span>
        <h1>Melhores Plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>
        <EmailField />
      </div>
      <div className="aside">

      </div>
    </div>
  )
}