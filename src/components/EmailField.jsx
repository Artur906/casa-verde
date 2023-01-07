export default function EmailField() {
  return (
    <div className="emailField">
      <div className="email">
        {/* email icon */}
        <input type="text" placeholder="Insira seu e-mail" />
      </div>
      <button>Assinar newsletter</button>
    </div>
  )
}