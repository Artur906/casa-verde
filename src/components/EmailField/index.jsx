import { Email, ErrorMessage } from "./styled"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ModalContext } from "../AssinaturaNewsletter"
import { useContext } from "react"

import mailIcon from "../../assets/icons/mail-icon.svg"

export default function EmailField() {
  const { setUserEmail, setShowModal } = useContext(ModalContext)
  const schema = yup.object().shape({
    email: yup.string().email("Informe um email válido").required("Informe um email")
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = () => {
    setUserEmail(watch("email"))
    setShowModal(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Email showErrorMessage={errors.email ? true : false} >
        <div className="input-wrapper">
          <img src={mailIcon} alt="imagem de uma carta" />
          <input type="email" placeholder="Insira seu e-mail" {...register("email")} />
        </div>

        <input type="submit" formNoValidate value="Assinar newsletter" />
      </Email>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
    </form>
  )
}