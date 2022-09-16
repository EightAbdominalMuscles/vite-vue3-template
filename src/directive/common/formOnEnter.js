function formOnEnter(el, binding) {
  const { value } = binding
  if (value && value.subBut) {
    el.addEventListener(
      'keydown',
      (ev) => {
        ev.stopPropagation()
        if (ev.keyCode === 13) {
          if (value.subBut) {
            document.querySelector(value.subBut).click()
          }
        }
      },
      true
    )
  } else {
    throw new Error(
      `需要设置要提交的按钮! 比如 v-fromOnEnter="{subBut: '.search-btn'}"`
    )
  }
}
export default {
  mounted(el, binding) {
    formOnEnter(el, binding)
  }
}
