import Link from 'next/link'
import cls from './PolicyCheckbox.module.scss'
const PolicyCheckbox = ({ change }: any) => {
	return (
		<div className={cls.Container}>
			<div className={cls.CheckboxWrapper}>
				<input
					type='checkbox'
					id='cbtest-20'
					defaultChecked
					onChange={change}
				/>
				<label htmlFor='cbtest-20' className={cls.Label}></label>
			</div>
			<div>
				<p className={cls.Policy}>
					Согласен(а) на обработку &nbsp;
					<Link target='_blank' href='/policy'>
						персональных данных
					</Link>
				</p>
			</div>
		</div>
	)
}
export default PolicyCheckbox
