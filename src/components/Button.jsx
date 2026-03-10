function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={
        className ||
        'rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20 active:scale-90 outline-none focus:ring-2 focus:ring-white/20'
      }>
      {children}
    </button>
  )
}

export default Button
