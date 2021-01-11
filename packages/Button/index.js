/*
 * @Descripttion:
 * @Author: linzenghe
 * @Date: 2021-01-11 09:49:09
 * @LastEditors: linzenghe
 * @LastEditTime: 2021-01-11 14:06:00
 */
import SButton from './src/index'
SButton.install = vue => {
  vue.component(SButton.name, SButton)
}
export default SButton
