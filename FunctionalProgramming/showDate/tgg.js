// 获取某个元素
function getElement(id) {
  return document.getElementById(id)
}

// 添加事件
function addEventToDom(dom) {
  return function (type) {
    return function (fn) {
      return dom.addEventListener(type, fn)
    }
  }
}

// 修改属性
function modifyAttribute(target) {
  return function (attribute) {
    return function (content) {
      return function () {
        return target[attribute] = content()
      }
    }
  }
}

// 语意化很明确, 给谁   添加什么事件     让他干嘛
// ------------给btn  添加click事件   让他 modifyAttribute
// modifyAttribute 修改属性, 修改谁的属性         什么属性     改为什么
// -------------------------修改content的属性   innerHTML   Date()

addEventToDom(getElement('btn'))
  ('click')
  (modifyAttribute(getElement('content'))('innerHTML')(() => Date()))
