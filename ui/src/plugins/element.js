import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/de'

export default (app) => {
  app.use(ElementPlus, { locale })
}