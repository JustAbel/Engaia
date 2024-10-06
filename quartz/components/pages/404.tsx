import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h1>404 - Pagina niet gevonden </h1>
      <p>{i18n(cfg.locale).pages.error.notFound}
Dat kan twee dingen betekenen:
<li> De informatie op de pagina zou te veel verklappen aan een speler </li>
<li> De pagina is nog niet door mij geüpload terwijl dat wel zou moeten. </li>

In het laatste geval mag je erover zeuren. Dan los ik het op :)
      </p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
