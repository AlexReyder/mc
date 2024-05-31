import { FC } from 'react'
import cls from './Map.module.scss'
const Map: FC = () => {
	return (
		<iframe
			className={cls.Map}
			src='https://yandex.ru/map-widget/v1/?um=constructor%3A52eff2af6973341abc651d491f8c1d680c7db2ddb42acb36fa4cb475be1cf6e9&amp;source=constructor'
			width='100%'
			height='100vh'
			frameBorder='0'
		></iframe>
	)
}
export default Map
