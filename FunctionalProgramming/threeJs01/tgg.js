// 创建创景对象
function createScene(T) {
  return function () {
    return new T.Scene()
  }
}

// 创建一个立方体几何对象
function createBoxGeometry(T) {
  return function (shape) {
    return new T.BoxGeometry(shape[0], shape[1], shape[2])
  }
}

// 创建材质对象
function createMeshLambertMaterial(T) {
  return function (color) {
    return new T.MeshLambertMaterial({
      color
    })
  }
}

// 创建网格对象
function createMesh(T) {
  return function (geometry) {
    return function (material) {
      return function () {
        return new T.Mesh(geometry, material)
      }
    }
  }
}

// 网格模型添加到场景中
function sceneAdd(scene, other) {
  return scene.add(other)
}

// 点光源设置
function createPointLight(T) {
  return function (color) {
    return function () {
      return new T.PointLight(color)
    }
  }
}

// 点光源位置
function setPointLightPosition(l) {
  return function (w) {
    return function (h) {
      return function (point) {
        return point.position.set(l, w, h)
      }
    }
  }
}

// 环境光设置
function createAmbientLight(T) {
  return function (color) {
    return function () {
      return new T.AmbientLight(color)
    }
  }
}

// 当前窗口宽高
function currentWindowSize(window) {
  const { innerWidth, innerHeight } = window
  return [innerWidth, innerHeight]
}

// 窗口宽高比
function windowScale(w, h) {
  return w / h
}

// 创建相机对象
// s-三维场景显示范围控制系数，系数越大，显示的范围越大
// k-窗口宽高比
function createCamera(T) {
  return function (s) {
    return function (k) {
      return function (m) {
        return function (l) {
          return function (setCameraPosition) {
            return function (setCameraDirection) {
              return function (scene) {
                const camera = new T.OrthographicCamera(-s * k, s * k, s, -s, m, l);
                setCameraPosition(camera)
                setCameraDirection(scene)(camera)
                return camera
              }
            }
          }
        }
      }
    }
  }
}

// 设置相机位置
function setCameraPosition(positon) {
  return function (camera) {
    return camera.position.set(positon[0], positon[1], positon[2])
  }
}

// 设置相机的方向
function setCameraDirection(scene) {
  return function (camera) {
    return camera.lookAt(scene.position)
  }
}

// 创建渲染独享
function createRenderer(T) {
  return function () {
    return new T.WebGLRenderer()
  }
}

// 设置渲染对象区域尺寸
function setRendererSize(width) {
  return function (height) {
    return function (renderer) {
      return renderer.setSize(width, height)
    }
  }
}

// 设置渲染对象背景颜色
function setRendererColor(color) {
  return function (p) {
    return function (renderer) {
      return renderer.setClearColor(color, p);
    }
  }
}

// body元素中插入canvas对象
function insertToBody(document) {
  return function (renderer) {
    return document.body.appendChild(renderer.domElement)
  }
}

function cameraReady(camera, scene, openPosition, positions, openDirection) {
  openPosition(camera)(positions[0])(positions[1])(positions[1])
  openDirection(camera)(scene)
  return camera
}

function rendererReady(createRenderer, setRendererSize, setRendererColor, insertToBody) {
  const renderer = createRenderer()
  setRendererSize(renderer)
  setRendererColor(renderer)
  insertToBody(renderer)
  return renderer
}

function sceneReady(createScene, createMesh, createPointLight, setPointLightPosition, createAmbientLight, sceneAdd) {
  const scene = createScene(THREE);
  const point = createPointLight();
  sceneAdd(scene, createMesh())
  sceneAdd(scene, point)
  sceneAdd(scene, createAmbientLight())
  setPointLightPosition(point)
  return scene
}

// 执行渲染操作  指定场景、相机
function run(renderer) {
  return function (scene) {
    return function (camera) {
      return renderer.render(scene, camera(scene))
    }
  }
}

run
  (
    rendererReady(
      createRenderer(THREE),
      setRendererSize(currentWindowSize(window)[0])(currentWindowSize(window)[1]),
      setRendererColor(0xb9d3ff)(1),
      insertToBody(document)
    )
  )
  (
    sceneReady(
      createScene(THREE),
      createMesh(THREE)
        (createBoxGeometry(THREE)([100, 100, 100]))
        (createMeshLambertMaterial(THREE)(0x0000ff)),
      createPointLight(THREE)(0xffffff),
      setPointLightPosition(400)(200)(300),
      createAmbientLight(THREE)(0x444444),
      sceneAdd
    )
  )
  (
    createCamera
      (THREE)
      (200)
      (windowScale(currentWindowSize(window)[0], currentWindowSize(window)[1]))
      (1)
      (1000)
      (setCameraPosition([200, 300, 200]))
      (setCameraDirection)
  )