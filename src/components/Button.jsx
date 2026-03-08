function Button(props) {
  return (
    <button {...props} className="rounded-md bg-slate-400 p-2 text-white">
      {props.children}
    </button>
  )
}

export default Button
